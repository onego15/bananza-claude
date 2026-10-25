import * as THREE from 'three';
import { ParticleSystem } from './particles.js';
import { MAT, MAT_INFO } from '../terrain/volume.js';

// High-level effects: rock debris with physics, dust clouds, sparks, shockwave rings, flashes.

const tmpM = new THREE.Matrix4();
const tmpQ = new THREE.Quaternion();
const tmpS = new THREE.Vector3();
const tmpP = new THREE.Vector3();
const tmpE = new THREE.Euler();
const col = new THREE.Color();

function rockGeometry(seed) {
  const g = new THREE.IcosahedronGeometry(0.5, 0);
  const p = g.attributes.position;
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const map = new Map();
  for (let i = 0; i < p.count; i++) {
    const key = `${p.getX(i).toFixed(3)},${p.getY(i).toFixed(3)},${p.getZ(i).toFixed(3)}`;
    if (!map.has(key)) map.set(key, 0.7 + rnd() * 0.5);
    const k = map.get(key);
    p.setXYZ(i, p.getX(i) * k, p.getY(i) * k * 0.8, p.getZ(i) * k);
  }
  g.computeVertexNormals();
  return g;
}

export class FX {
  constructor(scene, game) {
    this.scene = scene;
    this.game = game;
    this.dust = new ParticleSystem(2500, false);
    this.glow = new ParticleSystem(2500, true);
    scene.add(this.dust.points, this.glow.points);

    // debris
    this.maxDebris = 260;
    const geo = rockGeometry(11);
    const mat = new THREE.MeshStandardMaterial({ roughness: 0.92, metalness: 0.0, flatShading: true });
    this.debrisMesh = new THREE.InstancedMesh(geo, mat, this.maxDebris);
    this.debrisMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.debrisMesh.castShadow = true;
    this.debrisMesh.frustumCulled = false;
    this.debrisMesh.count = 0;
    this.debrisMesh.setColorAt(0, new THREE.Color(1, 1, 1));
    scene.add(this.debrisMesh);
    this.debris = [];

    // crystal shards (emissive)
    const sg = new THREE.OctahedronGeometry(0.3, 0); sg.scale(0.6, 1.4, 0.6);
    this.shardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2, roughness: 0.2, metalness: 0.1 });
    this.shardMesh = new THREE.InstancedMesh(sg, this.shardMat, 120);
    this.shardMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.shardMesh.count = 0; this.shardMesh.frustumCulled = false;
    this.shardMesh.setColorAt(0, new THREE.Color(1, 1, 1));
    scene.add(this.shardMesh);
    this.shards = [];

    // shockwave rings
    this.rings = [];
    const rg = new THREE.RingGeometry(0.82, 1.0, 64, 1);
    rg.rotateX(-Math.PI / 2);
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0xffe9c0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
      m.visible = false; m.renderOrder = 30;
      scene.add(m);
      this.rings.push({ mesh: m, t: 1, dur: 0.4, r: 3 });
    }
    // impact flash spheres
    this.flashes = [];
    const fg = new THREE.SphereGeometry(1, 16, 12);
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: 0xfff1d0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.visible = false; scene.add(m);
      this.flashes.push({ mesh: m, t: 1, dur: 0.15, r: 1 });
    }
    // light pulse for impacts
    this.impactLight = new THREE.PointLight(0xffd29a, 0, 6, 2);
    scene.add(this.impactLight);
    this.lightT = 0;
  }

  // --- primitive emitters ---
  puff(pos, n, o) {
    const c = o.color;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, u = Math.random() * 2 - 1;
      const s = Math.sqrt(1 - u * u);
      const sp = (o.speed ?? 3) * (0.3 + Math.random() * 0.7);
      let vx = Math.cos(a) * s * sp, vy = u * sp + (o.up ?? 0), vz = Math.sin(a) * s * sp;
      if (o.dir) { vx += o.dir.x * (o.dirSpeed ?? 0); vy += o.dir.y * (o.dirSpeed ?? 0); vz += o.dir.z * (o.dirSpeed ?? 0); }
      const jitter = o.spread ?? 0.3;
      col.copy(c).multiplyScalar(0.8 + Math.random() * 0.4);
      (o.additive ? this.glow : this.dust).emit(
        pos.x + (Math.random() - 0.5) * jitter, pos.y + (Math.random() - 0.5) * jitter, pos.z + (Math.random() - 0.5) * jitter,
        vx, vy, vz,
        { life: (o.life ?? 1) * (0.6 + Math.random() * 0.6), size: o.size ?? 0.5, size1: o.size1 ?? (o.size ?? 0.5) * 2.5, color: col, alpha: o.alpha ?? 0.8, drag: o.drag ?? 2.5, gravity: o.gravity ?? 0, spin: o.spin ? 0.6 + Math.random() : 0 }
      );
    }
  }

  spawnDebris(pos, dir, n, color, speed = 6, scale = 1) {
    for (let i = 0; i < n; i++) {
      if (this.debris.length >= this.maxDebris) this.debris.shift();
      const a = Math.random() * Math.PI * 2;
      const up = 2 + Math.random() * 5;
      const sp = speed * (0.4 + Math.random() * 0.8);
      this.debris.push({
        p: new THREE.Vector3(pos.x + (Math.random() - 0.5) * 0.8, pos.y + (Math.random() - 0.5) * 0.8, pos.z + (Math.random() - 0.5) * 0.8),
        v: new THREE.Vector3(Math.cos(a) * sp * 0.6 + dir.x * sp, up + dir.y * sp * 0.5, Math.sin(a) * sp * 0.6 + dir.z * sp),
        r: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        w: new THREE.Vector3((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14),
        s: (0.1 + Math.pow(Math.random(), 2) * 0.32) * scale,
        life: 0, max: 1.6 + Math.random() * 1.4,
        c: color.clone().multiplyScalar(0.45 + Math.random() * 0.35),
        rest: false,
      });
    }
  }

  spawnShards(pos, n, color) {
    for (let i = 0; i < n; i++) {
      if (this.shards.length >= 120) this.shards.shift();
      const a = Math.random() * Math.PI * 2;
      const sp = 3 + Math.random() * 6;
      this.shards.push({
        p: pos.clone(),
        v: new THREE.Vector3(Math.cos(a) * sp, 3 + Math.random() * 6, Math.sin(a) * sp),
        r: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
        w: new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20),
        s: 0.3 + Math.random() * 0.5, life: 0, max: 1 + Math.random() * 0.8, c: color.clone(),
      });
    }
  }

  ring(pos, radius, dur = 0.45, color = 0xffe9c0, opacity = 0.9) {
    const r = this.rings.find((x) => x.t >= 1) || this.rings[0];
    r.mesh.position.copy(pos); r.mesh.position.y += 0.15;
    r.mesh.material.color.set(color);
    r.t = 0; r.dur = dur; r.r = radius; r.op = opacity; r.mesh.visible = true;
  }

  flash(pos, radius, dur = 0.12, color = 0xfff1d0) {
    const f = this.flashes.find((x) => x.t >= 1) || this.flashes[0];
    f.mesh.position.copy(pos); f.mesh.material.color.set(color);
    f.t = 0; f.dur = dur; f.r = radius; f.mesh.visible = true;
  }

  light(pos, intensity = 40, color = 0xffd29a) {
    this.impactLight.position.copy(pos);
    this.impactLight.color.set(color);
    this.impactLight.intensity = intensity;
    this.lightT = 0.18;
  }

  // --- composite effects ---
  terrainImpact(pos, dir, removed, power = 1, blocked = false) {
    // pick dominant material for colours
    let total = 0, best = -1, bestN = 0;
    for (let i = 0; i < removed.length; i++) { total += removed[i]; if (removed[i] > bestN) { bestN = removed[i]; best = i; } }
    const theme = this.game.world?.theme;
    const baseCol = (m) => {
      const c = MAT_INFO[m].color;
      return new THREE.Color(c[0], c[1], c[2]);
    };
    const dustCol = best >= 0 ? baseCol(best).lerp(new THREE.Color(0.62, 0.56, 0.48), 0.35) : new THREE.Color(0.5, 0.46, 0.42);
    const nDebris = Math.min(40, Math.round(total * 0.28 * power) + (total > 0 ? 6 : 0));
    if (total > 0) {
      // debris coloured per removed material (proportional)
      for (let m = 0; m < removed.length; m++) {
        if (!removed[m]) continue;
        const k = Math.max(1, Math.round((nDebris * removed[m]) / total));
        if (m === MAT.CRYSTAL) this.spawnShards(pos, Math.min(12, k), new THREE.Color(theme ? theme.crystal : 0x6ff0ff));
        else this.spawnDebris(pos, dir.clone().multiplyScalar(-0.3), k, baseCol(m), 5.5 * power, m === MAT.DIRT ? 0.8 : 1.1);
      }
      this.puff(pos, Math.min(34, 8 + total * 0.2), { color: dustCol, speed: 4.5 * power, size: 0.6, size1: 2.4, life: 1.2, alpha: 0.32, drag: 2.8, up: 0.6 });
      this.puff(pos, 14, { color: new THREE.Color(1, 0.85, 0.55), speed: 9, size: 0.12, size1: 0.02, life: 0.35, additive: true, alpha: 1, drag: 3, gravity: 9 });
      if (removed[MAT.GOLD] > 0) this.puff(pos, 18, { color: new THREE.Color(1, 0.8, 0.3), speed: 6, size: 0.18, size1: 0.05, life: 0.8, additive: true, gravity: 6 });
      if (removed[MAT.CRYSTAL] > 0) this.puff(pos, 22, { color: new THREE.Color(theme ? theme.crystal : 0x6ff0ff), speed: 7, size: 0.2, size1: 0.04, life: 0.9, additive: true, gravity: 3 });
      if (removed[MAT.DIRT] > 0 && theme && theme.mossAmt > 0.3) this.puff(pos, 8, { color: new THREE.Color(0.35, 0.6, 0.2), speed: 4, size: 0.22, size1: 0.18, life: 1.6, gravity: 2.5, spin: true, alpha: 0.95 });
    }
    if (blocked) {
      this.puff(pos, 22, { color: new THREE.Color(1, 0.75, 0.35), speed: 10, size: 0.14, size1: 0.02, life: 0.4, additive: true, gravity: 12, alpha: 1 });
    }
    this.flash(pos, 0.6 * power, 0.08);
    this.light(pos, 12 * power);
  }

  update(dt, vol) {
    this.dust.update(dt, vol);
    this.glow.update(dt, vol);
    // debris physics
    const D = this.debris;
    for (let i = D.length - 1; i >= 0; i--) {
      const d = D[i];
      d.life += dt;
      if (d.life > d.max) { D.splice(i, 1); continue; }
      if (!d.rest) {
        d.v.y -= 22 * dt;
        const nx = d.p.x + d.v.x * dt, ny = d.p.y + d.v.y * dt, nz = d.p.z + d.v.z * dt;
        const r = d.s * 0.45;
        if (vol.sample(nx, ny, nz) < r) {
          // bounce along gradient
          const g = vol.gradient(nx, ny, nz, { x: 0, y: 0, z: 0 });
          const vn = d.v.x * g.x + d.v.y * g.y + d.v.z * g.z;
          if (vn < 0) { d.v.x -= 1.5 * vn * g.x; d.v.y -= 1.5 * vn * g.y; d.v.z -= 1.5 * vn * g.z; }
          d.v.multiplyScalar(0.55); d.w.multiplyScalar(0.6);
          if (d.v.lengthSq() < 0.6) d.rest = true;
        } else d.p.set(nx, ny, nz);
        d.r.x += d.w.x * dt; d.r.y += d.w.y * dt; d.r.z += d.w.z * dt;
      }
    }
    const fadeStart = 0.75;
    for (let i = 0; i < D.length; i++) {
      const d = D[i];
      const t = d.life / d.max;
      const sc = d.s * (t > fadeStart ? 1 - (t - fadeStart) / (1 - fadeStart) : 1) * Math.min(1, d.life * 12);
      tmpQ.setFromEuler(tmpE.set(d.r.x, d.r.y, d.r.z));
      tmpM.compose(d.p, tmpQ, tmpS.set(sc, sc, sc));
      this.debrisMesh.setMatrixAt(i, tmpM);
      this.debrisMesh.setColorAt(i, d.c);
    }
    this.debrisMesh.count = D.length;
    this.debrisMesh.instanceMatrix.needsUpdate = true;
    if (this.debrisMesh.instanceColor) this.debrisMesh.instanceColor.needsUpdate = true;

    const S = this.shards;
    for (let i = S.length - 1; i >= 0; i--) {
      const s = S[i];
      s.life += dt;
      if (s.life > s.max) { S.splice(i, 1); continue; }
      s.v.y -= 16 * dt;
      tmpP.copy(s.p).addScaledVector(s.v, dt);
      if (vol.sample(tmpP.x, tmpP.y, tmpP.z) < 0.1) { s.v.multiplyScalar(-0.35); } else s.p.copy(tmpP);
      s.r.addScaledVector(s.w, dt);
    }
    for (let i = 0; i < S.length; i++) {
      const s = S[i];
      const t = s.life / s.max;
      const sc = s.s * (1 - t * t);
      tmpQ.setFromEuler(tmpE.set(s.r.x, s.r.y, s.r.z));
      tmpM.compose(s.p, tmpQ, tmpS.set(sc, sc, sc));
      this.shardMesh.setMatrixAt(i, tmpM);
      this.shardMesh.setColorAt(i, s.c);
    }
    this.shardMesh.count = S.length;
    this.shardMesh.instanceMatrix.needsUpdate = true;
    if (this.shardMesh.instanceColor) this.shardMesh.instanceColor.needsUpdate = true;

    for (const r of this.rings) {
      if (r.t >= 1) continue;
      r.t += dt / r.dur;
      const e = 1 - Math.pow(1 - Math.min(1, r.t), 3);
      const s = 0.3 + r.r * e;
      r.mesh.scale.set(s, 1, s);
      r.mesh.material.opacity = (1 - r.t) * r.op;
      if (r.t >= 1) r.mesh.visible = false;
    }
    for (const f of this.flashes) {
      if (f.t >= 1) continue;
      f.t += dt / f.dur;
      const s = f.r * (0.5 + f.t);
      f.mesh.scale.setScalar(s);
      f.mesh.material.opacity = (1 - f.t) * 0.45;
      if (f.t >= 1) f.mesh.visible = false;
    }
    if (this.lightT > 0) {
      this.lightT -= dt;
      this.impactLight.intensity *= Math.exp(-dt * 14);
      if (this.lightT <= 0) this.impactLight.intensity = 0;
    }
  }

  clear() {
    this.dust.clear(); this.glow.clear();
    this.debris.length = 0; this.shards.length = 0;
    this.debrisMesh.count = 0; this.shardMesh.count = 0;
  }
}
