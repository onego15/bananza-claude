import * as THREE from 'three';

// Tiny signed-distance modelling kit used to sculpt organic character/prop meshes in code.
// Shapes are blended with smooth unions and meshed with Surface Nets.

export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export function sdSphere(p, c, r) {
  return Math.hypot(p.x - c.x, p.y - c.y, p.z - c.z) - r;
}
export function sdEllipsoid(p, c, r) {
  const x = (p.x - c.x) / r.x, y = (p.y - c.y) / r.y, z = (p.z - c.z) / r.z;
  const k0 = Math.hypot(x, y, z);
  const k1 = Math.hypot(x / r.x, y / r.y, z / r.z);
  return k1 === 0 ? -Math.min(r.x, r.y, r.z) : (k0 * (k0 - 1)) / k1;
}
// capsule with radius lerped from ra to rb ("round cone" approximation)
export function sdCapsule(p, a, b, ra, rb = ra) {
  const bax = b.x - a.x, bay = b.y - a.y, baz = b.z - a.z;
  const pax = p.x - a.x, pay = p.y - a.y, paz = p.z - a.z;
  const h = Math.max(0, Math.min(1, (pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz)));
  return Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - (ra + (rb - ra) * h);
}
export function sdRoundBox(p, c, b, r) {
  const qx = Math.abs(p.x - c.x) - b.x + r, qy = Math.abs(p.y - c.y) - b.y + r, qz = Math.abs(p.z - c.z) - b.z + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, Math.max(qy, qz)), 0) - r;
}
export function sdTorus(p, c, R, r) {
  const x = p.x - c.x, y = p.y - c.y, z = p.z - c.z;
  const q = Math.hypot(x, z) - R;
  return Math.hypot(q, y) - r;
}
export function smin(a, b, k) {
  if (k <= 0) return Math.min(a, b);
  const h = Math.max(0, Math.min(1, 0.5 + (0.5 * (b - a)) / k));
  return b + (a - b) * h - k * h * (1 - h);
}
export function smax(a, b, k) { return -smin(-a, -b, k); }

const CORNERS = [
  [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
  [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1],
];
const EDGES = [
  [0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7],
];

/**
 * Mesh an SDF. fn(p:Vector3) -> distance. colorFn(p, n) -> THREE.Color (optional).
 * Returns BufferGeometry with position/normal/color.
 */
export function sdfGeometry(fn, colorFn, bmin, bmax, cell = 0.03) {
  const nx = Math.ceil((bmax.x - bmin.x) / cell) + 1;
  const ny = Math.ceil((bmax.y - bmin.y) / cell) + 1;
  const nz = Math.ceil((bmax.z - bmin.z) / cell) + 1;
  const F = new Float32Array(nx * ny * nz);
  const p = new THREE.Vector3();
  let n = 0;
  for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++, n++) {
    p.set(bmin.x + i * cell, bmin.y + j * cell, bmin.z + k * cell);
    F[n] = fn(p);
  }
  const id = (i, j, k) => i + j * nx + k * nx * ny;
  const vidx = new Int32Array(nx * ny * nz).fill(-1);
  const pos = [], nrm = [], col = [], idx = [];
  const cf = new Float32Array(8);
  const e = cell * 0.5;
  const q = new THREE.Vector3(), nn = new THREE.Vector3();
  for (let k = 0; k < nz - 1; k++) for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    let mask = 0;
    for (let c = 0; c < 8; c++) {
      const o = CORNERS[c];
      cf[c] = F[id(i + o[0], j + o[1], k + o[2])];
      if (cf[c] < 0) mask |= 1 << c;
    }
    if (mask === 0 || mask === 255) continue;
    let px = 0, py = 0, pz = 0, cnt = 0;
    for (const [a, b] of EDGES) {
      if (((mask >> a) & 1) === ((mask >> b) & 1)) continue;
      const t = cf[a] / (cf[a] - cf[b]);
      const A = CORNERS[a], B = CORNERS[b];
      px += A[0] + (B[0] - A[0]) * t; py += A[1] + (B[1] - A[1]) * t; pz += A[2] + (B[2] - A[2]) * t; cnt++;
    }
    q.set(bmin.x + (i + px / cnt) * cell, bmin.y + (j + py / cnt) * cell, bmin.z + (k + pz / cnt) * cell);
    // project vertex onto the surface with one Newton step for crisper shapes
    const d0 = fn(q);
    nn.set(
      fn(p.set(q.x + e, q.y, q.z)) - fn(p.set(q.x - e, q.y, q.z)),
      fn(p.set(q.x, q.y + e, q.z)) - fn(p.set(q.x, q.y - e, q.z)),
      fn(p.set(q.x, q.y, q.z + e)) - fn(p.set(q.x, q.y, q.z - e))
    ).normalize();
    q.addScaledVector(nn, -d0 * 0.8);
    vidx[id(i, j, k)] = pos.length / 3;
    pos.push(q.x, q.y, q.z);
    nrm.push(nn.x, nn.y, nn.z);
    const c = colorFn ? colorFn(q, nn) : new THREE.Color(1, 1, 1);
    col.push(c.r, c.g, c.b);
  }
  const quad = (a, b, c, d, flip) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) idx.push(a, d, c, a, c, b);
    else idx.push(a, b, c, a, c, d);
  };
  for (let k = 1; k < nz - 1; k++) for (let j = 1; j < ny - 1; j++) for (let i = 1; i < nx - 1; i++) {
    const s = F[id(i, j, k)] < 0;
    if ((F[id(i + 1, j, k)] < 0) !== s)
      quad(vidx[id(i, j - 1, k - 1)], vidx[id(i, j, k - 1)], vidx[id(i, j, k)], vidx[id(i, j - 1, k)], !s);
    if ((F[id(i, j + 1, k)] < 0) !== s)
      quad(vidx[id(i - 1, j, k - 1)], vidx[id(i - 1, j, k)], vidx[id(i, j, k)], vidx[id(i, j, k - 1)], !s);
    if ((F[id(i, j, k + 1)] < 0) !== s)
      quad(vidx[id(i - 1, j - 1, k)], vidx[id(i, j - 1, k)], vidx[id(i, j, k)], vidx[id(i - 1, j, k)], !s);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeBoundingSphere();
  return geo;
}

// Convenience: a model part built from a list of shapes in local space.
export function part(shapes, colorFn, opts = {}) {
  const { k = 0.06, cell = 0.025, pad = 0.12 } = opts;
  const fn = (p) => {
    let d = 1e9;
    for (const s of shapes) {
      const v = s.d(p);
      if (s.sub) d = smax(d, -v, s.k ?? k * 0.5);
      else if (s.inter) d = smax(d, v, s.k ?? 0.02);
      else d = smin(d, v, s.k ?? k);
    }
    return d;
  };
  const bmin = V(1e9, 1e9, 1e9), bmax = V(-1e9, -1e9, -1e9);
  for (const s of shapes) {
    if (s.sub || s.inter) continue;
    bmin.min(s.bmin); bmax.max(s.bmax);
  }
  bmin.subScalar(pad); bmax.addScalar(pad);
  return sdfGeometry(fn, colorFn, bmin, bmax, cell);
}

// Shape helpers carrying their own bounds for part()
export const S = {
  sphere: (c, r, extra = {}) => ({ d: (p) => sdSphere(p, c, r), bmin: c.clone().subScalar(r), bmax: c.clone().addScalar(r), ...extra }),
  ellipsoid: (c, r, extra = {}) => ({ d: (p) => sdEllipsoid(p, c, r), bmin: c.clone().sub(r), bmax: c.clone().add(r), ...extra }),
  capsule: (a, b, ra, rb = ra, extra = {}) => {
    const R = Math.max(ra, rb);
    return { d: (p) => sdCapsule(p, a, b, ra, rb), bmin: a.clone().min(b).subScalar(R), bmax: a.clone().max(b).addScalar(R), ...extra };
  },
  box: (c, b, r, extra = {}) => ({ d: (p) => sdRoundBox(p, c, b, r), bmin: c.clone().sub(b), bmax: c.clone().add(b), ...extra }),
  torus: (c, R, r, extra = {}) => ({ d: (p) => sdTorus(p, c, R, r), bmin: c.clone().sub(V(R + r, r, R + r)), bmax: c.clone().add(V(R + r, r, R + r)), ...extra }),
  custom: (d, bmin, bmax, extra = {}) => ({ d, bmin, bmax, ...extra }),
};
