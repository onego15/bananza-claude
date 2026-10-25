// Level-building kit: areas are described as unions of "air" shapes (rooms, tunnels, shafts)
// carved out of solid ground, plus solid structures (pillars, walls) placed back in.
// Every shape carries a bounding box so evaluation over millions of voxels stays fast.

import { smin, smax, clamp } from '../core/noise.js';

const BIG = 1e3;

export class AreaBuilder {
  constructor(noise) {
    this.noise = noise;
    this.air = []; // {bb, d(x,y,z), k, rough}
    this.solids = []; // {bb, d, mat(x,y,z) | number, priority}
    this.matRegions = []; // {bb, d, mat} solid-material overrides (veins, pockets)
    this.overrides = []; // {bb, d, mat}  solids applied AFTER air (unbreakable shells etc.)
    this.cuts = []; // air applied after overrides (doorways in shells)
    this.plugs = []; // solids applied last (seals inside cut shafts)
    this.baseMat = () => 1;
  }

  // ---- air shapes ----
  room(cx, cy, cz, rx, ry, rz, opts = {}) {
    const floor = opts.floor ?? -BIG;
    const ceil = opts.ceil ?? BIG;
    const k = opts.k ?? 1.2;
    this.air.push({
      bb: [cx - rx, cy - ry, cz - rz, cx + rx, cy + ry, cz + rz],
      rough: opts.rough ?? 1,
      d: (x, y, z) => {
        const X = (x - cx) / rx, Y = (y - cy) / ry, Z = (z - cz) / rz;
        const k0 = Math.hypot(X, Y, Z), k1 = Math.hypot(X / rx, Y / ry, Z / rz);
        let d = (k0 * (k0 - 1)) / (k1 || 1);
        if (floor > -BIG) d = smax(d, floor - y, k);
        if (ceil < BIG) d = smax(d, y - ceil, k);
        return d;
      },
    });
  }

  box(cx, cy, cz, hx, hy, hz, r = 0.3, opts = {}) {
    this.air.push({
      bb: [cx - hx, cy - hy, cz - hz, cx + hx, cy + hy, cz + hz],
      rough: opts.rough ?? 0.15,
      d: (x, y, z) => sdBox(x - cx, y - cy, z - cz, hx, hy, hz, r),
    });
  }

  cylinder(cx, cz, y0, y1, r, opts = {}) {
    this.air.push({
      bb: [cx - r, y0, cz - r, cx + r, y1, cz + r],
      rough: opts.rough ?? 1,
      d: (x, y, z) => Math.max(Math.hypot(x - cx, z - cz) - r, y0 - y, y - y1),
    });
  }

  // tunnel through a list of points [[x,y,z],...] with radius r; floor flattened
  tunnel(pts, r, opts = {}) {
    const flat = opts.flat ?? 0.55;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1];
      const ra = Array.isArray(r) ? r[i] : r, rb = Array.isArray(r) ? r[i + 1] : r;
      const R = Math.max(ra, rb);
      this.air.push({
        bb: [Math.min(a[0], b[0]) - R, Math.min(a[1], b[1]) - R, Math.min(a[2], b[2]) - R,
          Math.max(a[0], b[0]) + R, Math.max(a[1], b[1]) + R, Math.max(a[2], b[2]) + R],
        rough: opts.rough ?? 1,
        d: (x, y, z) => {
          const bax = b[0] - a[0], bay = b[1] - a[1], baz = b[2] - a[2];
          const pax = x - a[0], pay = y - a[1], paz = z - a[2];
          const h = clamp((pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz), 0, 1);
          const rr = ra + (rb - ra) * h;
          let d = Math.hypot(pax - bax * h, pay - bay * h, paz - baz * h) - rr;
          const fy = a[1] + bay * h - rr * flat;
          d = smax(d, fy - y, 0.6);
          return d;
        },
      });
    }
  }

  // ---- solids placed back into air (pillars, plugs, mounds) ----
  solid(bb, d, mat, opts = {}) { (opts.after ? this.overrides : this.solids).push({ bb, d, mat, k: opts.k ?? 0 }); }
  pillar(cx, cz, y0, y1, r, mat, opts = {}) {
    const taper = opts.taper ?? 0;
    this.solid([cx - r - 1, y0, cz - r - 1, cx + r + 1, y1, cz + r + 1], (x, y, z) => {
      const t = clamp((y - y0) / (y1 - y0), 0, 1);
      return Math.max(Math.hypot(x - cx, z - cz) - r * (1 - taper * t) - (opts.base ? Math.max(0, 0.5 - (y - y0)) * 0.6 : 0), y0 - y, y - y1);
    }, mat, opts);
  }
  sphereSolid(cx, cy, cz, r, mat, opts = {}) {
    this.solid([cx - r, cy - r, cz - r, cx + r, cy + r, cz + r], (x, y, z) => Math.hypot(x - cx, y - cy, z - cz) - r, mat, opts);
  }
  boxSolid(cx, cy, cz, hx, hy, hz, mat, r = 0.2, opts = {}) {
    this.solid([cx - hx, cy - hy, cz - hz, cx + hx, cy + hy, cz + hz], (x, y, z) => sdBox(x - cx, y - cy, z - cz, hx, hy, hz, r), mat, opts);
  }

  // material pocket inside existing solid ground
  vein(bb, d, mat) { this.matRegions.push({ bb, d, mat }); }
  veinSphere(cx, cy, cz, r, mat) {
    this.vein([cx - r, cy - r, cz - r, cx + r, cy + r, cz + r], (x, y, z) => Math.hypot(x - cx, y - cy, z - cz) - r, mat);
  }

  plug(cx, cy, cz, hx, hy, hz, mat, r = 0.2) {
    this.plugs.push({ bb: [cx - hx, cy - hy, cz - hz, cx + hx, cy + hy, cz + hz], d: (x, y, z) => sdBox(x - cx, y - cy, z - cz, hx, hy, hz, r), mat });
  }
  plugCyl(cx, cz, y0, y1, r, mat) {
    this.plugs.push({ bb: [cx - r, y0, cz - r, cx + r, y1, cz + r], d: (x, y, z) => Math.max(Math.hypot(x - cx, z - cz) - r, y0 - y, y - y1), mat });
  }

  cut(bb, d) { this.cuts.push({ bb, d }); }
  cutBox(cx, cy, cz, hx, hy, hz, r = 0.2) {
    this.cut([cx - hx, cy - hy, cz - hz, cx + hx, cy + hy, cz + hz], (x, y, z) => sdBox(x - cx, y - cy, z - cz, hx, hy, hz, r));
  }

  // Produce the fill function for Volume.fill
  build() {
    const n = this.noise;
    const air = this.air, solids = this.solids, regions = this.matRegions, over = this.overrides, cuts = this.cuts, plugs = this.plugs;
    const M = 4.5; // bbox margin (beyond SDF clamp)
    const inBB = (bb, x, y, z) => x > bb[0] - M && y > bb[1] - M && z > bb[2] - M && x < bb[3] + M && y < bb[4] + M && z < bb[5] + M;
    const baseMat = this.baseMat;
    return (x, y, z, out) => {
      // organic displacement
      let a = BIG, rough = 0;
      for (let i = 0; i < air.length; i++) {
        const s = air[i];
        if (!inBB(s.bb, x, y, z)) continue;
        const d = s.d(x, y, z);
        if (d < a) rough = s.rough;
        a = smin(a, d, 1.0);
      }
      let f;
      if (a < 6) {
        const disp = rough > 0 ? (n.fbm(x * 0.11, y * 0.13, z * 0.11, 3) * 1.6 + n.noise(x * 0.45, y * 0.45, z * 0.45) * 0.35) * rough : 0;
        f = -(a + disp);
      } else f = -a;
      let mat = -1;
      for (let i = 0; i < solids.length; i++) {
        const s = solids[i];
        if (!inBB(s.bb, x, y, z)) continue;
        const d = s.d(x, y, z);
        if (d < f) { f = s.k ? smin(f, d, s.k) : d; if (d < 0.6) mat = typeof s.mat === 'function' ? s.mat(x, y, z) : s.mat; }
      }
      for (let i = 0; i < over.length; i++) {
        const s = over[i];
        if (!inBB(s.bb, x, y, z)) continue;
        const d = s.d(x, y, z);
        if (d < 0.05) mat = typeof s.mat === 'function' ? s.mat(x, y, z) : s.mat;
        if (d < f) f = d;
      }
      for (let i = 0; i < cuts.length; i++) {
        const s = cuts[i];
        if (!inBB(s.bb, x, y, z)) continue;
        const d = s.d(x, y, z);
        if (-d > f) f = -d;
      }
      for (let i = 0; i < plugs.length; i++) {
        const s = plugs[i];
        if (!inBB(s.bb, x, y, z)) continue;
        const d = s.d(x, y, z);
        if (d < 0.05) mat = s.mat;
        if (d < f) f = d;
      }
      if (mat < 0) {
        mat = baseMat(x, y, z);
        for (let i = 0; i < regions.length; i++) {
          const s = regions[i];
          if (!inBB(s.bb, x, y, z)) continue;
          if (s.d(x, y, z) < 0) mat = typeof s.mat === 'function' ? s.mat(x, y, z) : s.mat;
        }
      }
      out[0] = f; out[1] = mat;
    };
  }
}

export function sdBox(px, py, pz, hx, hy, hz, r = 0) {
  const qx = Math.abs(px) - hx + r, qy = Math.abs(py) - hy + r, qz = Math.abs(pz) - hz + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, Math.max(qy, qz)), 0) - r;
}
