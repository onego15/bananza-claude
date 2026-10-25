import * as THREE from 'three';
import { Noise3 } from '../core/noise.js';
import { Volume, MAT, MAT_INFO } from '../terrain/volume.js';
import { Terrain } from '../terrain/terrain.js';
import { Decor } from './decor.js';
import {
  Sunstone, GoldPool, HeartPickup, RuneStone, Gate, Relic, Checkpoint, Sign, Urn, Brazier, GodRay, Skylight,
  ExitShaft, Shimmer, Boulder, Beacon, Cage, Liquid, Seal, SunCore,
} from './entities.js';
import { Grub, Bat, Golem } from '../actors/enemies.js';
import { Boss } from '../actors/boss.js';

const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();

export class World {
  constructor(game, def) {
    this.game = game;
    this.def = def;
    this.theme = def.theme;
    this.scene = game.scene;
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.noise = new Noise3(def.seed);
    this.fx = game.fx;
    this.entities = [];
    this.lights = [];
    this.edits = [];
    this.time = 0;
    this.echoT = -1;
  }

  async load(progress) {
    const def = this.def;
    const vol = (this.vol = new Volume(Math.round(def.size[0] / def.voxel) + 1, Math.round(def.size[1] / def.voxel) + 1, Math.round(def.size[2] / def.voxel) + 1, def.voxel));
    const builder = def.build(this.noise);
    const fn = builder.build();
    // fill in slices so the loading bar can update
    const { nx, ny, nz, s, f, m } = vol;
    const out = [0, 0];
    let t0 = performance.now();
    for (let k = 0; k < nz; k++) {
      for (let j = 0; j < ny; j++) {
        let n = j * nx + k * vol.sxy;
        for (let i = 0; i < nx; i++, n++) {
          if (i === 0 || j === 0 || k === 0 || i === nx - 1 || j === ny - 1 || k === nz - 1) { f[n] = -4; m[n] = MAT.BEDROCK; continue; }
          fn(i * s, j * s, k * s, out);
          const d = out[0];
          f[n] = d > 4 ? 4 : d < -4 ? -4 : d;
          m[n] = out[1];
        }
      }
      if (performance.now() - t0 > 40) {
        progress?.(0.05 + 0.55 * (k / nz), '地形を生成中…');
        await new Promise((r) => setTimeout(r, 0));
        t0 = performance.now();
      }
    }
    // re-apply saved terrain edits so the world remembers what you broke
    const saved = this.game.save.edits(def.id);
    for (const e of saved) vol.carve(e[0], e[1], e[2], e[3], { power: e[4], gauntlet: !!e[5], noise: this.noise, rough: 0.35 });
    this.edits = saved.slice();

    this.terrain = new Terrain(vol, this.theme);
    await this.terrain.buildAllAsync((p) => progress?.(0.6 + 0.25 * p, 'メッシュを構築中…'));
    this.root.add(this.terrain.group);

    progress?.(0.86, '植物と鉱石を配置中…');
    await new Promise((r) => setTimeout(r, 0));
    this.decor = new Decor(this.root, this);
    if (def.decor === 'crystal') this.decor.setupCrystal();
    else if (def.decor === 'temple') this.decor.setupTemple();
    else this.decor.setupVerdant();

    progress?.(0.93, '生き物を配置中…');
    await new Promise((r) => setTimeout(r, 0));
    this.gold = new GoldPool(this);
    this.root.add(this.gold.mesh);
    this.setupLighting();
    this.spawnEntities();
    progress?.(1, '準備完了');
  }

  setupLighting() {
    const th = this.theme;
    this.scene.fog = new THREE.FogExp2(th.fog, th.fogDensity);
    this.scene.background = new THREE.Color(th.bg);
    this.hemi = new THREE.HemisphereLight(th.hemiSky, th.hemiGround, th.hemiInt);
    this.root.add(this.hemi);
    const key = (this.key = new THREE.DirectionalLight(th.keyColor, th.keyInt));
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const sc = key.shadow.camera;
    sc.left = -16; sc.right = 16; sc.top = 16; sc.bottom = -16; sc.near = 1; sc.far = 80;
    key.shadow.bias = -0.0008; key.shadow.normalBias = 0.04;
    key.shadow.radius = 3;
    this.keyDir = new THREE.Vector3(...th.keyDir).normalize();
    this.root.add(key, key.target);
    // pooled point lights (fixed count => no shader recompiles)
    for (let i = 0; i < 6; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 10, 1.8);
      this.root.add(l);
      this.lights.push(l);
    }
    // player fill light: keeps the hero readable in dark tunnels
    this.playerLight = new THREE.PointLight(th.playerLight ?? 0xffe0b0, th.playerLightInt ?? 6, 9, 1.6);
    this.root.add(this.playerLight);
  }

  // place grounded props exactly on the generated surface (noise displaces floors a little)
  snapToFloor(d) {
    const [x, y, z] = d.pos;
    const t = this.vol.raycast(x, y + 2.0, z, 0, -1, 0, 5);
    if (t >= 0) d.pos = [x, y + 2.0 - t, z];
  }

  spawnEntities() {
    let urnSeed = 0;
    const GROUNDED = new Set(['sign', 'urn', 'brazier', 'checkpoint', 'rune', 'relic', 'beacon', 'cage', 'grub', 'golem', 'gate']);
    for (const d0 of this.def.entities) {
      const d = { ...d0 };
      if (GROUNDED.has(d.type)) this.snapToFloor(d);
      let e = null;
      switch (d.type) {
        case 'spawn': this.spawnPoint = d; break;
        case 'sunstone': if (!this.game.save.hasSunstone(d.id)) e = new Sunstone(this, d); break;
        case 'rune': e = new RuneStone(this, d); break;
        case 'gate': e = new Gate(this, d); break;
        case 'relic': e = new Relic(this, d); break;
        case 'checkpoint': e = new Checkpoint(this, d); break;
        case 'sign': case 'hint': e = new Sign(this, d); break;
        case 'urn': e = new Urn(this, d, urnSeed++); break;
        case 'brazier': e = new Brazier(this, d); break;
        case 'godray': e = new GodRay(this, d); break;
        case 'skylight': e = new Skylight(this, d); break;
        case 'exitShaft': e = new ExitShaft(this, d); break;
        case 'shimmer': e = new Shimmer(this, d); break;
        case 'boulder': e = new Boulder(this, d); break;
        case 'beacon': e = new Beacon(this, d); break;
        case 'cage': e = new Cage(this, d); break;
        case 'liquid': e = new Liquid(this, d); break;
        case 'grub': e = new Grub(this, d); break;
        case 'bat': e = new Bat(this, d); break;
        case 'golem': e = new Golem(this, d); break;
        case 'seal': e = new Seal(this, d); break;
        case 'suncore': e = new SunCore(this, d); break;
        case 'boss': if (!this.game.save.flag('boss_defeated')) e = new Boss(this, d); break;
        default: break;
      }
      if (e) { e.id = e.id ?? d.id; this.add(e); }
    }
    for (const e of this.entities) if (e instanceof Gate) e.refresh();
  }

  add(e) { this.entities.push(e); this.root.add(e.group); return e; }

  // ---------------------------------------------------------------- digging
  dig(center, r, opts = {}) {
    const save = this.game.save;
    const gauntlet = save.has('gauntlet');
    const power = opts.power ?? 1;
    const res = this.vol.carve(center.x, center.y, center.z, r, { power: 1, gauntlet, noise: this.noise, rough: 0.35 });
    let total = 0;
    for (let i = 0; i < 8; i++) total += res.removed[i];
    if (res.changed) {
      this.terrain.markDirty(res.bounds, true);
      const b = res.bounds;
      this.terrain.markDirty([b[0] - 6, b[1] - 6, b[2] - 6, b[3] + 6, b[4] + 6, b[5] + 6], false);
      this.edits.push([+center.x.toFixed(2), +center.y.toFixed(2), +center.z.toFixed(2), +r.toFixed(2), 1, gauntlet ? 1 : 0]);
      if (this.edits.length > 6000) this.edits.shift();
      this.game.save.markEdits(this.def.id, this.edits);
      this.game.stats.dug += total;
    }
    const dir = opts.dir || new THREE.Vector3(0, -1, 0);
    if (!opts.silent) {
      this.fx.terrainImpact(center, dir, res.removed, power, res.blocked > 0 && total < 3);
      // sound: dominant material
      let best = -1, bn = 0;
      for (let i = 0; i < 8; i++) if (res.removed[i] > bn) { bn = res.removed[i]; best = i; }
      const audio = this.game.audio;
      if (best === MAT.CRYSTAL) audio.play('impact_crystal', { power });
      else if (best === MAT.DIRT) audio.play('impact_dirt', { power: Math.min(1.4, 0.6 + total / 40) });
      else if (best >= 0) audio.play('impact_rock', { power: Math.min(1.4, 0.6 + total / 40) });
      else if (res.blocked) audio.play('impact_metal');
      else audio.play('impact_rock', { power: 0.4 });
    }
    // drops from ore
    const goldN = Math.min(14, Math.round(res.removed[MAT.GOLD] * 0.45));
    if (goldN > 0) this.gold.spawn(center, goldN, 4);
    const crystN = Math.min(6, Math.round(res.removed[MAT.CRYSTAL] * 0.2));
    if (crystN > 0) this.gold.spawn(center, crystN, 4);
    this.decor.onDig(center, r);
    for (const e of this.entities) if (e.alive) e.onDig(center, r);
    return { ...res, total };
  }

  blockedFeedback(p, player) {
    const m = this.vol.materialAt(p.x, p.y, p.z);
    const now = performance.now();
    if (now - (this.lastBlockMsg || 0) < 2500) return;
    this.lastBlockMsg = now;
    if (m === MAT.HARD) this.game.hud.toast('硬すぎる！ 特別な籠手が必要だ', 'warn');
    else if (m === MAT.ANCIENT) this.game.hud.toast('古代石はびくともしない', 'warn');
    else if (m === MAT.BEDROCK) this.game.hud.toast('岩盤は壊せない', 'warn');
  }

  // ---------------------------------------------------------------- combat queries
  hitEntities(origin, dir, range, radius, dmg, src, big) {
    let any = false;
    for (const e of this.entities) {
      if (!e.alive) continue;
      if (e.hitTest) { const part = e.hitTest(origin, dir, range, radius); if (part && e.hitPart(part, dmg)) any = true; continue; }
      if (!e.hitSphere) continue;
      const c = e.hitSphere.c;
      tmp.copy(c).sub(origin);
      const t = Math.max(0, Math.min(range, tmp.dot(dir)));
      tmp2.copy(origin).addScaledVector(dir, t);
      if (tmp2.distanceTo(c) < e.hitSphere.r + radius) {
        if (e.hit(dmg, dir, src, big)) any = true;
      }
    }
    return any;
  }

  hitEntitiesRadius(c, r, dmg, src, big) {
    let any = false;
    for (const e of this.entities) {
      if (!e.alive) continue;
      if (e.hitTest) {
        if (e.state === 'stagger' && e.coreSphere.c.distanceTo(c) < r + 1.5) { if (e.hitPart('core', dmg)) any = true; }
        else for (let i = 0; i < 2; i++) if (e.fistSpheres[i].c.distanceTo(c) < r + 1) { if (e.hitPart('fist' + i, dmg)) any = true; break; }
        continue;
      }
      if (!e.hitSphere) continue;
      const d = e.hitSphere.c.distanceTo(c);
      if (d < r + e.hitSphere.r) {
        const dir = tmp.copy(e.hitSphere.c).sub(c).setY(0);
        if (dir.lengthSq() < 1e-4) dir.set(1, 0, 0);
        dir.normalize();
        if (e.hit(dmg, dir.clone(), src, big)) any = true;
      }
    }
    return any;
  }

  // push an actor (spheres stacked at heights) out of prop colliders
  collideActor(pos, R, heights, vel) {
    let result = null;
    for (const e of this.entities) {
      const col = e.collider;
      if (!e.alive || !col) continue;
      if (col.sphere) {
        for (const h of heights) {
          tmp.set(pos.x, pos.y + h, pos.z).sub(col.c);
          const d = tmp.length();
          if (d < R + col.r && d > 1e-4) {
            tmp.multiplyScalar((R + col.r - d) / d);
            pos.add(tmp);
            const n = tmp.normalize();
            const vn = vel.dot(n);
            if (vn < 0) vel.addScaledVector(n, -vn);
            result = result || {};
            if (n.y > 0.6) result.ground = true;
          }
        }
        continue;
      }
      const mn = col.min, mx = col.max;
      for (const h of heights) {
        const cy = pos.y + h;
        const qx = Math.max(mn.x, Math.min(pos.x, mx.x)), qy = Math.max(mn.y, Math.min(cy, mx.y)), qz = Math.max(mn.z, Math.min(pos.z, mx.z));
        let dx = pos.x - qx, dy = cy - qy, dz = pos.z - qz;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < R * R) {
          let d = Math.sqrt(d2);
          if (d < 1e-4) {
            // centre inside box: push out on smallest axis (prefer up)
            const up = mx.y - cy + R;
            dx = 0; dy = 1; dz = 0; d = 0;
            pos.y += Math.min(up, 0.5);
          } else {
            const push = R - d;
            dx /= d; dy /= d; dz /= d;
            pos.x += dx * push; pos.y += dy * push; pos.z += dz * push;
          }
          const vn = vel.x * dx + vel.y * dy + vel.z * dz;
          if (vn < 0) { vel.x -= dx * vn; vel.y -= dy * vn; vel.z -= dz * vn; }
          result = result || {};
          if (dy > 0.6) result.ground = true;
        }
      }
    }
    return result;
  }

  propGroundBelow(pos, dist) {
    for (const e of this.entities) {
      const col = e.collider;
      if (!e.alive || !col || col.sphere) continue;
      if (pos.x > col.min.x - 0.2 && pos.x < col.max.x + 0.2 && pos.z > col.min.z - 0.2 && pos.z < col.max.z + 0.2) {
        const gap = pos.y - col.max.y;
        if (gap >= -0.05 && gap <= dist) return Math.max(0, gap);
      }
    }
    return null;
  }

  boulderHits(b) {
    for (const e of this.entities) {
      if (e instanceof Cage && !e.broken && e.alive) {
        if (Math.hypot(b.pos.x - e.pos.x, b.pos.z - e.pos.z) < e.r + b.r * 0.8 && b.pos.y < e.pos.y + e.h + b.r + 0.5) e.smash();
      } else if ((e instanceof Grub || e instanceof Golem) && e.alive && e.pos.distanceTo(b.pos) < b.r + 1) e.hit(5, b.vel.clone().normalize(), b, true);
    }
    const p = this.game.player;
    if (b.vel.length() > 3 && p.pos.distanceTo(b.pos) < b.r + 0.6) p.hurt(b.pos, 1);
  }

  // ---------------------------------------------------------------- game events
  collectSunstone(s) {
    this.game.save.addSunstone(s.id);
    this.game.audio.play('sunstone');
    this.game.hud.sunstone(this.game.save.sunstoneCount());
    this.game.hitstop(0.12);
    this.game.onSunstone();
  }

  collectGold(n) {
    this.game.save.data.gold += n;
    this.game.hud.gold(this.game.save.data.gold);
    this.game.audio.play('gold');
  }

  spawnHeart(p) { this.add(new HeartPickup(this, { pos: [p.x, p.y, p.z] })); }

  countSwitches(groupId) {
    let n = 0;
    for (const e of this.entities) if (e.groupId === groupId && (e instanceof RuneStone || e instanceof Beacon) && e.active) n++;
    return n;
  }

  onSwitch(groupId) {
    for (const e of this.entities) if (e instanceof Gate && e.groupId === groupId) e.refresh();
    this.game.onSwitch(groupId, this.countSwitches(groupId));
  }

  onPlayerFell(player, kind) {
    if (player.dead || this.fallLock) return;
    this.fallLock = true;
    this.game.audio.play(kind === 'lava' ? 'hurt' : 'fall');
    this.game.respawnAfterFall(kind);
    setTimeout(() => (this.fallLock = false), 1200);
  }

  echo(player) {
    if (this.echoT >= 0 && this.echoT < 1.2) return;
    this.echoT = 0;
    this.echoOrigin = player.pos.clone().setY(player.pos.y + 1);
    this.game.audio.play('echo');
    this.fx.ring(player.pos, 6, 0.5, 0x8fe8ff);
    player.model.J.torso.rotation.x = -0.2;
  }

  // ---------------------------------------------------------------- per-frame
  update(dt, camera) {
    this.time += dt;
    const player = this.game.player;
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const e = this.entities[i];
      if (e.alive) e.update(dt);
      if (!e.alive) this.entities.splice(i, 1);
    }
    this.gold.update(dt, player);
    this.decor.update(dt, this.time);
    this.terrain.flushDirty(5);
    const u = this.terrain.material.userData.uniforms;
    u.uTime.value = this.time;

    // echo pulse: sweeping ring reveals buried sunstones through the ground
    if (this.echoT >= 0) {
      this.echoT += dt;
      const radius = this.echoT * 22;
      u.uReveal.value.set(this.echoOrigin.x, this.echoOrigin.y, this.echoOrigin.z, radius);
      for (const e of this.entities) {
        if (e instanceof Sunstone && e.buried && !e.revealed && e.pos.distanceTo(this.echoOrigin) < radius) {
          e.revealed = true;
          this.game.hud.ping(e.pos, 6);
        }
      }
      if (this.echoT > 1.6) { this.echoT = -1; u.uReveal.value.w = 0; for (const e of this.entities) if (e instanceof Sunstone) e.revealed = false; }
    }

    // key light + shadow follow the player
    const pp = player.pos;
    this.key.position.set(pp.x + this.keyDir.x * 30, pp.y + this.keyDir.y * 30, pp.z + this.keyDir.z * 30);
    this.key.target.position.set(pp.x, pp.y, pp.z);
    this.playerLight.position.set(pp.x, pp.y + 2.4, pp.z);

    // assign pooled point lights to the closest light sources
    const cands = [];
    for (const e of this.entities) {
      const ls = e.lightSource;
      if (!e.alive || !ls || ls.intensity <= 0) continue;
      const d = ls.pos.distanceToSquared(pp);
      cands.push([d, ls]);
    }
    cands.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < this.lights.length; i++) {
      const l = this.lights[i];
      const c = cands[i];
      if (c && c[0] < 45 * 45) {
        const ls = c[1];
        l.position.copy(ls.pos);
        l.color.set(ls.color);
        // fade by distance so swapping lights is invisible
        const fade = 1 - Math.min(1, Math.max(0, (Math.sqrt(c[0]) - 30) / 15));
        l.intensity = ls.intensity * fade;
        l.distance = ls.range;
      } else l.intensity = 0;
    }
  }

  dispose() {
    this.scene.remove(this.root);
    this.terrain.dispose();
    this.root.traverse((o) => { if (o.isInstancedMesh) o.dispose?.(); });
  }
}
