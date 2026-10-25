// Fully procedural audio: synthesized SFX through a cave reverb, and a small generative
// music engine with per-area songs (pads, kalimba arpeggios, bass and percussion).

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.musicVol = 0.5;
    this.sfxVol = 0.8;
    this.song = null;
    this.nextSong = null;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { this.enabled = false; return; }
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain(); this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.003; comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.gain.value = this.sfxVol; this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.gain.value = this.musicVol; this.music.connect(this.master);
    // cave reverb
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.6, 2.4);
    this.revSend = ctx.createGain(); this.revSend.gain.value = 0.35;
    this.revSend.connect(this.reverb).connect(this.master);
    this.musicRev = ctx.createGain(); this.musicRev.gain.value = 0.3;
    this.music.connect(this.musicRev).connect(this.reverb);
    this.noiseBuf = this.makeNoise(2);
    this.brownBuf = this.makeNoise(2, true);
    this.startScheduler();
  }

  setVolumes(music, sfx) {
    this.musicVol = music; this.sfxVol = sfx;
    if (this.ctx) {
      this.music.gain.setTargetAtTime(music, this.ctx.currentTime, 0.1);
      this.sfx.gain.setTargetAtTime(sfx, this.ctx.currentTime, 0.1);
    }
  }

  makeImpulse(dur, decay) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / len;
        // early reflections + diffuse tail
        const er = i < ctx.sampleRate * 0.08 && Math.random() < 0.002 ? 0.8 : 0;
        d[i] = ((Math.random() * 2 - 1) * Math.pow(1 - t, decay) + er) * 0.5;
      }
    }
    return buf;
  }

  makeNoise(dur, brown = false) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
    }
    return buf;
  }

  // ---------- building blocks ----------
  out(rev = 0.3, pan = 0) {
    const g = this.ctx.createGain();
    let node = g;
    if (pan && this.ctx.createStereoPanner) {
      const p = this.ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); node = p;
    }
    node.connect(this.sfx);
    if (rev > 0) { const s = this.ctx.createGain(); s.gain.value = rev; node.connect(s); s.connect(this.revSend); }
    return g;
  }

  noise(t, dur, { freq = 1000, q = 1, type = 'lowpass', gain = 0.5, attack = 0.002, brown = false, sweep = null, rev = 0.3, rate = 1 } = {}) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = brown ? this.brownBuf : this.noiseBuf;
    src.playbackRate.value = rate;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    if (sweep) { f.frequency.setValueAtTime(freq, t); f.frequency.exponentialRampToValueAtTime(sweep, t + dur); }
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.out(rev));
    src.start(t, Math.random() * 1.0); src.stop(t + dur + 0.05);
  }

  tone(t, dur, { freq = 440, to = null, type = 'sine', gain = 0.3, attack = 0.005, rev = 0.3, dest = null, curve = 'exp' } = {}) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    if (curve === 'exp') g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    else g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dest || this.out(rev));
    o.start(t); o.stop(t + dur + 0.05);
  }

  ok() { return this.enabled && this.ctx && this.ctx.state === 'running'; }
  now() { return this.ctx.currentTime; }

  // ---------- SFX ----------
  play(name, opts = {}) {
    if (!this.ok()) return;
    const t = this.now() + 0.005;
    const p = opts.power ?? 1;
    const r = () => 0.9 + Math.random() * 0.2;
    switch (name) {
      case 'whoosh':
        this.noise(t, 0.18, { type: 'bandpass', freq: 600 * r(), sweep: 2400, q: 1.2, gain: 0.18 * p, attack: 0.04, rev: 0.05 });
        break;
      case 'impact_dirt':
        this.tone(t, 0.25, { freq: 120 * r(), to: 40, type: 'sine', gain: 0.9 * p, rev: 0.25 });
        this.noise(t, 0.4 * p + 0.2, { freq: 900, sweep: 200, gain: 0.55 * p, brown: false, rev: 0.4 });
        this.noise(t + 0.03, 0.7, { freq: 500, type: 'lowpass', gain: 0.4 * p, brown: true, rev: 0.5 });
        this.crumble(t + 0.05, p * 0.8, 380);
        break;
      case 'impact_rock':
        this.tone(t, 0.22, { freq: 150 * r(), to: 45, type: 'sine', gain: 0.9 * p, rev: 0.3 });
        this.tone(t, 0.06, { freq: 1800 * r(), to: 900, type: 'triangle', gain: 0.15 * p, rev: 0.2 });
        this.noise(t, 0.3, { freq: 2500, sweep: 400, gain: 0.5 * p, rev: 0.4 });
        this.crumble(t + 0.04, p, 900);
        break;
      case 'impact_crystal':
        this.tone(t, 0.18, { freq: 140, to: 50, gain: 0.7 * p });
        for (let i = 0; i < 6; i++) this.tone(t + i * 0.025, 0.9, { freq: 1800 + Math.random() * 2600, type: 'sine', gain: 0.07, rev: 0.6 });
        this.noise(t, 0.25, { type: 'highpass', freq: 4000, gain: 0.25, rev: 0.4 });
        break;
      case 'impact_metal':
        this.tone(t, 0.6, { freq: 520 * r(), type: 'triangle', gain: 0.25, rev: 0.5 });
        this.tone(t, 0.5, { freq: 1370 * r(), type: 'sine', gain: 0.12, rev: 0.5 });
        this.tone(t, 0.15, { freq: 160, to: 60, gain: 0.5 });
        this.noise(t, 0.08, { type: 'highpass', freq: 3000, gain: 0.3 });
        break;
      case 'impact_flesh':
        this.tone(t, 0.16, { freq: 180 * r(), to: 70, type: 'sine', gain: 0.8 });
        this.noise(t, 0.12, { freq: 1500, sweep: 300, gain: 0.5, rev: 0.15 });
        this.tone(t, 0.08, { freq: 900, to: 300, type: 'square', gain: 0.06, rev: 0.1 });
        break;
      case 'slam':
        this.tone(t, 0.7, { freq: 90, to: 28, type: 'sine', gain: 1.0 * p, rev: 0.5 });
        this.noise(t, 1.2, { freq: 700, sweep: 120, gain: 0.7 * p, brown: true, rev: 0.7 });
        this.noise(t, 0.3, { freq: 3000, sweep: 300, gain: 0.4 * p, rev: 0.4 });
        this.crumble(t + 0.1, p * 1.4, 600);
        break;
      case 'jump':
        this.tone(t, 0.12, { freq: 260, to: 520, type: 'triangle', gain: 0.1, rev: 0.1 });
        this.noise(t, 0.12, { type: 'bandpass', freq: 1200, gain: 0.08, rev: 0.05 });
        break;
      case 'land':
        this.tone(t, 0.12, { freq: 110, to: 50, gain: 0.35 * p });
        this.noise(t, 0.15, { freq: 700, sweep: 200, gain: 0.25 * p, rev: 0.15 });
        break;
      case 'step':
        this.noise(t, 0.07, { type: 'bandpass', freq: 380 * r(), q: 1.5, gain: 0.12 * p, rev: 0.08 });
        this.tone(t, 0.05, { freq: 85 * r(), to: 55, gain: 0.12 * p, rev: 0.02 });
        break;
      case 'dash':
        this.noise(t, 0.3, { type: 'bandpass', freq: 400, sweep: 3000, q: 0.9, gain: 0.25, attack: 0.02, rev: 0.15 });
        break;
      case 'gem':
        [0, 4, 7, 12, 16].forEach((s, i) => this.tone(t + i * 0.055, 0.5, { freq: NOTE(84 + s), type: 'sine', gain: 0.12, rev: 0.5 }));
        [0, 7, 12].forEach((s, i) => this.tone(t + i * 0.055, 0.3, { freq: NOTE(72 + s), type: 'triangle', gain: 0.06, rev: 0.3 }));
        break;
      case 'sunstone':
        [0, 4, 7, 11, 14, 19, 23, 26].forEach((s, i) => this.tone(t + i * 0.07, 1.4, { freq: NOTE(72 + s), type: 'sine', gain: 0.13, rev: 0.7 }));
        this.tone(t, 2.0, { freq: NOTE(48), type: 'triangle', gain: 0.15, rev: 0.6 });
        break;
      case 'gold':
        this.tone(t, 0.18, { freq: NOTE(88 + Math.floor(Math.random() * 3) * 2), type: 'square', gain: 0.035, rev: 0.3 });
        this.tone(t + 0.04, 0.25, { freq: NOTE(95), type: 'sine', gain: 0.07, rev: 0.4 });
        break;
      case 'hurt':
        this.tone(t, 0.3, { freq: 420, to: 160, type: 'sawtooth', gain: 0.12, rev: 0.2 });
        this.tone(t, 0.2, { freq: 120, to: 50, gain: 0.6 });
        break;
      case 'enemy_hit':
        this.tone(t, 0.18, { freq: 700 * r(), to: 250, type: 'square', gain: 0.08, rev: 0.2 });
        break;
      case 'enemy_die':
        this.tone(t, 0.4, { freq: 500, to: 80, type: 'sawtooth', gain: 0.1, rev: 0.3 });
        this.noise(t, 0.5, { freq: 1200, sweep: 200, gain: 0.4, rev: 0.4 });
        [0, 7, 12].forEach((s, i) => this.tone(t + 0.15 + i * 0.05, 0.3, { freq: NOTE(79 + s), gain: 0.06, rev: 0.4 }));
        break;
      case 'grub_chirp':
        this.tone(t, 0.12, { freq: 900 * r(), to: 1300, type: 'square', gain: 0.03, rev: 0.4 });
        this.tone(t + 0.1, 0.1, { freq: 1100 * r(), to: 700, type: 'square', gain: 0.03, rev: 0.4 });
        break;
      case 'bat':
        this.tone(t, 0.08, { freq: 2400 * r(), to: 3200, type: 'sine', gain: 0.04, rev: 0.6 });
        break;
      case 'golem':
        this.noise(t, 0.5, { freq: 300, sweep: 120, gain: 0.35, brown: true, rev: 0.5 });
        this.tone(t, 0.4, { freq: 70, to: 50, type: 'sawtooth', gain: 0.08, rev: 0.4 });
        break;
      case 'echo':
        for (let i = 0; i < 5; i++) this.tone(t + i * 0.16, 0.6, { freq: NOTE(76 + (i % 2) * 7), type: 'sine', gain: 0.12 * Math.pow(0.7, i), rev: 0.8 });
        this.noise(t, 0.08, { type: 'bandpass', freq: 2200, q: 3, gain: 0.5, rev: 0.6 });
        break;
      case 'rune':
        [0, 7, 12, 19].forEach((s, i) => this.tone(t + i * 0.09, 1.2, { freq: NOTE(67 + s), type: 'triangle', gain: 0.1, rev: 0.7 }));
        this.tone(t, 1.2, { freq: NOTE(43), type: 'sine', gain: 0.3, rev: 0.6 });
        break;
      case 'gate':
        this.noise(t, 2.5, { freq: 220, gain: 0.5, brown: true, rev: 0.6, attack: 0.3 });
        this.tone(t, 2.4, { freq: 55, to: 45, type: 'sawtooth', gain: 0.08, rev: 0.5, attack: 0.3 });
        [0, 4, 7, 12].forEach((s, i) => this.tone(t + 0.6 + i * 0.12, 1.6, { freq: NOTE(64 + s), type: 'sine', gain: 0.08, rev: 0.8 }));
        break;
      case 'checkpoint':
        [0, 7, 12, 16].forEach((s, i) => this.tone(t + i * 0.08, 0.9, { freq: NOTE(67 + s), type: 'triangle', gain: 0.09, rev: 0.7 }));
        break;
      case 'relic':
        [0, 4, 7, 12, 16, 19, 24].forEach((s, i) => this.tone(t + i * 0.1, 2.2, { freq: NOTE(60 + s), type: 'triangle', gain: 0.1, rev: 0.8 }));
        [0, 7, 12].forEach((s) => this.tone(t + 0.7, 2.6, { freq: NOTE(48 + s), type: 'sine', gain: 0.12, rev: 0.7 }));
        break;
      case 'urn':
        for (let i = 0; i < 4; i++) this.tone(t + i * 0.02, 0.2, { freq: 1200 + Math.random() * 1500, type: 'triangle', gain: 0.06, rev: 0.4 });
        this.noise(t, 0.3, { type: 'highpass', freq: 2000, gain: 0.3, rev: 0.3 });
        break;
      case 'select':
        this.tone(t, 0.1, { freq: NOTE(79), type: 'triangle', gain: 0.1, rev: 0.2 });
        this.tone(t + 0.05, 0.15, { freq: NOTE(86), type: 'triangle', gain: 0.08, rev: 0.3 });
        break;
      case 'buy':
        [0, 4, 7, 12].forEach((s, i) => this.tone(t + i * 0.05, 0.3, { freq: NOTE(76 + s), type: 'square', gain: 0.03, rev: 0.3 }));
        break;
      case 'denied':
        this.tone(t, 0.15, { freq: 200, type: 'square', gain: 0.05 });
        this.tone(t + 0.12, 0.2, { freq: 150, type: 'square', gain: 0.05 });
        break;
      case 'roar':
        this.noise(t, 1.6, { type: 'bandpass', freq: 300, sweep: 120, q: 2, gain: 0.9, brown: true, rev: 0.7, attack: 0.1 });
        this.tone(t, 1.5, { freq: 80, to: 40, type: 'sawtooth', gain: 0.25, rev: 0.6, attack: 0.1 });
        this.tone(t, 1.5, { freq: 123, to: 55, type: 'sawtooth', gain: 0.15, rev: 0.6, attack: 0.1 });
        break;
      case 'boss_slam':
        this.tone(t, 1.0, { freq: 70, to: 22, gain: 1.0, rev: 0.6 });
        this.noise(t, 1.5, { freq: 500, sweep: 80, gain: 0.8, brown: true, rev: 0.8 });
        this.crumble(t + 0.1, 1.6, 500);
        break;
      case 'core_hit':
        this.tone(t, 0.8, { freq: NOTE(84), to: NOTE(72), type: 'triangle', gain: 0.18, rev: 0.7 });
        this.tone(t, 0.3, { freq: 150, to: 40, gain: 0.8 });
        this.noise(t, 0.4, { type: 'highpass', freq: 3000, gain: 0.3, rev: 0.6 });
        break;
      case 'fall':
        this.tone(t, 1.2, { freq: 600, to: 120, type: 'sine', gain: 0.1, rev: 0.6 });
        break;
      default:
        break;
    }
  }

  crumble(t, p, freq) {
    const n = Math.round(6 + p * 8);
    for (let i = 0; i < n; i++) {
      const tt = t + Math.random() * 0.45 * (0.6 + p * 0.4);
      this.noise(tt, 0.05 + Math.random() * 0.08, { type: 'bandpass', freq: freq * (0.6 + Math.random() * 1.4), q: 2.5, gain: 0.1 + Math.random() * 0.15 * p, rev: 0.4 });
    }
  }

  // ---------- music ----------
  playSong(name) {
    if (!this.ctx) { this.pendingSong = name; return; }
    if (this.song && this.song.name === name) return;
    const songs = SONGS;
    const def = songs[name];
    if (!def) return;
    // fade current
    if (this.song) {
      const old = this.song;
      old.gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.6);
      setTimeout(() => old.gain.disconnect(), 4000);
    }
    const g = this.ctx.createGain(); g.gain.value = 0.0001;
    g.gain.setTargetAtTime(1, this.ctx.currentTime + 0.3, 0.8);
    g.connect(this.music);
    this.song = { name, def, gain: g, step: 0, t: this.ctx.currentTime + 0.2 };
  }

  stopSong() {
    if (this.song && this.ctx) {
      const old = this.song;
      old.gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.5);
      setTimeout(() => old.gain.disconnect(), 3000);
      this.song = null;
    }
  }

  startScheduler() {
    if (this.pendingSong) { this.playSong(this.pendingSong); this.pendingSong = null; }
    setInterval(() => this.schedule(), 40);
  }

  schedule() {
    const s = this.song;
    if (!s || !this.ctx || this.ctx.state !== 'running') return;
    const ahead = this.ctx.currentTime + 0.25;
    const def = s.def;
    const stepDur = 60 / def.bpm / 4; // 16th notes
    if (s.t < this.ctx.currentTime - 1) s.t = this.ctx.currentTime + 0.05; // resync after tab sleep
    while (s.t < ahead) {
      this.playStep(s, s.step, s.t, stepDur);
      s.step++;
      s.t += stepDur;
    }
  }

  playStep(s, step, t, sd) {
    const def = s.def;
    const bar = Math.floor(step / 16) % def.chords.length;
    const sixteenth = step % 16;
    const chord = def.chords[bar];
    const root = def.root;
    const g = s.gain;
    const inten = s.intensity ?? 1;
    // pad: new chord each bar
    if (sixteenth === 0 && def.pad) {
      for (const iv of chord) {
        this.padNote(t, sd * 16 * 1.05, NOTE(root + iv), g, def.pad);
      }
    }
    // bass
    if (def.bass && def.bass[sixteenth] != null) {
      const n = def.bass[sixteenth];
      this.bassNote(t, sd * (def.bassLen ?? 3), NOTE(root - 24 + chord[0] + n), g, def.bassGain ?? 0.22);
    }
    // arpeggio
    if (def.arp && def.arp[sixteenth] != null && (def.arpEvery ? (Math.floor(step / 16) % def.arpEvery) === 0 || true : true)) {
      const k = def.arp[sixteenth];
      const iv = chord[k % chord.length] + 12 * Math.floor(k / chord.length);
      this.pluck(t, NOTE(root + 12 + iv), g, def.arpGain ?? 0.07, def.arpType ?? 'kalimba');
    }
    // melody (sparse, generative but deterministic per step)
    if (def.mel && sixteenth % 2 === 0) {
      const h = hash(step * 7 + 3);
      if (h < (def.melDensity ?? 0.18)) {
        const scale = def.scale;
        const deg = Math.floor(hash(step * 13 + 5) * scale.length);
        this.pluck(t, NOTE(root + 24 + scale[deg]), g, def.melGain ?? 0.05, def.melType ?? 'bell');
      }
    }
    // drums
    if (def.kick && def.kick[sixteenth]) this.kick(t, g, def.kickGain ?? 0.5);
    if (def.snare && def.snare[sixteenth]) this.snare(t, g, def.snareGain ?? 0.2);
    if (def.hat && def.hat[sixteenth]) this.hat(t, g, (def.hatGain ?? 0.05) * (sixteenth % 4 === 2 ? 1.4 : 1));
    if (def.shaker && sixteenth % 2 === 1) this.hat(t, g, def.shaker * inten, 6000, 0.05);
  }

  padNote(t, dur, f, dest, o) {
    const ctx = this.ctx;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(o.gain ?? 0.04, t + (o.attack ?? 1.2));
    gain.gain.linearRampToValueAtTime(0.0001, t + dur + 0.6);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = o.cutoff ?? 900; lp.Q.value = 0.5;
    for (const det of [-7, 6]) {
      const osc = ctx.createOscillator(); osc.type = o.type ?? 'sawtooth';
      osc.frequency.value = f; osc.detune.value = det;
      osc.connect(lp);
      osc.start(t); osc.stop(t + dur + 0.7);
    }
    lp.connect(gain).connect(dest);
  }

  bassNote(t, dur, f, dest, gain) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = f / 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); o2.connect(g); g.connect(dest);
    o.start(t); o.stop(t + dur + 0.05); o2.start(t); o2.stop(t + dur + 0.05);
  }

  pluck(t, f, dest, gain, kind) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    const dur = kind === 'bell' ? 1.8 : kind === 'marimba' ? 0.5 : 0.9;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const partials = kind === 'bell' ? [[1, 1], [2.76, 0.35], [5.4, 0.15]] : kind === 'marimba' ? [[1, 1], [4, 0.25]] : [[1, 1], [3.01, 0.18], [5.2, 0.06]];
    for (const [m, a] of partials) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f * m;
      const og = ctx.createGain(); og.gain.value = a;
      o.connect(og).connect(g); o.start(t); o.stop(t + dur + 0.05);
    }
    g.connect(dest);
  }

  kick(t, dest, gain) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g).connect(dest); o.start(t); o.stop(t + 0.32);
  }

  snare(t, dest, gain) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 0.8;
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    src.connect(f).connect(g).connect(dest); src.start(t, Math.random()); src.stop(t + 0.2);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    const og = ctx.createGain(); og.gain.setValueAtTime(gain * 0.6, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    o.connect(og).connect(dest); o.start(t); o.stop(t + 0.12);
  }

  hat(t, dest, gain, freq = 8000, dur = 0.04) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = freq;
    const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(dest); src.start(t, Math.random()); src.stop(t + dur + 0.02);
  }
}

function hash(n) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

const X = null;
const SONGS = {
  title: {
    bpm: 84, root: 50, // D
    chords: [[0, 7, 12, 16], [5, 9, 12, 17], [3, 7, 10, 15], [7, 11, 14, 19]].map((c) => c),
    scale: [0, 2, 4, 7, 9, 12, 14],
    pad: { gain: 0.035, cutoff: 1100, attack: 1.5 },
    arp: [0, X, 1, X, 2, X, 3, X, 4, X, 3, X, 2, X, 1, X],
    arpGain: 0.06,
    bass: [0, X, X, X, X, X, X, X, 0, X, X, X, X, X, 7, X],
    mel: true, melDensity: 0.12, melGain: 0.045,
  },
  ruins: {
    bpm: 92, root: 52, // E dorian-ish
    chords: [[0, 7, 10, 15], [5, 9, 12, 17], [3, 10, 15, 19], [2, 9, 14, 17]],
    scale: [0, 2, 3, 5, 7, 9, 10, 12],
    pad: { gain: 0.03, cutoff: 1000 },
    arp: [0, X, X, 2, X, X, 1, X, 3, X, X, 2, X, 1, X, X],
    arpGain: 0.065, arpType: 'marimba',
    bass: [0, X, X, X, X, X, 0, X, X, X, 7, X, X, X, X, X], bassGain: 0.2,
    kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0], kickGain: 0.32,
    hat: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1], hatGain: 0.03,
    shaker: 0.012,
    mel: true, melDensity: 0.14, melGain: 0.04, melType: 'kalimba',
  },
  crystal: {
    bpm: 76, root: 49, // C# lydian shimmer
    chords: [[0, 7, 11, 18], [2, 9, 14, 18], [-3, 4, 9, 16], [-1, 6, 11, 14]],
    scale: [0, 2, 4, 6, 7, 9, 11, 12],
    pad: { gain: 0.035, cutoff: 1400, type: 'triangle', attack: 2 },
    arp: [0, X, 2, X, 1, X, 3, X, 2, X, 4, X, 3, X, 5, X],
    arpGain: 0.05, arpType: 'bell',
    bass: [0, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X], bassGain: 0.18, bassLen: 12,
    mel: true, melDensity: 0.1, melGain: 0.035, melType: 'bell',
    hat: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], hatGain: 0.02,
  },
  temple: {
    bpm: 100, root: 45, // A phrygian dominant
    chords: [[0, 7, 13, 16], [1, 8, 13, 17], [0, 7, 12, 16], [-2, 5, 10, 13]],
    scale: [0, 1, 4, 5, 7, 8, 10, 12],
    pad: { gain: 0.03, cutoff: 800 },
    arp: [0, X, 1, 2, X, 1, X, 3, 0, X, 1, 2, X, 3, 2, X],
    arpGain: 0.055, arpType: 'marimba',
    bass: [0, X, X, 0, X, X, 0, X, 0, X, X, 0, X, X, 1, X], bassGain: 0.22, bassLen: 2,
    kick: [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0], kickGain: 0.35,
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], snareGain: 0.08,
    hat: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1], hatGain: 0.02,
    mel: true, melDensity: 0.16, melGain: 0.035, melType: 'kalimba',
  },
  boss: {
    bpm: 138, root: 45,
    chords: [[0, 7, 12, 15], [0, 7, 12, 15], [-4, 3, 8, 12], [-2, 5, 10, 14]],
    scale: [0, 2, 3, 5, 7, 8, 11, 12],
    pad: { gain: 0.03, cutoff: 1400 },
    arp: [0, 1, 2, 1, 0, 1, 2, 3, 0, 1, 2, 1, 4, 3, 2, 1],
    arpGain: 0.04, arpType: 'marimba',
    bass: [0, X, 0, X, 0, X, 0, 12, 0, X, 0, X, 0, X, 10, X], bassGain: 0.26, bassLen: 1.5,
    kick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0], kickGain: 0.5,
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1], snareGain: 0.16,
    hat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], hatGain: 0.02,
  },
  ending: {
    bpm: 88, root: 50,
    chords: [[0, 7, 12, 16], [7, 11, 14, 19], [9, 12, 16, 21], [5, 9, 12, 17]],
    scale: [0, 2, 4, 7, 9, 12, 14, 16],
    pad: { gain: 0.04, cutoff: 1600, attack: 1 },
    arp: [0, X, 1, X, 2, X, 3, X, 4, X, 3, X, 2, X, 1, X],
    arpGain: 0.07, arpType: 'bell',
    bass: [0, X, X, X, X, X, X, X, 7, X, X, X, X, X, X, X], bassGain: 0.22, bassLen: 6,
    kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], kickGain: 0.3,
    mel: true, melDensity: 0.22, melGain: 0.05, melType: 'kalimba',
  },
};
