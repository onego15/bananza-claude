import * as THREE from 'three';

// Procedural, seamless 3D-textured terrain material built on MeshStandardMaterial so it keeps
// three.js lighting, shadows and fog. Textures are evaluated from world position (no UVs), so
// freshly carved surfaces get consistent detail anywhere.

export function createTerrainMaterial(theme) {
  const uniforms = {
    uDirtA: { value: new THREE.Color(theme.dirtA) },
    uDirtB: { value: new THREE.Color(theme.dirtB) },
    uRockA: { value: new THREE.Color(theme.rockA) },
    uRockB: { value: new THREE.Color(theme.rockB) },
    uHard: { value: new THREE.Color(theme.hard) },
    uCrystal: { value: new THREE.Color(theme.crystal) },
    uGold: { value: new THREE.Color(theme.gold ?? 0xffc23d) },
    uBrick: { value: new THREE.Color(theme.brick) },
    uAncient: { value: new THREE.Color(theme.ancient) },
    uRune: { value: new THREE.Color(theme.rune) },
    uBedrock: { value: new THREE.Color(theme.bedrock) },
    uMoss: { value: new THREE.Color(theme.moss) },
    uMossAmt: { value: theme.mossAmt ?? 0.0 },
    uTime: { value: 0 },
    uCutA: { value: new THREE.Vector3() },
    uCutB: { value: new THREE.Vector3() },
    uCutR: { value: 0.0 },
    uReveal: { value: new THREE.Vector4(0, 0, 0, 0) }, // echo pulse: xyz center, w radius
  };

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.9,
    metalness: 0.0,
  });
  mat.userData.uniforms = uniforms;

  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        attribute vec4 wa;
        attribute vec4 wb;
        attribute float ao;
        varying vec4 vWa;
        varying vec4 vWb;
        varying float vAo;
        varying vec3 vWPos;
        varying vec3 vWNrm;`
      )
      .replace(
        '#include <worldpos_vertex>',
        `#include <worldpos_vertex>
        vWa = wa; vWb = wb; vAo = ao;
        vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vWNrm = normalize(mat3(modelMatrix) * objectNormal);`
      );
    // three only computes worldPosition in some configs; make sure it is always defined
    shader.vertexShader = shader.vertexShader.replace(
      '#include <worldpos_vertex>',
      '#include <worldpos_vertex>'
    );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform vec3 uDirtA, uDirtB, uRockA, uRockB, uHard, uCrystal, uGold, uBrick, uAncient, uRune, uBedrock, uMoss;
        uniform float uMossAmt, uTime, uCutR;
        uniform vec3 uCutA, uCutB;
        uniform vec4 uReveal;
        varying vec4 vWa;
        varying vec4 vWb;
        varying float vAo;
        varying vec3 vWPos;
        varying vec3 vWNrm;

        float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
        float vn(vec3 p) {
          vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(h13(i), h13(i + vec3(1,0,0)), f.x), mix(h13(i + vec3(0,1,0)), h13(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(h13(i + vec3(0,0,1)), h13(i + vec3(1,0,1)), f.x), mix(h13(i + vec3(0,1,1)), h13(i + vec3(1,1,1)), f.x), f.y), f.z);
        }
        float fbm3(vec3 p) { return vn(p) * 0.55 + vn(p * 2.03 + 7.1) * 0.3 + vn(p * 4.1 + 3.3) * 0.15; }
        // cellular noise: returns distance to nearest feature point
        vec2 cell3(vec3 p) {
          vec3 i = floor(p); vec3 f = fract(p);
          float d1 = 8.0, d2 = 8.0;
          for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
            vec3 o = vec3(float(x), float(y), float(z));
            vec3 r = o + vec3(h13(i + o), h13(i + o + 17.0), h13(i + o + 41.0)) - f;
            float d = dot(r, r);
            if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
          }
          return vec2(sqrt(d1), sqrt(d2));
        }
        float bayer4(vec2 p) {
          ivec2 q = ivec2(mod(p, 4.0));
          int i = q.x + q.y * 4;
          int b[16] = int[16](0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5);
          return (float(b[i]) + 0.5) / 16.0;
        }
        `
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        // --- camera cutaway: dither away terrain between camera and hero ---
        if (uCutR > 0.0) {
          vec3 ab = uCutB - uCutA;
          float t = clamp(dot(vWPos - uCutA, ab) / dot(ab, ab), 0.0, 1.0);
          float d = length(vWPos - (uCutA + ab * t));
          float r = uCutR * smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.84, 0.98, t));
          if (d < r) {
            float fade = smoothstep(r, r * 0.55, d);
            if (fade > bayer4(gl_FragCoord.xy)) discard;
          }
        }

        vec3 P = vWPos;
        vec3 Nw = normalize(vWNrm);
        float up = Nw.y;
        vec3 alb = vec3(0.0);
        float rough = 0.0;
        float hgt = 0.0;
        vec3 emi = vec3(0.0);
        float metal = 0.0;
        float n1 = fbm3(P * 1.3);
        float n2 = vn(P * 6.0);

        // DIRT
        if (vWa.x > 0.01) {
          float pebbles = smoothstep(0.62, 0.7, vn(P * 5.5 + 3.0));
          vec3 c = mix(uDirtA, uDirtB, smoothstep(0.25, 0.75, n1));
          c *= 0.85 + 0.3 * n2;
          c = mix(c, uRockA * 0.9, pebbles * 0.6);
          alb += c * vWa.x; rough += 0.95 * vWa.x; hgt += (n2 * 0.4 + pebbles * 0.6) * vWa.x;
        }
        // ROCK (layered strata)
        if (vWa.y > 0.01) {
          float strata = sin(P.y * 3.2 + n1 * 5.0) * 0.5 + 0.5;
          vec2 cc = cell3(P * 0.9);
          float crack = smoothstep(0.035, 0.0, cc.y - cc.x) * smoothstep(0.3, 0.6, vn(P * 0.7));
          vec3 c = mix(uRockA, uRockB, strata * 0.7 + n2 * 0.3);
          c *= 0.85 + 0.25 * n1;
          c *= 1.0 - crack * 0.35;
          alb += c * vWa.y; rough += 0.8 * vWa.y; hgt += (strata * 0.3 + n2 * 0.3 - crack) * vWa.y;
        }
        // HARD ROCK (dark, veined, slightly metallic)
        if (vWa.z > 0.01) {
          vec2 cc = cell3(P * 1.4);
          float facet = cc.x;
          float vein = smoothstep(0.04, 0.0, abs(vn(P * 2.0) - 0.5) - 0.0);
          vec3 c = uHard * (0.75 + 0.5 * facet);
          c += vec3(0.25, 0.45, 0.6) * vein * 0.35;
          alb += c * vWa.z; rough += 0.45 * vWa.z; hgt += (facet * 0.8) * vWa.z; metal += 0.25 * vWa.z;
          emi += uRune * vein * 0.12 * vWa.z;
        }
        // CRYSTAL ORE: clustered angular shards in dark host rock (stretched cells -> blade-like facets)
        if (vWa.w > 0.01) {
          float cluster = smoothstep(0.42, 0.62, vn(P * 0.55 + 3.0));
          vec3 Q = P * vec3(1.6, 0.7, 1.6) + vec3(vn(P * 0.8) * 1.5);
          vec2 cc = cell3(Q);
          float edge = cc.y - cc.x;
          float id = h13(floor(Q * 0.999 + 0.5));
          float gem = cluster * smoothstep(0.05, 0.22, edge) * step(0.35, id);
          vec3 host = mix(uRockA * 0.42, uRockB * 0.38, n2);
          vec3 gc = mix(uCrystal * 0.35, uCrystal * 0.85, smoothstep(0.1, 0.5, edge));
          vec3 c = mix(host, gc, gem);
          float pulse = 0.8 + 0.2 * sin(uTime * 1.3 + id * 6.28);
          alb += c * vWa.w; rough += mix(0.85, 0.12, gem) * vWa.w; hgt += (gem * 0.6 + edge * 0.3) * vWa.w; metal += gem * 0.2 * vWa.w;
          emi += uCrystal * gem * smoothstep(0.15, 0.45, edge) * 0.55 * pulse * vWa.w;
        }
        // GOLD ORE: thin branching veins plus scattered flakes, not polka dots
        if (vWb.x > 0.01) {
          float v1 = abs(fbm3(P * 0.9) - 0.5);
          float v2 = abs(vn(P * 2.3 + 11.0) - 0.5);
          float vein = smoothstep(0.045, 0.0, v1) + smoothstep(0.03, 0.0, v2) * smoothstep(0.12, 0.0, v1) * 0.8;
          vec2 cc = cell3(P * 4.5);
          float flake = smoothstep(0.16, 0.05, cc.x) * step(0.6, h13(floor(P * 4.5)));
          float nug = clamp(vein + flake, 0.0, 1.0);
          vec3 c = mix(uRockA * 0.6 * (0.8 + 0.4 * n2), uGold * 0.9, nug);
          alb += c * vWb.x; rough += mix(0.85, 0.22, nug) * vWb.x; hgt += nug * 0.6 * vWb.x; metal += nug * 0.95 * vWb.x;
          emi += uGold * nug * 0.08 * vWb.x;
        }
        // BRICK (3D masonry lattice)
        if (vWb.y > 0.01) {
          vec3 bs = vec3(1.0, 0.5, 1.0);
          vec3 q = P / bs;
          float row = floor(q.y);
          q.x += mod(row, 2.0) * 0.5;
          q.z += mod(row, 2.0) * 0.5;
          vec3 fq = fract(q);
          vec3 e = min(fq, 1.0 - fq) * bs;
          // mortar shows on faces of the lattice that the surface cuts through
          float ex = e.x, ey = e.y, ez = e.z;
          float m1 = min(ex, min(ey, ez));
          float mortar = smoothstep(0.045, 0.02, m1);
          vec3 bid = floor(q);
          float tint = h13(bid);
          vec3 c = uBrick * (0.78 + 0.35 * tint) * (0.85 + 0.25 * n2);
          c = mix(c, uBrick * 0.35, mortar);
          alb += c * vWb.y; rough += 0.85 * vWb.y; hgt += (1.0 - mortar) * 0.8 * vWb.y + n2 * 0.2 * vWb.y;
        }
        // ANCIENT rune stone (unbreakable): dark bevelled blocks with glowing engraved glyphs
        if (vWb.z > 0.01) {
          vec3 q = P * vec3(0.8, 1.0, 0.8);
          float row = floor(q.y);
          vec3 qq = q + vec3(mod(row, 2.0) * 0.5, 0.0, mod(row, 2.0) * 0.5);
          vec3 cid = floor(qq);
          vec3 fq = fract(qq);
          vec3 e3 = min(fq, 1.0 - fq);
          // only edges of the face plane matter: ignore the axis along the normal
          vec3 an = abs(Nw);
          float ex = an.x > 0.6 ? 1.0 : e3.x, ey = an.y > 0.6 ? 1.0 : e3.y, ez = an.z > 0.6 ? 1.0 : e3.z;
          float edge = min(ex, min(ey, ez));
          float groove = smoothstep(0.025, 0.07, edge);
          float tint = h13(cid);
          vec3 c = uAncient * (0.75 + 0.35 * tint) * (0.85 + 0.3 * n1) * mix(0.35, 1.0, groove);
          // runic glyphs carved into a few wall blocks (never floors)
          vec2 uv = an.x > an.z ? P.zy : P.xy;
          float glyph = 0.0;
          if (an.y < 0.55 && h13(cid + 5.0) > 0.8) {
            vec2 gc = floor(uv * 2.2);
            vec2 gf = fract(uv * 2.2) - 0.5;
            float h1 = h13(vec3(gc, 1.0)), h2 = h13(vec3(gc, 2.0)), h3 = h13(vec3(gc, 3.0));
            float stem = smoothstep(0.05, 0.025, abs(gf.x)) * step(abs(gf.y), 0.36);
            float s1 = h1 > 0.5 ? 1.0 : -1.0;
            float y1 = (h2 - 0.5) * 0.4;
            float b1 = smoothstep(0.05, 0.025, abs((gf.y - y1) - s1 * gf.x)) * step(0.0, gf.x * s1) * step(abs(gf.x), 0.24);
            float b2 = smoothstep(0.05, 0.025, abs((gf.y - y1 + 0.25) + s1 * gf.x)) * step(0.0, -gf.x * s1) * step(abs(gf.x), 0.2) * step(0.5, h3);
            glyph = max(stem, max(b1, b2)) * step(0.25, h3);
          }
          glyph *= groove;
          alb += c * vWb.z; rough += 0.45 * vWb.z; hgt += groove * 0.7 * vWb.z - glyph * 0.3 * vWb.z; metal += 0.15 * vWb.z;
          float pulse = 0.65 + 0.35 * sin(uTime * 1.5 + P.y * 0.6 + P.x * 0.2);
          emi += uRune * glyph * 0.75 * pulse * vWb.z;
        }
        // BEDROCK
        if (vWb.w > 0.01) {
          vec2 cc = cell3(P * 0.6);
          vec3 c = uBedrock * (0.7 + 0.6 * cc.x) * (0.85 + 0.3 * n2);
          alb += c * vWb.w; rough += 0.7 * vWb.w; hgt += cc.x * vWb.w;
        }

        // moss / lichen on upward faces of natural materials
        float natural = vWa.x + vWa.y + vWb.y;
        float mossMask = smoothstep(0.35, 0.8, up + (n1 - 0.5) * 0.9) * uMossAmt * natural;
        mossMask *= smoothstep(0.35, 0.6, vn(P * 0.7) + 0.15) * (0.75 + 0.25 * vn(P * 4.0));
        float mv = vn(P * 0.35 + 11.0);
        vec3 mossC = mix(uMoss * vec3(0.55, 0.62, 0.45), uMoss * vec3(1.15, 1.05, 0.55), mv) * (0.7 + 0.45 * vn(P * 9.0));
        alb = mix(alb, mossC, clamp(mossMask, 0.0, 1.0));
        rough = mix(rough, 1.0, mossMask);
        hgt += mossMask * vn(P * 12.0) * 0.6;

        // echo reveal ring
        if (uReveal.w > 0.0) {
          float dr = abs(length(P - uReveal.xyz) - uReveal.w);
          emi += vec3(0.4, 0.9, 1.0) * smoothstep(0.6, 0.0, dr) * 0.8 * (1.0 - smoothstep(10.0, 30.0, uReveal.w));
        }

        float aoT = vAo * vAo;
        diffuseColor.rgb = alb * mix(0.35, 1.0, aoT);
        float terrainRough = rough;
        float terrainMetal = metal;
        vec3 terrainEmi = emi;
        float terrainHgt = hgt;
        `
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        roughnessFactor = terrainRough;`
      )
      .replace(
        '#include <metalnessmap_fragment>',
        `#include <metalnessmap_fragment>
        metalnessFactor = terrainMetal;`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        {
          // derivative bump mapping from the procedural height (surface gradient)
          vec3 sp = -vViewPosition;
          vec3 dpx = dFdx(sp), dpy = dFdy(sp);
          float dhx = dFdx(terrainHgt), dhy = dFdy(terrainHgt);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
          float det = dot(dpx, r1);
          float fade = 1.0 - smoothstep(10.0, 28.0, length(sp));
          vec3 grad = sign(det) * (dhx * r1 + dhy * r2) * 0.06 * fade;
          normal = normalize(abs(det) * normal - grad);
        }`
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        totalEmissiveRadiance += terrainEmi;`
      )
      .replace(
        '#include <aomap_fragment>',
        `#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= mix(0.25, 1.0, aoT);
        reflectedLight.indirectSpecular *= aoT;`
      );
  };
  mat.customProgramCacheKey = () => 'terrain-v1';
  return mat;
}
