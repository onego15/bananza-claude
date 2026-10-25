import * as THREE from 'three';

// Pooled CPU particle system rendered as soft point sprites.
// Two instances are used: one alpha-blended (dust, smoke, leaves) and one additive (sparks, glows).

const VS = `
attribute float aSize;
attribute vec4 aColor;
attribute float aSpin;
varying vec4 vColor;
varying float vSpin;
uniform float uScale;
void main() {
  vColor = aColor;
  vSpin = aSpin;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(0.1, -mv.z);
}`;
const FS = `
varying vec4 vColor;
varying float vSpin;
uniform float uSoft;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r;
  if (vSpin > 0.5) {
    // chunky leaf/shard shape
    float c = cos(vSpin * 3.0), s = sin(vSpin * 3.0);
    vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
    r = abs(q.x) * 1.6 + abs(q.y) * 0.8;
  } else r = length(p);
  float a = smoothstep(1.0, 1.0 - uSoft, r);
  if (a * vColor.a < 0.01) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class ParticleSystem {
  constructor(max = 3000, additive = false) {
    this.max = max;
    this.count = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.size1 = new Float32Array(max);
    this.col = new Float32Array(max * 4);
    this.drag = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.spin = new Float32Array(max);
    this.alpha0 = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    this.colAttr = new THREE.BufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.spinAttr = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('aSize', this.sizeAttr);
    geo.setAttribute('aColor', this.colAttr);
    geo.setAttribute('aSpin', this.spinAttr);
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    this.material = new THREE.ShaderMaterial({
      vertexShader: VS, fragmentShader: FS,
      uniforms: { uScale: { value: 400 }, uSoft: { value: additive ? 1.0 : 0.55 } },
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 20 : 10;
  }

  emit(x, y, z, vx, vy, vz, o) {
    if (this.count >= this.max) return;
    const i = this.count++;
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.life[i] = 0; this.maxLife[i] = o.life ?? 1;
    this.size0[i] = o.size ?? 0.3; this.size1[i] = o.size1 ?? this.size0[i];
    const c = o.color;
    this.col[i * 4] = c.r; this.col[i * 4 + 1] = c.g; this.col[i * 4 + 2] = c.b;
    this.alpha0[i] = o.alpha ?? 1;
    this.drag[i] = o.drag ?? 1.5;
    this.grav[i] = o.gravity ?? 0;
    this.spin[i] = o.spin ?? 0;
  }

  update(dt, vol) {
    let n = this.count;
    for (let i = 0; i < n; i++) {
      this.life[i] += dt;
      if (this.life[i] >= this.maxLife[i]) {
        n--; this.copy(n, i); i--; continue;
      }
      const d = Math.exp(-this.drag[i] * dt);
      this.v[i * 3] *= d; this.v[i * 3 + 1] = this.v[i * 3 + 1] * d - this.grav[i] * dt; this.v[i * 3 + 2] *= d;
      const nx = this.p[i * 3] + this.v[i * 3] * dt, ny = this.p[i * 3 + 1] + this.v[i * 3 + 1] * dt, nz = this.p[i * 3 + 2] + this.v[i * 3 + 2] * dt;
      if (this.grav[i] > 0 && vol && vol.sample(nx, ny, nz) < 0) {
        this.v[i * 3] *= 0.4; this.v[i * 3 + 1] *= -0.25; this.v[i * 3 + 2] *= 0.4;
      } else {
        this.p[i * 3] = nx; this.p[i * 3 + 1] = ny; this.p[i * 3 + 2] = nz;
      }
      if (this.spin[i] > 0) this.spin[i] += dt * 2;
    }
    this.count = n;
    const pa = this.posAttr.array, sa = this.sizeAttr.array, ca = this.colAttr.array, spa = this.spinAttr.array;
    for (let i = 0; i < n; i++) {
      const t = this.life[i] / this.maxLife[i];
      pa[i * 3] = this.p[i * 3]; pa[i * 3 + 1] = this.p[i * 3 + 1]; pa[i * 3 + 2] = this.p[i * 3 + 2];
      sa[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      ca[i * 4] = this.col[i * 4]; ca[i * 4 + 1] = this.col[i * 4 + 1]; ca[i * 4 + 2] = this.col[i * 4 + 2];
      const fadeIn = Math.min(1, t * 8);
      ca[i * 4 + 3] = this.alpha0[i] * fadeIn * (1 - t) * (1 - t * 0.3);
      spa[i] = this.spin[i];
    }
    this.points.geometry.setDrawRange(0, n);
    this.posAttr.needsUpdate = true; this.sizeAttr.needsUpdate = true; this.colAttr.needsUpdate = true; this.spinAttr.needsUpdate = true;
    this.posAttr.clearUpdateRanges(); this.posAttr.addUpdateRange(0, n * 3);
    this.sizeAttr.clearUpdateRanges(); this.sizeAttr.addUpdateRange(0, n);
    this.colAttr.clearUpdateRanges(); this.colAttr.addUpdateRange(0, n * 4);
    this.spinAttr.clearUpdateRanges(); this.spinAttr.addUpdateRange(0, n);
  }

  copy(from, to) {
    if (from === to) return;
    for (let k = 0; k < 3; k++) { this.p[to * 3 + k] = this.p[from * 3 + k]; this.v[to * 3 + k] = this.v[from * 3 + k]; }
    for (let k = 0; k < 4; k++) this.col[to * 4 + k] = this.col[from * 4 + k];
    this.life[to] = this.life[from]; this.maxLife[to] = this.maxLife[from];
    this.size0[to] = this.size0[from]; this.size1[to] = this.size1[from];
    this.drag[to] = this.drag[from]; this.grav[to] = this.grav[from]; this.spin[to] = this.spin[from];
    this.alpha0[to] = this.alpha0[from];
  }

  clear() { this.count = 0; }
}
