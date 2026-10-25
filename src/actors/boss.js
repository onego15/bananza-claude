import * as THREE from 'three';
import { S, V, part } from '../core/sdf.js';
import { Noise3, clamp, damp, lerp } from '../core/noise.js';
import { createToonishMaterial } from './heroModel.js';
import { Entity } from '../world/entities.js';
import { turnToward, angleDiff } from './player.js';
import { glowSprite, makeBoulder } from '../world/props.js';

// GRAVEMAW — the colossus of the sunken temple. Its sun-core is sealed behind rock armour.
// Pattern: slam (shockwave, fists get stuck) -> punch the fist crystals -> it staggers and
// kneels -> pound/punch the exposed core. Three phases, each adding attacks.

const nz = new Noise3(777);
const C = (h) => new THREE.Color(h);
const tmp = new THREE.Vector3();
const tmp2 = new THREE.Vector3();

function bossModel() {
  const mat = createToonishMaterial({ key: 'boss', rim: 0xffb070, rimStrength: 0.5 });
  const stone = (p, n) => {
    const crack = Math.abs(nz.noise(p.x * 1.5, p.y * 1.5, p.z * 1.5)) < 0.05;
    const moss = n && n.y > 0.5 && nz.noise(p.x * 2, p.y * 2, p.z * 2) > 0.1;
    if (crack) return C(0xff7a2a);
    if (moss) return C(0x5f7f3a).multiplyScalar(0.8 + 0.3 * (nz.noise(p.x * 9, p.y * 9, p.z * 9) * 0.5 + 0.5));
    return C(0x7d6a5c).multiplyScalar(0.7 + 0.4 * (nz.noise(p.x * 3, p.y * 3, p.z * 3) * 0.5 + 0.5));
  };
  const torso = part([
    S.ellipsoid(V(0, 1.6, 0), V(1.7, 1.5, 1.25)),
    S.ellipsoid(V(0, 2.4, -0.3), V(2.0, 0.9, 1.2)),
    S.sphere(V(1.55, 2.6, -0.2), 0.85), S.sphere(V(-1.55, 2.6, -0.2), 0.85),
    S.ellipsoid(V(0, 0.55, 0), V(1.2, 0.6, 0.9)),
    S.sphere(V(0, 1.9, 1.15), 0.62, { sub: true, k: 0.15 }), // core socket
  ], stone, { cell: 0.09, k: 0.35 });
  const headG = part([
    S.box(V(0, 0.35, 0.1), V(0.75, 0.55, 0.65), 0.3),
    S.box(V(0, -0.05, 0.45), V(0.6, 0.2, 0.4), 0.15), // jaw
    S.capsule(V(0.6, 0.7, 0), V(1.1, 1.3, -0.3), 0.18, 0.05), // horns
    S.capsule(V(-0.6, 0.7, 0), V(-1.1, 1.3, -0.3), 0.18, 0.05),
    S.box(V(0, 0.45, 0.75), V(0.6, 0.08, 0.1), 0.04, { sub: true }),
  ], stone, { cell: 0.06, k: 0.15 });
  const upperArm = part([S.sphere(V(0, 0, 0), 0.75), S.capsule(V(0, -0.2, 0), V(0, -1.5, 0.1), 0.6, 0.55)], stone, { cell: 0.08, k: 0.2 });
  const foreArm = part([
    S.capsule(V(0, 0, 0), V(0, -1.3, 0.1), 0.55, 0.7),
    S.box(V(0, -1.9, 0.15), V(0.85, 0.7, 0.8), 0.35),
  ], stone, { cell: 0.08, k: 0.2 });
  const leg = part([S.capsule(V(0, 0, 0), V(0, -1.1, 0), 0.65, 0.6), S.box(V(0, -1.3, 0.3), V(0.65, 0.3, 0.9), 0.25)], stone, { cell: 0.08 });

  const root = new THREE.Group();
  const body = new THREE.Group(); body.position.y = 1.6; root.add(body);
  const add = (geo, parent) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; parent.add(m); return m; };
  add(torso, body);
  const head = new THREE.Group(); head.position.set(0, 3.3, 0.3); body.add(head); add(headG, head);
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffa040, emissiveIntensity: 3 });
  const eye = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.08), eyeMat); eye.position.set(0, 0.45, 0.78); head.add(eye);
  const arms = [];
  const crystMat = new THREE.MeshStandardMaterial({ color: 0x2a3a66, emissive: 0x6ff0ff, emissiveIntensity: 0.8, roughness: 0.1, flatShading: true });
  const fistCrystals = [];
  for (const sx of [1, -1]) {
    const sh = new THREE.Group(); sh.position.set(2.1 * sx, 2.6, -0.1); body.add(sh); add(upperArm, sh);
    const el = new THREE.Group(); el.position.set(0, -1.6, 0.1); sh.add(el); add(foreArm, el);
    const cg = new THREE.OctahedronGeometry(0.45, 0); cg.scale(0.8, 1.4, 0.8);
    const c = new THREE.Mesh(cg, crystMat.clone()); c.position.set(0, -1.7, 0.95); c.rotation.x = 1.2; el.add(c);
    fistCrystals.push(c);
    arms.push({ sh, el, side: sx });
  }
  const legs = [];
  for (const sx of [1, -1]) {
    const l = new THREE.Group(); l.position.set(0.85 * sx, 0.2, 0); body.add(l); add(leg, l); legs.push(l);
  }
  // core + armour plates
  const coreMat = new THREE.MeshStandardMaterial({ color: 0xffe0a0, emissive: 0xff9a2a, emissiveIntensity: 3, roughness: 0.2 });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), coreMat); core.position.set(0, 1.9, 1.05); body.add(core);
  const coreGlow = glowSprite(0xffa040, 3.5, 0.7); coreGlow.position.copy(core.position); body.add(coreGlow);
  const plateG = part([S.box(V(0, 0, 0), V(0.75, 0.75, 0.22), 0.15)], stone, { cell: 0.05 });
  const plate = new THREE.Mesh(plateG, mat); plate.position.set(0, 1.9, 1.35); plate.castShadow = true; body.add(plate);
  return { root, body, head, arms, legs, mats: [mat], eyeMat, core, coreMat, coreGlow, plate, fistCrystals };
}

class Projectile {
  constructor(boss, from, to) {
    this.boss = boss;
    this.mesh = makeBoulder(0.9);
    this.pos = from.clone();
    const T = 1.25;
    this.vel = new THREE.Vector3((to.x - from.x) / T, (to.y - from.y) / T + 0.5 * 22 * T, (to.z - from.z) / T);
    this.alive = true;
    this.mesh.position.copy(this.pos);
    // landing marker
    this.marker = new THREE.Mesh(new THREE.RingGeometry(1.6, 2.0, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff6a30, transparent: true, opacity: 0.7, depthWrite: false }));
    this.marker.position.copy(to).setY(to.y + 0.15);
  }
  update(dt, world) {
    this.vel.y -= 22 * dt;
    this.pos.addScaledVector(this.vel, dt);
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.x += dt * 5; this.mesh.rotation.z += dt * 3;
    this.marker.material.opacity = 0.4 + Math.sin(performance.now() / 60) * 0.3;
    if (world.vol.sample(this.pos.x, this.pos.y, this.pos.z) < 0.9 || this.pos.y < -2) {
      this.alive = false;
      world.dig(this.pos, 2.0, { power: 1.2, dir: new THREE.Vector3(0, -1, 0) });
      world.fx.ring(this.pos, 4, 0.4, 0xffb070);
      world.game.cameraRig.shake(0.35);
      world.game.audio.play('boss_slam');
      const p = world.game.player;
      if (p.pos.distanceTo(this.pos) < 2.6) p.hurt(this.pos, 1);
    }
  }
}

export class Boss extends Entity {
  constructor(world, def) {
    super(world, def);
    this.model = bossModel();
    this.group.add(this.model.root);
    this.arena = new THREE.Vector3().fromArray(def.arena);
    this.arenaR = def.arenaR;
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI;
    this.state = 'dormant';
    this.stateT = 0;
    this.phase = 1;
    this.coreHP = 3;
    this.maxCore = 9;
    this.totalHits = 0;
    this.fistHits = 0;
    this.flash = 0;
    this.projectiles = [];
    this.walkPh = 0;
    this.slamCount = 0;
    this.hitSphere = null;
    this.fistSpheres = [{ c: new THREE.Vector3(), r: 1.1 }, { c: new THREE.Vector3(), r: 1.1 }];
    this.coreSphere = { c: new THREE.Vector3(), r: 1.0 };
    this.lightSource = { pos: new THREE.Vector3(), color: 0xff9a40, intensity: 16, range: 12 };
    this.waves = [];
    this.group.position.copy(this.pos);
    this.model.root.position.y = 0;
    this.awake = false;
    this.isBoss = true;
  }

  setState(s) { this.state = s; this.stateT = 0; }

  get hp01() { return (this.maxCore - this.totalHits) / this.maxCore; }

  wake() {
    if (this.awake) return;
    this.awake = true;
    this.setState('intro');
    this.game.audio.play('roar');
    this.game.audio.playSong('boss');
    this.game.hud.bossBar('大地の巨像 グラヴモウ', 1);
    this.game.cutsceneLook(this.pos.clone().setY(this.pos.y + 5), 2.8);
    this.game.cameraRig.shake(0.6);
  }

  // targeted hit test from World.hitEntities: custom
  hitTest(origin, dir, range, radius) {
    const test = (s) => {
      tmp.copy(s.c).sub(origin);
      const t = Math.max(0, Math.min(range, tmp.dot(dir)));
      tmp2.copy(origin).addScaledVector(dir, t);
      return tmp2.distanceTo(s.c) < s.r + radius;
    };
    if (this.state === 'stagger' && test(this.coreSphere)) return 'core';
    for (let i = 0; i < 2; i++) if (test(this.fistSpheres[i])) return 'fist' + i;
    tmp.copy(this.pos).setY(this.pos.y + 3);
    if (test({ c: tmp, r: 2.2 })) return 'body';
    return null;
  }

  hitPart(part, dmg) {
    const audio = this.game.audio;
    if (part === 'core') {
      this.totalHits++;
      this.coreHP--;
      this.flash = 1;
      audio.play('core_hit');
      this.world.fx.puff(this.coreSphere.c, 40, { color: new THREE.Color(1, 0.7, 0.3), speed: 8, size: 0.35, size1: 0.02, life: 1, additive: true });
      this.world.fx.flash(this.coreSphere.c, 2, 0.15, 0xffc080);
      this.game.hitstop(0.12);
      this.game.cameraRig.shake(0.5);
      this.game.hud.bossBar(null, this.hp01);
      if (this.totalHits >= this.maxCore) return this.defeat();
      if (this.coreHP <= 0) { this.setState('recover'); this.phase++; this.coreHP = 3; this.game.audio.play('roar'); }
      return true;
    }
    if (part === 'fist0' || part === 'fist1') {
      if (this.state === 'stuck') {
        this.fistHits++;
        const c = this.model.fistCrystals[part === 'fist0' ? 0 : 1];
        c.material.emissiveIntensity = 3;
        audio.play('impact_crystal');
        this.world.fx.puff(this.fistSpheres[part === 'fist0' ? 0 : 1].c, 20, { color: new THREE.Color(0.5, 0.95, 1), speed: 6, size: 0.3, size1: 0.02, life: 0.8, additive: true });
        this.game.hitstop(0.07);
        if (this.fistHits >= 3) {
          this.setState('stagger');
          this.fistHits = 0;
          audio.play('roar');
          this.game.cameraRig.shake(0.6);
          this.breakPlate();
          this.game.hud.toast('コアがむき出しだ！ 胸を殴れ！', 'rune');
        }
      } else {
        audio.play('impact_metal');
      }
      return true;
    }
    if (part === 'body') {
      audio.play('impact_metal');
      this.world.fx.puff(tmp.copy(this.pos).setY(this.pos.y + 3), 10, { color: new THREE.Color(1, 0.75, 0.35), speed: 7, size: 0.15, size1: 0.02, life: 0.4, additive: true, gravity: 10 });
      if (!this.hintShown) { this.hintShown = true; this.game.hud.toast('岩の鎧が硬い… 拳を叩きつけた後がチャンス！', 'info'); }
      return true;
    }
    return false;
  }

  breakPlate() {
    const plate = this.model.plate;
    if (!plate.visible) return;
    plate.visible = false;
    const wp = plate.getWorldPosition(new THREE.Vector3());
    this.world.fx.spawnDebris(wp, new THREE.Vector3(Math.sin(this.yaw), 0.5, Math.cos(this.yaw)), 18, new THREE.Color(0.5, 0.42, 0.36), 8, 1.4);
    this.world.fx.puff(wp, 25, { color: new THREE.Color(0.6, 0.5, 0.45), speed: 5, size: 1, size1: 2.5, life: 1, alpha: 0.6 });
  }

  defeat() {
    this.setState('defeat');
    this.game.audio.play('roar');
    this.game.hud.bossBar(null, 0);
    this.game.onBossDefeated(this);
    return true;
  }

  update(dt) {
    this.stateT += dt;
    const p = this.player;
    const M = this.model;
    const toP = tmp.copy(p.pos).sub(this.pos); toP.y = 0;
    const dist = toP.length();
    const yawToP = Math.atan2(toP.x, toP.z);
    let speed = 0;
    const ph = this.phase;
    const fast = ph === 1 ? 1 : ph === 2 ? 1.2 : 1.4;
    // pose targets
    let armL = 0.2, armR = 0.2, elbow = -0.4, bodyX = 0, kneel = 0, armSpread = 0.15, headX = 0;

    switch (this.state) {
      case 'dormant':
        if (p.pos.distanceTo(this.arena) < this.arenaR - 2) this.wake();
        bodyX = 0.3; headX = 0.4;
        break;
      case 'intro':
        armL = armR = -2.6; armSpread = 0.7; headX = -0.4;
        if (this.stateT > 2.6) this.setState('walk');
        break;
      case 'walk':
        this.yaw = turnToward(this.yaw, yawToP, dt * 1.2 * fast);
        speed = dist > 5 ? 2.6 * fast : 0;
        if (this.stateT > 1.2) {
          const roll = Math.random();
          if (dist < 7.5) this.setState('slamUp');
          else if (ph >= 1 && roll < 0.55) this.setState('throwUp');
          else if (dist < 12 || this.stateT > 4) this.setState('slamUp');
        }
        break;
      case 'slamUp': {
        this.yaw = turnToward(this.yaw, yawToP, dt * 1.5);
        const u = Math.min(1, this.stateT / (0.9 / fast));
        armL = armR = lerp(0.2, -2.9, u); elbow = -0.2; bodyX = -0.25 * u; armSpread = 0.3;
        M.eyeMat.emissiveIntensity = 3 + u * 5;
        if (this.stateT > 1.0 / fast) this.doSlam();
        break;
      }
      case 'stuck':
        armL = armR = -1.25; elbow = -0.1; bodyX = 0.55; armSpread = 0.25;
        for (const c of M.fistCrystals) c.material.emissiveIntensity = 1.5 + Math.sin(this.stateT * 10) * 1.0;
        if (this.stateT > 3.2 - ph * 0.3) { this.setState('walk'); this.fistHits = 0; for (const c of M.fistCrystals) c.material.emissiveIntensity = 0.8; }
        break;
      case 'throwUp': {
        this.yaw = turnToward(this.yaw, yawToP, dt * 2);
        const u = Math.min(1, this.stateT / 0.8);
        armR = lerp(0.3, -2.8, u); armL = 0.3; elbow = -0.6;
        if (this.stateT > 0.8 && !this.thrown) {
          this.thrown = true;
          const from = new THREE.Vector3(this.pos.x, this.pos.y + 6, this.pos.z);
          const n = ph >= 3 ? 3 : ph >= 2 ? 2 : 1;
          for (let i = 0; i < n; i++) {
            const to = p.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * (i ? 6 : 1), 0, (Math.random() - 0.5) * (i ? 6 : 1)));
            to.y = this.findFloor(to);
            const pr = new Projectile(this, from, to);
            this.projectiles.push(pr);
            this.world.root.add(pr.mesh, pr.marker);
          }
          this.game.audio.play('whoosh', { power: 2 });
        }
        if (this.stateT > 1.4) { this.thrown = false; this.setState('walk'); }
        break;
      }
      case 'stagger':
        kneel = 1; bodyX = 0.45; armL = armR = 0.6; armSpread = 0.6; headX = 0.5;
        M.eyeMat.emissiveIntensity = 0.6;
        if (this.stateT > 5.5) { this.setState('recover'); }
        break;
      case 'recover':
        kneel = Math.max(0, 1 - this.stateT); armL = armR = -2.0; armSpread = 0.8;
        if (this.stateT > 1.5) {
          this.model.plate.visible = true;
          this.coreHP = 3;
          this.setState('walk');
          if (this.phase >= 2) this.spawnRubbleRain();
        }
        break;
      case 'defeat': {
        kneel = Math.min(1, this.stateT); bodyX = 0.3 + this.stateT * 0.2;
        M.eyeMat.emissiveIntensity = Math.max(0, 3 - this.stateT * 2);
        if (Math.random() < dt * 20) {
          const q = tmp2.set(this.pos.x + (Math.random() - 0.5) * 4, this.pos.y + Math.random() * 6, this.pos.z + (Math.random() - 0.5) * 4);
          this.world.fx.puff(q, 3, { color: new THREE.Color(0.6, 0.5, 0.45), speed: 3, size: 1, size1: 2.5, life: 1, alpha: 0.5 });
          if (Math.random() < 0.3) this.world.fx.spawnDebris(q, new THREE.Vector3(), 2, new THREE.Color(0.5, 0.42, 0.36), 3, 1.5);
        }
        if (this.stateT > 3.0 && this.model.root.visible) {
          this.model.root.visible = false;
          this.world.fx.puff(tmp.copy(this.pos).setY(this.pos.y + 3), 80, { color: new THREE.Color(0.6, 0.5, 0.45), speed: 9, size: 1.5, size1: 4, life: 2, alpha: 0.6 });
          this.world.fx.spawnDebris(tmp, new THREE.Vector3(), 50, new THREE.Color(0.5, 0.42, 0.36), 10, 2);
          this.game.audio.play('boss_slam');
          this.game.cameraRig.shake(1);
        }
        break;
      }
    }

    // movement
    const fx = Math.sin(this.yaw), fzz = Math.cos(this.yaw);
    this.vel.x = damp(this.vel.x, fx * speed, 4, dt);
    this.vel.z = damp(this.vel.z, fzz * speed, 4, dt);
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    // keep inside arena
    const off = tmp2.copy(this.pos).sub(this.arena); off.y = 0;
    if (off.length() > this.arenaR - 3) { off.setLength(this.arenaR - 3); this.pos.x = this.arena.x + off.x; this.pos.z = this.arena.z + off.z; }
    this.pos.y = damp(this.pos.y, this.findFloor(this.pos), 6, dt);
    if (this.state !== 'dormant' && this.state !== 'defeat') {
      // contact damage and push the player out of the body
      const d2 = tmp2.copy(p.pos).sub(this.pos); d2.y = 0;
      if (d2.length() < 2.4 && p.pos.y < this.pos.y + 4) {
        d2.setLength(2.4 - d2.length());
        p.pos.add(d2);
        if (this.state === 'walk') p.hurt(this.pos, 1);
      }
    }

    // animate
    this.walkPh += dt * Math.hypot(this.vel.x, this.vel.z) * 1.2;
    const s = Math.sin(this.walkPh);
    if (speed > 0) { armL += s * 0.3; armR -= s * 0.3; }
    const A = M.arms;
    const k = this.state === 'slamUp' || this.state === 'stuck' ? 14 : 5;
    A[0].sh.rotation.x = damp(A[0].sh.rotation.x, armL, k, dt);
    A[1].sh.rotation.x = damp(A[1].sh.rotation.x, armR, k, dt);
    A[0].sh.rotation.z = damp(A[0].sh.rotation.z, armSpread, 5, dt);
    A[1].sh.rotation.z = damp(A[1].sh.rotation.z, -armSpread, 5, dt);
    A[0].el.rotation.x = damp(A[0].el.rotation.x, elbow, 6, dt);
    A[1].el.rotation.x = damp(A[1].el.rotation.x, elbow, 6, dt);
    M.legs[0].rotation.x = speed ? s * 0.35 : damp(M.legs[0].rotation.x, -kneel * 1.2, 4, dt);
    M.legs[1].rotation.x = speed ? -s * 0.35 : damp(M.legs[1].rotation.x, kneel * 0.6, 4, dt);
    M.body.rotation.x = damp(M.body.rotation.x, bodyX, 5, dt);
    M.body.position.y = damp(M.body.position.y, 1.6 - kneel * 1.1 + Math.abs(s) * 0.1, 5, dt);
    M.head.rotation.x = damp(M.head.rotation.x, headX, 4, dt);
    const sc = this.state === 'dormant' ? 1 : 1;
    M.root.scale.setScalar(sc);
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    this.group.updateMatrixWorld(true);
    M.fistCrystals[0].getWorldPosition(this.fistSpheres[0].c);
    M.fistCrystals[1].getWorldPosition(this.fistSpheres[1].c);
    M.core.getWorldPosition(this.coreSphere.c);
    this.lightSource.pos.copy(this.coreSphere.c);
    this.lightSource.intensity = this.state === 'stagger' ? 30 : 10;
    M.coreMat.emissiveIntensity = this.state === 'stagger' ? 4 + Math.sin(this.stateT * 12) * 1.5 : 2;
    M.coreGlow.material.opacity = this.state === 'stagger' ? 0.9 : M.plate.visible ? 0.0 : 0.5;
    this.flash = Math.max(0, this.flash - dt * 4);
    M.mats[0].userData.flash.value = this.flash;

    // projectiles
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.update(dt, this.world);
      if (!pr.alive) { this.world.root.remove(pr.mesh, pr.marker); this.projectiles.splice(i, 1); }
    }
    // shockwaves
    for (let i = this.waves.length - 1; i >= 0; i--) {
      const w = this.waves[i];
      w.r += dt * w.speed;
      const pd = Math.hypot(p.pos.x - w.c.x, p.pos.z - w.c.z);
      if (!w.hit && Math.abs(pd - w.r) < 0.8 && p.pos.y < w.c.y + 0.8 && p.grounded) { w.hit = true; p.hurt(w.c, 1); }
      if (w.r > w.max) this.waves.splice(i, 1);
    }
    // rubble rain
    if (this.rain) {
      this.rain.t -= dt;
      if (this.rain.t <= 0 && this.rain.n > 0) {
        this.rain.n--; this.rain.t = 0.5;
        const to = p.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 8, 0, (Math.random() - 0.5) * 8));
        to.y = this.findFloor(to);
        const pr = new Projectile(this, to.clone().setY(to.y + 22), to);
        pr.vel.set(0, -4, 0);
        this.projectiles.push(pr);
        this.world.root.add(pr.mesh, pr.marker);
      }
    }
  }

  spawnRubbleRain() { this.rain = { n: 4 + this.phase * 2, t: 0.5 }; this.game.hud.toast('天井が崩れてくる！', 'warn'); }

  doSlam() {
    this.setState('stuck');
    this.slamCount++;
    const c = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * 3.4, 0, this.pos.z + Math.cos(this.yaw) * 3.4);
    c.y = this.findFloor(c);
    this.world.dig(c, 2.2, { power: 1.6, dir: new THREE.Vector3(0, -1, 0) });
    this.world.fx.ring(c, 18, 1.4, 0xff9050, 0.8);
    this.world.fx.ring(c, 6, 0.5, 0xffe0b0, 1);
    this.game.audio.play('boss_slam');
    this.game.cameraRig.shake(0.8);
    this.game.rumble?.(1, 300);
    this.waves.push({ c, r: 1, speed: 9 + this.phase * 2, max: 18, hit: false });
    const p = this.player;
    if (p.pos.distanceTo(c) < 2.8) p.hurt(c, 1);
    if (!this.slamHint) { this.slamHint = true; this.game.hud.toast('衝撃波はジャンプでかわせ！ 拳の結晶を殴れ！', 'info'); }
  }

  findFloor(p) {
    const vol = this.world.vol;
    const t = vol.raycast(p.x, p.y + 6, p.z, 0, -1, 0, 20);
    return t >= 0 ? p.y + 6 - t : p.y;
  }

  hit() { return false; }
}
