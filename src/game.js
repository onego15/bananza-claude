import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Input } from './core/input.js';
import { CameraRig } from './core/camera.js';
import { Save } from './core/save.js';
import { Audio } from './audio/audio.js';
import { FX } from './fx/fx.js';
import { HUD } from './ui/hud.js';
import { Player } from './actors/player.js';
import { World } from './world/world.js';
import { RuneStone, Beacon, Relic, Checkpoint, Gate, Sunstone } from './world/entities.js';
import { AREAS } from './world/areas/index.js';
import { damp } from './core/noise.js';

const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uVig: { value: 0.32 }, uTint: { value: new THREE.Color(1, 1, 1) }, uLift: { value: 0.0 }, uSat: { value: 1.08 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uVig; uniform vec3 uTint; uniform float uLift; uniform float uSat; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) * uTint + uLift;
      vec2 d = vUv - 0.5;
      float v = 1.0 - dot(d, d) * uVig * 2.2;
      c.rgb *= clamp(v, 0.0, 1.0);
      gl_FragColor = c;
    }`,
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    const params = new URLSearchParams(location.search);
    this.params = params;
    this.capture = params.has('capture');
    const renderer = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: this.capture }));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.maxPR = Math.min(window.devicePixelRatio || 1, 1.5);
    this.pr = this.maxPR;
    renderer.setPixelRatio(this.pr);
    renderer.setSize(innerWidth, innerHeight);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 220);
    this.scene.add(this.camera);

    const rt = new THREE.WebGLRenderTarget(innerWidth * this.pr, innerHeight * this.pr, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.55, 0.55, 0.82);
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);
    this.composer.addPass(new OutputPass());

    this.save = new Save();
    this.input = new Input(canvas);
    this.audio = new Audio();
    this.hud = new HUD(this);
    this.fx = new FX(this.scene, this);
    this.cameraRig = new CameraRig(this.camera, this);
    this.player = new Player(this);
    this.scene.add(this.player.root);
    this.stats = { kills: 0, dug: 0 };
    this.state = 'boot';
    this.hitstopT = 0;
    this.time = 0;
    this.frameTimes = [];
    this.applySettings();

    addEventListener('resize', () => this.onResize());
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'play') this.pause(); });
    // unlock audio on first gesture
    const unlock = () => { this.audio.init(); this.audio.setVolumes(this.save.settings.music, this.save.settings.sfx); };
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);
    window.__game = this;
  }

  applySettings() {
    const st = this.save.settings;
    this.input.sensitivity = st.sens;
    this.input.invertY = st.invertY;
    this.audio.setVolumes(st.music, st.sfx);
    const q = st.quality;
    this.quality = q;
    if (q === 'low') { this.maxPR = 0.75; this.renderer.shadowMap.enabled = false; this.bloom.enabled = false; }
    else if (q === 'medium') { this.maxPR = 1; this.renderer.shadowMap.enabled = true; this.bloom.enabled = true; }
    else { this.maxPR = Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : 1.5); this.renderer.shadowMap.enabled = true; this.bloom.enabled = true; }
    this.pr = Math.min(this.pr, this.maxPR);
    if (q !== 'auto') this.pr = this.maxPR;
    this.onResize();
  }

  onResize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setPixelRatio(this.pr);
    this.renderer.setSize(w, h);
    this.composer.setPixelRatio(this.pr);
    this.composer.setSize(w, h);
    this.bloom.setSize(w * this.pr * 0.5, h * this.pr * 0.5);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  async start() {
    this.loop();
    const area = parseInt(this.params.get('area') || '1', 10);
    if (this.params.has('autotest') || this.capture) {
      if (!this.params.has('keep')) this.save.reset();
      if (this.params.has('relics')) for (const r of this.params.get('relics').split(',')) this.save.addRelic(r);
      await this.loadArea(area, { silent: true });
      this.state = 'play';
      this.hud.show(true);
      window.__ready = true;
      return;
    }
    await this.loadArea(1, { silent: true, title: true });
    this.toTitle();
    window.__ready = true;
  }

  // ---------------------------------------------------------------- flow
  toTitle() {
    this.state = 'title';
    this.hud.show(false);
    this.hud.hideBoss();
    this.audio.playSong('title');
    this.titleT = 0;
    this.hud.showTitle(this.save.hasSave(), {
      cont: () => this.continueGame(),
      start: () => this.newGame(),
      help: () => this.hud.showHelp(() => this.toTitle()),
      settings: () => this.hud.showSettings(this.save, () => this.applySettings(), () => this.toTitle()),
    });
  }

  async newGame() {
    this.save.wipe();
    this.stats = { kills: 0, dug: 0 };
    this.hud.clearScreen();
    this.state = 'story';
    this.hud.showStory([
      '地底の国ルミナは、大地の奥深くで脈打つ<br><b style="color:#ffd463">「太陽核」</b>の光に照らされていた。',
      'だがある日、太陽核の光は弱まり、<br>地底の大地はゆっくりと闇に沈みはじめた。',
      '光を取り戻せるのは、散らばった<b style="color:#ffd463">太陽石</b>を集め、<br>大地の巨像が守る神殿へ辿り着いた者だけ。',
      '穴掘り名人のゴロは、自慢の拳を握りしめた。<br><span style="font-size:28px">——さあ、掘り進もう！</span>',
    ], async () => {
      await this.loadArea(1, {});
      this.enterPlay();
    });
  }

  async continueGame() {
    this.save.load();
    this.stats = { kills: this.save.data.kills || 0, dug: this.save.data.dug || 0 };
    this.hud.clearScreen();
    await this.loadArea(this.save.data.area, {});
    this.enterPlay();
  }

  enterPlay() {
    this.state = 'play';
    this.hud.clearScreen();
    this.hud.show(true);
    this.input.wantLock = true;
    this.input.requestLock();
    this.hud.clickHint(!this.input.locked);
    this.refreshHUD();
    const def = this.world.def;
    this.hud.areaCard(`AREA ${def.id}`, def.name, def.sub);
    this.audio.playSong(def.theme.music);
    this.controlsHintT = 0;
  }

  async loadArea(id, opts = {}) {
    const def = AREAS[id];
    this.state = 'loading';
    this.timers = [];
    if (!opts.silent) this.hud.showLoading(`AREA ${id}  ${def.name}`, def.tip || '');
    else if (!this.world) this.hud.showLoading('GORO DIG', '地底世界を生成しています…');
    if (this.world) { this.world.dispose(); this.world = null; }
    this.fx.clear();
    await new Promise((r) => setTimeout(r, 30));
    const world = new World(this, def);
    await world.load((p, msg) => this.hud.setLoading(p, msg));
    this.world = world;
    this.save.data.area = id;
    // tune post per area
    this.bloom.strength = def.theme.bloom ?? 0.55;
    this.grade.uniforms.uTint.value.set(def.theme.grade ?? 0xffffff);
    // place player
    const p = this.player;
    p.maxHp = this.save.maxHearts();
    p.hp = p.maxHp;
    let spawn = world.spawnPoint;
    let pos = new THREE.Vector3().fromArray(spawn.pos);
    let yaw = spawn.yaw ?? 0;
    const cp = this.save.data.checkpoint;
    if (cp && cp.area === id && !opts.fresh) { pos = new THREE.Vector3().fromArray(cp.pos); yaw = cp.yaw ?? yaw; }
    p.spawn(pos, yaw);
    this.cameraRig.snapBehind(yaw);
    this.cameraRig.inited = false;
    this.cameraRig.curDist = 2;
    if (opts.title) this.titleCam = true;
    this.hud.clearScreen();
    this.hud.area(def.name, def.sub);
    this.refreshHUD();
  }

  async goToArea(id) {
    if (this.transitioning) return;
    this.transitioning = true;
    this.state = 'transition';
    this.hud.fade(true);
    this.audio.play('fall');
    await new Promise((r) => setTimeout(r, 900));
    this.save.data.checkpoint = null;
    this.save.data.time += 0;
    this.writeSave();
    await this.loadArea(id, { fresh: true });
    this.writeSave();
    this.hud.fade(false);
    this.enterPlay();
    // arrive falling from above
    this.player.vel.set(0, -6, 0);
    this.transitioning = false;
  }

  writeSave() {
    const d = this.save.data;
    d.kills = this.stats.kills; d.dug = this.stats.dug;
    this.save.write();
    this.saveT = 0;
  }

  setCheckpoint(cp) {
    const d = this.save.data;
    const pos = [cp.pos.x + 1.6, cp.pos.y + 0.2, cp.pos.z];
    if (!d.checkpoint || d.checkpoint.id !== cp.id || d.checkpoint.area !== this.world.def.id) {
      d.checkpoint = { area: this.world.def.id, id: cp.id, pos, yaw: this.player.yaw };
      this.writeSave();
    }
    this.nearShrine = cp;
  }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'pause';
    document.exitPointerLock?.();
    this.hud.showPause({
      resume: () => this.resume(),
      help: () => this.hud.showHelp(() => { this.state = 'play'; this.pause(); }),
      settings: () => this.hud.showSettings(this.save, () => this.applySettings(), () => { this.state = 'play'; this.pause(); }),
      retry: () => { this.hud.clearScreen(); this.respawnAtCheckpoint(); this.resume(); },
      title: () => { this.writeSave(); this.hud.clearScreen(); this.toTitle(); },
    });
  }

  resume() {
    this.hud.clearScreen();
    this.state = 'play';
    this.input.requestLock();
  }

  openShop(cp) {
    this.state = 'shop';
    document.exitPointerLock?.();
    const up = this.save.data.upgrades;
    const offers = [
      { key: 'power', name: '剛拳', desc: 'パンチで掘れる範囲と威力が上がる', lv: up.power, max: 3, costs: [60, 140, 260] },
      { key: 'hearts', name: '頑丈な体', desc: 'ハートの最大数 +1', lv: up.hearts, max: 3, costs: [80, 160, 280] },
    ].map((o) => ({ ...o, maxed: o.lv >= o.max, cost: o.costs[Math.min(o.lv, o.max - 1)], lvText: ` Lv.${o.lv}/${o.max}` }));
    this.hud.showShop(this.save, offers, (o) => {
      if (o.maxed || this.save.data.gold < o.cost) { this.audio.play('denied'); return; }
      this.save.data.gold -= o.cost;
      up[o.key]++;
      this.audio.play('buy');
      this.player.maxHp = this.save.maxHearts();
      this.player.hp = this.player.maxHp;
      this.writeSave();
      this.refreshHUD();
      this.openShop(cp);
    }, () => this.resume());
  }

  respawnAtCheckpoint() {
    const d = this.save.data;
    const p = this.player;
    const cp = d.checkpoint;
    const pos = cp && cp.area === this.world.def.id ? new THREE.Vector3().fromArray(cp.pos) : new THREE.Vector3().fromArray(this.world.spawnPoint.pos);
    p.spawn(pos, cp?.yaw ?? this.world.spawnPoint.yaw ?? 0);
    p.maxHp = this.save.maxHearts();
    p.hp = p.maxHp;
    p.invuln = 1.5;
    this.cameraRig.snapBehind(p.yaw);
  }

  respawnAfterFall(kind) {
    const p = this.player;
    this.hud.fade(true);
    this.after(0.45, () => {
      p.hp -= 1;
      this.hud.flashDamage();
      if (p.hp <= 0) { this.hud.fade(false); this.onPlayerDeath(); return; }
      p.pos.copy(p.lastSafe);
      p.vel.set(0, 0, 0);
      p.invuln = 1.2;
      p.unstick();
      this.hud.fade(false);
      if (kind === 'lava') this.hud.toast('あちちっ！ 溶岩に気をつけて', 'warn');
    });
  }

  onPlayerDeath() {
    if (this.state === 'dead') return;
    this.player.dead = true;
    this.state = 'dead';
    this.save.data.deaths++;
    this.writeSave();
    document.exitPointerLock?.();
    this.after(0.9, () => {
      this.hud.showDeath(() => {
        this.hud.clearScreen();
        this.respawnAtCheckpoint();
        this.player.dead = false;
        this.state = 'play';
        this.input.requestLock();
      });
    });
  }

  // game-time timers: pause with the game and advance deterministically in capture mode
  after(sec, fn) { (this.timers ||= []).push({ t: sec, fn }); }
  tickTimers(dt) {
    if (!this.timers?.length) return;
    const due = [];
    this.timers = this.timers.filter((tm) => ((tm.t -= dt) <= 0 ? (due.push(tm.fn), false) : true));
    for (const fn of due) fn();
  }

  hitstop(t) { this.hitstopT = Math.max(this.hitstopT, t); }

  rumble(intensity, ms) {
    const pad = this.input.pad;
    try { pad?.vibrationActuator?.playEffect('dual-rumble', { duration: ms, strongMagnitude: intensity, weakMagnitude: intensity * 0.6 }); } catch (_) { /* unsupported */ }
  }

  flashDamage() { this.hud.flashDamage(); this.hud.pulseHearts(); }

  cutsceneLook(target, dur) {
    const cam = this.camera;
    const from = cam.position.clone();
    const dir = from.clone().sub(target).setY(0).normalize();
    const pos = target.clone().addScaledVector(dir, 9).setY(target.y + 3);
    this.cameraRig.override = { pos, look: target, t: 0, blend: 0 };
    this.cutscene = { t: 0, dur };
    this.player.controlLock = dur;
  }

  cutsceneFollow(entity, dur) {
    this.cameraRig.override = { pos: this.camera.position.clone(), look: entity.pos, t: 0, blend: 0, follow: entity };
    this.cutscene = { t: 0, dur };
    this.player.controlLock = Math.min(dur, 1.2);
  }

  gainRelic(id) {
    this.save.addRelic(id);
    this.writeSave();
    this.audio.play('relic');
    this.player.setState('cutscene');
    this.player.pose.victory = true;
    this.player.controlLock = 2.4;

    const info = id === 'gauntlet'
      ? ['大地の籠手を手に入れた！', '黒く輝く「硬岩」もパンチで砕けるようになった。']
      : ['震脚の像を手に入れた！', '空中から右クリックの急降下パンチが巨大な衝撃波に！ 大きく掘れ、敵もまとめて吹き飛ぶ。'];
    this.hud.toast(info[0], 'sun', 4200);
    this.after(0.9, () => this.hud.toast(info[1], 'rune', 5200));
  }

  onSunstone() {
    const n = this.save.sunstoneCount();
    const before = this.player.maxHp;
    this.player.maxHp = this.save.maxHearts();
    if (this.player.maxHp > before) { this.player.hp = this.player.maxHp; this.hud.toast('太陽石5個でハートの最大数がふえた！', 'sun', 3600); }
    this.hud.toast(`太陽石を手に入れた！（${n}/15）`, 'sun');
    this.writeSave();
  }

  onSwitch(groupId, n) {
    const need = this.world.def.entities.filter((e) => e.group === groupId && (e.type === 'rune' || e.type === 'beacon')).length;
    if (n < need) this.hud.toast(`${groupId.includes('beacon') ? '輝晶灯' : 'ルーンストーン'} ${n}/${need}`, 'rune');
    this.writeSave();
  }

  onBossDefeated(boss) {
    this.save.setFlag('boss_defeated');
    this.writeSave();
    this.audio.stopSong();
    this.cutsceneLook(boss.pos.clone().setY(boss.pos.y + 4), 3.5);
    this.after(3.6, () => {
      const core = this.world.entities.find((e) => e.isSunCore);
      if (core) core.ignite();
      this.audio.play('relic');
      this.audio.playSong('ending');
      if (core) this.cutsceneLook(core.pos.clone(), 6);
    });
    this.after(10.5, () => this.showEnding());
  }

  showEnding() {
    this.state = 'ending';
    this.save.data.cleared = true;
    this.writeSave();
    document.exitPointerLock?.();
    const t = this.save.data.time;
    const mm = Math.floor(t / 60), ss = Math.floor(t % 60);
    const sun = this.save.sunstoneCount();
    const rank = sun >= 15 ? 'S' : sun >= 11 ? 'A' : sun >= 6 ? 'B' : 'C';
    this.hud.show(false);
    this.hud.showEnding({ time: `${mm}分${String(ss).padStart(2, '0')}秒`, sun, gold: this.save.data.gold, kills: this.stats.kills, dug: this.stats.dug, deaths: this.save.data.deaths, rank }, () => {
      this.hud.clearScreen();
      this.loadArea(1, { silent: true, title: true }).then(() => this.toTitle());
    });
  }

  refreshHUD() {
    const p = this.player;
    this.hud.hearts(Math.max(0, p.hp), p.maxHp);
    this.hud.gold(this.save.data.gold);
    this.hud.sunstone(this.save.sunstoneCount());
  }

  // objective text + waypoint per area
  objective() {
    const w = this.world;
    if (!w) return null;
    const fn = w.def.objective;
    return fn ? fn(this, w) : null;
  }

  // ---------------------------------------------------------------- loop
  loop() {
    let last = performance.now();
    const frame = (now) => {
      requestAnimationFrame(frame);
      if (this.capture) return; // driven manually by __step
      let dt = (now - last) / 1000;
      last = now;
      this.trackPerf(dt);
      dt = Math.min(dt, 1 / 20);
      this.step(dt);
    };
    requestAnimationFrame(frame);
    window.__step = (n = 1, dt = 1 / 30) => { for (let i = 0; i < n; i++) this.step(dt, i < n - 1); };
  }

  trackPerf(dt) {
    if (this.quality !== 'auto' || this.state !== 'play') return;
    this.frameTimes.push(dt);
    if (this.frameTimes.length < 90) return;
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    this.frameTimes.length = 0;
    let pr = this.pr;
    if (avg > 1 / 45) pr = Math.max(0.6, pr - 0.15);
    else if (avg < 1 / 58 && pr < this.maxPR) pr = Math.min(this.maxPR, pr + 0.1);
    if (Math.abs(pr - this.pr) > 0.01) { this.pr = pr; this.onResize(); }
  }

  step(dt, skipRender = false) {
    const input = this.input;
    input.poll();
    this.time += dt;
    const st = this.state;

    if (st === 'play') {
      this.save.data.time += dt;
      if (input.pausePressed()) this.pause();
      else if (input.interactPressed() && this.nearShrine && this.nearShrine.near) this.openShop(this.nearShrine);
    }
    // gamepad menu navigation
    if (this.hud.screenOpen() && input.pad) {
      if (input.padPressed.has(12) || input.padPressed.has(14)) this.hud.menuMove(-1);
      if (input.padPressed.has(13) || input.padPressed.has(15)) this.hud.menuMove(1);
      if (input.padPressed.has(0)) this.hud.menuActivate();
      if (input.padPressed.has(1) || input.padPressed.has(9)) this.hud.menuOnBack?.();
    }

    let gdt = dt;
    if (this.hitstopT > 0) { this.hitstopT -= dt; gdt = dt * 0.04; }
    const world = this.world;

    if (world && (st === 'play' || st === 'dead' || st === 'transition' || st === 'ending')) {
      this.tickTimers(dt);
      if (st === 'play' || st === 'dead') this.player.update(gdt, st === 'play' ? input : this.nullInput(), this.cameraRig);
      world.update(gdt, this.camera);
      if (this.cameraRig.override) this.updateCutscene(dt);
      this.cameraRig.update(dt, st === 'play' ? input : this.nullInput(), this.player, world);
      this.fx.update(gdt, world.vol);
      // HUD
      this.hud.hearts(Math.max(0, this.player.hp), this.player.maxHp);
      const obj = this.objective();
      this.hud.objective(obj?.text || '');
      this.hud.update(dt, this.camera, obj?.target && !this.cameraRig.override ? obj.target : null);
      const shrine = this.nearShrine && this.nearShrine.near;
      this.hud.prompt(shrine && st === 'play' ? '<kbd>E</kbd> 祠にお供えして強化' : null);
      this.hud.clickHint(st === 'play' && !input.locked && input.lastDevice === 'kb' && !this.capture && !input.virtual);
      this.controlsHintT = (this.controlsHintT || 0) + dt;
      this.hud.dimControls(this.controlsHintT > 25);
      this.saveT = (this.saveT || 0) + dt;
      if (this.saveT > 20 && st === 'play') this.writeSave();
    } else if (world && st === 'title') {
      // idle hero + slow orbit for the title background
      this.titleT += dt;
      this.player.update(dt, this.nullInput(), this.cameraRig);
      world.update(dt, this.camera);
      this.fx.update(dt, world.vol);
      const p = this.player.pos;
      const a = this.titleT * 0.08 + 2.6;
      this.camera.position.set(p.x + Math.sin(a) * 6.5, p.y + 2.6, p.z + Math.cos(a) * 6.5);
      this.camera.lookAt(p.x - Math.cos(a) * 1.4, p.y + 1.6, p.z + Math.sin(a) * 1.4);
      const u = world.terrain.material.userData.uniforms; u.uCutR.value = 0;
    }

    input.endFrame();
    if (!skipRender) this.render();
  }

  updateCutscene(dt) {
    const c = this.cutscene;
    const o = this.cameraRig.override;
    if (!c) { this.cameraRig.override = null; return; }
    c.t += dt;
    if (o.follow) {
      o.look = o.follow.pos.clone();
      const back = this.player.pos.clone().sub(o.look).setY(0).normalize();
      o.pos.lerp(o.look.clone().addScaledVector(back, 10).setY(o.look.y + 5), 1 - Math.exp(-dt * 2));
    }
    const fadeIn = Math.min(1, c.t / 0.6), fadeOut = Math.min(1, (c.dur - c.t) / 0.6);
    o.blend = Math.max(0, Math.min(fadeIn, fadeOut));
    o.blend = o.blend * o.blend * (3 - 2 * o.blend);
    if (c.t >= c.dur) { this.cameraRig.override = null; this.cutscene = null; }
  }

  nullInput() {
    if (!this._null) {
      const z = { x: 0, y: 0 };
      this._null = new Proxy({}, { get: (t, k) => (k === 'move' || k === 'look' ? () => z : () => false) });
    }
    return this._null;
  }

  render() {
    if (!this.world) { this.renderer.render(this.scene, this.camera); return; }
    if (this.bloom.enabled) this.composer.render();
    else {
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.render(this.scene, this.camera);
    }
  }
}

export { damp, RuneStone, Beacon, Relic, Checkpoint, Gate, Sunstone };
