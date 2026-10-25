import * as THREE from 'three';
import { S, V, part } from '../core/sdf.js';
import { Noise3 } from '../core/noise.js';
import { createToonishMaterial } from '../actors/heroModel.js';

// Mesh factories for props. Geometries are cached; materials are shared where possible.

const nz = new Noise3(99);
const cache = new Map();
const C = (h) => new THREE.Color(h);
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

const glowTex = cached('glowTex', () => {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return t;
});

export function glowSprite(color, size = 1, opacity = 0.8) {
  const m = new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
  const s = new THREE.Sprite(m);
  s.scale.setScalar(size);
  s.renderOrder = 25;
  return s;
}

export const MATS = {
  get stone() { return cached('m_stone', () => createToonishMaterial({ key: 'stone', roughness: 0.85, rim: 0x9fb7ff, rimStrength: 0.15 })); },
  get metal() { return cached('m_metal', () => createToonishMaterial({ key: 'pmetal', roughness: 0.35, metalness: 0.7, rimStrength: 0.2 })); },
};

// ---------- Sunstone: the main collectible ----------
export function makeSunstone() {
  const g = new THREE.Group();
  const geo = cached('sunGeo', () => {
    const gg = new THREE.OctahedronGeometry(0.42, 0);
    gg.scale(0.85, 1.25, 0.85);
    return gg;
  });
  const mat = cached('sunMat', () => new THREE.MeshStandardMaterial({ color: 0xffd36b, emissive: 0xffa21f, emissiveIntensity: 2.2, roughness: 0.18, metalness: 0.4, flatShading: true }));
  const core = new THREE.Mesh(geo, mat);
  core.castShadow = true;
  g.add(core);
  const ringGeo = cached('sunRing', () => new THREE.TorusGeometry(0.62, 0.035, 8, 40));
  const ringMat = cached('sunRingMat', () => new THREE.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false }));
  const r1 = new THREE.Mesh(ringGeo, ringMat); r1.rotation.x = Math.PI / 2;
  const r2 = new THREE.Mesh(ringGeo, ringMat); r2.rotation.y = Math.PI / 2; r2.scale.setScalar(0.8);
  g.add(r1, r2);
  const glow = glowSprite(0xffc04a, 2.6, 0.75);
  g.add(glow);
  g.userData = { core, r1, r2, glow };
  return g;
}

// ---------- gold nugget ----------
export function goldGeometry() {
  return cached('goldGeo', () => {
    const gg = new THREE.DodecahedronGeometry(0.14, 0);
    gg.scale(1, 0.75, 0.9);
    return gg;
  });
}
export function goldMaterial() {
  return cached('goldMat', () => new THREE.MeshStandardMaterial({ color: 0xffc23d, emissive: 0x7a4a00, emissiveIntensity: 0.9, roughness: 0.25, metalness: 0.9, flatShading: true }));
}

// ---------- heart ----------
export function makeHeart() {
  const geo = cached('heartGeo', () => part([
    S.sphere(V(-0.12, 0.08, 0), 0.16), S.sphere(V(0.12, 0.08, 0), 0.16),
    S.custom((p) => {
      // inverted cone-ish bottom
      const y = p.y + 0.16; const r = Math.max(0, 0.27 - Math.abs(p.y - 0.02) * 0.0) ;
      return Math.max(Math.hypot(p.x * (1 + (0.1 - p.y) * 2.2), p.z * 1.6) - 0.24 * Math.max(0, (p.y + 0.28) / 0.38), -y - 0.12);
    }, V(-0.3, -0.3, -0.2), V(0.3, 0.2, 0.2)),
  ], () => C(0xff4a6a), { cell: 0.015, k: 0.08 }));
  const mat = cached('heartMat', () => new THREE.MeshStandardMaterial({ color: 0xff5a7a, emissive: 0xff2050, emissiveIntensity: 0.8, roughness: 0.3, vertexColors: true }));
  const g = new THREE.Group();
  const m = new THREE.Mesh(geo, mat); g.add(m);
  g.add(glowSprite(0xff6080, 1.4, 0.5));
  return g;
}

// ---------- Rune stone (switch) ----------
export function makeRuneStone(color = 0x5dffd2) {
  const g = new THREE.Group();
  const geo = cached('runeGeo', () => part([
    S.box(V(0, 0.95, 0), V(0.42, 0.95, 0.3), 0.12),
    S.box(V(0, 0.15, 0), V(0.6, 0.15, 0.45), 0.06),
    S.sphere(V(0, 1.55, 0.3), 0.18, { sub: true, k: 0.04 }),
  ], (p, n) => C(0x4a4552).multiplyScalar(0.8 + 0.35 * (nz.noise(p.x * 6, p.y * 6, p.z * 6) * 0.5 + 0.5)), { cell: 0.035, k: 0.05 }));
  const body = new THREE.Mesh(geo, MATS.stone);
  body.castShadow = true;
  g.add(body);
  const glyphMat = new THREE.MeshStandardMaterial({ color: 0x202020, emissive: color, emissiveIntensity: 0.15, roughness: 0.4 });
  const gem = new THREE.Mesh(cached('runeGem', () => new THREE.IcosahedronGeometry(0.16, 0)), glyphMat);
  gem.position.set(0, 1.55, 0.27);
  g.add(gem);
  // carved glyph strokes
  const strokes = new THREE.Group();
  const sg = cached('runeStroke', () => new THREE.BoxGeometry(0.06, 0.32, 0.02));
  for (let i = 0; i < 4; i++) {
    const s = new THREE.Mesh(sg, glyphMat);
    s.position.set(-0.18 + i * 0.12, 0.85 + (i % 2) * 0.12, 0.3);
    s.rotation.z = (i - 1.5) * 0.4;
    strokes.add(s);
  }
  g.add(strokes);
  const glow = glowSprite(color, 2.2, 0.0);
  glow.position.copy(gem.position);
  g.add(glow);
  g.userData = { gem, glyphMat, glow };
  return g;
}

// ---------- Gate (two sliding ancient doors) ----------
export function makeGate(w, h, color = 0x5dffd2) {
  const g = new THREE.Group();
  const mat = MATS.stone;
  const half = w / 2;
  const doorGeo = part([
    S.box(V(0, h / 2, 0), V(half / 2, h / 2, 0.35), 0.08),
  ], (p) => {
    const ring = Math.abs(Math.hypot(p.x * 1.2, (p.y - h * 0.55)) - 0.9) < 0.07 && p.z > 0.2;
    const c = C(0x3a3542).multiplyScalar(0.8 + 0.3 * (nz.noise(p.x * 3, p.y * 3, p.z * 3) * 0.5 + 0.5));
    return ring ? C(0x8a7a5a) : c;
  }, { cell: 0.06 });
  const L = new THREE.Mesh(doorGeo, mat); L.position.x = -half / 2; L.castShadow = true;
  const R = new THREE.Mesh(doorGeo, mat); R.position.x = half / 2; R.castShadow = true;
  g.add(L, R);
  const emblemMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: color, emissiveIntensity: 0.6 });
  const lights = [];
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(cached('gateDot', () => new THREE.SphereGeometry(0.16, 12, 8)), emblemMat.clone());
    s.position.set((i - 1) * 0.55, h * 0.78, 0.38);
    s.material.emissiveIntensity = 0.05;
    g.add(s); lights.push(s);
  }
  g.userData = { L, R, lights, half };
  return g;
}

// ---------- Relic pedestal ----------
export function makePedestal() {
  return new THREE.Mesh(cached('pedGeo', () => part([
    S.box(V(0, 0.15, 0), V(0.9, 0.15, 0.9), 0.05),
    S.box(V(0, 0.65, 0), V(0.55, 0.4, 0.55), 0.06),
    S.box(V(0, 1.1, 0), V(0.75, 0.08, 0.75), 0.04),
  ], (p) => (p.y > 1.0 ? C(0xc8a24e) : C(0x4b4553).multiplyScalar(0.8 + 0.3 * (nz.noise(p.x * 5, p.y * 5, p.z * 5) * 0.5 + 0.5))), { cell: 0.04 })), MATS.stone);
}

export function makeRelicItem(kind) {
  const g = new THREE.Group();
  if (kind === 'gauntlet') {
    const geo = cached('relicG', () => part([
      S.capsule(V(0, 0, 0), V(0, -0.24, 0.01), 0.14, 0.2),
      S.torus(V(0, -0.22, 0.01), 0.2, 0.05),
      S.box(V(0, -0.45, 0.03), V(0.22, 0.18, 0.2), 0.1),
      S.sphere(V(0.11, -0.58, 0.14), 0.08, { k: 0.03 }), S.sphere(V(0, -0.6, 0.15), 0.08, { k: 0.03 }), S.sphere(V(-0.11, -0.58, 0.14), 0.08, { k: 0.03 }),
    ], (p) => (p.y > -0.3 && p.y < -0.14 ? C(0x7ef3ff) : C(0xd9a63a)), { cell: 0.02 }));
    const m = new THREE.Mesh(geo, cached('relicMat', () => new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.8, roughness: 0.25, emissive: 0x3a6070, emissiveIntensity: 0.6 })));
    m.rotation.z = Math.PI; m.position.y = -0.3;
    g.add(m);
  } else {
    // quake idol: a stone fist emblem with a glowing core
    const geo = cached('relicQ', () => part([
      S.sphere(V(0, 0, 0), 0.32),
      S.torus(V(0, 0, 0), 0.42, 0.06),
      S.capsule(V(0, -0.45, 0), V(0, 0.45, 0), 0.08),
    ], (p) => (Math.abs(p.y) > 0.3 ? C(0xd9a63a) : C(0x9fe8ff)), { cell: 0.02 }));
    const m = new THREE.Mesh(geo, cached('relicMatQ', () => new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.6, roughness: 0.25, emissive: 0x2a8fb0, emissiveIntensity: 0.9 })));
    g.add(m);
  }
  g.add(glowSprite(0x9ff4ff, 3, 0.6));
  return g;
}

// ---------- Checkpoint shrine (sun lantern) ----------
export function makeShrine() {
  const g = new THREE.Group();
  const base = new THREE.Mesh(cached('shrineGeo', () => part([
    S.box(V(0, 0.12, 0), V(0.7, 0.12, 0.7), 0.05),
    S.capsule(V(0, 0.2, 0), V(0, 1.6, 0), 0.16, 0.12),
    S.torus(V(0, 1.75, 0), 0.32, 0.06),
    S.box(V(0, 2.25, 0), V(0.42, 0.06, 0.42), 0.04),
    S.capsule(V(0.3, 1.75, 0.3), V(0.3, 2.22, 0.3), 0.04), S.capsule(V(-0.3, 1.75, 0.3), V(-0.3, 2.22, 0.3), 0.04),
    S.capsule(V(0.3, 1.75, -0.3), V(0.3, 2.22, -0.3), 0.04), S.capsule(V(-0.3, 1.75, -0.3), V(-0.3, 2.22, -0.3), 0.04),
    S.custom((p) => Math.max(Math.abs(p.x) + Math.abs(p.z) + (p.y - 2.3) * 0.9 - 0.42, 2.3 - p.y), V(-0.5, 2.3, -0.5), V(0.5, 2.8, 0.5)),
  ], (p) => (p.y > 1.6 ? C(0xc8a24e) : C(0x5b5361).multiplyScalar(0.8 + 0.3 * (nz.noise(p.x * 5, p.y * 5, p.z * 5) * 0.5 + 0.5))), { cell: 0.035, k: 0.04 })), MATS.metal);
  base.castShadow = true;
  g.add(base);
  const flameMat = new THREE.MeshBasicMaterial({ color: 0x8a6a40 });
  const flame = new THREE.Mesh(cached('shrineFlame', () => new THREE.IcosahedronGeometry(0.2, 1)), flameMat);
  flame.position.y = 2.0;
  g.add(flame);
  const glow = glowSprite(0xffb050, 2.5, 0.0);
  glow.position.y = 2.0;
  g.add(glow);
  g.userData = { flame, flameMat, glow };
  return g;
}

// ---------- Urn (breakable pot) ----------
export function makeUrn(seed = 0) {
  const geo = cached('urnGeo', () => part([
    S.ellipsoid(V(0, 0.42, 0), V(0.36, 0.4, 0.36)),
    S.capsule(V(0, 0.7, 0), V(0, 0.95, 0), 0.17, 0.2),
    S.torus(V(0, 0.95, 0), 0.19, 0.045),
    S.capsule(V(0, 0.95, 0), V(0, 1.1, 0), 0.12, { sub: true }),
    S.torus(V(0.36, 0.62, 0), 0.08, 0.025, { k: 0.02 }),
  ], (p) => {
    const band = Math.abs(p.y - 0.5) < 0.05 || Math.abs(p.y - 0.3) < 0.025;
    const c = C(0xb7653a).multiplyScalar(0.85 + 0.25 * (nz.noise(p.x * 8, p.y * 8, p.z * 8) * 0.5 + 0.5));
    return band ? C(0xe6c27a) : c;
  }, { cell: 0.025 }));
  const m = new THREE.Mesh(geo, cached('urnMat', () => createToonishMaterial({ key: 'urn', roughness: 0.7, rimStrength: 0.25 })));
  m.castShadow = true;
  m.rotation.y = seed * 2.4;
  m.scale.setScalar(0.9 + (seed % 3) * 0.1);
  return m;
}

// ---------- Brazier ----------
export function makeBrazier() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(cached('brazGeo', () => part([
    S.capsule(V(0, 0, 0), V(0, 0.9, 0), 0.1, 0.08),
    S.box(V(0, 0.08, 0), V(0.35, 0.08, 0.35), 0.04),
    S.custom((p) => {
      const r = Math.hypot(p.x, p.z);
      const bowl = Math.max(r - (0.32 + (p.y - 0.9) * 0.6), Math.abs(p.y - 1.05) - 0.17);
      return bowl;
    }, V(-0.5, 0.85, -0.5), V(0.5, 1.25, 0.5)),
    S.sphere(V(0, 1.3, 0), 0.32, { sub: true, k: 0.03 }),
  ], (p) => (p.y > 0.85 ? C(0x8a6a3a) : C(0x3d3436)), { cell: 0.03 })), MATS.metal);
  m.castShadow = true;
  g.add(m);
  const glow = glowSprite(0xff9a40, 2.2, 0.7);
  glow.position.y = 1.35;
  g.add(glow);
  g.userData = { glow };
  return g;
}

// ---------- signpost ----------
export function makeSign() {
  return new THREE.Mesh(cached('signGeo', () => part([
    S.capsule(V(0, 0, 0), V(0, 1.2, 0), 0.06),
    S.box(V(0, 1.2, 0.02), V(0.5, 0.28, 0.04), 0.03),
  ], (p) => (p.y > 0.9 ? C(0x9a6b3c) : C(0x5a3c22)).multiplyScalar(0.85 + 0.2 * (nz.noise(p.x * 20, p.y * 3, p.z * 20) * 0.5 + 0.5)), { cell: 0.025 })), MATS.stone);
}

// ---------- god ray cone ----------
export function makeGodRay(r, h, color = 0xfff1c4, opacity = 0.16) {
  const geo = new THREE.CylinderGeometry(r * 0.7, r * 1.35, h, 24, 1, true);
  geo.translate(0, -h / 2, 0);
  const mat = new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity }, uTime: { value: 0 }, uH: { value: h } },
    vertexShader: `varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main(){ vP = position; vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uOpacity; uniform float uTime; uniform float uH; varying vec3 vP; varying vec3 vN; varying vec3 vV;
      void main(){
        float edge = pow(abs(dot(normalize(vN), vV)), 1.5);
        float fall = smoothstep(0.0, 0.25, -vP.y / uH) * (1.0 - smoothstep(0.55, 1.0, -vP.y / uH));
        float a = atan(vP.z, vP.x);
        float streak = 0.65 + 0.35 * sin(a * 7.0 + uTime * 0.4) * sin(a * 3.0 - uTime * 0.25 + vP.y * 0.2);
        gl_FragColor = vec4(uColor, uOpacity * edge * fall * streak);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
  const m = new THREE.Mesh(geo, mat);
  m.renderOrder = 15;
  return m;
}

// ---------- boulder ----------
export function makeBoulder(r) {
  const geo = part([
    S.custom((p) => Math.hypot(p.x, p.y, p.z) - r + nz.fbm(p.x * 0.8, p.y * 0.8, p.z * 0.8, 3) * r * 0.25, V(-r * 1.3, -r * 1.3, -r * 1.3), V(r * 1.3, r * 1.3, r * 1.3)),
  ], (p) => {
    const vein = Math.abs(nz.noise(p.x * 1.2, p.y * 1.2, p.z * 1.2)) < 0.07;
    return vein ? C(0x7ff0ff) : C(0x6a6270).multiplyScalar(0.75 + 0.4 * (nz.noise(p.x * 3, p.y * 3, p.z * 3) * 0.5 + 0.5));
  }, { cell: r / 14 });
  const m = new THREE.Mesh(geo, MATS.stone);
  m.castShadow = true;
  return m;
}

// ---------- Beacon crystal (area 2 switch) ----------
export function makeBeacon(color = 0x6ff0ff) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(cached('beaconBase', () => part([
    S.box(V(0, 0.25, 0), V(0.9, 0.25, 0.9), 0.15),
    S.torus(V(0, 0.55, 0), 0.6, 0.08),
  ], (p) => C(0x4b4553), { cell: 0.04 })), MATS.stone);
  g.add(base);
  const mat = new THREE.MeshStandardMaterial({ color: 0x3a4a5a, emissive: color, emissiveIntensity: 0.05, roughness: 0.1, metalness: 0.2, flatShading: true, transparent: true, opacity: 0.92 });
  const cg = cached('beaconGeo', () => { const c = new THREE.OctahedronGeometry(0.7, 0); c.scale(0.7, 1.8, 0.7); return c; });
  const c = new THREE.Mesh(cg, mat);
  c.position.y = 1.8;
  c.castShadow = true;
  g.add(c);
  const glow = glowSprite(color, 4, 0.0);
  glow.position.y = 1.8; g.add(glow);
  g.userData = { crystal: c, mat, glow };
  return g;
}

// ---------- cage (unbreakable by punches, smashed by boulder) ----------
export function makeCage(r, h) {
  const g = new THREE.Group();
  const bars = cached('cageBars' + r + h, () => {
    const shapes = [];
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      shapes.push(S.capsule(V(Math.cos(a) * r, 0, Math.sin(a) * r), V(Math.cos(a) * r * 0.6, h, Math.sin(a) * r * 0.6), 0.09, 0.07));
    }
    shapes.push(S.torus(V(0, 0.15, 0), r, 0.12));
    shapes.push(S.torus(V(0, h * 0.55, 0), r * 0.8, 0.08));
    shapes.push(S.sphere(V(0, h, 0), r * 0.62));
    return part(shapes, (p) => (p.y > h * 0.9 ? C(0x5d5868) : C(0x8d7a50)), { cell: 0.05, k: 0.05 });
  });
  const m = new THREE.Mesh(bars, MATS.metal);
  m.castShadow = true;
  g.add(m);
  return g;
}
