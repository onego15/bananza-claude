// Surface Nets mesher for one chunk of a Volume.
// Produces smooth, shared-vertex meshes with gradient normals, per-vertex material
// weights (8 materials in two vec4s) and a cheap baked ambient occlusion term.

import { MAT_COUNT } from './volume.js';

const CORNERS = [
  [0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0],
  [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1],
];
const EDGES = [
  [0, 1], [2, 3], [4, 5], [6, 7],
  [0, 2], [1, 3], [4, 6], [5, 7],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

// AO probe directions (normal-relative hemisphere is approximated by offsets along
// the normal + a few fixed world directions biased upward, which is what caves need).
const AO_DIRS = [
  [0, 1, 0], [0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0.7, 0.7], [0, 0.7, -0.7],
];

let scratch = null;
function getScratch(C) {
  const N = C + 1;
  if (!scratch || scratch.N !== N) {
    const maxV = N * N * N;
    scratch = {
      N,
      vidx: new Int32Array(N * N * N),
      pos: new Float32Array(maxV * 3),
      nrm: new Float32Array(maxV * 3),
      wa: new Float32Array(maxV * 4),
      wb: new Float32Array(maxV * 4),
      ao: new Float32Array(maxV),
      idx: new Uint32Array(maxV * 18),
    };
  }
  return scratch;
}

const g = { x: 0, y: 0, z: 0 };

export function meshChunk(vol, cx, cy, cz, C, fast = false) {
  const S = getScratch(C);
  const { N, vidx, pos, nrm, wa, wb, ao, idx } = S;
  const { nx, ny, nz, f, m, s, sxy } = vol;
  const x0 = cx * C, y0 = cy * C, z0 = cz * C;
  vidx.fill(-1);
  let vc = 0;
  const cf = new Float32Array(8);
  const cm = new Uint8Array(8);
  const wsum = new Float32Array(MAT_COUNT);

  // 1) vertices: one per cell with a sign change, cells [x0-1, x0+C)
  for (let lz = 0; lz < N; lz++) {
    const z = z0 - 1 + lz;
    if (z < 0 || z >= nz - 1) continue;
    for (let ly = 0; ly < N; ly++) {
      const y = y0 - 1 + ly;
      if (y < 0 || y >= ny - 1) continue;
      for (let lx = 0; lx < N; lx++) {
        const x = x0 - 1 + lx;
        if (x < 0 || x >= nx - 1) continue;
        const base = x + y * nx + z * sxy;
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const o = CORNERS[c];
          const n = base + o[0] + o[1] * nx + o[2] * sxy;
          const v = f[n];
          cf[c] = v; cm[c] = m[n];
          if (v < 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let px = 0, py = 0, pz = 0, cnt = 0;
        for (let e = 0; e < 12; e++) {
          const a = EDGES[e][0], b = EDGES[e][1];
          const sa = (mask >> a) & 1, sb = (mask >> b) & 1;
          if (sa === sb) continue;
          const t = cf[a] / (cf[a] - cf[b]);
          const A = CORNERS[a], B = CORNERS[b];
          px += A[0] + (B[0] - A[0]) * t;
          py += A[1] + (B[1] - A[1]) * t;
          pz += A[2] + (B[2] - A[2]) * t;
          cnt++;
        }
        px /= cnt; py /= cnt; pz /= cnt;
        const wx = (x + px) * s, wy = (y + py) * s, wz = (z + pz) * s;
        const vi = vc++;
        vidx[lx + ly * N + lz * N * N] = vi;
        pos[vi * 3] = wx; pos[vi * 3 + 1] = wy; pos[vi * 3 + 2] = wz;
        vol.gradient(wx, wy, wz, g, s * 0.5);
        nrm[vi * 3] = g.x; nrm[vi * 3 + 1] = g.y; nrm[vi * 3 + 2] = g.z;

        // material weights from solid corners, weighted by proximity
        wsum.fill(0);
        let tot = 0;
        for (let c = 0; c < 8; c++) {
          if (cf[c] >= 0.05) continue;
          const o = CORNERS[c];
          const w = (o[0] ? px : 1 - px) * (o[1] ? py : 1 - py) * (o[2] ? pz : 1 - pz) + 0.02;
          wsum[cm[c]] += w; tot += w;
        }
        if (tot <= 0) { wsum[cm[0]] = 1; tot = 1; }
        for (let q = 0; q < 4; q++) { wa[vi * 4 + q] = wsum[q] / tot; wb[vi * 4 + q] = wsum[q + 4] / tot; }

        // ambient occlusion: probe along the normal and upward cone
        let occ = 0;
        for (let k = 1; k <= 3; k++) {
          const d = k * 0.55;
          const v = vol.sample(wx + g.x * d, wy + g.y * d, wz + g.z * d);
          occ += Math.max(0, d - v) / d * (1 / k);
        }
        // fast mode (right after a dig): skip the wide cone probes; the deferred rebuild
        // a few frames later restores full-quality AO
        let open = fast ? AO_DIRS.length * 0.75 : 0;
        for (let q = 0; !fast && q < AO_DIRS.length; q++) {
          const D = AO_DIRS[q];
          const dx = D[0] + g.x, dy = D[1] + g.y, dz = D[2] + g.z;
          const l = Math.hypot(dx, dy, dz) || 1;
          const v = vol.sample(wx + dx / l * 3.0, wy + dy / l * 3.0, wz + dz / l * 3.0);
          open += Math.min(1, Math.max(0, v) / 2.0);
        }
        open /= AO_DIRS.length;
        ao[vi] = Math.max(0.12, Math.min(1, (1 - occ * 0.42) * (0.45 + 0.55 * open)));
      }
    }
  }

  // 2) quads: one per sign-changing grid edge whose base point lies in this chunk
  let ic = 0;
  const NN = N * N;
  for (let z = z0; z < z0 + C && z < nz; z++) {
    for (let y = y0; y < y0 + C && y < ny; y++) {
      for (let x = x0; x < x0 + C && x < nx; x++) {
        const n = x + y * nx + z * sxy;
        const solid = f[n] < 0;
        const lx = x - x0 + 1, ly = y - y0 + 1, lz = z - z0 + 1;
        // x-edge
        if (x + 1 < nx && y > 0 && z > 0 && (f[n + 1] < 0) !== solid) {
          const a = vidx[lx + (ly - 1) * N + (lz - 1) * NN];
          const b = vidx[lx + ly * N + (lz - 1) * NN];
          const c = vidx[lx + ly * N + lz * NN];
          const d = vidx[lx + (ly - 1) * N + lz * NN];
          if (a >= 0 && b >= 0 && c >= 0 && d >= 0) ic = quad(idx, ic, a, b, c, d, solid, pos);
        }
        // y-edge: plane (z, x)
        if (y + 1 < ny && x > 0 && z > 0 && (f[n + nx] < 0) !== solid) {
          const a = vidx[(lx - 1) + ly * N + (lz - 1) * NN];
          const b = vidx[(lx - 1) + ly * N + lz * NN];
          const c = vidx[lx + ly * N + lz * NN];
          const d = vidx[lx + ly * N + (lz - 1) * NN];
          if (a >= 0 && b >= 0 && c >= 0 && d >= 0) ic = quad(idx, ic, a, b, c, d, solid, pos);
        }
        // z-edge: plane (x, y)
        if (z + 1 < nz && x > 0 && y > 0 && (f[n + sxy] < 0) !== solid) {
          const a = vidx[(lx - 1) + (ly - 1) * N + lz * NN];
          const b = vidx[lx + (ly - 1) * N + lz * NN];
          const c = vidx[lx + ly * N + lz * NN];
          const d = vidx[(lx - 1) + ly * N + lz * NN];
          if (a >= 0 && b >= 0 && c >= 0 && d >= 0) ic = quad(idx, ic, a, b, c, d, solid, pos);
        }
      }
    }
  }

  if (ic === 0) return null;
  return {
    position: pos.slice(0, vc * 3),
    normal: nrm.slice(0, vc * 3),
    wa: wa.slice(0, vc * 4),
    wb: wb.slice(0, vc * 4),
    ao: ao.slice(0, vc),
    index: vc < 65535 ? Uint16Array.from(idx.subarray(0, ic)) : idx.slice(0, ic),
  };
}

function d2(pos, a, b) {
  const dx = pos[a * 3] - pos[b * 3], dy = pos[a * 3 + 1] - pos[b * 3 + 1], dz = pos[a * 3 + 2] - pos[b * 3 + 2];
  return dx * dx + dy * dy + dz * dz;
}

function quad(idx, ic, a, b, c, d, solid, pos) {
  // split along the shorter diagonal for nicer shading
  if (!solid) { const t = b; b = d; d = t; }
  if (d2(pos, a, c) <= d2(pos, b, d)) {
    idx[ic++] = a; idx[ic++] = b; idx[ic++] = c;
    idx[ic++] = a; idx[ic++] = c; idx[ic++] = d;
  } else {
    idx[ic++] = a; idx[ic++] = b; idx[ic++] = d;
    idx[ic++] = b; idx[ic++] = c; idx[ic++] = d;
  }
  return ic;
}
