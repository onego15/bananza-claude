import * as THREE from 'three';
import { MAT } from '../terrain/volume.js';
import { mulberry32 } from '../core/noise.js';
import { S, V, part } from '../core/sdf.js';

// Instanced foliage / rock / crystal decoration scattered on the terrain surface after
// generation. Instances are bucketed in a spatial hash so digging can remove (and
// burst) the ones whose support was destroyed.

const dummy = new THREE.Object3D();
const zero = new THREE.Matrix4().makeScale(0, 0, 0);

const FOLIAGE_NORMAL = THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', '');

function windMaterial(base, strength = 1) {
  const u = { uTime: { value: 0 } };
  base.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = u.uTime;
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', FOLIAGE_NORMAL);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        {
          vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
          float h = max(0.0, position.y);
          float w = sin(uTime * 1.7 + ip.x * 0.6 + ip.z * 0.5) * 0.5 + sin(uTime * 2.9 + ip.x * 1.3) * 0.25;
          transformed.x += w * h * h * ${(0.18 * strength).toFixed(3)};
          transformed.z += cos(uTime * 1.3 + ip.z * 0.7) * h * h * ${(0.1 * strength).toFixed(3)};
        }`);
  };
  base.customProgramCacheKey = () => 'wind' + strength;
  base.userData.u = u;
  return base;
}

function grassGeometry() {
  const pos = [], col = [], idx = [];
  const rnd = mulberry32(5);
  const blades = 9;
  for (let b = 0; b < blades; b++) {
    const a = rnd() * Math.PI * 2;
    const r = rnd() * 0.22;
    const ox = Math.cos(a) * r, oz = Math.sin(a) * r;
    const h = 0.35 + rnd() * 0.45;
    const w = 0.045 + rnd() * 0.03;
    const lean = (rnd() - 0.5) * 0.5;
    const dir = rnd() * Math.PI;
    const dx = Math.cos(dir), dz = Math.sin(dir);
    const base = pos.length / 3;
    const segs = 3;
    for (let s = 0; s <= segs; s++) {
      const t = s / segs;
      const ww = w * (1 - t * 0.9);
      const cx = ox + lean * t * t * Math.cos(a), cz = oz + lean * t * t * Math.sin(a);
      pos.push(cx - dx * ww, t * h, cz - dz * ww, cx + dx * ww, t * h, cz + dz * ww);
      const c0 = [0.05 + t * 0.2, 0.1 + t * 0.3, 0.025 + t * 0.06];
      col.push(...c0, ...c0);
    }
    for (let s = 0; s < segs; s++) {
      const i0 = base + s * 2;
      idx.push(i0, i0 + 1, i0 + 3, i0, i0 + 3, i0 + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  // point normals upward for soft grass lighting
  const n = g.attributes.normal;
  for (let i = 0; i < n.count; i++) n.setXYZ(i, n.getX(i) * 0.3, 1, n.getZ(i) * 0.3);
  return g;
}

function fernGeometry() {
  const pos = [], col = [], idx = [];
  const fronds = 6;
  for (let f = 0; f < fronds; f++) {
    const a = (f / fronds) * Math.PI * 2 + 0.3;
    const L = 0.7 + (f % 3) * 0.15;
    const base = pos.length / 3;
    const segs = 6;
    for (let s = 0; s <= segs; s++) {
      const t = s / segs;
      const r = t * L;
      const y = Math.sin(t * Math.PI * 0.75) * 0.45 * L - t * t * 0.15;
      const w = Math.sin(t * Math.PI) * 0.16;
      const cx = Math.cos(a) * r, cz = Math.sin(a) * r;
      const px = -Math.sin(a) * w, pz = Math.cos(a) * w;
      pos.push(cx - px, y, cz - pz, cx + px, y, cz + pz);
      const c = [0.05 + t * 0.12, 0.16 + t * 0.2, 0.04 + t * 0.04];
      col.push(...c, ...c);
    }
    for (let s = 0; s < segs; s++) { const i0 = base + s * 2; idx.push(i0, i0 + 1, i0 + 3, i0, i0 + 3, i0 + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  const n = g.attributes.normal;
  for (let i = 0; i < n.count; i++) n.setXYZ(i, n.getX(i) * 0.4, 1, n.getZ(i) * 0.4);
  return g;
}

function mushroomGeometry(capColor, stemColor) {
  const C = (h) => new THREE.Color(h);
  return part([
    S.capsule(V(0, 0, 0), V(0.02, 0.32, 0), 0.05, 0.04),
    S.ellipsoid(V(0.02, 0.34, 0), V(0.2, 0.1, 0.2)),
    S.ellipsoid(V(0.02, 0.27, 0), V(0.18, 0.06, 0.18), { sub: true, k: 0.02 }),
  ], (p) => (p.y > 0.3 ? C(capColor) : C(stemColor)), { cell: 0.02, k: 0.04 });
}

function vineGeometry() {
  const pos = [], col = [], idx = [];
  const rnd = mulberry32(17);
  for (let v = 0; v < 3; v++) {
    const ox = (rnd() - 0.5) * 0.5, oz = (rnd() - 0.5) * 0.5;
    const L = 1.2 + rnd() * 1.8;
    const segs = 8;
    const base = pos.length / 3;
    for (let s = 0; s <= segs; s++) {
      const t = s / segs;
      const w = 0.05 + Math.sin(t * 9 + v) * 0.02;
      const x = ox + Math.sin(t * 5 + v) * 0.08;
      pos.push(x - w, -t * L, oz, x + w, -t * L, oz);
      const c = [0.12 + t * 0.15, 0.3 + t * 0.15, 0.1];
      col.push(...c, ...c);
    }
    for (let s = 0; s < segs; s++) { const i0 = base + s * 2; idx.push(i0, i0 + 1, i0 + 3, i0, i0 + 3, i0 + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  // wind shader uses +y as "height": vines hang down, so flip sway via negative y => use abs
  return g;
}

function pebbleGeometry() {
  const g = new THREE.IcosahedronGeometry(0.16, 0);
  const p = g.attributes.position;
  const rnd = mulberry32(3);
  for (let i = 0; i < p.count; i++) p.setY(i, p.getY(i) * 0.6 + 0.05);
  g.computeVertexNormals();
  void rnd;
  return g;
}

function crystalClusterGeometry() {
  // hexagonal prisms with pointed tips; vertex colour runs dark at the root -> bright at the tip
  const geos = [];
  const rnd = mulberry32(23);
  for (let i = 0; i < 5; i++) {
    const h = (i === 0 ? 0.75 : 0.3 + rnd() * 0.45);
    const r = (i === 0 ? 0.13 : 0.06 + rnd() * 0.05);
    const c = new THREE.CylinderGeometry(0, r, r * 2.2, 6, 1);
    c.translate(0, h + r * 1.1 - 0.01, 0);
    const b = new THREE.CylinderGeometry(r, r * 1.08, h, 6, 1);
    b.translate(0, h / 2, 0);
    const tilt = i === 0 ? 0.12 : 0.35 + rnd() * 0.5;
    const ang = rnd() * 6.28;
    const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(Math.cos(ang) * tilt, rnd() * 6, Math.sin(ang) * tilt));
    m.setPosition(i === 0 ? 0 : Math.sin(ang) * 0.14, -0.05, i === 0 ? 0 : -Math.cos(ang) * 0.14);
    for (const g of [b, c]) {
      g.applyMatrix4(m);
      const ng = g.toNonIndexed();
      ng.userData.h = h + r * 2.2;
      geos.push(ng);
    }
  }
  let total = 0; for (const g of geos) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const col = new Float32Array(total * 3);
  let o = 0;
  for (const g of geos) {
    const a = g.attributes.position.array;
    pos.set(a, o);
    for (let k = 0; k < a.length; k += 3) {
      const t = Math.min(1, Math.max(0, a[k + 1] / 0.9));
      const v = 0.08 + Math.pow(t, 1.6) * 0.92;
      col[o + k] = v; col[o + k + 1] = v; col[o + k + 2] = v;
    }
    o += a.length;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.computeVertexNormals();
  return out;
}

export class Decor {
  constructor(scene, world) {
    this.world = world;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.types = [];
    this.cell = 2;
    this.windMats = [];
  }

  addType(name, geo, mat, max, opts = {}) {
    const mesh = new THREE.InstancedMesh(geo, mat, max);
    mesh.count = 0;
    mesh.castShadow = !!opts.shadow;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    this.group.add(mesh);
    const t = { name, mesh, max, anchors: [], normals: [], alive: [], hash: new Map(), burst: opts.burst, cast: opts.cast };
    this.types.push(t);
    return t;
  }

  add(t, p, n, scale, rotY, tilt = 1) {
    if (t.mesh.count >= t.max) return;
    const i = t.mesh.count++;
    dummy.position.copy(p);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3().copy(n).lerp(new THREE.Vector3(0, 1, 0), 1 - tilt).normalize());
    const qy = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    dummy.quaternion.copy(q).multiply(qy);
    dummy.scale.set(scale, scale, scale);
    dummy.updateMatrix();
    t.mesh.setMatrixAt(i, dummy.matrix);
    t.anchors.push(p.clone());
    t.normals.push(n.clone());
    t.alive.push(true);
    const key = this.key(p.x, p.y, p.z);
    if (!t.hash.has(key)) t.hash.set(key, []);
    t.hash.get(key).push(i);
  }

  key(x, y, z) { return `${Math.floor(x / this.cell)},${Math.floor(y / this.cell)},${Math.floor(z / this.cell)}`; }

  // remove instances in or near a dug sphere whose support vanished
  onDig(c, r) {
    const vol = this.world.vol;
    const R = r + 1.0;
    const c0 = Math.floor((c.x - R) / this.cell), c1 = Math.floor((c.x + R) / this.cell);
    const d0 = Math.floor((c.y - R) / this.cell), d1 = Math.floor((c.y + R) / this.cell);
    const e0 = Math.floor((c.z - R) / this.cell), e1 = Math.floor((c.z + R) / this.cell);
    for (const t of this.types) {
      let changed = false;
      for (let i = c0; i <= c1; i++) for (let j = d0; j <= d1; j++) for (let k = e0; k <= e1; k++) {
        const list = t.hash.get(`${i},${j},${k}`);
        if (!list) continue;
        for (const id of list) {
          if (!t.alive[id]) continue;
          const a = t.anchors[id], n = t.normals[id];
          const inside = a.distanceTo(c) < r + 0.2;
          const support = vol.sample(a.x - n.x * 0.25, a.y - n.y * 0.25, a.z - n.z * 0.25);
          if (inside || support > 0.05) {
            t.alive[id] = false;
            t.mesh.setMatrixAt(id, zero);
            changed = true;
            if (t.burst) this.world.fx.puff(a, 3, t.burst);
          }
        }
      }
      if (changed) t.mesh.instanceMatrix.needsUpdate = true;
    }
  }

  update(dt, time) {
    for (const m of this.windMats) m.userData.u.uTime.value = time;
  }

  // Scan the volume surface and place decorations according to the area's theme rules.
  populate(rules, seed = 1) {
    const vol = this.world.vol;
    const rnd = mulberry32(seed);
    const s = vol.s;
    const [sx, sy, sz] = vol.size;
    const g = { x: 0, y: 0, z: 0 };
    const p = new THREE.Vector3(), n = new THREE.Vector3();
    const step = rules.step ?? 0.75;
    for (let x = 1; x < sx - 1; x += step) {
      for (let z = 1; z < sz - 1; z += step) {
        const px = x + (rnd() - 0.5) * step, pz = z + (rnd() - 0.5) * step;
        let prev = vol.sample(px, sy - 1, pz);
        for (let y = sy - 1 - s; y > 0.5; y -= s * 0.5) {
          const cur = vol.sample(px, y, pz);
          if ((prev > 0) !== (cur > 0)) {
            const t = prev / (prev - cur);
            const yy = y + s * 0.5 * (1 - t);
            p.set(px, yy, pz);
            vol.gradient(px, yy, pz, g, 0.3);
            n.set(g.x, g.y, g.z);
            const mat = vol.materialAt(px, yy - n.y * 0.3, pz);
            if (prev > 0) rules.floor?.(p, n, mat, rnd, this);
            else rules.ceil?.(p, n, mat, rnd, this);
          }
          prev = cur;
        }
      }
    }
    // walls: sample along x/z rays
    if (rules.wall) {
      for (let y = 1; y < sy - 1; y += step * 1.4) {
        for (let z = 1; z < sz - 1; z += step * 1.4) {
          let prev = vol.sample(0.5, y, z);
          for (let x = 0.5; x < sx - 0.5; x += s * 0.5) {
            const cur = vol.sample(x, y, z);
            if ((prev > 0) !== (cur > 0)) {
              p.set(x, y + (rnd() - 0.5) * 0.4, z);
              vol.gradient(p.x, p.y, p.z, g, 0.3);
              n.set(g.x, g.y, g.z);
              if (Math.abs(n.y) < 0.5) rules.wall(p, n, vol.materialAt(p.x - n.x * 0.3, p.y, p.z - n.z * 0.3), rnd, this);
            }
            prev = cur;
          }
        }
      }
    }
    for (const t of this.types) { t.mesh.instanceMatrix.needsUpdate = true; t.mesh.computeBoundingSphere(); }
  }

  // ---- presets ----
  setupVerdant(scene) {
    const grassMat = windMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 }), 1);
    const fernMat = windMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.85 }), 0.6);
    const vineMat = windMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 }), 0);
    this.windMats.push(grassMat, fernMat);
    const grass = this.addType('grass', grassGeometry(), grassMat, 9000, { burst: { color: new THREE.Color(0.4, 0.7, 0.25), speed: 3, size: 0.2, size1: 0.15, life: 1.4, gravity: 2.5, spin: true, alpha: 0.9 } });
    const fern = this.addType('fern', fernGeometry(), fernMat, 900, { burst: { color: new THREE.Color(0.3, 0.6, 0.2), speed: 3, size: 0.25, size1: 0.2, life: 1.4, gravity: 2.5, spin: true, alpha: 0.9 } });
    const mushMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, emissive: 0x47c9ff, emissiveIntensity: 0.0 });
    mushMat.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * smoothstep(0.5, 0.7, vColor.b) * 0.9;');
    };
    const mush = this.addType('mush', mushroomGeometry(0x6fe0ff, 0xdde8e0), mushMat, 500, { burst: { color: new THREE.Color(0.4, 0.9, 1), speed: 3, size: 0.18, size1: 0.05, life: 1, additive: true } });
    const vine = this.addType('vine', vineGeometry(), vineMat, 700, { burst: { color: new THREE.Color(0.3, 0.6, 0.2), speed: 2, size: 0.2, size1: 0.15, life: 1.6, gravity: 2, spin: true } });
    const peb = this.addType('pebble', pebbleGeometry(), new THREE.MeshStandardMaterial({ color: 0x7d746a, roughness: 0.9 }), 1500);
    this.populate({
      step: 0.55,
      floor: (p, n, mat, rnd, D) => {
        if (n.y < 0.72) return;
        const moss = this.world.noise.noise(p.x * 0.12, p.y * 0.12, p.z * 0.12);
        if ((mat === MAT.DIRT || mat === MAT.ROCK) && moss > -0.25 && rnd() < 0.85) D.add(grass, p, n, 0.5 + rnd() * 0.45, rnd() * 6, 0.6);
        else if ((mat === MAT.BRICK) && moss > 0.2 && rnd() < 0.4) D.add(grass, p, n, 0.45 + rnd() * 0.35, rnd() * 6, 0.6);
        if (mat === MAT.DIRT && moss > 0.25 && rnd() < 0.06) D.add(fern, p, n, 0.7 + rnd() * 0.6, rnd() * 6, 0.5);
        if (moss < -0.3 && rnd() < 0.05) D.add(mush, p, n, 0.7 + rnd() * 1.1, rnd() * 6, 0.7);
        if (rnd() < 0.04) D.add(peb, p, n, 0.6 + rnd() * 1.4, rnd() * 6, 1);
      },
      ceil: (p, n, mat, rnd, D) => {
        if (n.y > -0.6) return;
        if ((mat === MAT.DIRT || mat === MAT.ROCK || mat === MAT.BRICK) && rnd() < 0.12) D.add(vine, p, new THREE.Vector3(0, 1, 0), 0.8 + rnd() * 0.8, rnd() * 6, 0);
      },
    }, 11);
  }

  setupCrystal() {
    const crystCol = new THREE.Color(this.world.theme.crystal);
    const crystMat = new THREE.MeshStandardMaterial({ color: crystCol.clone().multiplyScalar(0.35), vertexColors: true, emissive: crystCol, emissiveIntensity: 0.55, roughness: 0.15, metalness: 0.2, flatShading: true });
    crystMat.onBeforeCompile = (sh) => {
      // emission only near the tips (vertex colour encodes height), body stays a dark glassy facet
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance *= vColor.r * vColor.r;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb = diffuse * (0.45 + 0.55 * vColor.r);');
    };
    const cryst = this.addType('cryst', crystalClusterGeometry(), crystMat, 900, { burst: { color: new THREE.Color(this.world.theme.crystal), speed: 6, size: 0.2, size1: 0.05, life: 0.9, additive: true, gravity: 4 } });
    const mushMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 });
    mushMat.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += vColor.rgb * smoothstep(0.5, 0.7, max(vColor.r, vColor.b)) * 1.4;');
    };
    const mush = this.addType('mush', mushroomGeometry(0xd88aff, 0xd8d0e8), mushMat, 500, { burst: { color: new THREE.Color(0.9, 0.5, 1), speed: 3, size: 0.18, size1: 0.05, life: 1, additive: true } });
    const peb = this.addType('pebble', pebbleGeometry(), new THREE.MeshStandardMaterial({ color: 0x5d5a6e, roughness: 0.8 }), 1500);
    const lichenMat = windMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9, emissive: 0x103040 }), 0.4);
    this.windMats.push(lichenMat);
    const grassG = grassGeometry();
    const col = grassG.attributes.color;
    for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * 0.6, col.getY(i) * 0.9, col.getZ(i) * 2.6 + 0.1);
    const lichen = this.addType('grass', grassG, lichenMat, 3000, { burst: { color: new THREE.Color(0.3, 0.6, 0.7), speed: 3, size: 0.2, size1: 0.1, life: 1.2, gravity: 2, spin: true } });
    this.populate({
      step: 0.7,
      floor: (p, n, mat, rnd, D) => {
        if (n.y < 0.6) return;
        const k = this.world.noise.noise(p.x * 0.1, p.y * 0.1, p.z * 0.1);
        if ((mat === MAT.CRYSTAL || (mat === MAT.ROCK && k > 0.35)) && rnd() < 0.14) D.add(cryst, p, n, 0.6 + rnd() * 0.9, rnd() * 6, 0.6);
        if (k < -0.3 && rnd() < 0.05) D.add(mush, p, n, 0.8 + rnd() * 1.2, rnd() * 6, 0.7);
        if (mat === MAT.DIRT && k > -0.1 && rnd() < 0.5) D.add(lichen, p, n, 0.5 + rnd() * 0.5, rnd() * 6, 0.6);
        if (rnd() < 0.05) D.add(peb, p, n, 0.6 + rnd() * 1.4, rnd() * 6, 1);
      },
      ceil: (p, n, mat, rnd, D) => {
        if (n.y > -0.5) return;
        if ((mat === MAT.CRYSTAL || mat === MAT.ROCK) && rnd() < 0.06) D.add(cryst, p, n, 0.7 + rnd() * 1.0, rnd() * 6, 1);
      },
      wall: (p, n, mat, rnd, D) => {
        if (mat === MAT.CRYSTAL && rnd() < 0.18) D.add(cryst, p, n, 0.5 + rnd() * 0.7, rnd() * 6, 1);
      },
    }, 21);
  }

  setupTemple() {
    const peb = this.addType('pebble', pebbleGeometry(), new THREE.MeshStandardMaterial({ color: 0x8a6a50, roughness: 0.85 }), 2000);
    const rubbleG = new THREE.DodecahedronGeometry(0.3, 0);
    rubbleG.scale(1.2, 0.6, 1);
    const rub = this.addType('rubble', rubbleG, new THREE.MeshStandardMaterial({ color: 0xb09070, roughness: 0.9 }), 600);
    const grassMat = windMaterial(new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 }), 0.7);
    this.windMats.push(grassMat);
    const gg = grassGeometry();
    const col = gg.attributes.color;
    for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * 2.2 + 0.1, col.getY(i) * 1.2, col.getZ(i));
    const dry = this.addType('grass', gg, grassMat, 2500, { burst: { color: new THREE.Color(0.7, 0.6, 0.3), speed: 3, size: 0.2, size1: 0.15, life: 1.2, gravity: 2, spin: true } });
    this.populate({
      step: 0.7,
      floor: (p, n, mat, rnd, D) => {
        if (n.y < 0.7) return;
        if (rnd() < 0.06) D.add(peb, p, n, 0.6 + rnd() * 1.4, rnd() * 6, 1);
        if (mat === MAT.BRICK && rnd() < 0.03) D.add(rub, p, n, 0.6 + rnd() * 1.2, rnd() * 6, 1);
        const k = this.world.noise.noise(p.x * 0.15, p.y * 0.15, p.z * 0.15);
        if ((mat === MAT.DIRT) && k > 0.0 && rnd() < 0.35) D.add(dry, p, n, 0.5 + rnd() * 0.5, rnd() * 6, 0.6);
      },
    }, 31);
  }
}
