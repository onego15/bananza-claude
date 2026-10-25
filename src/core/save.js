// Persistent progress in localStorage: area, checkpoint, flags, relics, collectibles,
// upgrades and the list of terrain edits per area (so dug tunnels survive reloads).

const KEY = 'gorodig-save-v1';
const SETTINGS_KEY = 'gorodig-settings-v1';

function fresh() {
  return {
    v: 1, area: 1, checkpoint: null, flags: {}, relics: {}, sunstones: {}, gold: 0,
    upgrades: { power: 0, hearts: 0, echo: 0 }, edits: {}, time: 0, kills: 0, dug: 0, deaths: 0, cleared: false,
  };
}

export class Save {
  constructor() {
    this.data = fresh();
    this.settings = { sens: 1, invertY: false, music: 0.5, sfx: 0.8, quality: 'auto', shake: 1 };
    try {
      const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null');
      if (s) Object.assign(this.settings, s);
    } catch (_) { /* storage blocked */ }
    this.dirtyEdits = false;
  }
  hasSave() {
    try { return !!localStorage.getItem(KEY); } catch (_) { return false; }
  }
  load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (d && d.v === 1) { this.data = Object.assign(fresh(), d); return true; }
    } catch (_) { /* ignore */ }
    return false;
  }
  reset() { this.data = fresh(); }
  write() {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (_) { /* quota or blocked */ }
  }
  wipe() { try { localStorage.removeItem(KEY); } catch (_) { /* ignore */ } this.reset(); }
  writeSettings() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (_) { /* ignore */ } }

  flag(id) { return !!this.data.flags[id]; }
  setFlag(id, v = true) { this.data.flags[id] = v; }
  has(relic) { return !!this.data.relics[relic]; }
  addRelic(r) { this.data.relics[r] = true; }
  hasSunstone(id) { return !!this.data.sunstones[id]; }
  addSunstone(id) { this.data.sunstones[id] = true; }
  sunstoneCount() { return Object.keys(this.data.sunstones).length; }
  edits(area) { return this.data.edits[area] || []; }
  markEdits(area, list) { this.data.edits[area] = list; this.dirtyEdits = true; }
  punchPower() { return 1 + this.data.upgrades.power * 0.16; }
  maxHearts() { return 5 + this.data.upgrades.hearts + Math.floor(this.sunstoneCount() / 5); }
}
