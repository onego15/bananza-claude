import * as THREE from 'three';
import {
  makeSunstone, goldGeometry, goldMaterial, makeHeart, makeRuneStone, makeGate, makePedestal, makeRelicItem,
  makeShrine, makeUrn, makeBrazier, makeSign, makeGodRay, glowSprite, makeBoulder, makeBeacon, makeCage,
} from './props.js';
import { clamp, damp } from '../core/noise.js';

const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();

export class Entity {
  constructor(world, def = {}) {
    this.world = world;
    this.def = def;
    this.alive = true;
    this.group = new THREE.Group();
    this.pos = new THREE.Vector3().fromArray(def.pos || [0, 0, 0]);
    this.group.position.copy(this.pos);
    this.hitSphere = null; // {c: Vector3, r}
    this.collider = null; // {min, max} AABB in world space
    this.lightSource = null; // {pos, color, intensity, range}
  }
  get game() { return this.world.game; }
  get player() { return this.world.game.player; }
  update() {}
  hit() { return false; }
  onDig() {}
  remove() { this.alive = false; this.group.parent?.remove(this.group); }
}

// ---------------------------------------------------------------------------
export class Sunstone extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.mesh = makeSunstone();
    this.group.add(this.mesh);
    this.t = Math.random() * 6;
    this.buried = true;
    this.hint = new THREE.Vector3();
    this.hintValid = false;
    this.lightSource = { pos: this.pos, color: 0xffb040, intensity: 8, range: 6 };
    this.checkBuried();
    this.collected = false;
    this.popT = 0;
  }
  checkBuried() {
    const vol = this.world.vol;
    const p = this.pos;
    this.buried = vol.sample(p.x, p.y + 0.2, p.z) < 0.15;
    this.lightSource.intensity = this.buried ? 0 : 8;
    if (this.buried) {
      // find nearest surface point to sparkle as a hint
      let best = 1e9;
      this.hintValid = false;
      for (let i = 0; i < 26; i++) {
        const a = (i / 26) * Math.PI * 2 * 3.7, u = (i / 25) * 2 - 1;
        const s = Math.sqrt(1 - u * u);
        const dx = Math.cos(a) * s, dy = u, dz = Math.sin(a) * s;
        for (let t = 0.3; t < 3.5; t += 0.2) {
          if (vol.sample(p.x + dx * t, p.y + dy * t, p.z + dz * t) > 0.1) {
            if (t < best) { best = t; this.hint.set(p.x + dx * t, p.y + dy * t, p.z + dz * t); this.hintValid = true; }
            break;
          }
        }
      }
    }
  }
  onDig(c, r) {
    if (this.pos.distanceTo(c) < r + 4) {
      const was = this.buried;
      this.checkBuried();
      if (was && !this.buried) {
        this.popT = 0.001;
        this.game.audio.play('gem');
        this.world.fx.puff(this.pos, 30, { color: new THREE.Color(1, 0.8, 0.3), speed: 6, size: 0.25, size1: 0.05, life: 1.2, additive: true });
        this.game.hud.toast('太陽石が姿を現した！', 'sun');
      }
    }
  }
  update(dt) {
    if (this.collected) return;
    this.t += dt;
    const ud = this.mesh.userData;
    const bob = this.buried ? 0 : Math.sin(this.t * 2) * 0.12;
    if (this.popT > 0) { this.popT += dt; }
    const pop = this.popT > 0 ? Math.max(0, Math.sin(Math.min(1, this.popT * 2) * Math.PI) * 0.8) : 0;
    this.mesh.position.y = 0.55 + bob + pop;
    ud.core.rotation.y += dt * 1.6;
    ud.r1.rotation.z += dt * 1.1; ud.r2.rotation.x += dt * 0.8;
    ud.glow.material.opacity = this.buried ? 0 : 0.6 + Math.sin(this.t * 4) * 0.15;
    ud.r1.visible = ud.r2.visible = !this.buried;
    // hint sparkles while buried
    if (this.buried && this.hintValid && Math.random() < dt * 5) {
      this.world.fx.glow.emit(this.hint.x + (Math.random() - 0.5) * 0.6, this.hint.y + Math.random() * 0.3, this.hint.z + (Math.random() - 0.5) * 0.6, 0, 0.6, 0,
        { life: 0.9, size: 0.35, size1: 0.0, color: new THREE.Color(1, 0.8, 0.35), alpha: 1, drag: 1 });
    }
    // collect
    const pl = this.player;
    if (!this.buried && pl.pos.distanceTo(tmp.copy(this.pos).setY(this.pos.y + 0.3)) < 1.5) this.collect();
  }
  collect() {
    this.collected = true;
    this.world.collectSunstone(this);
    this.world.fx.puff(this.pos.clone().setY(this.pos.y + 0.6), 50, { color: new THREE.Color(1, 0.85, 0.4), speed: 8, size: 0.3, size1: 0.02, life: 1.4, additive: true });
    this.world.fx.ring(this.pos, 4, 0.6, 0xffd070);
    this.remove();
  }
}

// ---------------------------------------------------------------------------
export class GoldPool {
  constructor(world) {
    this.world = world;
    this.max = 220;
    this.mesh = new THREE.InstancedMesh(goldGeometry(), goldMaterial(), this.max);
    this.mesh.count = 0;
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    this.items = [];
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.e = new THREE.Euler();
    this.s = new THREE.Vector3();
  }
  spawn(pos, n, speed = 5) {
    for (let i = 0; i < n; i++) {
      if (this.items.length >= this.max) return;
      const a = Math.random() * Math.PI * 2;
      this.items.push({
        p: pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.2, (Math.random() - 0.5) * 0.4)),
        v: new THREE.Vector3(Math.cos(a) * speed * (0.3 + Math.random() * 0.7), 4 + Math.random() * 4, Math.sin(a) * speed * (0.3 + Math.random() * 0.7)),
        r: Math.random() * 6, t: 0, mag: false,
      });
    }
  }
  update(dt, player) {
    const vol = this.world.vol;
    const pc = tmp.set(player.pos.x, player.pos.y + 0.9, player.pos.z);
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.t += dt;
      const d = it.p.distanceTo(pc);
      if (it.t > 0.45 && d < 3.2) it.mag = true;
      if (it.mag) {
        tmp2.copy(pc).sub(it.p).normalize().multiplyScalar(Math.min(22, 8 + it.t * 10));
        it.v.lerp(tmp2, 1 - Math.exp(-dt * 10));
        it.p.addScaledVector(it.v, dt);
        if (d < 0.6) { this.items.splice(i, 1); this.world.collectGold(1); continue; }
      } else {
        it.v.y -= 20 * dt;
        const nx = it.p.x + it.v.x * dt, ny = it.p.y + it.v.y * dt, nz = it.p.z + it.v.z * dt;
        if (vol.sample(nx, ny, nz) < 0.12) {
          it.v.multiplyScalar(0.45); it.v.y = Math.abs(it.v.y) * 0.5;
          if (vol.sample(it.p.x, it.p.y, it.p.z) < 0.05) it.p.y += 0.1;
        } else it.p.set(nx, ny, nz);
      }
      it.r += dt * 4;
      if (it.t > 25) { this.items.splice(i, 1); }
    }
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      this.q.setFromEuler(this.e.set(0.4, it.r, 0.2));
      const sc = it.t > 22 ? (25 - it.t) / 3 : 1;
      this.m.compose(tmp.copy(it.p).setY(it.p.y + 0.12 + Math.sin(it.r) * 0.04), this.q, this.s.set(sc, sc, sc));
      this.mesh.setMatrixAt(i, this.m);
    }
    this.mesh.count = this.items.length;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---------------------------------------------------------------------------
export class HeartPickup extends Entity {
  constructor(world, def) {
    super(world, def);
    this.mesh = makeHeart();
    this.group.add(this.mesh);
    this.vel = new THREE.Vector3((Math.random() - 0.5) * 3, 6, (Math.random() - 0.5) * 3);
    this.t = 0;
  }
  update(dt) {
    this.t += dt;
    const vol = this.world.vol;
    this.vel.y -= 18 * dt;
    const n = tmp.copy(this.pos).addScaledVector(this.vel, dt);
    if (vol.sample(n.x, n.y, n.z) < 0.3) this.vel.set(0, 0, 0); else this.pos.copy(n);
    this.group.position.copy(this.pos);
    this.mesh.position.y = 0.4 + Math.sin(this.t * 3) * 0.08;
    this.mesh.rotation.y += dt * 2;
    if (this.t > 0.4 && this.player.pos.distanceTo(this.pos) < 1.4) {
      const p = this.player;
      if (p.hp < p.maxHp) { p.hp = Math.min(p.maxHp, p.hp + 1); this.game.hud.pulseHearts(); }
      this.game.audio.play('gem');
      this.world.fx.puff(this.pos, 20, { color: new THREE.Color(1, 0.4, 0.5), speed: 4, size: 0.25, size1: 0.02, life: 0.8, additive: true });
      this.remove();
    }
    if (this.t > 30) this.remove();
  }
}

// ---------------------------------------------------------------------------
export class RuneStone extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.groupId = def.group;
    this.mesh = makeRuneStone(world.theme.rune);
    this.group.add(this.mesh);
    this.active = world.game.save.flag(def.id);
    this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 1.0), r: 0.9 };
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.6, this.pos.y, this.pos.z - 0.45), max: new THREE.Vector3(this.pos.x + 0.6, this.pos.y + 1.9, this.pos.z + 0.45) };
    this.lightSource = { pos: this.pos.clone().setY(this.pos.y + 1.6), color: world.theme.rune, intensity: 0, range: 7 };
    this.t = 0;
    this.applyVisual(1);
  }
  applyVisual(k) {
    const ud = this.mesh.userData;
    ud.glyphMat.emissiveIntensity = this.active ? 2.2 * k : 0.15;
    ud.glow.material.opacity = this.active ? 0.8 * k : 0;
    this.lightSource.intensity = this.active ? 10 : 0;
  }
  hit() {
    if (this.active) { this.game.audio.play('impact_metal'); return true; }
    this.active = true;
    this.game.save.setFlag(this.id);
    this.game.audio.play('rune');
    this.world.fx.puff(this.hitSphere.c, 40, { color: new THREE.Color(this.world.theme.rune), speed: 6, size: 0.3, size1: 0.02, life: 1.2, additive: true });
    this.world.fx.ring(this.pos, 5, 0.7, this.world.theme.rune);
    this.world.onSwitch(this.groupId);
    this.applyVisual(1);
    return true;
  }
  update(dt) {
    this.t += dt;
    if (this.active) {
      const k = 0.85 + Math.sin(this.t * 3) * 0.15;
      this.applyVisual(k);
      this.mesh.userData.gem.rotation.y += dt * 2;
    }
  }
}

// ---------------------------------------------------------------------------
export class Gate extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id; this.groupId = def.group; this.need = def.need;
    this.w = def.w; this.h = def.h;
    this.mesh = makeGate(def.w, def.h, world.theme.rune);
    this.group.add(this.mesh);
    this.open = world.game.save.flag(def.id);
    this.openT = this.open ? 1 : 0;
    this.collider = { min: new THREE.Vector3(this.pos.x - def.w / 2 - 0.3, this.pos.y - 1, this.pos.z - 0.45), max: new THREE.Vector3(this.pos.x + def.w / 2 + 0.3, this.pos.y + def.h, this.pos.z + 0.45) };
    this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 2), r: 2 };
    this.anim = false;
    this.refresh();
  }
  refresh() {
    const n = this.world.countSwitches(this.groupId);
    const lights = this.mesh.userData.lights;
    lights.forEach((l, i) => { l.material.emissiveIntensity = i < n ? 2.5 : 0.05; });
    if (!this.open && n >= this.need) this.startOpen();
  }
  startOpen() {
    this.open = true;
    this.anim = true;
    this.game.save.setFlag(this.id);
    this.game.audio.play('gate');
    this.game.cameraRig.shake(0.3);
    this.game.cutsceneLook(this.pos.clone().setY(this.pos.y + 2.5), 2.6);
    this.game.hud.toast('古代の扉が開いた！', 'rune');
  }
  hit() { if (!this.open) { this.game.audio.play('impact_metal'); this.game.hud.toast('ルーンストーンを3つ光らせよう', 'info'); } return true; }
  update(dt) {
    if (this.anim) {
      this.openT = Math.min(1, this.openT + dt / 2.4);
      if (Math.random() < 0.5) this.world.fx.puff(tmp.set(this.pos.x + (Math.random() - 0.5) * this.w, this.pos.y + 0.2, this.pos.z), 1, { color: new THREE.Color(0.6, 0.55, 0.5), speed: 1.5, size: 0.8, size1: 2, life: 1.2, alpha: 0.5 });
      if (this.openT >= 1) this.anim = false;
    }
    const ud = this.mesh.userData;
    const o = this.openT;
    ud.L.position.x = -ud.half / 2 - o * (ud.half * 0.95);
    ud.R.position.x = ud.half / 2 + o * (ud.half * 0.95);
    if (this.open && this.openT >= 1) { this.collider = null; this.hitSphere = null; }
  }
}

// ---------------------------------------------------------------------------
export class Relic extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.ped = makePedestal();
    this.group.add(this.ped);
    this.taken = world.game.save.has(def.id);
    this.item = makeRelicItem(def.id);
    this.item.position.y = 1.9;
    if (!this.taken) this.group.add(this.item);
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.9, this.pos.y, this.pos.z - 0.9), max: new THREE.Vector3(this.pos.x + 0.9, this.pos.y + 1.2, this.pos.z + 0.9) };
    this.lightSource = { pos: this.pos.clone().setY(this.pos.y + 2), color: 0x9ff4ff, intensity: this.taken ? 0 : 14, range: 8 };
    this.t = 0;
  }
  update(dt) {
    if (this.taken) return;
    this.t += dt;
    this.item.position.y = 1.95 + Math.sin(this.t * 2) * 0.1;
    this.item.rotation.y += dt;
    if (Math.random() < dt * 8) this.world.fx.glow.emit(this.pos.x + (Math.random() - 0.5), this.pos.y + 1.3, this.pos.z + (Math.random() - 0.5), 0, 1.2, 0, { life: 1.2, size: 0.2, size1: 0, color: new THREE.Color(0.6, 0.95, 1), alpha: 1, drag: 0.5 });
    if (this.player.pos.distanceTo(tmp.copy(this.pos).setY(this.pos.y + 0.6)) < 2.6) this.take();
  }
  take() {
    this.taken = true;
    this.group.remove(this.item);
    this.lightSource.intensity = 0;
    this.world.fx.puff(this.pos.clone().setY(this.pos.y + 2), 60, { color: new THREE.Color(0.6, 0.95, 1), speed: 7, size: 0.35, size1: 0.02, life: 1.5, additive: true });
    this.game.gainRelic(this.id);
  }
}

// ---------------------------------------------------------------------------
export class Checkpoint extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.mesh = makeShrine();
    this.group.add(this.mesh);
    this.lit = world.game.save.flag('cp_' + def.id);
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.25, this.pos.y, this.pos.z - 0.25), max: new THREE.Vector3(this.pos.x + 0.25, this.pos.y + 2.6, this.pos.z + 0.25) };
    this.lightSource = { pos: this.pos.clone().setY(this.pos.y + 2), color: 0xffa040, intensity: this.lit ? 12 : 0, range: 9 };
    this.t = Math.random() * 5;
    this.near = false;
    this.setLit(this.lit, true);
  }
  setLit(v, silent) {
    this.lit = v;
    const ud = this.mesh.userData;
    ud.flameMat.color.set(v ? 0xffd27a : 0x8a6a40);
    ud.glow.material.opacity = v ? 0.9 : 0;
    this.lightSource.intensity = v ? 12 : 0;
    if (v && !silent) {
      this.game.audio.play('checkpoint');
      this.world.fx.puff(this.pos.clone().setY(this.pos.y + 2), 40, { color: new THREE.Color(1, 0.75, 0.35), speed: 5, size: 0.3, size1: 0.02, life: 1.2, additive: true });
      this.game.hud.toast('チェックポイント — セーブしました', 'save');
    }
  }
  update(dt) {
    this.t += dt;
    const ud = this.mesh.userData;
    ud.flame.scale.setScalar(this.lit ? 1 + Math.sin(this.t * 12) * 0.08 + Math.sin(this.t * 7.3) * 0.06 : 0.7);
    ud.flame.rotation.y += dt * 2;
    const d = this.player.pos.distanceTo(this.pos);
    if (d < 2.6) {
      if (!this.lit) this.setLit(true);
      this.game.setCheckpoint(this);
      this.near = true;
    } else this.near = false;
    if (this.lit && Math.random() < dt * 6) this.world.fx.glow.emit(this.pos.x + (Math.random() - 0.5) * 0.2, this.pos.y + 2.1, this.pos.z + (Math.random() - 0.5) * 0.2, 0, 1.2, 0, { life: 0.8, size: 0.25, size1: 0, color: new THREE.Color(1, 0.6, 0.2), alpha: 1, drag: 0.5 });
  }
}

// ---------------------------------------------------------------------------
export class Sign extends Entity {
  constructor(world, def) {
    super(world, def);
    this.text = def.text;
    if (def.type === 'sign') {
      this.mesh = makeSign();
      this.mesh.castShadow = true;
      this.group.add(this.mesh);
      this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 1), r: 0.5 };
    }
    this.radius = def.type === 'hint' ? 3.2 : 3.0;
  }
  hit() { return true; }
  update() {
    const d = this.player.pos.distanceTo(this.pos);
    if (d < this.radius) this.game.hud.showSign(this.text, this);
    else this.game.hud.hideSign(this);
  }
}

// ---------------------------------------------------------------------------
export class Urn extends Entity {
  constructor(world, def, seed) {
    super(world, def);
    this.mesh = makeUrn(seed);
    this.group.add(this.mesh);
    this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 0.5), r: 0.55 };
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.35, this.pos.y, this.pos.z - 0.35), max: new THREE.Vector3(this.pos.x + 0.35, this.pos.y + 1.0, this.pos.z + 0.35) };
  }
  hit() { this.smash(); return true; }
  smash() {
    if (!this.alive) return;
    this.game.audio.play('urn');
    const c = this.hitSphere.c;
    this.world.fx.spawnDebris(c, new THREE.Vector3(), 10, new THREE.Color(0.75, 0.42, 0.25), 4, 0.6);
    this.world.fx.puff(c, 10, { color: new THREE.Color(0.7, 0.55, 0.4), speed: 3, size: 0.6, size1: 1.8, life: 0.8, alpha: 0.5 });
    this.world.gold.spawn(c, 4 + Math.floor(Math.random() * 4), 3);
    if (Math.random() < 0.25 && this.player.hp < this.player.maxHp) this.world.spawnHeart(c);
    this.remove();
  }
  onDig(c, r) {
    if (this.pos.distanceTo(c) < r + 0.3) this.smash();
    else if (this.world.vol.sample(this.pos.x, this.pos.y - 0.25, this.pos.z) > 0.1) this.smash();
  }
}

// ---------------------------------------------------------------------------
export class Brazier extends Entity {
  constructor(world, def) {
    super(world, def);
    this.mesh = makeBrazier();
    this.group.add(this.mesh);
    this.t = Math.random() * 10;
    this.lightSource = { pos: this.pos.clone().setY(this.pos.y + 1.6), color: 0xff8a3a, intensity: 14, range: 10 };
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.35, this.pos.y, this.pos.z - 0.35), max: new THREE.Vector3(this.pos.x + 0.35, this.pos.y + 1.2, this.pos.z + 0.35) };
  }
  update(dt) {
    this.t += dt;
    const f = 0.85 + Math.sin(this.t * 13) * 0.08 + Math.sin(this.t * 7.7) * 0.07;
    this.lightSource.intensity = 14 * f;
    this.mesh.userData.glow.material.opacity = 0.6 * f;
    if (Math.random() < dt * 30) {
      const x = this.pos.x + (Math.random() - 0.5) * 0.35, z = this.pos.z + (Math.random() - 0.5) * 0.35;
      this.world.fx.glow.emit(x, this.pos.y + 1.2, z, (Math.random() - 0.5) * 0.3, 1.6 + Math.random(), (Math.random() - 0.5) * 0.3,
        { life: 0.5 + Math.random() * 0.3, size: 0.55, size1: 0.1, color: new THREE.Color(1, 0.45 + Math.random() * 0.25, 0.12), alpha: 0.9, drag: 1 });
      if (Math.random() < 0.15) this.world.fx.dust.emit(x, this.pos.y + 1.6, z, 0, 1.2, 0, { life: 1.6, size: 0.5, size1: 1.6, color: new THREE.Color(0.25, 0.22, 0.2), alpha: 0.25, drag: 0.8 });
    }
  }
}

// ---------------------------------------------------------------------------
export class GodRay extends Entity {
  constructor(world, def) {
    super(world, def);
    this.mesh = makeGodRay(def.r, def.h, def.color ?? 0xfff1c4, def.opacity ?? 0.14);
    this.group.add(this.mesh);
  }
  update(dt) { this.mesh.material.uniforms.uTime.value += dt; }
}

export class Skylight extends Entity {
  constructor(world, def) {
    super(world, def);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(def.r * 1.05, 40), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.5, 1.25), fog: false }));
    disc.rotation.x = Math.PI / 2;
    this.group.add(disc);
    const s = glowSprite(0xfff4d0, def.r * 5, 0.5);
    s.position.y = -1;
    this.group.add(s);
    this.light = new THREE.SpotLight(0xfff0d0, 140, 40, 0.5, 0.6, 1.2);
    this.light.position.set(0, -0.5, 0);
    this.light.target.position.set(0, -25, 0);
    this.group.add(this.light, this.light.target);
  }
}

// ---------------------------------------------------------------------------
export class ExitShaft extends Entity {
  constructor(world, def) {
    super(world, def);
    this.x = def.pos[0]; this.z = def.pos[1]; this.y = def.y; this.r = def.r; this.to = def.to;
    this.done = false;
  }
  update() {
    const p = this.player.pos;
    if (!this.done && p.y < this.y && Math.hypot(p.x - this.x, p.z - this.z) < this.r + 1) {
      this.done = true;
      this.game.goToArea(this.to);
    }
  }
}

export class Shimmer extends Entity {
  update(dt) {
    if (this.world.vol.sample(this.pos.x, this.pos.y - 1.2, this.pos.z) > 0.2) return; // already dug
    if (Math.random() < dt * 4) {
      this.world.fx.glow.emit(this.pos.x + (Math.random() - 0.5) * 1.4, this.pos.y + 0.05, this.pos.z + (Math.random() - 0.5) * 1.4, 0, 0.5, 0,
        { life: 1, size: 0.3, size1: 0, color: new THREE.Color(this.world.theme.rune), alpha: 1, drag: 1 });
    }
  }
}

// ---------------------------------------------------------------------------
// Boulder resting on a breakable support; when the support is dug away it rolls/falls and
// smashes whatever is below (cages).
export class Boulder extends Entity {
  constructor(world, def) {
    super(world, def);
    this.r = def.r;
    this.mesh = makeBoulder(def.r);
    this.group.add(this.mesh);
    this.vel = new THREE.Vector3();
    this.state = world.game.save.flag(def.id) ? 'done' : 'rest';
    if (this.state === 'done' && def.endPos) { this.pos.fromArray(def.endPos); this.group.position.copy(this.pos); }
    this.updateCollider();
    this.hitSphere = { c: this.pos, r: def.r };
  }
  updateCollider() {
    const r = this.r * 0.9;
    this.collider = { sphere: true, c: this.pos, r };
  }
  hit() { this.game.audio.play('impact_rock'); this.world.fx.puff(this.pos, 6, { color: new THREE.Color(0.5, 0.48, 0.5), speed: 2, size: 0.6, size1: 1.5, life: 0.7, alpha: 0.4 }); this.checkSupport(true); return true; }
  onDig() { this.checkSupport(); }
  checkSupport(nudge) {
    if (this.state !== 'rest') return;
    const vol = this.world.vol;
    // supported if solid ground directly under the bottom
    let sup = 0;
    for (const [dx, dz] of [[0, 0], [0.5, 0], [-0.5, 0], [0, 0.5], [0, -0.5]]) if (vol.sample(this.pos.x + dx * this.r, this.pos.y - this.r - 0.3, this.pos.z + dz * this.r) < 0.2) sup++;
    if (sup <= 1) {
      this.state = 'fall';
      this.game.audio.play('golem');
      this.game.hud.toast('大岩が転がり落ちる！', 'info');
      this.game.cutsceneFollow?.(this, 2.8);
    }
  }
  update(dt) {
    if (this.state !== 'fall') return;
    const vol = this.world.vol;
    this.vel.y -= 25 * dt;
    const next = tmp.copy(this.pos).addScaledVector(this.vel, dt);
    const d = vol.sample(next.x, next.y, next.z);
    if (d < this.r) {
      const g = vol.gradient(next.x, next.y, next.z, { x: 0, y: 0, z: 0 });
      const push = this.r - d;
      next.x += g.x * push; next.y += g.y * push; next.z += g.z * push;
      const vn = this.vel.x * g.x + this.vel.y * g.y + this.vel.z * g.z;
      if (vn < -4) {
        this.game.cameraRig.shake(0.5);
        this.game.audio.play('slam');
        this.world.fx.puff(next.clone().setY(next.y - this.r), 25, { color: new THREE.Color(0.6, 0.55, 0.6), speed: 5, size: 1, size1: 3, life: 1.2, alpha: 0.5 });
        // carve a little where it lands
        this.world.dig(next.clone().addScaledVector(new THREE.Vector3(g.x, g.y, g.z), -this.r), this.r * 0.8, { silent: true, power: 1 });
      }
      if (vn < 0) { this.vel.x -= g.x * vn * 1.3; this.vel.y -= g.y * vn * 1.3; this.vel.z -= g.z * vn * 1.3; }
      // roll downhill
      this.vel.x += g.x * 12 * dt; this.vel.z += g.z * 12 * dt;
      this.vel.multiplyScalar(Math.exp(-dt * 0.8));
    }
    this.pos.copy(next);
    this.group.position.copy(this.pos);
    this.mesh.rotation.x += this.vel.z * dt / this.r;
    this.mesh.rotation.z -= this.vel.x * dt / this.r;
    this.world.boulderHits(this);
    if (this.vel.lengthSq() < 0.3 && d < this.r + 0.2) {
      this.restT = (this.restT || 0) + dt;
      if (this.restT > 1) { this.state = 'done'; this.game.save.setFlag(this.def.id); }
    }
    if (this.pos.y < -5) { this.state = 'done'; this.remove(); }
  }
}

export class Beacon extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id; this.groupId = def.group;
    this.mesh = makeBeacon(world.theme.crystal);
    this.group.add(this.mesh);
    this.active = world.game.save.flag(def.id);
    this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 1.8), r: 1.2 };
    this.collider = { min: new THREE.Vector3(this.pos.x - 0.9, this.pos.y, this.pos.z - 0.9), max: new THREE.Vector3(this.pos.x + 0.9, this.pos.y + 3.2, this.pos.z + 0.9) };
    this.lightSource = { pos: this.pos.clone().setY(this.pos.y + 2), color: world.theme.crystal, intensity: 0, range: 14 };
    this.caged = !!def.caged && !world.game.save.flag(def.id + '_cage');
    this.t = 0;
    this.apply(1);
  }
  apply(k) {
    const ud = this.mesh.userData;
    ud.mat.emissiveIntensity = this.active ? 2.4 * k : 0.06;
    ud.glow.material.opacity = this.active ? 0.85 * k : 0;
    this.lightSource.intensity = this.active ? 22 * k : 0;
  }
  hit() {
    if (this.caged) { this.game.audio.play('impact_metal'); this.game.hud.toast('頑丈な檻だ… 上から何か落とせないか？', 'info'); return true; }
    if (this.active) return true;
    this.active = true;
    this.game.save.setFlag(this.id);
    this.game.audio.play('rune');
    this.game.audio.play('impact_crystal');
    this.world.fx.puff(this.hitSphere.c, 60, { color: new THREE.Color(this.world.theme.crystal), speed: 8, size: 0.35, size1: 0.02, life: 1.5, additive: true });
    this.world.fx.ring(this.pos, 8, 0.8, this.world.theme.crystal);
    this.world.onSwitch(this.groupId);
    return true;
  }
  update(dt) {
    this.t += dt;
    const ud = this.mesh.userData;
    ud.crystal.rotation.y += dt * (this.active ? 1.2 : 0.2);
    ud.crystal.position.y = 1.8 + (this.active ? Math.sin(this.t * 2) * 0.1 : 0);
    if (this.active) this.apply(0.85 + Math.sin(this.t * 3) * 0.15);
  }
}

export class Cage extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.target = def.target;
    this.r = def.r ?? 1.6; this.h = def.h ?? 3.6;
    this.broken = world.game.save.flag(def.target + '_cage');
    if (!this.broken) {
      this.mesh = makeCage(this.r, this.h);
      this.group.add(this.mesh);
      this.collider = { min: new THREE.Vector3(this.pos.x - this.r, this.pos.y, this.pos.z - this.r), max: new THREE.Vector3(this.pos.x + this.r, this.pos.y + this.h + 0.6, this.pos.z + this.r) };
      this.hitSphere = { c: this.pos.clone().setY(this.pos.y + 1.6), r: this.r + 0.2 };
    }
  }
  hit() { this.game.audio.play('impact_metal'); this.world.fx.puff(this.hitSphere.c, 12, { color: new THREE.Color(1, 0.75, 0.35), speed: 8, size: 0.12, size1: 0.02, life: 0.4, additive: true, gravity: 10 }); this.game.hud.toast('頑丈な檻だ… 上から何か落とせないか？', 'info'); return true; }
  smash() {
    if (this.broken) return;
    this.broken = true;
    this.game.save.setFlag(this.target + '_cage');
    const b = this.world.entities.find((e) => e.id === this.target);
    if (b) b.caged = false;
    this.world.fx.spawnDebris(this.pos.clone().setY(this.pos.y + 1.5), new THREE.Vector3(), 30, new THREE.Color(0.55, 0.48, 0.35), 8, 1.2);
    this.world.fx.puff(this.pos.clone().setY(this.pos.y + 1.5), 40, { color: new THREE.Color(0.6, 0.55, 0.5), speed: 7, size: 1, size1: 3, life: 1.5, alpha: 0.6 });
    this.game.audio.play('boss_slam');
    this.game.hud.toast('檻が砕けた！', 'rune');
    this.collider = null; this.hitSphere = null;
    this.group.remove(this.mesh);
  }
}

// lava / deep water hazard plane
export class Liquid extends Entity {
  constructor(world, def) {
    super(world, def);
    this.kind = def.kind;
    const [w, d] = def.size;
    const geo = new THREE.PlaneGeometry(w, d, 64, 64);
    geo.rotateX(-Math.PI / 2);
    const lava = def.kind === 'lava';
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uA: { value: new THREE.Color(lava ? 0xff5a10 : 0x0f6a8a) },
        uB: { value: new THREE.Color(lava ? 0xffd040 : 0x6ff0ff) },
        fogColor: { value: new THREE.Color() }, fogDensity: { value: 0 },
      },
      vertexShader: `uniform float uTime; varying vec3 vW;
        #include <fog_pars_vertex>
        void main(){ vec3 p = position; p.y += sin(p.x*0.6+uTime*1.3)*0.06 + cos(p.z*0.7+uTime)*0.06; vec4 wp = modelMatrix*vec4(p,1.0); vW = wp.xyz; vec4 mvPosition = viewMatrix*wp; gl_Position = projectionMatrix*mvPosition;
        #include <fog_vertex>
        }`,
      fragmentShader: `uniform float uTime; uniform vec3 uA; uniform vec3 uB; varying vec3 vW;
        #include <fog_pars_fragment>
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
        void main(){ vec2 p = vW.xz*0.35; float a = n(p+uTime*0.15)*0.6+n(p*2.3-uTime*0.2)*0.4; float c = smoothstep(0.45,0.8,a);
          vec3 col = mix(uA, uB, c) * ${lava ? '2.2' : '0.9'};
          gl_FragColor = vec4(col, ${lava ? '1.0' : '0.82'});
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      transparent: !lava, fog: true,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.group.add(this.mesh);
    this.y = def.pos[1];
    this.bounds = [def.pos[0] - w / 2, def.pos[2] - d / 2, def.pos[0] + w / 2, def.pos[2] + d / 2];
    if (lava) this.lightSource = { pos: this.pos.clone().setY(this.y + 1.5), color: 0xff6020, intensity: 18, range: 14, dynamicNear: true };
  }
  update(dt) {
    this.mat.uniforms.uTime.value += dt;
    const p = this.player.pos;
    if (p.y < this.y - 0.3 && p.x > this.bounds[0] && p.x < this.bounds[2] && p.z > this.bounds[1] && p.z < this.bounds[3]) {
      this.world.onPlayerFell(this.player, this.kind);
    }
    if (this.kind === 'lava' && Math.random() < dt * 6) {
      const x = this.bounds[0] + Math.random() * (this.bounds[2] - this.bounds[0]), z = this.bounds[1] + Math.random() * (this.bounds[3] - this.bounds[1]);
      if (this.world.vol.sample(x, this.y + 0.2, z) > 0) this.world.fx.glow.emit(x, this.y + 0.1, z, 0, 1.5 + Math.random() * 2, 0, { life: 1, size: 0.25, size1: 0, color: new THREE.Color(1, 0.5, 0.1), alpha: 1, drag: 0.5 });
    }
    if (this.lightSource) this.lightSource.pos.set(clamp(p.x, this.bounds[0], this.bounds[2]), this.y + 1.5, clamp(p.z, this.bounds[1], this.bounds[3]));
  }
}

// slam-only seal over a shaft
export class Seal extends Entity {
  constructor(world, def) {
    super(world, def);
    this.id = def.id;
    this.r = def.r;
    this.broken = world.game.save.flag(def.id);
    if (!this.broken) {
      const geo = new THREE.CylinderGeometry(def.r, def.r * 1.05, 0.5, 24);
      const mat = new THREE.MeshStandardMaterial({ color: 0x5a5468, roughness: 0.7, emissive: 0x2a8fb0, emissiveIntensity: 0.0 });
      this.mesh = new THREE.Mesh(geo, mat);
      this.mesh.position.y = -0.05;
      this.mesh.receiveShadow = true;
      this.group.add(this.mesh);
      // glowing crack lines
      const cr = new THREE.Mesh(new THREE.RingGeometry(def.r * 0.3, def.r * 0.36, 6), new THREE.MeshBasicMaterial({ color: world.theme.rune }));
      cr.rotation.x = -Math.PI / 2; cr.position.y = 0.21;
      this.group.add(cr);
      this.collider = { min: new THREE.Vector3(this.pos.x - def.r, this.pos.y - 0.8, this.pos.z - def.r), max: new THREE.Vector3(this.pos.x + def.r, this.pos.y + 0.2, this.pos.z + def.r) };
      this.hitSphere = { c: this.pos.clone(), r: def.r };
    }
  }
  hit(dmg, dir, src, big) {
    if (this.broken) return false;
    if (src?.state === 'pound' && this.game.save.has('quake')) { this.shatter(); return true; }
    this.game.audio.play('impact_metal');
    this.game.hud.toast(this.game.save.has('quake') ? '高い所から急降下パンチ（空中で右クリック）だ！' : 'びくともしない… もっと強烈な一撃が必要だ', 'info');
    return true;
  }
  shatter() {
    this.broken = true;
    this.game.save.setFlag(this.id);
    this.collider = null; this.hitSphere = null;
    this.group.clear();
    this.world.fx.spawnDebris(this.pos, new THREE.Vector3(0, 1, 0), 26, new THREE.Color(0.4, 0.38, 0.45), 6, 1.3);
    this.world.fx.puff(this.pos, 40, { color: new THREE.Color(0.6, 0.6, 0.7), speed: 6, size: 1, size1: 3, life: 1.2, alpha: 0.6 });
    this.game.audio.play('boss_slam');
    this.game.hud.toast('封印が砕けた！', 'rune');
  }
}

// The Sun Core: dormant stone orb until the boss falls, then it ignites and floods the world with light.
export class SunCore extends Entity {
  constructor(world, def) {
    super(world, def);
    this.isSunCore = true;
    const lit = world.game.save.flag('boss_defeated');
    this.mat = new THREE.MeshStandardMaterial({ color: 0x8a7a6a, roughness: 0.6, emissive: 0xffa030, emissiveIntensity: lit ? 3 : 0.15, flatShading: true });
    this.orb = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2, 2), this.mat);
    this.group.add(this.orb);
    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xffc860, transparent: true, opacity: lit ? 0.8 : 0.15, blending: THREE.AdditiveBlending, depthWrite: false });
    this.rings = [];
    for (let i = 0; i < 3; i++) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(3.2 + i * 0.7, 0.08, 8, 64), this.ringMat);
      r.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      this.group.add(r); this.rings.push(r);
    }
    this.glow = glowSprite(0xffb040, 14, lit ? 0.9 : 0.1);
    this.group.add(this.glow);
    this.lightSource = { pos: this.pos, color: 0xffb060, intensity: lit ? 120 : 6, range: 40 };
    this.lit = lit;
    this.t = 0;
  }
  ignite() {
    this.lit = true;
    this.igniteT = 0;
    this.world.fx.puff(this.pos, 120, { color: new THREE.Color(1, 0.8, 0.4), speed: 14, size: 0.6, size1: 0.05, life: 2.5, additive: true });
    this.world.fx.ring(this.pos, 30, 2, 0xffd080, 1);
    this.game.cameraRig.shake(0.6);
  }
  update(dt) {
    this.t += dt;
    this.orb.rotation.y += dt * 0.3;
    this.rings.forEach((r, i) => { r.rotation.x += dt * (0.3 + i * 0.2); r.rotation.y += dt * 0.2; });
    if (this.lit) {
      this.igniteT = Math.min(1, (this.igniteT ?? 1) + dt / 3);
      const k = this.igniteT;
      this.mat.emissiveIntensity = 0.15 + k * 3.5;
      this.mat.color.setRGB(1, 0.9, 0.6);
      this.ringMat.opacity = 0.15 + k * 0.65;
      this.glow.material.opacity = 0.1 + k * 0.85;
      this.glow.scale.setScalar(14 + k * 10 + Math.sin(this.t * 2) * 1.5);
      this.lightSource.intensity = 6 + k * 160;
      // flood the world with warm light
      const w = this.world;
      w.hemi.intensity = damp(w.hemi.intensity, w.theme.hemiInt * (1 + k * 1.4), 2, dt);
      if (w.scene.fog) w.scene.fog.color.lerp(new THREE.Color(0x6a4a2a), dt * 0.5 * k);
      if (Math.random() < dt * 20 * k) this.world.fx.glow.emit(this.pos.x + (Math.random() - 0.5) * 30, this.pos.y + 5, this.pos.z + (Math.random() - 0.5) * 30, 0, -2, 0, { life: 4, size: 0.3, size1: 0.1, color: new THREE.Color(1, 0.85, 0.5), alpha: 1, drag: 0.2 });
    } else {
      this.mat.emissiveIntensity = 0.15 + Math.sin(this.t * 1.2) * 0.08;
    }
  }
}

export { damp };
