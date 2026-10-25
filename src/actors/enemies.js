import * as THREE from 'three';
import { S, V, part } from '../core/sdf.js';
import { Noise3, clamp, damp } from '../core/noise.js';
import { createToonishMaterial } from './heroModel.js';
import { Entity } from '../world/entities.js';
import { angleDiff, turnToward } from './player.js';

const nz = new Noise3(4242);
const C = (h) => new THREE.Color(h);
const tmp = new THREE.Vector3();
const g = { x: 0, y: 0, z: 0 };
const geoCache = new Map();
const cached = (k, f) => { if (!geoCache.has(k)) geoCache.set(k, f()); return geoCache.get(k); };

// ---------------------------------------------------------------- models
function grubModel(variant = 'moss') {
  const shell = variant === 'moss' ? C(0x2f5a4a) : C(0x3b3a6a);
  const shellTop = variant === 'moss' ? C(0x6aa83a) : C(0x7ff0ff);
  const belly = variant === 'moss' ? C(0xe7b48f) : C(0xc9b7e8);
  const mat = createToonishMaterial({ key: 'grub-' + variant, rim: variant === 'moss' ? 0xc8ffb0 : 0xa0f0ff, rimStrength: 0.45 });
  const body = cached('grubBody' + variant, () => part([
    S.ellipsoid(V(0, 0.45, 0), V(0.55, 0.42, 0.72)),
    S.ellipsoid(V(0, 0.62, -0.05), V(0.6, 0.38, 0.62), { k: 0.08 }), // shell
    S.torus(V(0, 0.6, 0.25), 0.5, 0.06, { k: 0.04 }),
    S.torus(V(0, 0.62, -0.2), 0.55, 0.06, { k: 0.04 }),
    S.ellipsoid(V(0, 0.92, -0.1), V(0.35, 0.16, 0.4), { k: 0.1 }), // mossy hump
  ], (p, n) => {
    const top = n.y > 0.35 && p.y > 0.7;
    const mossy = top && nz.noise(p.x * 9, p.y * 9, p.z * 9) > (variant === 'moss' ? -0.3 : 0.2);
    if (p.y < 0.35 || (n.y < -0.2)) return belly.clone().multiplyScalar(0.9 + 0.1 * nz.noise(p.x * 20, 0, p.z * 20));
    if (mossy) return shellTop.clone().multiplyScalar(0.75 + 0.35 * (nz.noise(p.x * 25, p.y * 25, p.z * 25) * 0.5 + 0.5));
    const ridge = Math.abs(Math.sin(p.z * 9)) < 0.18;
    return shell.clone().multiplyScalar(ridge ? 0.6 : 0.95 + 0.15 * nz.noise(p.x * 6, p.y * 6, p.z * 6));
  }, { cell: 0.03, k: 0.12 }));
  const head = cached('grubHead' + variant, () => part([
    S.ellipsoid(V(0, 0, 0.1), V(0.36, 0.3, 0.3)),
    S.capsule(V(0.16, -0.12, 0.32), V(0.22, -0.15, 0.5), 0.05, 0.02),
    S.capsule(V(-0.16, -0.12, 0.32), V(-0.22, -0.15, 0.5), 0.05, 0.02),
    S.capsule(V(0.12, 0.2, 0.15), V(0.25, 0.45, 0.2), 0.03, 0.015),
    S.capsule(V(-0.12, 0.2, 0.15), V(-0.25, 0.45, 0.2), 0.03, 0.015),
  ], (p) => (p.z > 0.32 && p.y < -0.05 ? C(0x3a2a20) : belly.clone().lerp(shell, 0.35)), { cell: 0.02 }));
  const leg = cached('grubLeg', () => part([S.capsule(V(0, 0, 0), V(0.16, -0.25, 0.02), 0.06, 0.04)], () => C(0x3a2e2a), { cell: 0.02 }));
  const root = new THREE.Group();
  const b = new THREE.Mesh(body, mat); b.castShadow = true; root.add(b);
  const h = new THREE.Group(); h.position.set(0, 0.48, 0.62); root.add(h);
  const hm = new THREE.Mesh(head, mat); hm.castShadow = true; h.add(hm);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xfff2a0, emissive: variant === 'moss' ? 0xffd040 : 0x80f0ff, emissiveIntensity: 1.6 });
  const eyes = [];
  for (const sx of [1, -1]) {
    const e = new THREE.Mesh(cached('grubEye', () => new THREE.SphereGeometry(0.085, 12, 8)), eyeMat);
    e.position.set(0.15 * sx, 0.08, 0.33); h.add(e); eyes.push(e);
    const pu = new THREE.Mesh(cached('grubPupil', () => new THREE.SphereGeometry(0.04, 8, 6)), new THREE.MeshBasicMaterial({ color: 0x110a05 }));
    pu.position.set(0.15 * sx, 0.08, 0.41); pu.scale.set(0.6, 1.3, 0.5); h.add(pu);
  }
  const legs = [];
  for (let i = 0; i < 3; i++) for (const sx of [1, -1]) {
    const lg = new THREE.Group(); lg.position.set(0.42 * sx, 0.3, 0.35 - i * 0.35);
    const lm = new THREE.Mesh(leg, mat); lm.scale.x = sx; lg.add(lm);
    root.add(lg); legs.push({ g: lg, side: sx, i });
  }
  return { root, head: h, legs, mats: [mat], eyeMat, body: b };
}

function batModel() {
  const mat = createToonishMaterial({ key: 'bat', rim: 0xd0a0ff, rimStrength: 0.6 });
  const body = cached('batBody', () => part([
    S.sphere(V(0, 0, 0), 0.35),
    S.ellipsoid(V(0, 0.08, 0.18), V(0.26, 0.22, 0.2)),
    S.capsule(V(0.15, 0.25, 0), V(0.3, 0.6, -0.05), 0.09, 0.02), // ears
    S.capsule(V(-0.15, 0.25, 0), V(-0.3, 0.6, -0.05), 0.09, 0.02),
    S.capsule(V(0, 0.15, -0.25), V(0, 0.5, -0.4), 0.07, 0.01), // crystal spine
  ], (p) => (p.z < -0.2 && p.y > 0.1 ? C(0x9ff4ff) : p.z > 0.25 ? C(0xe8c8ff) : C(0x5a3a7a).multiplyScalar(0.85 + 0.3 * (nz.noise(p.x * 20, p.y * 20, p.z * 20) * 0.5 + 0.5))), { cell: 0.02, k: 0.08 }));
  const wing = cached('batWing', () => part([
    S.custom((p) => {
      const d = Math.max(Math.abs(p.z) - 0.02, Math.hypot(p.x * 0.7, p.y * 1.4 - 0.1) - 0.5);
      const scallop = Math.hypot((p.x - 0.25) * 2.5, p.y * 3 + 0.55) - 0.35;
      return Math.max(d, -scallop, -p.x);
    }, V(0, -0.5, -0.05), V(0.75, 0.5, 0.05)),
    S.capsule(V(0, 0.05, 0), V(0.65, 0.25, 0), 0.03),
  ], (p) => C(0x7a4aa0).lerp(C(0x3a2050), p.x), { cell: 0.02 }));
  const root = new THREE.Group();
  const b = new THREE.Mesh(body, mat); b.castShadow = true; root.add(b);
  const wings = [];
  for (const sx of [1, -1]) {
    const w = new THREE.Group(); w.position.set(0.25 * sx, 0.05, 0); root.add(w);
    const m = new THREE.Mesh(wing, mat); m.scale.x = sx; w.add(m); wings.push({ g: w, side: sx });
  }
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff60c0, emissiveIntensity: 2 });
  for (const sx of [1, -1]) {
    const e = new THREE.Mesh(cached('batEye', () => new THREE.SphereGeometry(0.06, 10, 8)), eyeMat);
    e.position.set(0.12 * sx, 0.12, 0.33); root.add(e);
  }
  return { root, wings, mats: [mat], eyeMat };
}

function golemModel(scale = 1, key = 'golem') {
  const mat = createToonishMaterial({ key, rim: 0xffc080, rimStrength: 0.35 });
  const stone = (p) => C(0x8a7560).multiplyScalar(0.75 + 0.35 * (nz.noise(p.x * 4, p.y * 4, p.z * 4) * 0.5 + 0.5));
  const torso = cached(key + 'T', () => part([
    S.box(V(0, 0.55, 0), V(0.55, 0.5, 0.42), 0.18),
    S.box(V(0, 1.1, -0.05), V(0.7, 0.32, 0.48), 0.2),
    S.sphere(V(0, 0.9, 0.4), 0.2, { sub: true, k: 0.05 }),
  ], (p) => (p.y > 1.3 ? C(0x6a8a4a) : stone(p)), { cell: 0.04, k: 0.1 }));
  const headG = cached(key + 'H', () => part([
    S.box(V(0, 0.18, 0), V(0.3, 0.22, 0.28), 0.12),
    S.box(V(0, 0.32, 0.12), V(0.32, 0.06, 0.2), 0.04),
  ], stone, { cell: 0.03 }));
  const armG = cached(key + 'A', () => part([
    S.sphere(V(0, 0, 0), 0.28),
    S.capsule(V(0, -0.1, 0), V(0, -0.65, 0.05), 0.2, 0.24),
    S.box(V(0, -0.95, 0.05), V(0.3, 0.28, 0.3), 0.12),
  ], stone, { cell: 0.04, k: 0.08 }));
  const legG = cached(key + 'L', () => part([
    S.capsule(V(0, 0, 0), V(0, -0.45, 0), 0.22, 0.2),
    S.box(V(0, -0.55, 0.08), V(0.24, 0.12, 0.3), 0.08),
  ], stone, { cell: 0.04 }));
  const root = new THREE.Group();
  const body = new THREE.Group(); body.position.y = 0.7; root.add(body);
  const t = new THREE.Mesh(torso, mat); t.castShadow = true; body.add(t);
  const head = new THREE.Group(); head.position.set(0, 1.4, 0.05); body.add(head);
  const hm = new THREE.Mesh(headG, mat); hm.castShadow = true; head.add(hm);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff8a2a, emissiveIntensity: 2.2 });
  const eye = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.05), eyeMat); eye.position.set(0, 0.2, 0.28); head.add(eye);
  const core = new THREE.Mesh(cached('golemCore', () => new THREE.IcosahedronGeometry(0.17, 1)), eyeMat); core.position.set(0, 0.9, 0.36); body.add(core);
  const arms = [];
  for (const sx of [1, -1]) {
    const a = new THREE.Group(); a.position.set(0.85 * sx, 1.1, 0); body.add(a);
    const m = new THREE.Mesh(armG, mat); m.castShadow = true; a.add(m); arms.push(a);
  }
  const legs = [];
  for (const sx of [1, -1]) {
    const l = new THREE.Group(); l.position.set(0.3 * sx, 0.1, 0); body.add(l);
    const m = new THREE.Mesh(legG, mat); m.castShadow = true; l.add(m); legs.push(l);
  }
  root.scale.setScalar(scale);
  return { root, body, head, arms, legs, mats: [mat], eyeMat, core };
}

// ---------------------------------------------------------------- base enemy
class Enemy extends Entity {
  constructor(world, def) {
    super(world, def);
    this.vel = new THREE.Vector3();
    this.yaw = Math.random() * Math.PI * 2;
    this.hp = 3;
    this.state = 'idle';
    this.stateT = 0;
    this.radius = 0.6;
    this.home = this.pos.clone();
    this.flash = 0;
    this.stun = 0;
    this.grounded = false;
    this.contactDmg = 1;
    this.gold = 5;
  }
  setState(s) { this.state = s; this.stateT = 0; }
  physics(dt, gravity = 30) {
    const vol = this.world.vol;
    this.vel.y -= gravity * dt;
    if (this.vel.y < -25) this.vel.y = -25;
    const steps = Math.max(1, Math.ceil(this.vel.length() * dt / 0.2));
    this.grounded = false;
    for (let s = 0; s < steps; s++) {
      this.pos.addScaledVector(this.vel, dt / steps);
      for (let it = 0; it < 2; it++) {
        const cx = this.pos.x, cy = this.pos.y + this.radius, cz = this.pos.z;
        const d = vol.sample(cx, cy, cz);
        if (d < this.radius) {
          vol.gradient(cx, cy, cz, g, 0.2);
          const push = this.radius - d;
          if (g.y > 0.6) { this.pos.y += push / g.y; this.grounded = true; if (this.vel.y < 0) this.vel.y = 0; }
          else {
            this.pos.x += g.x * push; this.pos.y += g.y * push; this.pos.z += g.z * push;
            const vn = this.vel.x * g.x + this.vel.y * g.y + this.vel.z * g.z;
            if (vn < 0) { this.vel.x -= g.x * vn; this.vel.y -= g.y * vn; this.vel.z -= g.z * vn; this.hitWall = true; }
          }
        }
      }
    }
    if (vol.sample(this.pos.x, this.pos.y + this.radius, this.pos.z) < -0.2) this.pos.y += 0.3; // ejected from terrain
    if (this.pos.y < -3) this.die(true);
  }
  hit(dmg, dir, src, big) {
    if (this.state === 'dead') return false;
    this.hp -= dmg;
    this.flash = 1;
    const d = dir ? tmp.copy(dir).setY(0).normalize() : tmp.copy(this.pos).sub(this.player.pos).setY(0).normalize();
    this.vel.set(d.x * (big ? 13 : 8), big ? 8 : 5, d.z * (big ? 13 : 8));
    this.game.audio.play('impact_flesh');
    this.game.audio.play('enemy_hit');
    this.world.fx.puff(tmp.copy(this.pos).setY(this.pos.y + this.radius), 14, { color: new THREE.Color(1, 0.95, 0.7), speed: 7, size: 0.18, size1: 0.02, life: 0.35, additive: true });
    this.world.fx.flash(tmp, 0.9, 0.1);
    if (this.hp <= 0) this.die();
    else { this.setState('hurt'); this.stun = 0.45; }
    return true;
  }
  die(silent) {
    if (this.state === 'dead') return;
    this.setState('dead');
    if (!silent) {
      const c = tmp.copy(this.pos).setY(this.pos.y + this.radius);
      this.game.audio.play('enemy_die');
      this.world.fx.puff(c, 30, { color: new THREE.Color(0.85, 0.8, 0.95), speed: 6, size: 0.8, size1: 2.4, life: 1, alpha: 0.6 });
      this.world.fx.puff(c, 30, { color: new THREE.Color(1, 0.85, 0.4), speed: 9, size: 0.25, size1: 0.02, life: 0.8, additive: true });
      this.world.fx.ring(this.pos, 3, 0.4);
      this.world.gold.spawn(c, this.gold, 4);
      if (Math.random() < 0.3) this.world.spawnHeart(c);
      this.game.stats.kills++;
    }
    this.remove();
  }
  updateFlash(dt) {
    this.flash = Math.max(0, this.flash - dt * 5);
    for (const m of this.model.mats) m.userData.flash.value = this.flash;
  }
  touchPlayer(range = 1.1) {
    const p = this.player;
    const d = tmp.copy(p.pos).sub(this.pos);
    d.y = (p.pos.y + 0.9) - (this.pos.y + this.radius);
    return d.length() < range + this.radius;
  }
  sees(range) {
    const p = this.player;
    const dx = p.pos.x - this.pos.x, dy = p.pos.y - this.pos.y, dz = p.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dy, dz);
    if (dist > range) return false;
    const t = this.world.vol.raycast(this.pos.x, this.pos.y + 0.8, this.pos.z, dx / dist, (dy + 0.4) / dist, dz / dist, dist);
    return t < 0;
  }
}

// ---------------------------------------------------------------- Mossback Grub
export class Grub extends Enemy {
  constructor(world, def) {
    super(world, def);
    this.variant = def.variant || 'moss';
    this.model = grubModel(this.variant);
    this.group.add(this.model.root);
    this.hp = 3; this.radius = 0.55; this.gold = 6;
    this.hitSphere = { c: new THREE.Vector3(), r: 0.8 };
    this.walkPh = Math.random() * 6;
    this.wanderT = 0; this.wanderYaw = this.yaw;
  }
  update(dt) {
    if (!this.alive) return;
    this.stateT += dt;
    const p = this.player;
    const toP = tmp.copy(p.pos).sub(this.pos);
    const dist = toP.length();
    const yawToP = Math.atan2(toP.x, toP.z);
    let speed = 0;
    switch (this.state) {
      case 'idle':
      case 'wander':
        this.wanderT -= dt;
        if (this.wanderT < 0) {
          this.wanderT = 1.5 + Math.random() * 2.5;
          const back = this.pos.distanceTo(this.home) > 6;
          this.wanderYaw = back ? Math.atan2(this.home.x - this.pos.x, this.home.z - this.pos.z) : Math.random() * Math.PI * 2;
          this.state = Math.random() < 0.3 ? 'idle' : 'wander';
        }
        if (this.state === 'wander') { this.yaw = turnToward(this.yaw, this.wanderYaw, dt * 3); speed = 1.6; }
        if (dist < 10 && this.sees(10) && !p.dead) { this.setState('alert'); this.game.audio.play('grub_chirp'); }
        break;
      case 'alert':
        this.yaw = turnToward(this.yaw, yawToP, dt * 8);
        if (this.stateT < 0.1 && this.grounded) this.vel.y = 4;
        if (this.stateT > 0.65) this.setState('charge');
        break;
      case 'charge':
        if (this.stateT < 0.3) this.yaw = turnToward(this.yaw, yawToP, dt * 4);
        speed = 8.5;
        if (this.stateT > 0.25 && Math.random() < dt * 12) this.world.fx.puff(this.pos, 1, { color: new THREE.Color(0.6, 0.5, 0.4), speed: 1, size: 0.4, size1: 1.2, life: 0.5, alpha: 0.4 });
        if (this.hitWall && this.stateT > 0.2) { this.setState('stunned'); this.vel.set(-Math.sin(this.yaw) * 4, 5, -Math.cos(this.yaw) * 4); this.game.audio.play('impact_rock', { power: 0.5 }); this.world.fx.puff(this.pos, 8, { color: new THREE.Color(1, 1, 0.6), speed: 3, size: 0.2, size1: 0.02, life: 0.5, additive: true }); }
        else if (this.stateT > 1.4) this.setState('recover');
        break;
      case 'recover':
        if (this.stateT > 0.8) this.setState(dist < 12 ? 'alert' : 'wander');
        break;
      case 'stunned':
        if (this.stateT > 1.6) this.setState('recover');
        break;
      case 'hurt':
        if (this.stateT > this.stun) this.setState(dist < 12 ? 'alert' : 'wander');
        break;
    }
    this.hitWall = false;
    if (this.state !== 'hurt' && this.state !== 'stunned') {
      const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
      const k = this.grounded ? 1 - Math.exp(-dt * 10) : 1 - Math.exp(-dt * 1);
      this.vel.x += (fx * speed - this.vel.x) * k;
      this.vel.z += (fz * speed - this.vel.z) * k;
      // avoid walking off ledges while wandering
      if (this.state === 'wander' && this.grounded) {
        const ax = this.pos.x + fx * 1.2, az = this.pos.z + fz * 1.2;
        if (this.world.vol.sample(ax, this.pos.y - 1.0, az) > 0.4) { this.wanderYaw += Math.PI; this.vel.x *= -0.2; this.vel.z *= -0.2; }
      }
    } else if (this.grounded) { this.vel.x *= Math.exp(-dt * 4); this.vel.z *= Math.exp(-dt * 4); }
    this.physics(dt);
    if (this.state === 'charge' && this.touchPlayer(0.6)) { p.hurt(this.pos, 1); this.setState('recover'); this.vel.multiplyScalar(-0.3); }
    else if (this.state !== 'stunned' && this.state !== 'hurt' && this.touchPlayer(0.25)) p.hurt(this.pos, 1);

    // animate
    const hs = Math.hypot(this.vel.x, this.vel.z);
    this.walkPh += dt * (3 + hs * 3.5);
    const M = this.model;
    for (const L of M.legs) {
      const ph = this.walkPh + L.i * 2.1 + (L.side > 0 ? 0 : Math.PI);
      L.g.rotation.x = Math.sin(ph) * 0.6 * Math.min(1, hs / 2 + 0.1);
      L.g.rotation.z = L.side * (0.2 + Math.max(0, Math.cos(ph)) * 0.3);
    }
    const stunned = this.state === 'stunned';
    M.root.rotation.z = damp(M.root.rotation.z, stunned ? Math.PI : 0, 10, dt);
    M.root.position.y = stunned ? 1.0 : Math.abs(Math.sin(this.walkPh)) * 0.04;
    const alert = this.state === 'alert';
    M.head.rotation.x = alert ? -0.4 + Math.sin(this.stateT * 30) * 0.1 : Math.sin(this.walkPh * 0.5) * 0.08;
    M.body.scale.set(1, alert ? 0.9 + Math.sin(this.stateT * 30) * 0.05 : 1 + Math.sin(this.walkPh) * 0.02, this.state === 'charge' ? 1.08 : 1);
    M.eyeMat.emissiveIntensity = this.state === 'charge' || alert ? 4 : 1.6;
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    this.hitSphere.c.set(this.pos.x, this.pos.y + 0.5, this.pos.z);
    this.updateFlash(dt);
  }
  hit(dmg, dir, src, big) {
    const bonus = this.state === 'stunned' ? 2 : 0;
    return super.hit(dmg + bonus, dir, src, big);
  }
}

// ---------------------------------------------------------------- Shardwing bat
export class Bat extends Enemy {
  constructor(world, def) {
    super(world, def);
    this.model = batModel();
    this.group.add(this.model.root);
    this.hp = 1; this.radius = 0.4; this.gold = 4;
    this.hitSphere = { c: new THREE.Vector3(), r: 0.75 };
    this.t = Math.random() * 10;
    this.home = this.pos.clone();
    this.swoopFrom = new THREE.Vector3();
  }
  update(dt) {
    if (!this.alive) return;
    this.t += dt; this.stateT += dt;
    const p = this.player;
    const target = tmp.copy(p.pos).setY(p.pos.y + 1.0);
    const dist = target.distanceTo(this.pos);
    let want = new THREE.Vector3();
    switch (this.state) {
      case 'idle':
        want.set(this.home.x + Math.sin(this.t * 0.7) * 3, this.home.y + Math.sin(this.t * 1.3) * 0.8, this.home.z + Math.cos(this.t * 0.6) * 3);
        if (dist < 12 && this.sees(12)) { this.setState('circle'); this.game.audio.play('bat'); }
        break;
      case 'circle': {
        const a = this.t * 1.4;
        want.set(target.x + Math.cos(a) * 4, target.y + 2.2 + Math.sin(this.t * 2) * 0.5, target.z + Math.sin(a) * 4);
        if (this.stateT > 2.2 + Math.random() * 0.5) { this.setState('windup'); this.game.audio.play('bat'); }
        if (dist > 18) this.setState('idle');
        break;
      }
      case 'windup':
        want.copy(this.pos).setY(this.pos.y + 0.6);
        if (this.stateT > 0.5) { this.setState('swoop'); this.swoopFrom.copy(target); }
        break;
      case 'swoop': {
        const dir = tmp.copy(this.swoopFrom).sub(this.pos).normalize();
        this.vel.lerp(dir.multiplyScalar(13), 1 - Math.exp(-dt * 6));
        if (this.stateT > 0.9 || this.pos.distanceTo(this.swoopFrom) < 0.5) this.setState('circle');
        break;
      }
      case 'hurt':
        if (this.stateT > 0.4) this.setState('circle');
        break;
    }
    if (this.state !== 'swoop' && this.state !== 'hurt') {
      const d = want.sub(this.pos);
      this.vel.lerp(d.multiplyScalar(2.2), 1 - Math.exp(-dt * 3));
    }
    if (this.state === 'hurt') this.vel.y -= 15 * dt;
    // fly collision (no gravity)
    const vol = this.world.vol;
    this.pos.addScaledVector(this.vel, dt);
    const dd = vol.sample(this.pos.x, this.pos.y, this.pos.z);
    if (dd < this.radius) {
      vol.gradient(this.pos.x, this.pos.y, this.pos.z, g, 0.2);
      this.pos.x += g.x * (this.radius - dd); this.pos.y += g.y * (this.radius - dd); this.pos.z += g.z * (this.radius - dd);
      if (this.state === 'swoop') this.setState('circle');
    }
    if (this.touchPlayer(0.4) && this.state === 'swoop') { p.hurt(this.pos, 1); this.setState('circle'); }
    const M = this.model;
    const flap = Math.sin(this.t * (this.state === 'swoop' ? 8 : 18));
    for (const w of M.wings) { w.g.rotation.z = w.side * (flap * 0.9 + (this.state === 'swoop' ? -0.9 : 0)); }
    const hs = Math.hypot(this.vel.x, this.vel.z);
    if (hs > 0.3) this.yaw = Math.atan2(this.vel.x, this.vel.z);
    if (this.state === 'circle' || this.state === 'windup') this.yaw = Math.atan2(target.x - this.pos.x, target.z - this.pos.z);
    this.group.position.copy(this.pos);
    this.group.rotation.set(this.state === 'swoop' ? 0.6 : 0, this.yaw, 0);
    this.hitSphere.c.copy(this.pos);
    this.updateFlash(dt);
    if (Math.random() < dt * 4) this.world.fx.glow.emit(this.pos.x, this.pos.y, this.pos.z, 0, -0.5, 0, { life: 0.8, size: 0.15, size1: 0, color: new THREE.Color(0.6, 0.95, 1), alpha: 1, drag: 1 });
  }
}

// ---------------------------------------------------------------- Rubble Sentry golem
export class Golem extends Enemy {
  constructor(world, def) {
    super(world, def);
    this.model = golemModel(def.scale ?? 1);
    this.group.add(this.model.root);
    this.hp = 5; this.radius = 0.75; this.gold = 10;
    this.hitSphere = { c: new THREE.Vector3(), r: 1.2 };
    this.walkPh = 0;
    this.yaw = def.yaw ?? 0;
  }
  update(dt) {
    if (!this.alive) return;
    this.stateT += dt;
    const p = this.player;
    const toP = tmp.copy(p.pos).sub(this.pos);
    const dist = toP.length();
    const yawToP = Math.atan2(toP.x, toP.z);
    let speed = 0;
    const M = this.model;
    switch (this.state) {
      case 'idle':
        if (dist < 11 && this.sees(11)) { this.setState('walk'); this.game.audio.play('golem'); }
        break;
      case 'walk':
        this.yaw = turnToward(this.yaw, yawToP, dt * 2.5);
        speed = 2.4;
        if (dist < 2.8) this.setState('raise');
        if (dist > 16) this.setState('idle');
        break;
      case 'raise':
        this.yaw = turnToward(this.yaw, yawToP, dt * 1.5);
        if (this.stateT > 0.85) {
          this.setState('slam');
          const c = this.pos.clone().add(new THREE.Vector3(Math.sin(this.yaw) * 1.6, 0, Math.cos(this.yaw) * 1.6));
          this.world.fx.ring(c, 3.2, 0.45, 0xffb070);
          this.world.fx.puff(c, 20, { color: new THREE.Color(0.7, 0.6, 0.5), speed: 5, size: 0.8, size1: 2.2, life: 0.9, alpha: 0.5 });
          this.game.audio.play('slam', { power: 0.7 });
          this.game.cameraRig.shake(0.25);
          const pd = p.pos.distanceTo(c);
          if (pd < 2.8 && p.pos.y < c.y + 1.2) p.hurt(c, 1);
        }
        break;
      case 'slam':
        if (this.stateT > 1.0) this.setState('walk');
        break;
      case 'hurt':
        if (this.stateT > 0.35) this.setState('walk');
        break;
    }
    if (this.state !== 'hurt') {
      const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
      const k = 1 - Math.exp(-dt * 8);
      this.vel.x += (fx * speed - this.vel.x) * k; this.vel.z += (fz * speed - this.vel.z) * k;
    } else { this.vel.x *= Math.exp(-dt * 5); this.vel.z *= Math.exp(-dt * 5); }
    this.physics(dt);
    if (this.touchPlayer(0.15)) p.hurt(this.pos, 1);
    // anim
    const hs = Math.hypot(this.vel.x, this.vel.z);
    this.walkPh += dt * hs * 2.2;
    M.legs[0].rotation.x = Math.sin(this.walkPh) * 0.5; M.legs[1].rotation.x = -Math.sin(this.walkPh) * 0.5;
    let armX = Math.sin(this.walkPh) * 0.3;
    if (this.state === 'raise') armX = -2.8 * Math.min(1, this.stateT / 0.6);
    if (this.state === 'slam') armX = this.stateT < 0.15 ? -2.8 + this.stateT / 0.15 * 2.2 : -0.6;
    M.arms[0].rotation.x = damp(M.arms[0].rotation.x, this.state === 'walk' || this.state === 'idle' ? armX : armX, 20, dt);
    M.arms[1].rotation.x = damp(M.arms[1].rotation.x, this.state === 'walk' || this.state === 'idle' ? -armX : armX, 20, dt);
    M.body.rotation.x = this.state === 'raise' ? -0.2 : this.state === 'slam' ? 0.35 : 0;
    M.body.position.y = 0.7 + Math.abs(Math.sin(this.walkPh)) * 0.06;
    M.eyeMat.emissiveIntensity = this.state === 'raise' ? 5 : 2.2;
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    this.hitSphere.c.set(this.pos.x, this.pos.y + 1.4, this.pos.z);
    this.updateFlash(dt);
  }
}

export { golemModel };
