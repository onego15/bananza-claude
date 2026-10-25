// Headless (Node) terrain stress test: builds every area's volume + meshes, then performs
// hundreds of random digs with re-meshing and reports timings, triangle counts and
// collision sanity (no NaN in the field, carved points really become air).
// usage: node tests/perf-terrain.mjs
import { Volume, MAT } from '../src/terrain/volume.js';
import { meshChunk } from '../src/terrain/mesher.js';
import { Noise3, mulberry32 } from '../src/core/noise.js';
import { AREAS } from '../src/world/areas/index.js';

const C = 16;
const now = () => performance.now();
const results = [];
for (const id of [1, 2, 3]) {
  const def = AREAS[id];
  const noise = new Noise3(def.seed);
  const t0 = now();
  const vol = new Volume(Math.round(def.size[0] / def.voxel) + 1, Math.round(def.size[1] / def.voxel) + 1, Math.round(def.size[2] / def.voxel) + 1, def.voxel);
  const fn = def.build(noise).build();
  const { nx, ny, nz, s, f, m } = vol;
  const out = [0, 0];
  for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) {
    let n = j * nx + k * vol.sxy;
    for (let i = 0; i < nx; i++, n++) {
      if (i === 0 || j === 0 || k === 0 || i === nx - 1 || j === ny - 1 || k === nz - 1) { f[n] = -4; m[n] = MAT.BEDROCK; continue; }
      fn(i * s, j * s, k * s, out);
      f[n] = Math.max(-4, Math.min(4, out[0])); m[n] = out[1];
    }
  }
  const tFill = now() - t0;
  const cx = Math.ceil((nx - 1) / C), cy = Math.ceil((ny - 1) / C), cz = Math.ceil((nz - 1) / C);
  let tris = 0;
  const t1 = now();
  for (let a = 0; a < cx; a++) for (let b = 0; b < cy; b++) for (let c = 0; c < cz; c++) { const g = meshChunk(vol, a, b, c, C); if (g) tris += g.index.length / 3; }
  const tMesh = now() - t1;

  // 400 random digs inside the volume, each followed by re-meshing the touched chunks
  const rnd = mulberry32(99 + id);
  const digTimes = [];
  let carvedOk = 0, digs = 0;
  for (let d = 0; d < 400; d++) {
    const x = 4 + rnd() * (def.size[0] - 8), y = 4 + rnd() * (def.size[1] - 8), z = 4 + rnd() * (def.size[2] - 8);
    const r = 1.5 + rnd() * 1.6;
    const ts = now();
    const res = vol.carve(x, y, z, r, { power: 2, gauntlet: true, noise, rough: 0.35 });
    if (res.changed) {
      const bb = res.bounds;
      const lo = (v) => Math.max(0, Math.floor((v - 1) / C)), hi = (v, n) => Math.min(n - 1, Math.floor((v + 1) / C));
      for (let a = lo(bb[0]); a <= hi(bb[3], cx); a++)
        for (let b = lo(bb[1]); b <= hi(bb[4], cy); b++)
          for (let c = lo(bb[2]); c <= hi(bb[5], cz); c++) meshChunk(vol, a, b, c, C);
      digs++;
      const mat = vol.materialAt(x, y, z);
      if (vol.sample(x, y, z) > 0 || mat === MAT.ANCIENT || mat === MAT.BEDROCK) carvedOk++;
    } else carvedOk++;
    digTimes.push(now() - ts);
  }
  let nan = 0; for (let i = 0; i < f.length; i++) if (!Number.isFinite(f[i])) nan++;
  let tris2 = 0;
  for (let a = 0; a < cx; a++) for (let b = 0; b < cy; b++) for (let c = 0; c < cz; c++) { const g = meshChunk(vol, a, b, c, C); if (g) tris2 += g.index.length / 3; }
  digTimes.sort((a, b) => a - b);
  const r = {
    area: id, grid: `${nx}x${ny}x${nz}`, fillMs: +tFill.toFixed(0), meshAllMs: +tMesh.toFixed(0), trisBefore: tris, trisAfter400Digs: tris2,
    digs, digMedianMs: +digTimes[200].toFixed(2), digP95Ms: +digTimes[380].toFixed(2), digMaxMs: +digTimes[399].toFixed(2), carvedOk: `${carvedOk}/400`, nanCells: nan,
  };
  results.push(r);
  console.log(JSON.stringify(r));
}
