// Voxel volume storing a signed distance field (meters, >0 = air, <0 = solid)
// plus a material id per grid point. The rendered surface is extracted with
// Surface Nets (see mesher.js), so the visible terrain is smooth.

export const MAT = {
  DIRT: 0,
  ROCK: 1,
  HARD: 2, // needs the Terra Gauntlet
  CRYSTAL: 3, // glowing ore, drops shards
  GOLD: 4, // gold ore, drops nuggets
  BRICK: 5, // ruins masonry
  ANCIENT: 6, // rune stone: unbreakable
  BEDROCK: 7, // unbreakable
};
export const MAT_COUNT = 8;

export const MAT_INFO = [
  { name: '土', hard: 1.0, color: [0.42, 0.27, 0.16], sfx: 'dirt' },
  { name: '岩', hard: 0.74, color: [0.45, 0.42, 0.4], sfx: 'rock' },
  { name: '硬岩', hard: 0.0, color: [0.22, 0.24, 0.32], sfx: 'metal', needs: 'gauntlet', hardUpgraded: 0.6 },
  { name: '輝晶', hard: 0.85, color: [0.4, 0.75, 1.0], sfx: 'crystal' },
  { name: '金鉱', hard: 0.8, color: [0.95, 0.72, 0.25], sfx: 'rock' },
  { name: '遺跡石', hard: 0.85, color: [0.55, 0.5, 0.42], sfx: 'rock' },
  { name: '古代石', hard: 0.0, color: [0.2, 0.18, 0.2], sfx: 'metal' },
  { name: '岩盤', hard: 0.0, color: [0.12, 0.1, 0.1], sfx: 'metal' },
];

export const CLAMP = 4.0;

export class Volume {
  constructor(nx, ny, nz, voxel = 0.5) {
    this.nx = nx; this.ny = ny; this.nz = nz;
    this.s = voxel;
    this.inv = 1 / voxel;
    this.sxy = nx * ny;
    this.f = new Float32Array(nx * ny * nz).fill(CLAMP);
    this.m = new Uint8Array(nx * ny * nz);
    this.size = [(nx - 1) * voxel, (ny - 1) * voxel, (nz - 1) * voxel];
  }

  idx(i, j, k) { return i + j * this.nx + k * this.sxy; }

  // Fill from a function (x,y,z world) => [distance, material] using a reusable out array.
  fill(fn) {
    const { nx, ny, nz, s, f, m } = this;
    const out = [0, 0];
    let n = 0;
    for (let k = 0; k < nz; k++) {
      for (let j = 0; j < ny; j++) {
        for (let i = 0; i < nx; i++, n++) {
          if (i === 0 || j === 0 || k === 0 || i === nx - 1 || j === ny - 1 || k === nz - 1) {
            f[n] = -CLAMP; m[n] = MAT.BEDROCK; continue;
          }
          fn(i * s, j * s, k * s, out);
          let d = out[0];
          f[n] = d > CLAMP ? CLAMP : d < -CLAMP ? -CLAMP : d;
          m[n] = out[1];
        }
      }
    }
  }

  // Trilinear sample of the distance field. Outside = solid.
  sample(x, y, z) {
    const gx = x * this.inv, gy = y * this.inv, gz = z * this.inv;
    if (gx < 0 || gy < 0 || gz < 0 || gx >= this.nx - 1 || gy >= this.ny - 1 || gz >= this.nz - 1) return -CLAMP;
    const i = gx | 0, j = gy | 0, k = gz | 0;
    const fx = gx - i, fy = gy - j, fz = gz - k;
    const f = this.f, nx = this.nx, sxy = this.sxy;
    const n = i + j * nx + k * sxy;
    const c000 = f[n], c100 = f[n + 1], c010 = f[n + nx], c110 = f[n + nx + 1];
    const c001 = f[n + sxy], c101 = f[n + sxy + 1], c011 = f[n + sxy + nx], c111 = f[n + sxy + nx + 1];
    const x00 = c000 + (c100 - c000) * fx, x10 = c010 + (c110 - c010) * fx;
    const x01 = c001 + (c101 - c001) * fx, x11 = c011 + (c111 - c011) * fx;
    const y0 = x00 + (x10 - x00) * fy, y1 = x01 + (x11 - x01) * fy;
    return y0 + (y1 - y0) * fz;
  }

  // Gradient (unnormalised) via central differences, written into out (array-like with x,y,z or [0..2])
  gradient(x, y, z, out, h = 0.25) {
    out.x = this.sample(x + h, y, z) - this.sample(x - h, y, z);
    out.y = this.sample(x, y + h, z) - this.sample(x, y - h, z);
    out.z = this.sample(x, y, z + h) - this.sample(x, y, z - h);
    const l = Math.hypot(out.x, out.y, out.z) || 1;
    out.x /= l; out.y /= l; out.z /= l;
    return out;
  }

  // Material of the most solid grid point near a world position.
  materialAt(x, y, z) {
    const gx = Math.round(x * this.inv), gy = Math.round(y * this.inv), gz = Math.round(z * this.inv);
    let best = 1e9, mat = MAT.BEDROCK;
    for (let dk = -1; dk <= 1; dk++) for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      const i = gx + di, j = gy + dj, k = gz + dk;
      if (i < 0 || j < 0 || k < 0 || i >= this.nx || j >= this.ny || k >= this.nz) continue;
      const n = this.idx(i, j, k);
      const d = this.f[n] + (di * di + dj * dj + dk * dk) * 0.12;
      if (this.f[n] < 0.25 && d < best) { best = d; mat = this.m[n]; }
    }
    return mat;
  }

  // Sphere-trace a ray. Returns distance or -1.
  raycast(ox, oy, oz, dx, dy, dz, maxDist, minStep = 0.04) {
    let t = 0;
    for (let it = 0; it < 256 && t < maxDist; it++) {
      const d = this.sample(ox + dx * t, oy + dy * t, oz + dz * t);
      if (d < 0.02) return t;
      t += Math.max(d * 0.85, minStep);
    }
    return -1;
  }

  /**
   * Carve a sphere out of the terrain. Per-voxel hardness shrinks the effective radius so
   * soft dirt washes away around tough rock veins. Returns stats about removed material.
   * opts: { power, gauntlet, noise (Noise3), rough, onlyMats }
   */
  carve(cx, cy, cz, r, opts = {}) {
    const { s, inv, nx, ny, nz, f, m } = this;
    const power = opts.power ?? 1;
    const gauntlet = !!opts.gauntlet;
    const rough = opts.rough ?? 0.35;
    const noise = opts.noise;
    const removed = new Float32Array(8);
    let changed = false;
    let blocked = 0;
    const R = r * power + 1;
    const i0 = Math.max(1, Math.floor((cx - R) * inv)), i1 = Math.min(nx - 2, Math.ceil((cx + R) * inv));
    const j0 = Math.max(1, Math.floor((cy - R) * inv)), j1 = Math.min(ny - 2, Math.ceil((cy + R) * inv));
    const k0 = Math.max(1, Math.floor((cz - R) * inv)), k1 = Math.min(nz - 2, Math.ceil((cz + R) * inv));
    const fac = new Float32Array(8);
    for (let q = 0; q < 8; q++) {
      const info = MAT_INFO[q];
      let h = info.hard;
      if (info.needs === 'gauntlet' && gauntlet) h = info.hardUpgraded;
      if (opts.onlyMats && !opts.onlyMats.includes(q)) h = 0;
      if (opts.extraMats && opts.extraMats.includes(q)) h = Math.max(h, 0.7);
      fac[q] = h;
    }
    for (let k = k0; k <= k1; k++) {
      for (let j = j0; j <= j1; j++) {
        for (let i = i0; i <= i1; i++) {
          const n = i + j * nx + k * this.sxy;
          const x = i * s, y = j * s, z = k * s;
          const dist = Math.hypot(x - cx, y - cy, z - cz);
          if (dist > R) continue;
          const h = fac[m[n]];
          const old = f[n];
          if (h <= 0) { if (old < 0 && dist < r * 0.8) blocked++; continue; }
          let v = r * power * h - dist;
          if (noise) v += noise.noise(x * 0.9, y * 0.9, z * 0.9) * rough;
          if (v > old) {
            if (old < 0 && v >= 0) removed[m[n]] += 1;
            f[n] = Math.min(v, CLAMP);
            changed = true;
          }
        }
      }
    }
    return { changed, removed, blocked, bounds: [i0, j0, k0, i1, j1, k1] };
  }

  // Add solid material (used by world gen tools / boss rubble).
  fillSphere(cx, cy, cz, r, mat) {
    const { s, inv, nx, ny, nz, f, m } = this;
    const i0 = Math.max(1, Math.floor((cx - r - 1) * inv)), i1 = Math.min(nx - 2, Math.ceil((cx + r + 1) * inv));
    const j0 = Math.max(1, Math.floor((cy - r - 1) * inv)), j1 = Math.min(ny - 2, Math.ceil((cy + r + 1) * inv));
    const k0 = Math.max(1, Math.floor((cz - r - 1) * inv)), k1 = Math.min(nz - 2, Math.ceil((cz + r + 1) * inv));
    for (let k = k0; k <= k1; k++) for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const n = i + j * nx + k * this.sxy;
      const v = Math.hypot(i * s - cx, j * s - cy, k * s - cz) - r;
      if (v < f[n]) { if (f[n] >= 0 || v < 0) m[n] = mat; f[n] = Math.max(v, -CLAMP); }
    }
    return [i0, j0, k0, i1, j1, k1];
  }
}
