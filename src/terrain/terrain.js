import * as THREE from 'three';
import { meshChunk } from './mesher.js';
import { createTerrainMaterial } from './terrainMaterial.js';

export const CHUNK = 16;

export class Terrain {
  constructor(volume, theme) {
    this.vol = volume;
    this.group = new THREE.Group();
    this.group.name = 'terrain';
    this.material = createTerrainMaterial(theme);
    this.cx = Math.ceil((volume.nx - 1) / CHUNK);
    this.cy = Math.ceil((volume.ny - 1) / CHUNK);
    this.cz = Math.ceil((volume.nz - 1) / CHUNK);
    this.meshes = new Array(this.cx * this.cy * this.cz).fill(null);
    this.dirty = new Set();
    this.triCount = 0;
  }

  key(i, j, k) { return i + j * this.cx + k * this.cx * this.cy; }

  buildAll(onProgress) {
    const total = this.cx * this.cy * this.cz;
    let n = 0;
    for (let k = 0; k < this.cz; k++) for (let j = 0; j < this.cy; j++) for (let i = 0; i < this.cx; i++) {
      this.rebuild(i, j, k);
      n++;
      if (onProgress && n % 32 === 0) onProgress(n / total);
    }
  }

  // build in slices so the loading screen can update
  async buildAllAsync(onProgress) {
    const total = this.cx * this.cy * this.cz;
    let n = 0;
    let t0 = performance.now();
    for (let k = 0; k < this.cz; k++) for (let j = 0; j < this.cy; j++) for (let i = 0; i < this.cx; i++) {
      this.rebuild(i, j, k);
      n++;
      if (performance.now() - t0 > 30) {
        onProgress?.(n / total);
        await new Promise((r) => setTimeout(r, 0));
        t0 = performance.now();
      }
    }
  }

  rebuild(i, j, k, fast = false) {
    const key = this.key(i, j, k);
    const data = meshChunk(this.vol, i, j, k, CHUNK, fast);
    let mesh = this.meshes[key];
    if (!data) {
      if (mesh) {
        this.triCount -= mesh.geometry.index.count / 3;
        this.group.remove(mesh); mesh.geometry.dispose(); this.meshes[key] = null;
      }
      return;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(data.position, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(data.normal, 3));
    geo.setAttribute('wa', new THREE.BufferAttribute(data.wa, 4));
    geo.setAttribute('wb', new THREE.BufferAttribute(data.wb, 4));
    geo.setAttribute('ao', new THREE.BufferAttribute(data.ao, 1));
    geo.setIndex(new THREE.BufferAttribute(data.index, 1));
    geo.computeBoundingSphere();
    geo.computeBoundingBox();
    if (mesh) {
      this.triCount -= mesh.geometry.index.count / 3;
      mesh.geometry.dispose();
      mesh.geometry = geo;
    } else {
      mesh = new THREE.Mesh(geo, this.material);
      mesh.receiveShadow = true;
      mesh.castShadow = false;
      mesh.matrixAutoUpdate = false;
      this.meshes[key] = mesh;
      this.group.add(mesh);
    }
    this.triCount += data.index.length / 3;
  }

  // mark chunks touched by a grid-space bounding box (inclusive) as dirty
  markDirty(b, immediate = true) {
    const [i0, j0, k0, i1, j1, k1] = b;
    // A grid point affects cells to its -1 side, so expand by one.
    const ci0 = Math.max(0, Math.floor((i0 - 1) / CHUNK)), ci1 = Math.min(this.cx - 1, Math.floor((i1 + 1) / CHUNK));
    const cj0 = Math.max(0, Math.floor((j0 - 1) / CHUNK)), cj1 = Math.min(this.cy - 1, Math.floor((j1 + 1) / CHUNK));
    const ck0 = Math.max(0, Math.floor((k0 - 1) / CHUNK)), ck1 = Math.min(this.cz - 1, Math.floor((k1 + 1) / CHUNK));
    for (let k = ck0; k <= ck1; k++) for (let j = cj0; j <= cj1; j++) for (let i = ci0; i <= ci1; i++) {
      if (immediate) this.rebuild(i, j, k, true);
      else this.dirty.add(this.key(i, j, k));
    }
  }

  flushDirty(budgetMs = 4) {
    const t0 = performance.now();
    for (const key of this.dirty) {
      const i = key % this.cx, j = Math.floor(key / this.cx) % this.cy, k = Math.floor(key / (this.cx * this.cy));
      this.rebuild(i, j, k);
      this.dirty.delete(key);
      if (performance.now() - t0 > budgetMs) break;
    }
  }

  dispose() {
    for (const m of this.meshes) if (m) m.geometry.dispose();
    this.material.dispose();
  }
}
