import * as THREE from 'three';
import { buildHeroModel } from './heroModel.js';
import { clamp, damp, lerp } from '../core/noise.js';
import { MAT, MAT_INFO } from '../terrain/volume.js';

const UP = new THREE.Vector3(0, 1, 0);
const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();
const g = { x: 0, y: 0, z: 0 };

// collision spheres (height above feet)
const SPHERES = [0.42, 0.95, 1.42];
const RAD = 0.42;

const ease = {
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  back: (t) => { const c1 = 2.2, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
};
// piecewise key interpolation over normalized time: keys [[t, value], ...]
function keys(t, ks, e = ease.inOut) {
  if (t <= ks[0][0]) return ks[0][1];
  for (let i = 0; i < ks.length - 1; i++) {
    const a = ks[i], b = ks[i + 1];
    if (t <= b[0]) return lerp(a[1], b[1], e((t - a[0]) / (b[0] - a[0])));
  }
  return ks[ks.length - 1][1];
}

const PUNCHES = [
  { arm: 'R', dur: 0.34, hit: 0.11, radius: 1.55, dmg: 1, lunge: 3.5, next: 0.2 },
  { arm: 'L', dur: 0.34, hit: 0.11, radius: 1.6, dmg: 1, lunge: 3.5, next: 0.2 },
  { arm: 'B', dur: 0.56, hit: 0.2, radius: 2.15, dmg: 2, lunge: 5.5, next: 0.42, finisher: true },
];

export class Player {
  constructor(game) {
    this.game = game;
    const m = buildHeroModel();
    this.model = m;
    this.root = new THREE.Group();
    this.root.add(m.root);
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.visYaw = 0;
    this.grounded = false; this.groundN = new THREE.Vector3(0, 1, 0);
    this.coyote = 0; this.jumpBuf = 0; this.jumpHold = 0;
    this.state = 'move';
    this.stateT = 0;
    this.combo = 0; this.comboQueued = false; this.comboWindow = 0;
    this.dashT = 0; this.dashCD = 0; this.airDash = true;
    this.hp = 5; this.maxHp = 5; this.invuln = 0;
    this.hitDone = false;
    this.aimPitch = 0;
    this.lastSafe = new THREE.Vector3(); this.safeT = 0;
    this.climbN = new THREE.Vector3();
    this.runPhase = 0; this.speed01 = 0;
    this.squash = 0; this.squashV = 0;
    this.blink = 0; this.blinkT = 2;
    this.pose = {};
    this.landImpact = 0;
    this.stuckT = 0;
    this.stepAcc = 0;
    this.airTime = 0;
    this.poundCharge = 0;
    this.lean = 0;
    this.scarfV = 0; this.scarfA = 0;
    this.footDust = 0;
    this.lastHitMat = -1;
    this.controlLock = 0;
    this.dead = false;
  }

  spawn(p, yaw = 0) {
    this.pos.copy(p);
    this.vel.set(0, 0, 0);
    this.yaw = this.visYaw = yaw;
    this.state = 'move';
    this.lastSafe.copy(p);
    this.dead = false;
    this.root.position.copy(p);
  }

  get world() { return this.game.world; }

  // ---------- collision ----------
  collide(pos, vel) {
    const vol = this.world.vol;
    let grounded = false;
    const gn = this.groundN.set(0, 0, 0);
    let wallN = null;
    for (let it = 0; it < 3; it++) {
      let moved = false;
      for (let s = 0; s < SPHERES.length; s++) {
        const h = SPHERES[s];
        const cx = pos.x, cy = pos.y + h, cz = pos.z;
        const d = vol.sample(cx, cy, cz);
        if (d < RAD) {
          vol.gradient(cx, cy, cz, g, 0.2);
          let push = RAD - d;
          // the bottom sphere treats gentle slopes as floor: push straight up to avoid sliding
          let nx = g.x, ny = g.y, nz = g.z;
          if (s === 0 && ny > 0.62) {
            const k = push / Math.max(ny, 0.5);
            pos.y += Math.min(k, 0.6);
            grounded = true; gn.x += nx; gn.y += ny; gn.z += nz;
          } else {
            pos.x += nx * push; pos.y += ny * push; pos.z += nz * push;
            if (ny > 0.62) { grounded = true; gn.x += nx; gn.y += ny; gn.z += nz; }
            else if (ny > -0.5) wallN = wallN || new THREE.Vector3(nx, ny, nz);
          }
          const vn = vel.x * nx + vel.y * ny + vel.z * nz;
          if (vn < 0) {
            if (ny > 0.62) vel.y = Math.max(vel.y, 0);
            else { vel.x -= nx * vn; vel.y -= ny * vn; vel.z -= nz * vn; }
          }
          moved = true;
        }
      }
      // props / entity colliders
      const pushed = this.world.collideActor(pos, RAD, SPHERES, vel);
      if (pushed && pushed.ground) { grounded = true; gn.y += 1; }
      if (!moved && !pushed) break;
    }
    if (grounded) gn.normalize(); else gn.set(0, 1, 0);
    return { grounded, wallN };
  }

  probeGround(pos, dist) {
    const vol = this.world.vol;
    // cast the foot sphere downward
    for (let t = 0; t <= dist; t += 0.08) {
      const d = vol.sample(pos.x, pos.y + SPHERES[0] - t, pos.z);
      if (d < RAD + 0.02) {
        vol.gradient(pos.x, pos.y + SPHERES[0] - t, pos.z, g, 0.2);
        // only snap when there really is floor under the feet: hovering on the rim of a hole
        // (field is near-surface but the gradient points up) must let the hero drop in
        if (g.y > 0.62 && vol.sample(pos.x, pos.y + SPHERES[0] - t - RAD - 0.15, pos.z) < 0.2) return t;
        return -1;
      }
    }
    const pt = this.world.propGroundBelow?.(pos, dist);
    return pt ?? -1;
  }

  // ---------- main update ----------
  update(dt, input, cam) {
    const world = this.world;
    this.stateT += dt;
    if (this.invuln > 0) this.invuln -= dt;
    if (this.dashCD > 0) this.dashCD -= dt;
    if (this.controlLock > 0) {
      this.controlLock -= dt;
      if (this.controlLock <= 0 && this.state === 'cutscene') { this.setState('move'); this.pose.victory = false; }
    }
    this.comboWindow -= dt;

    const locked = this.controlLock > 0 || this.state === 'cutscene' || this.dead;
    const mv = locked ? { x: 0, y: 0 } : input.move();
    // camera-relative move dir
    const cy = cam.yaw;
    const fx = Math.sin(cy), fz = Math.cos(cy);
    const wish = tmp.set(fx * mv.y - fz * mv.x * -1 * -1, 0, fz * mv.y + fx * mv.x * -1 * -1);
    // right vector = (cos, 0, -sin) for yaw around +y with forward (sin, 0, cos)
    wish.set(fx * mv.y - Math.cos(cy) * mv.x, 0, fz * mv.y + Math.sin(cy) * mv.x);
    const wishLen = Math.min(1, wish.length());
    if (wishLen > 0.001) wish.divideScalar(wish.length());

    // aim pitch from camera (look down => dig down diagonally)
    const camPitch = cam.pitch; // negative = looking down
    this.aimPitch = clamp((camPitch + 0.28) * 1.6, -1.15, 0.95);

    if (input.jumpPressed() && !locked) this.jumpBuf = 0.13; else this.jumpBuf -= dt;

    // ---- state machine ----
    const st = this.state;
    if (!locked) {
      if (input.punchPressed()) this.tryPunch();
      if (input.slamPressed()) this.trySlam();
      if (input.dashPressed()) this.tryDash(wish, wishLen);
      if (input.echoPressed()) world.echo?.(this);
    }

    let accel = 60, maxSpeed = 7.4, gravity = 34, control = 1;
    if (st === 'punch') { control = 0.25; maxSpeed = 3; }
    if (st === 'slam') { control = 0.0; }
    if (st === 'hurt') { control = 0.15; }
    if (!this.grounded) { accel = 30; }

    // --- horizontal movement ---
    if (st === 'dash') {
      const t = this.stateT / 0.22;
      const sp = lerp(17, 8, ease.in(Math.min(1, t)));
      this.vel.x = Math.sin(this.yaw) * sp; this.vel.z = Math.cos(this.yaw) * sp;
      if (!this.grounded) this.vel.y = Math.max(this.vel.y, t < 0.7 ? 0.5 : this.vel.y);
      if (this.stateT > 0.22) this.setState('move');
      if (Math.random() < 0.7) world.fx.puff(tmp2.set(this.pos.x, this.pos.y + 0.8, this.pos.z), 1, { color: new THREE.Color(0.9, 0.85, 0.75), speed: 0.5, size: 0.5, size1: 1.4, life: 0.4, alpha: 0.25 });
    } else if (st === 'climb') {
      this.updateClimb(dt, mv, input);
    } else if (st === 'pound') {
      this.vel.x *= Math.exp(-dt * 8); this.vel.z *= Math.exp(-dt * 8);
      if (this.stateT < 0.22) { this.vel.y = 2.5 * (1 - this.stateT / 0.22); }
      else this.vel.y = -30;
    } else {
      const tx = wish.x * maxSpeed * wishLen, tz = wish.z * maxSpeed * wishLen;
      const a = (wishLen > 0.01 ? accel : (this.grounded ? 48 : 6)) * dt * (control || 0.0001);
      const dx = tx - this.vel.x, dz = tz - this.vel.z;
      const dl = Math.hypot(dx, dz);
      if (control > 0) {
        if (dl <= a) { this.vel.x = tx; this.vel.z = tz; } else { this.vel.x += (dx / dl) * a; this.vel.z += (dz / dl) * a; }
      } else if (this.grounded) { this.vel.x *= Math.exp(-dt * 10); this.vel.z *= Math.exp(-dt * 10); }
      // facing
      if (wishLen > 0.1 && (st === 'move')) {
        const target = Math.atan2(wish.x, wish.z);
        this.yaw = turnToward(this.yaw, target, dt * 15);
      }
    }

    // --- jumping ---
    if (st !== 'climb' && st !== 'pound' && st !== 'slam') {
      if (this.grounded) { this.coyote = 0.12; this.airDash = true; } else this.coyote -= dt;
      if (this.jumpBuf > 0 && this.coyote > 0 && (st === 'move' || st === 'dash' || st === 'punch')) {
        this.vel.y = 11.6;
        this.jumpBuf = 0; this.coyote = 0; this.jumpHold = 0.24;
        this.grounded = false;
        if (st !== 'move') this.setState('move');
        this.squashV = 7;
        this.game.audio.play('jump');
        world.fx.puff(tmp2.set(this.pos.x, this.pos.y + 0.1, this.pos.z), 8, { color: this.groundDustColor(), speed: 2.2, size: 0.4, size1: 1.2, life: 0.6, alpha: 0.5 });
      }
    }
    if (this.jumpHold > 0) {
      this.jumpHold -= dt;
      if (!input.jumpHeld() || this.vel.y < 0) this.jumpHold = 0;
    }

    // --- gravity ---
    if (st !== 'climb' && st !== 'pound') {
      let gmul = this.jumpHold > 0 ? 0.42 : this.vel.y < 0 ? 1.25 : 1;
      if (st === 'punch' && !this.grounded) gmul *= 0.35; // aerial punches hang a bit
      if (st === 'dash' && !this.grounded) gmul = 0.1;
      this.vel.y -= gravity * gmul * dt;
      if (this.vel.y < -30) this.vel.y = -30;
    }

    // --- integrate with substeps ---
    const wasGrounded = this.grounded;
    const fallSpeed = this.vel.y;
    const travel = this.vel.length() * dt;
    const steps = Math.min(8, Math.max(1, Math.ceil(travel / 0.18)));
    let res = { grounded: false, wallN: null };
    let groundedAny = false, wall = null;
    for (let i = 0; i < steps; i++) {
      this.pos.addScaledVector(this.vel, dt / steps);
      res = this.collide(this.pos, this.vel);
      if (res.grounded) groundedAny = true;
      if (res.wallN) wall = res.wallN;
    }
    this.grounded = groundedAny;
    // ground snapping when walking down slopes
    if (!this.grounded && wasGrounded && this.vel.y <= 0.5 && st !== 'climb' && st !== 'pound') {
      const d = this.probeGround(this.pos, 0.55);
      if (d >= 0) { this.pos.y -= d; this.grounded = true; this.vel.y = Math.min(this.vel.y, 0); }
    }
    if (this.grounded && this.vel.y < 0) this.vel.y = 0;

    // landing
    if (this.grounded && !wasGrounded) this.onLand(fallSpeed);
    if (!this.grounded) this.airTime += dt; else this.airTime = 0;

    // climb attach
    if (wall && st === 'move' && !this.grounded && this.airTime > 0.12 && wishLen > 0.3) {
      const into = -(wish.x * wall.x + wish.z * wall.z);
      if (into > 0.5) this.tryClimb(wall);
    }

    this.updateAction(dt, input);
    this.updateSafety(dt);
    this.animate(dt);
  }

  groundDustColor() {
    const m = this.world.vol.materialAt(this.pos.x, this.pos.y - 0.2, this.pos.z);
    const c = MAT_INFO[m].color;
    return new THREE.Color(c[0], c[1], c[2]).lerp(new THREE.Color(0.8, 0.75, 0.65), 0.5);
  }

  setState(s) { this.state = s; this.stateT = 0; this.hitDone = false; }

  onLand(vy) {
    const p = clamp(-vy / 25, 0, 1);
    this.squashV = -10 * (0.4 + p);
    if (this.state === 'pound') return this.poundImpact();
    if (p > 0.3) {
      this.game.audio.play('land', { power: p });
      this.world.fx.puff(tmp2.set(this.pos.x, this.pos.y + 0.1, this.pos.z), Math.round(6 + p * 10), { color: this.groundDustColor(), speed: 2 + p * 3, size: 0.5, size1: 1.6, life: 0.7, alpha: 0.5 });
      if (p > 0.6) this.game.cameraRig.shake(0.15 * p);
    }
  }

  // ---------- actions ----------
  tryPunch() {
    const s = this.state;
    if (s === 'climb') { this.startPunch(0, true); return; }
    if (s === 'punch') {
      if (this.stateT > PUNCHES[this.combo].next * 0.55) this.comboQueued = true;
      return;
    }
    if (s !== 'move' && s !== 'dash') return;
    const c = this.comboWindow > 0 ? (this.combo + 1) % 3 : 0;
    this.startPunch(c);
  }

  startPunch(c, fromClimb = false) {
    this.combo = c;
    this.comboQueued = false;
    this.punchFromClimb = fromClimb;
    // face movement input if any (snappy redirect)
    const mv = this.game.input.move();
    if (Math.hypot(mv.x, mv.y) > 0.3 && !fromClimb) {
      const cy = this.game.cameraRig.yaw;
      const wx = Math.sin(cy) * mv.y - Math.cos(cy) * mv.x, wz = Math.cos(cy) * mv.y + Math.sin(cy) * mv.x;
      this.yaw = Math.atan2(wx, wz);
    } else if (!fromClimb) {
      // otherwise punch where the camera looks (mostly)
      const cy = this.game.cameraRig.yaw;
      if (Math.abs(angleDiff(this.yaw, cy)) < 1.6) this.yaw = turnToward(this.yaw, cy, 0.6);
    }
    this.setState('punch');
    this.game.audio.play('whoosh', { power: PUNCHES[c].finisher ? 1.4 : 1 });
    const P = PUNCHES[c];
    if (this.grounded) {
      this.vel.x += Math.sin(this.yaw) * P.lunge; this.vel.z += Math.cos(this.yaw) * P.lunge;
    } else {
      this.vel.y = Math.max(this.vel.y, P.finisher ? 4 : 1.5);
    }
  }

  trySlam() {
    const s = this.state;
    if (s === 'pound' || s === 'slam' || s === 'hurt') return;
    if (s === 'climb') { this.setState('move'); this.vel.set(this.climbN.x * 4, 2, this.climbN.z * 4); return; }
    if (!this.grounded && this.airTime > 0.05) {
      this.setState('pound');
      this.game.audio.play('whoosh', { power: 1.6 });
      this.vel.set(0, 2, 0);
      return;
    }
    this.setState('slam');
    this.game.audio.play('whoosh', { power: 1.2 });
  }

  tryDash(wish, wishLen) {
    if (this.dashCD > 0) return;
    if (this.state !== 'move' && this.state !== 'punch') return;
    if (!this.grounded) { if (!this.airDash) return; this.airDash = false; this.vel.y = 1.5; }
    if (wishLen > 0.2) this.yaw = Math.atan2(wish.x, wish.z);
    this.setState('dash');
    this.dashCD = 0.42;
    this.game.audio.play('dash');
    this.game.cameraRig.kick(2.5);
  }

  tryClimb(wallN) {
    const m = this.world.vol.materialAt(this.pos.x - wallN.x * 0.6, this.pos.y + 1, this.pos.z - wallN.z * 0.6);
    if (m === MAT.ANCIENT || m === MAT.BEDROCK) return;
    this.climbN.set(wallN.x, 0, wallN.z).normalize();
    this.setState('climb');
    this.vel.set(0, 0, 0);
    this.yaw = Math.atan2(-this.climbN.x, -this.climbN.z);
    this.game.audio.play('land', { power: 0.4 });
  }

  updateClimb(dt, mv, input) {
    const vol = this.world.vol;
    // re-evaluate wall normal at chest
    const cx = this.pos.x, cyy = this.pos.y + 1.0, cz = this.pos.z;
    const n = this.climbN;
    // find wall: sample in front
    const d = vol.sample(cx - n.x * 0.7, cyy, cz - n.z * 0.7);
    const dHigh = vol.sample(cx - n.x * 0.7, this.pos.y + 1.7, cz - n.z * 0.7);
    if (d > 0.35) {
      // ran out of wall: mantle if we're at a top edge
      if (mv.y > 0.1 || this.stateT > 0.1) {
        this.setState('move');
        this.vel.set(-n.x * 4.5, 8.5, -n.z * 4.5);
        this.squashV = 5;
        return;
      }
    }
    vol.gradient(cx - n.x * 0.5, cyy, cz - n.z * 0.5, g, 0.25);
    if (g.y < 0.65 && g.y > -0.6) { n.lerp(tmp2.set(g.x, 0, g.z).normalize(), 0.2).normalize(); }
    this.yaw = turnToward(this.yaw, Math.atan2(-n.x, -n.z), dt * 10);
    const right = tmp2.set(n.z, 0, -n.x); // tangent
    const climbSpeed = 4.2;
    this.vel.set(0, 0, 0);
    this.vel.y = mv.y * climbSpeed;
    if (dHigh > 0.8 && mv.y > 0) this.vel.y = climbSpeed * 1.2; // near top: pull up
    this.vel.x = right.x * mv.x * -climbSpeed * 0.8 - n.x * 1.5;
    this.vel.z = right.z * mv.x * -climbSpeed * 0.8 - n.z * 1.5;
    this.climbAnim = (this.climbAnim || 0) + dt * (Math.abs(mv.y) + Math.abs(mv.x)) * 6;
    if (this.jumpBuf > 0) {
      this.jumpBuf = 0;
      this.setState('move');
      const away = mv.y < -0.3 || Math.abs(mv.x) > 0.5;
      if (away) { this.vel.set(n.x * 7, 9, n.z * 7); this.yaw = Math.atan2(n.x, n.z); }
      else this.vel.set(n.x * 2.5, 11.5, n.z * 2.5);
      this.game.audio.play('jump');
      return;
    }
    if (this.grounded && mv.y < -0.1) this.setState('move');
    if (input.crouchHeld()) { this.setState('move'); this.vel.set(n.x * 2, 0, n.z * 2); }
  }

  updateAction(dt, input) {
    const st = this.state;
    if (st === 'punch') {
      const P = PUNCHES[this.combo];
      if (!this.hitDone && this.stateT >= P.hit) {
        this.hitDone = true;
        this.doPunchHit(P);
      }
      if (this.stateT >= P.dur) {
        this.comboWindow = 0.32;
        if (this.punchFromClimb) { this.setState('climb'); return; }
        this.setState('move');
        if (this.comboQueued) { this.startPunch((this.combo + 1) % 3); }
      } else if (this.comboQueued && this.stateT >= P.next && this.hitDone) {
        this.startPunch((this.combo + 1) % 3);
      }
    } else if (st === 'slam') {
      if (!this.hitDone && this.stateT >= 0.24) {
        this.hitDone = true;
        this.doSlamHit();
      }
      if (this.stateT >= 0.5) this.setState('move');
    } else if (st === 'pound') {
      if (this.stateT > 2.5) this.setState('move');
    } else if (st === 'hurt') {
      if (this.stateT > 0.45) this.setState('move');
    }
  }

  punchDir(out) {
    const p = this.punchFromClimb ? 0 : this.aimPitch;
    const cp = Math.cos(p);
    return out.set(Math.sin(this.yaw) * cp, Math.sin(p), Math.cos(this.yaw) * cp).normalize();
  }

  doPunchHit(P) {
    const world = this.world;
    const dir = this.punchDir(new THREE.Vector3());
    const origin = new THREE.Vector3(this.pos.x, this.pos.y + 1.05, this.pos.z);
    if (dir.y < -0.3) origin.y -= 0.25;
    const power = this.game.save.punchPower();
    const reach = 1.9;
    // entities first
    const hitE = world.hitEntities(origin, dir, reach + 0.5, 1.0, P.dmg, this, P.finisher);
    // terrain
    const t = world.vol.raycast(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, reach + 0.6);
    let hitT = false;
    if (t >= 0) {
      const hp = origin.clone().addScaledVector(dir, t + 0.35);
      const r = P.radius * power;
      const res = world.dig(hp, r, { dir, power: P.finisher ? 1.3 : 1, source: 'punch' });
      hitT = true;
      this.vel.addScaledVector(dir, res.blocked && !res.changed ? -6 : -1.5);
      if (res.blocked && !res.changed) world.blockedFeedback(hp, this);
    }
    if (hitT || hitE) {
      this.game.hitstop(P.finisher ? 0.09 : 0.055);
      this.game.cameraRig.shake(P.finisher ? 0.42 : 0.26);
      this.game.cameraRig.kick(P.finisher ? -3 : -1.5);
      this.game.rumble?.(P.finisher ? 0.6 : 0.3, 90);
    }
  }

  doSlamHit() {
    const world = this.world;
    const center = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 0.5, this.pos.y - 0.4, this.pos.z + Math.cos(this.yaw) * 0.5);
    const power = this.game.save.punchPower();
    const res = world.dig(center, 1.75 * power, { dir: new THREE.Vector3(0, -1, 0), power: 1.1, source: 'slam' });
    world.hitEntitiesRadius(center, 2.2, 2, this);
    if (res.blocked && !res.changed) world.blockedFeedback(center, this);
    this.game.hitstop(0.07);
    this.game.cameraRig.shake(0.38);
    this.game.rumble?.(0.5, 120);
  }

  poundImpact() {
    const world = this.world;
    const quake = this.game.save.has('quake');
    const power = this.game.save.punchPower();
    const center = new THREE.Vector3(this.pos.x, this.pos.y - 0.3, this.pos.z);
    const r = (quake ? 3.1 : 2.15) * power;
    const res = world.dig(center, r, { dir: new THREE.Vector3(0, -1, 0), power: quake ? 1.6 : 1.2, source: 'pound', quake });
    world.hitEntitiesRadius(center, r + (quake ? 2.5 : 1), quake ? 3 : 2, this, true);
    world.fx.ring(center, r * (quake ? 3.2 : 2.2), 0.5, quake ? 0x9fe8ff : 0xffe9c0);
    if (quake) world.fx.ring(center, r * 4.5, 0.75, 0xfff0c0, 0.5);
    this.game.audio.play('slam', { power: quake ? 1.3 : 1 });
    this.game.hitstop(quake ? 0.13 : 0.1);
    this.game.cameraRig.shake(quake ? 0.85 : 0.6);
    this.game.rumble?.(1, 220);
    if (res.blocked && !res.changed) world.blockedFeedback(center, this);
    this.setState('move');
    this.controlLock = 0.18;
    this.vel.set(0, 3.2, 0);
  }

  hurt(from, dmg = 1) {
    if (this.invuln > 0 || this.dead) return false;
    this.hp -= dmg;
    this.invuln = 1.3;
    const away = tmp.copy(this.pos).sub(from).setY(0);
    if (away.lengthSq() < 1e-4) away.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).negate();
    away.normalize();
    this.vel.set(away.x * 9, 7, away.z * 9);
    this.grounded = false;
    this.setState('hurt');
    this.game.audio.play('hurt');
    this.game.cameraRig.shake(0.5);
    this.game.flashDamage();
    this.game.rumble?.(0.8, 200);
    if (this.hp <= 0) this.game.onPlayerDeath();
    return true;
  }

  updateSafety(dt) {
    const vol = this.world.vol;
    // remember stable ground
    if (this.grounded && this.state !== 'hurt') {
      this.safeT += dt;
      if (this.safeT > 0.6) { this.lastSafe.copy(this.pos); this.safeT = 0; }
    } else this.safeT = 0;
    // stuck inside solid?
    const dc = vol.sample(this.pos.x, this.pos.y + 0.95, this.pos.z);
    if (dc < -0.05) {
      this.stuckT += dt;
      if (this.stuckT > 0.25) { this.unstick(); this.stuckT = 0; }
    } else this.stuckT = 0;
    // fell out of the world
    if (this.pos.y < -2) this.world.onPlayerFell(this);
  }

  unstick() {
    const vol = this.world.vol;
    for (let r = 0.5; r < 8; r += 0.5) {
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        for (const dy of [r, 0, -r * 0.5]) {
          const x = this.pos.x + Math.cos(a) * (dy === r ? 0 : r), y = this.pos.y + dy, z = this.pos.z + Math.sin(a) * (dy === r ? 0 : r);
          if (vol.sample(x, y + 0.42, z) > 0.45 && vol.sample(x, y + 0.95, z) > 0.45 && vol.sample(x, y + 1.42, z) > 0.45) {
            this.pos.set(x, y, z); this.vel.set(0, 0, 0); return;
          }
        }
      }
    }
    this.pos.copy(this.lastSafe);
  }

  // ---------- animation ----------
  animate(dt) {
    const J = this.model.J;
    const st = this.state;
    const t = this.stateT;
    const hs = Math.hypot(this.vel.x, this.vel.z);
    this.speed01 = damp(this.speed01, this.grounded ? clamp(hs / 7.4, 0, 1.3) : 0, 12, dt);
    const sp = this.speed01;
    this.runPhase += dt * (4 + hs * 1.25);
    const ph = this.runPhase;

    // footsteps
    if (this.grounded && hs > 1.5 && st === 'move') {
      const s = Math.sin(ph);
      if ((this.lastS ?? 0) * s < 0) {
        this.game.audio.play('step', { power: 0.6 + sp * 0.4 });
        if (sp > 0.6) this.world.fx.puff(tmp2.set(this.pos.x, this.pos.y + 0.08, this.pos.z), 2, { color: this.groundDustColor(), speed: 1, size: 0.35, size1: 0.9, life: 0.5, alpha: 0.35 });
      }
      this.lastS = s;
    }

    // base pose values
    const P = {
      hipsY: 0.5, hipsX: 0, hipsZ: 0, hipsRY: 0,
      torsoX: 0, torsoY: 0, torsoZ: 0,
      headX: 0, headY: 0, headZ: 0,
      shLX: 0, shLZ: 0.18, shLY: 0, elLX: -0.25,
      shRX: 0, shRZ: -0.18, shRY: 0, elRX: -0.25,
      hipLX: 0, hipLZ: 0.05, knLX: 0.1,
      hipRX: 0, hipRZ: -0.05, knRX: 0.1,
    };
    const time = performance.now() / 1000;

    if (this.grounded || st === 'climb') {
      // idle breathing
      const br = Math.sin(time * 2.2);
      P.torsoX = 0.04 + br * 0.015;
      P.shLZ += br * 0.03; P.shRZ -= br * 0.03;
      P.headX = -br * 0.02;
      P.hipsY = 0.5 - 0.02 + br * 0.008;
      // run cycle blend
      const a = Math.min(1, sp);
      const s = Math.sin(ph), c = Math.cos(ph);
      P.hipLX = lerp(P.hipLX, -s * 0.95, a);
      P.hipRX = lerp(P.hipRX, s * 0.95, a);
      P.knLX = lerp(P.knLX, 0.25 + Math.max(0, c) * 1.25, a);
      P.knRX = lerp(P.knRX, 0.25 + Math.max(0, -c) * 1.25, a);
      P.shLX = lerp(P.shLX, s * 1.0, a); P.shRX = lerp(P.shRX, -s * 1.0, a);
      P.elLX = lerp(P.elLX, -0.6 - Math.max(0, s) * 0.6, a); P.elRX = lerp(P.elRX, -0.6 - Math.max(0, -s) * 0.6, a);
      P.shLZ = lerp(P.shLZ, 0.35, a); P.shRZ = lerp(P.shRZ, -0.35, a);
      P.torsoX = lerp(P.torsoX, 0.3 * sp, a);
      P.torsoY = lerp(P.torsoY, s * 0.18, a);
      P.hipsRY = -s * 0.12 * a;
      P.hipsY = lerp(P.hipsY, 0.47 + Math.abs(c) * 0.09, a);
      P.headX = lerp(P.headX, -0.2 * sp, a);
    } else {
      // airborne
      const up = clamp(this.vel.y / 10, -1, 1);
      P.hipLX = -0.6 + up * 0.2; P.knLX = 1.1;
      P.hipRX = 0.2; P.knRX = 0.6 - up * 0.3;
      P.shLX = -0.4 - up * 0.6; P.shRX = -0.4 - up * 0.6;
      P.shLZ = 0.7 - up * 0.3; P.shRZ = -0.7 + up * 0.3;
      P.elLX = -0.8; P.elRX = -0.8;
      P.torsoX = 0.15 - up * 0.1;
      P.headX = up * -0.15;
    }

    // ---- actions override ----
    let fast = false;
    if (st === 'punch') {
      fast = true;
      const PD = PUNCHES[this.combo];
      const u = clamp(t / PD.dur, 0, 1);
      const hitU = PD.hit / PD.dur;
      const pitch = this.punchFromClimb ? 0 : this.aimPitch;
      const ext = -Math.PI / 2 - pitch;
      const twist = keys(u, [[0, 0], [hitU * 0.7, 0.5], [hitU, -0.55], [0.75, -0.4], [1, 0]]);
      if (PD.arm === 'R' || PD.arm === 'L') {
        const R = PD.arm === 'R';
        const sgn = R ? 1 : -1;
        const sh = keys(u, [[0, 0.1], [hitU * 0.75, 0.55], [hitU, ext], [0.7, ext + 0.15], [1, -0.2]]);
        const el = keys(u, [[0, -0.4], [hitU * 0.75, -1.9], [hitU, -0.05], [0.7, -0.25], [1, -0.6]]);
        if (R) { P.shRX = sh; P.elRX = el; P.shRZ = -0.15; P.shLX = 0.3; P.elLX = -1.3; P.shLZ = 0.35; }
        else { P.shLX = sh; P.elLX = el; P.shLZ = 0.15; P.shRX = 0.3; P.elRX = -1.3; P.shRZ = -0.35; }
        P.torsoY = twist * sgn * 0.8;
        P.hipsRY = twist * sgn * 0.3;
        P.torsoX = 0.25 - pitch * 0.35;
        P.hipLX = -0.35 * sgn; P.hipRX = 0.35 * sgn; P.knLX = 0.4; P.knRX = 0.4;
        P.hipsY = 0.45;
      } else {
        // finisher: double-fisted haymaker
        const sh = keys(u, [[0, 0.2], [hitU * 0.8, 0.9], [hitU, ext - 0.1], [0.8, ext], [1, -0.2]], ease.out);
        const el = keys(u, [[0, -0.5], [hitU * 0.8, -1.6], [hitU, -0.1], [1, -0.5]]);
        P.shLX = sh; P.shRX = sh; P.elLX = el; P.elRX = el;
        P.shLZ = keys(u, [[0, 0.3], [hitU * 0.8, 0.9], [hitU, 0.12], [1, 0.3]]);
        P.shRZ = -P.shLZ;
        P.torsoX = keys(u, [[0, 0], [hitU * 0.8, -0.35], [hitU, 0.5 - pitch * 0.4], [1, 0.1]]);
        P.hipsY = keys(u, [[0, 0.5], [hitU * 0.8, 0.38], [hitU, 0.5], [1, 0.48]]);
        P.hipLX = -0.5; P.hipRX = 0.5; P.knLX = 0.7; P.knRX = 0.3;
      }
    } else if (st === 'slam') {
      fast = true;
      const u = clamp(t / 0.5, 0, 1);
      const sh = keys(u, [[0, 0], [0.38, -2.9], [0.5, -0.9], [0.8, -0.8], [1, -0.2]]);
      P.shLX = sh; P.shRX = sh; P.elLX = -0.3; P.elRX = -0.3;
      P.shLZ = 0.2; P.shRZ = -0.2;
      P.torsoX = keys(u, [[0, 0], [0.38, -0.35], [0.5, 0.9], [0.8, 0.8], [1, 0.1]]);
      P.hipsY = keys(u, [[0, 0.5], [0.38, 0.55], [0.5, 0.3], [0.85, 0.32], [1, 0.48]]);
      P.knLX = keys(u, [[0, 0.1], [0.5, 1.2], [1, 0.2]]); P.knRX = P.knLX;
      P.hipLX = -P.knLX * 0.6; P.hipRX = -P.knLX * 0.6;
      P.headX = keys(u, [[0, 0], [0.38, -0.3], [0.5, 0.4], [1, 0]]);
    } else if (st === 'pound') {
      fast = true;
      if (t < 0.22) {
        const u = t / 0.22;
        P.torsoX = u * Math.PI * 2; // front flip
        P.knLX = 2; P.knRX = 2; P.hipLX = -1.6; P.hipRX = -1.6;
        P.shLX = -1.2; P.shRX = -1.2; P.elLX = -2; P.elRX = -2;
      } else {
        P.shLX = -2.9; P.shRX = -2.9; P.elLX = -0.1; P.elRX = -0.1; P.shLZ = 0.3; P.shRZ = -0.3;
        P.torsoX = 0.2; P.knLX = 0.9; P.knRX = 0.9; P.hipLX = -0.5; P.hipRX = -0.5;
      }
    } else if (st === 'dash') {
      P.torsoX = 0.75; P.headX = -0.5;
      P.shLX = 0.9; P.shRX = 0.9; P.elLX = -0.3; P.elRX = -0.3; P.shLZ = 0.4; P.shRZ = -0.4;
      P.hipLX = -0.9; P.hipRX = 0.6; P.knLX = 1.2; P.knRX = 0.8;
    } else if (st === 'climb') {
      const c = this.climbAnim || 0;
      const s = Math.sin(c);
      P.shLX = -2.4 + s * 0.5; P.shRX = -2.4 - s * 0.5;
      P.elLX = -0.6 - Math.max(0, s) * 0.8; P.elRX = -0.6 - Math.max(0, -s) * 0.8;
      P.shLZ = 0.35; P.shRZ = -0.35;
      P.hipLX = -0.9 - s * 0.4; P.hipRX = -0.9 + s * 0.4; P.knLX = 1.3; P.knRX = 1.3;
      P.torsoX = -0.1; P.headX = -0.35;
    } else if (st === 'hurt') {
      P.torsoX = -0.5; P.headX = -0.4; P.shLX = -1.2; P.shRX = -1.2; P.shLZ = 1; P.shRZ = -1;
    } else if (st === 'cutscene' && this.pose.victory) {
      const u = Math.min(1, t * 2);
      P.shLX = -2.8 * u; P.shRX = 0.2; P.shLZ = 0.3; P.elLX = -0.2; P.elRX = -1.5; P.shRZ = -0.7;
      P.torsoX = -0.15; P.headX = -0.2; P.hipsY = 0.5 + Math.abs(Math.sin(t * 6)) * 0.1 * (t < 1.2 ? 1 : 0);
    }

    // apply with smoothing
    const L = fast ? 30 : 16;
    const S = (obj, prop, v, l = L) => { obj[prop] = damp(obj[prop], v, l, dt); };
    S(J.hips.position, 'y', P.hipsY, 20);
    S(J.hips.rotation, 'y', P.hipsRY);
    S(J.torso.rotation, 'x', P.torsoX, st === 'pound' ? 60 : L);
    S(J.torso.rotation, 'y', P.torsoY);
    S(J.head.rotation, 'x', P.headX);
    S(J.head.rotation, 'y', P.headY);
    S(J.shoulderL.rotation, 'x', P.shLX); S(J.shoulderL.rotation, 'z', P.shLZ);
    S(J.shoulderR.rotation, 'x', P.shRX); S(J.shoulderR.rotation, 'z', P.shRZ);
    S(J.elbowL.rotation, 'x', P.elLX); S(J.elbowR.rotation, 'x', P.elRX);
    S(J.hipL.rotation, 'x', P.hipLX); S(J.hipL.rotation, 'z', P.hipLZ);
    S(J.hipR.rotation, 'x', P.hipRX); S(J.hipR.rotation, 'z', P.hipRZ);
    S(J.kneeL.rotation, 'x', P.knLX); S(J.kneeR.rotation, 'x', P.knRX);
    if (st === 'pound' && t < 0.22) J.torso.rotation.x = P.torsoX;

    // scarf secondary motion (spring driven by velocity)
    const drive = clamp(-hs * 0.12 - this.vel.y * 0.05, -1.4, 0.6) - 0.15;
    this.scarfV += ((drive - this.scarfA) * 60 - this.scarfV * 8) * dt;
    this.scarfA += this.scarfV * dt;
    J.scarfTail.rotation.x = -this.scarfA - 0.2 + Math.sin(time * 9) * 0.05 * (0.3 + sp);
    J.scarfTail2.rotation.x = -this.scarfA * 0.6 + Math.sin(time * 9 - 1) * 0.08 * (0.3 + sp);

    // squash & stretch spring
    this.squashV += (-this.squash * 220 - this.squashV * 16) * dt;
    this.squash += this.squashV * dt;
    const sq = clamp(this.squash * 0.06, -0.25, 0.25);
    this.model.root.scale.set(1 - sq * 0.5, 1 + sq, 1 - sq * 0.5);

    // blinking
    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 0.14; this.blinkT = 2 + Math.random() * 3; }
    if (this.blink > 0) this.blink -= dt;
    const eyeS = this.blink > 0 ? 0.15 : st === 'hurt' ? 0.4 : 1;
    for (const e of this.model.eyes) e.scale.y = damp(e.scale.y, eyeS, 30, dt);

    // facing & lean into turns
    const prevVis = this.visYaw;
    this.visYaw = turnToward(this.visYaw, this.yaw, dt * (fast ? 30 : 14));
    const turnRate = angleDiff(prevVis, this.visYaw) / Math.max(dt, 1e-3);
    this.lean = damp(this.lean, clamp(-turnRate * 0.05 * sp, -0.35, 0.35), 8, dt);
    this.root.position.copy(this.pos);
    this.root.rotation.set(0, this.visYaw, 0);
    this.model.root.rotation.z = this.lean;

    // invulnerability flicker + hit flash
    const vis = this.invuln > 0 ? Math.sin(time * 40) > -0.3 : true;
    this.root.visible = vis;
    for (const m of this.model.mats) m.userData.flash.value = Math.max(0, m.userData.flash.value - dt * 6);
  }
}

export function angleDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}
export function turnToward(a, b, maxStep) {
  const d = angleDiff(a, b);
  if (Math.abs(d) <= maxStep) return b;
  return a + Math.sign(d) * maxStep;
}
