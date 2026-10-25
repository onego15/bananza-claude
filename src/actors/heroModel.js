import * as THREE from 'three';
import { S, V, part } from '../core/sdf.js';
import { Noise3 } from '../core/noise.js';

// GORO — the hero. A stocky, big-fisted burrower with a teal scarf and miner goggles.
// Every body part is sculpted from smooth-blended SDF primitives and meshed at load.

const nz = new Noise3(7);
const C = (hex) => new THREE.Color(hex);
const FUR = C(0xb8622b), FUR_DARK = C(0x7a3a19), CREAM = C(0xf2d3a2), SKIN = C(0x5a3a2c),
  NOSE = C(0x2a1712), SCARF = C(0x1fb5a8), SCARF_D = C(0x0f7f7a), GOLD = C(0xe8b347), LEATHER = C(0x6b4a33),
  STRAP = C(0x3d2b22), MOUTH = C(0x4a1a18);

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function furColor(p, base = FUR) {
  const n = nz.noise(p.x * 18, p.y * 18, p.z * 18) * 0.5 + 0.5;
  const streak = nz.noise(p.x * 4, p.y * 30, p.z * 4) * 0.5 + 0.5;
  const c = base.clone().lerp(FUR_DARK, 0.18 * n + 0.12 * streak);
  return c;
}

export function createToonishMaterial(opts = {}) {
  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: opts.roughness ?? 0.78,
    metalness: opts.metalness ?? 0.0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
  });
  const rim = { value: new THREE.Color(opts.rim ?? 0xffd9a0) };
  const rimStr = { value: opts.rimStrength ?? 0.35 };
  const flash = { value: 0 };
  mat.userData.flash = flash;
  mat.userData.rimStr = rimStr;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uRim = rim; sh.uniforms.uRimStr = rimStr; sh.uniforms.uFlash = flash;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uRim; uniform float uRimStr; uniform float uFlash;')
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        {
          vec3 vdir = normalize(vViewPosition);
          float fr = pow(1.0 - clamp(dot(normal, vdir), 0.0, 1.0), 2.6);
          totalEmissiveRadiance += uRim * fr * uRimStr;
          // soft wrap/ambient lift so characters read in dark caves
          totalEmissiveRadiance += diffuseColor.rgb * 0.035;
          totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(1.0, 0.95, 0.9) * 1.6, uFlash);
        }`
      );
  };
  mat.customProgramCacheKey = () => 'toonish-' + (opts.key || 'a');
  return mat;
}

export function buildHeroModel() {
  const mat = createToonishMaterial({ key: 'hero' });
  const metalMat = createToonishMaterial({ key: 'heroMetal', roughness: 0.35, metalness: 0.65, rimStrength: 0.4 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.15, emissive: 0x222222 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x1a0f0a, roughness: 0.1 });
  const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const lensMat = new THREE.MeshStandardMaterial({ color: 0x9ff6ff, emissive: 0x47d8ff, emissiveIntensity: 1.6, roughness: 0.1, metalness: 0.3 });

  const root = new THREE.Group();
  const J = {};
  const joint = (name, parent, x, y, z) => {
    const g = new THREE.Group(); g.name = name; g.position.set(x, y, z); parent.add(g); J[name] = g; return g;
  };
  const mesh = (geo, m, parent) => {
    const me = new THREE.Mesh(geo, m); me.castShadow = true; me.receiveShadow = false; parent.add(me); return me;
  };

  // --- hierarchy ---
  const hips = joint('hips', root, 0, 0.5, 0);
  const torso = joint('torso', hips, 0, 0.05, 0);
  const neck = joint('neck', torso, 0, 0.74, 0.02);
  const head = joint('head', neck, 0, 0.02, 0);
  const shL = joint('shoulderL', torso, 0.44, 0.58, 0);
  const shR = joint('shoulderR', torso, -0.44, 0.58, 0);
  const elL = joint('elbowL', shL, 0, -0.3, 0);
  const elR = joint('elbowR', shR, 0, -0.3, 0);
  const hipL = joint('hipL', hips, 0.19, -0.02, 0);
  const hipR = joint('hipR', hips, -0.19, -0.02, 0);
  const knL = joint('kneeL', hipL, 0, -0.22, 0);
  const knR = joint('kneeR', hipR, 0, -0.22, 0);

  // --- pelvis / shorts ---
  mesh(part([
    S.ellipsoid(V(0, 0.02, 0), V(0.33, 0.2, 0.26)),
    S.capsule(V(-0.2, -0.05, 0), V(0.2, -0.05, 0), 0.15),
    S.torus(V(0, 0.1, 0), 0.3, 0.045, { k: 0.02 }),
  ], (p, n) => {
    if (p.y > 0.06 && p.y < 0.15) return STRAP.clone().lerp(GOLD, Math.abs(p.x) < 0.07 && p.z > 0.2 ? 1 : 0);
    return LEATHER.clone().multiplyScalar(0.85 + 0.15 * (nz.noise(p.x * 9, p.y * 9, p.z * 9) * 0.5 + 0.5));
  }), mat, hips);

  // --- torso: barrel chest, belly, shoulder masses, scarf ---
  mesh(part([
    S.ellipsoid(V(0, 0.42, -0.02), V(0.44, 0.38, 0.34)),
    S.ellipsoid(V(0, 0.2, 0.06), V(0.34, 0.26, 0.28)),
    S.sphere(V(0.36, 0.56, -0.03), 0.21),
    S.sphere(V(-0.36, 0.56, -0.03), 0.21),
    S.ellipsoid(V(0, 0.55, -0.16), V(0.36, 0.25, 0.22)), // back hump
    S.capsule(V(0, 0.6, 0.0), V(0, 0.78, 0.02), 0.16),
    // chest fur tuft
    S.ellipsoid(V(0, 0.6, 0.22), V(0.13, 0.1, 0.08), { k: 0.05 }),
  ], (p, n) => {
    const r = Math.hypot(p.x * 1.15, (p.y - 0.33) * 0.85) + nz.noise(p.x * 14, p.y * 14, p.z * 14) * 0.025;
    const t = (1 - smooth(0.27, 0.31, r)) * smooth(-0.05, 0.12, p.z);
    return furColor(p).lerp(CREAM.clone().multiplyScalar(0.92 + 0.08 * nz.noise(p.x * 20, p.y * 20, p.z * 20)), t);
  }, { k: 0.1 }), mat, torso);

  // scarf ring + knot + tails
  mesh(part([
    S.torus(V(0, 0.73, 0.01), 0.21, 0.075, { k: 0.02 }),
    S.ellipsoid(V(0.1, 0.7, 0.21), V(0.09, 0.08, 0.06)),
  ], (p) => SCARF.clone().lerp(SCARF_D, (Math.sin(p.x * 40 + p.y * 30) * 0.5 + 0.5) * 0.35), { k: 0.04, cell: 0.02 }), mat, torso);
  const scarfTail = joint('scarfTail', torso, 0.1, 0.7, 0.22);
  const tailGeo = part([
    S.box(V(0, -0.12, 0.0), V(0.07, 0.13, 0.025), 0.02),
  ], () => SCARF, { cell: 0.02 });
  const tail1 = mesh(tailGeo, mat, scarfTail);
  const scarfTail2 = joint('scarfTail2', scarfTail, 0, -0.25, 0);
  mesh(part([
    S.box(V(0, -0.1, 0.0), V(0.065, 0.11, 0.022), 0.02),
    S.box(V(0, -0.2, 0.0), V(0.07, 0.03, 0.022), 0.01),
  ], (p) => (p.y < -0.17 ? GOLD : SCARF), { cell: 0.02 }), mat, scarfTail2);
  void tail1;

  // --- head ---
  mesh(part([
    S.sphere(V(0, 0.27, 0), 0.3),
    S.ellipsoid(V(0, 0.2, 0.08), V(0.31, 0.24, 0.26)), // cheeks
    S.ellipsoid(V(0, 0.15, 0.23), V(0.2, 0.13, 0.15)), // muzzle
    S.ellipsoid(V(0, 0.37, 0.17), V(0.27, 0.075, 0.12)), // brow
    S.sphere(V(0.27, 0.43, -0.04), 0.085), // ears
    S.sphere(V(-0.27, 0.43, -0.04), 0.085),
    S.capsule(V(0, 0.52, 0.02), V(0.05, 0.66, 0.1), 0.06, 0.02), // hair tufts
    S.capsule(V(-0.06, 0.52, 0.0), V(-0.12, 0.63, 0.06), 0.05, 0.02),
    S.capsule(V(0.08, 0.52, -0.02), V(0.16, 0.6, 0.02), 0.045, 0.015),
    // eye sockets
    S.sphere(V(0.115, 0.29, 0.25), 0.085, { sub: true, k: 0.03 }),
    S.sphere(V(-0.115, 0.29, 0.25), 0.085, { sub: true, k: 0.03 }),
    // mouth groove
    S.ellipsoid(V(0, 0.085, 0.33), V(0.11, 0.025, 0.06), { sub: true, k: 0.02 }),
  ], (p, n) => {
    if (p.z > 0.12 && p.y < 0.24 && Math.hypot(p.x, (p.y - 0.15) * 1.4) < 0.21) {
      if (p.y < 0.1 && p.z > 0.28 && Math.abs(p.x) < 0.1) return MOUTH;
      return CREAM.clone();
    }
    if (Math.abs(p.x) > 0.22 && p.y > 0.36 && n.z > 0.3) return CREAM.clone().multiplyScalar(0.85); // inner ear
    if (p.y > 0.5) return FUR_DARK.clone();
    return furColor(p);
  }, { k: 0.07, cell: 0.018 }), mat, head);
  // nose
  mesh(part([S.ellipsoid(V(0, 0.21, 0.37), V(0.07, 0.05, 0.05))], () => NOSE, { cell: 0.012 }), mat, head);

  // eyes
  const eyeGeo = new THREE.SphereGeometry(0.07, 20, 14);
  const pupilGeo = new THREE.SphereGeometry(0.038, 14, 10);
  const shineGeo = new THREE.SphereGeometry(0.012, 8, 6);
  const eyes = [];
  for (const sx of [1, -1]) {
    const eye = new THREE.Group();
    eye.position.set(0.112 * sx, 0.29, 0.232);
    head.add(eye);
    const w = new THREE.Mesh(eyeGeo, eyeMat); w.scale.set(1, 1.15, 0.8); eye.add(w);
    const pu = new THREE.Mesh(pupilGeo, pupilMat); pu.position.set(0, 0, 0.042); pu.scale.set(1, 1.25, 0.6); eye.add(pu);
    const sh = new THREE.Mesh(shineGeo, shineMat); sh.position.set(0.015 * sx, 0.025, 0.066); eye.add(sh);
    eyes.push(eye);
  }

  // goggles on forehead
  const gog = new THREE.Group();
  gog.position.set(0, 0.45, 0.06); gog.rotation.x = -0.35; head.add(gog);
  mesh(part([
    S.torus(V(0, 0, -0.06), 0.31, 0.03, { k: 0.01 }),
  ], () => STRAP, { cell: 0.016 }), mat, gog).scale.set(1, 1, 0.95);
  for (const sx of [1, -1]) {
    const frame = mesh(part([S.torus(V(0, 0, 0), 0.07, 0.025)], () => GOLD, { cell: 0.012 }), metalMat, gog);
    frame.rotation.x = Math.PI / 2; frame.position.set(0.1 * sx, 0.02, 0.22);
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.066, 20), lensMat);
    lens.position.set(0.1 * sx, 0.02, 0.235); gog.add(lens);
  }

  // --- arms ---
  const upperArm = part([
    S.capsule(V(0, 0, 0), V(0, -0.3, 0), 0.13, 0.115),
    S.sphere(V(0, -0.02, 0), 0.15),
  ], (p) => furColor(p), { cell: 0.02 });
  const fist = (side) => part([
    S.capsule(V(0, 0, 0), V(0, -0.24, 0.01), 0.125, 0.17), // forearm (popeye)
    S.torus(V(0, -0.24, 0.01), 0.17, 0.04, { k: 0.02 }), // gauntlet band
    S.box(V(0, -0.45, 0.03), V(0.19, 0.17, 0.18), 0.1), // fist
    S.sphere(V(0.1, -0.56, 0.12), 0.07, { k: 0.03 }), // knuckles
    S.sphere(V(0.0, -0.575, 0.13), 0.072, { k: 0.03 }),
    S.sphere(V(-0.1, -0.56, 0.12), 0.07, { k: 0.03 }),
    S.capsule(V(0.17 * side, -0.38, 0.12), V(0.12 * side, -0.48, 0.2), 0.055, 0.05, { k: 0.03 }), // thumb
  ], (p) => {
    if (p.y > -0.31 && p.y < -0.18) return GOLD.clone().multiplyScalar(0.9 + 0.2 * (Math.sin(Math.atan2(p.z, p.x) * 8) * 0.5 + 0.5));
    if (p.y < -0.31) {
      // stone-plated knuckle wraps
      const plate = p.y < -0.5 && p.z > 0.05;
      return plate ? C(0xcfc6b4).multiplyScalar(0.85 + 0.2 * nz.noise(p.x * 25, p.y * 25, p.z * 25)) : SKIN.clone().lerp(LEATHER, 0.5);
    }
    return furColor(p);
  }, { cell: 0.02, k: 0.05 });
  mesh(upperArm, mat, shL); mesh(upperArm, mat, shR);
  const fistL = mesh(fist(1), mat, elL);
  const fistR = mesh(fist(-1), mat, elR);

  // --- legs ---
  const thigh = part([
    S.capsule(V(0, 0, 0), V(0, -0.22, 0.0), 0.15, 0.13),
  ], (p) => LEATHER.clone().multiplyScalar(0.9), { cell: 0.02 });
  const shin = part([
    S.capsule(V(0, 0, 0), V(0, -0.17, 0.0), 0.12, 0.11),
    S.ellipsoid(V(0, -0.22, 0.08), V(0.14, 0.085, 0.2)),
    S.sphere(V(0.06, -0.24, 0.24), 0.05, { k: 0.03 }),
    S.sphere(V(-0.06, -0.24, 0.24), 0.05, { k: 0.03 }),
  ], (p) => (p.y < -0.15 ? SKIN.clone().multiplyScalar(0.9) : furColor(p)), { cell: 0.02 });
  mesh(thigh, mat, hipL); mesh(thigh, mat, hipR);
  mesh(shin, mat, knL); mesh(shin, mat, knR);

  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { root, J, eyes, mats: [mat, metalMat], fistL, fistR, lensMat };
}
