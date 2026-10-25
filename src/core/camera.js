import * as THREE from 'three';
import { clamp, damp, lerp } from './noise.js';
import { angleDiff } from '../actors/player.js';

// Third-person orbit camera with terrain-aware collision (sphere-traced against the SDF),
// automatic framing for tight tunnels / vertical shafts / huge caverns, trauma shake and
// FOV kicks. Readability first: the cutaway shader also dithers terrain that blocks the view.

export class CameraRig {
  constructor(camera, game) {
    this.cam = camera;
    this.game = game;
    this.yaw = 0;
    this.pitch = -0.3;
    this.dist = 6.5;
    this.curDist = 6.5;
    this.target = new THREE.Vector3();
    this.focus = new THREE.Vector3();
    this.trauma = 0;
    this.fovKick = 0;
    this.baseFov = 60;
    this.space = 1; // 0 tight .. 1 normal .. 2 huge
    this.idleLook = 0;
    this.override = null; // {pos, look, t} for cutscenes
    this.shaft = 0;
    this.time = 0;
    this.lookAhead = new THREE.Vector3();
  }

  snapBehind(yaw) { this.yaw = yaw; this.pitch = -0.3; }

  shake(a) { this.trauma = Math.min(1, this.trauma + a); }
  kick(f) { this.fovKick += f; }

  update(dt, input, player, world) {
    this.time += dt;
    const vol = world.vol;
    const look = input.look();
    const manual = Math.abs(look.x) + Math.abs(look.y) > 0.0001;
    this.yaw -= look.x;
    this.pitch = clamp(this.pitch - look.y, -1.35, 0.75);
    if (manual) this.idleLook = 0; else this.idleLook += dt;

    // auto-follow: gently swing behind movement when the player isn't steering the camera
    const hs = Math.hypot(player.vel.x, player.vel.z);
    if (this.idleLook > 0.8 && hs > 2 && player.state === 'move') {
      const moveYaw = Math.atan2(player.vel.x, player.vel.z);
      const d = angleDiff(this.yaw, moveYaw);
      if (Math.abs(d) < 2.4) this.yaw += d * Math.min(1, dt * 0.8) * clamp((hs - 2) / 5, 0, 1);
    }
    if (input.recenterPressed()) { this.yaw = player.yaw; this.pitch = -0.3; }

    // probe the surrounding space to choose framing distance
    const tx = player.pos.x, ty = player.pos.y + 1.45, tz = player.pos.z;
    let open = 0, horiz = 0;
    const R = 7;
    const dirs = [[1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [0, 1, 0], [0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0.7, 0.7], [0, 0.7, -0.7]];
    for (let i = 0; i < dirs.length; i++) {
      const d = dirs[i];
      const t = vol.raycast(tx, ty, tz, d[0], d[1], d[2], R, 0.3);
      const v = t < 0 ? R : t;
      open += v;
      if (i < 4) horiz += v;
    }
    open /= dirs.length * R; horiz /= 4 * R;
    // tight tunnel -> closer, huge space -> further
    const wantSpace = open < 0.35 ? 0 : open > 0.85 ? 2 : 1;
    this.space = damp(this.space, wantSpace, 1.5, dt);
    // vertical shaft: walls close horizontally but open above or below
    const below = vol.raycast(tx, ty, tz, 0, -1, 0, 12, 0.3);
    const shaftNow = horiz < 0.4 && (below < 0 || below > 4) ? 1 : 0;
    this.shaft = damp(this.shaft, shaftNow, 2, dt);

    const sp = this.space;
    let want = sp < 1 ? lerp(4.6, 6.6, sp) : lerp(6.6, 9.5, sp - 1);
    if (player.state === 'climb') want = Math.min(want, 5.5);
    want *= 1 + Math.max(0, -this.pitch - 0.6) * 0.15;
    this.dist = damp(this.dist, want, 2.5, dt);
    const fovWant = (sp > 1 ? lerp(60, 66, sp - 1) : 60) + (player.state === 'dash' ? 6 : 0);

    // smoothed focus: lag horizontally a touch, vertically more (less bobbing)
    const focusY = player.grounded || player.state === 'climb' ? ty : Math.min(ty, this.focus.y + 6 * dt + Math.max(0, ty - this.focus.y) * dt * 2);
    if (!this.inited) { this.focus.set(tx, ty, tz); this.inited = true; }
    this.focus.x = damp(this.focus.x, tx, 14, dt);
    this.focus.z = damp(this.focus.z, tz, 14, dt);
    this.focus.y = damp(this.focus.y, player.grounded ? ty : focusY, player.grounded ? 8 : 4, dt);
    if (Math.abs(this.focus.y - ty) > 3) this.focus.y = ty + Math.sign(this.focus.y - ty) * 3;
    // look ahead a bit in move direction
    this.lookAhead.x = damp(this.lookAhead.x, player.vel.x * 0.12, 3, dt);
    this.lookAhead.z = damp(this.lookAhead.z, player.vel.z * 0.12, 3, dt);

    // shaft framing: look down more
    let pitch = this.pitch - this.shaft * 0.35 - (this.blockedK || 0) * 0.12;
    pitch = clamp(pitch, -1.45, 0.75);

    const cp = Math.cos(pitch), spn = Math.sin(pitch);
    const dir = new THREE.Vector3(-Math.sin(this.yaw) * cp, -spn, -Math.cos(this.yaw) * cp);
    const target = this.target.set(this.focus.x + this.lookAhead.x, this.focus.y, this.focus.z + this.lookAhead.z);

    // collision: sphere trace from target toward camera
    const r = 0.38;
    let t = 0.2, hit = this.dist;
    for (let i = 0; i < 64 && t < this.dist; i++) {
      const d = vol.sample(target.x + dir.x * t, target.y + dir.y * t, target.z + dir.z * t);
      if (d < r) { hit = Math.max(0.8, t - 0.1); break; }
      t += Math.max(0.12, d - r * 0.5);
    }
    // Never pull in closer than minD: when the terrain is closer than that, the camera is
    // allowed to sit inside the rock (back faces are culled) and the cutaway dither keeps
    // the hero visible. This keeps framing stable while tunnelling.
    const minD = Math.min(this.dist, 3.0);
    const blocked = hit < this.dist - 0.2;
    this.blockedK = damp(this.blockedK || 0, blocked ? 1 : 0, 4, dt);
    const wantD = Math.max(hit, minD);
    if (wantD < this.curDist) this.curDist = damp(this.curDist, wantD, 14, dt);
    else this.curDist = damp(this.curDist, wantD, 2.5, dt);

    let pos = target.clone().addScaledVector(dir, this.curDist);
    let lookAt = target;

    if (this.override) {
      const o = this.override;
      o.t = (o.t ?? 0) + dt;
      const k = o.blend ?? 1;
      pos = pos.lerp(o.pos, k);
      lookAt = target.clone().lerp(o.look, k);
    }

    // trauma shake (perlin-ish via sines)
    this.trauma = Math.max(0, this.trauma - dt * 1.6);
    const sh = this.trauma * this.trauma;
    const T = this.time * 38;
    const ox = (Math.sin(T * 1.1) + Math.sin(T * 2.3 + 1.3) * 0.5) * 0.18 * sh;
    const oy = (Math.sin(T * 1.7 + 2.1) + Math.sin(T * 2.9) * 0.5) * 0.18 * sh;
    const roll = Math.sin(T * 1.3 + 0.7) * 0.04 * sh;

    this.cam.position.copy(pos);
    this.cam.lookAt(lookAt);
    this.cam.translateX(ox); this.cam.translateY(oy);
    this.cam.rotateZ(roll);

    this.fovKick = damp(this.fovKick, 0, 6, dt);
    const fov = fovWant + this.fovKick;
    if (Math.abs(this.cam.fov - fov) > 0.01) { this.cam.fov = damp(this.cam.fov, fov, 8, dt); this.cam.updateProjectionMatrix(); }

    // cutaway (terrain dither between camera and hero)
    const u = world.terrain.material.userData.uniforms;
    u.uCutA.value.copy(this.cam.position);
    u.uCutB.value.set(player.pos.x, player.pos.y + 1.0, player.pos.z);
    u.uCutR.value = 1.3 + (this.blockedK || 0) * 0.6;
  }
}
