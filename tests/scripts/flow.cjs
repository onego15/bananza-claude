// Save / continue / death / fall-respawn / area-transition flow test.
const { TP, st, punch } = require('./common.cjs');
const ev = (js) => ({ eval: `(() => { const g = window.__game, p = g.player, w = g.world; ${js} })()` });
const wait = (ms) => ({ eval: `new Promise((r) => setTimeout(r, ${ms}))` });
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=1',
  steps: [
    st(10),
    // 1) dig the tutorial wall, then save
    TP(31.5, 14.6, 18.6, -0.15, -0.3), st(10), ...punch, ...punch, ...punch, ...punch,
    ev(`g.writeSave(); const raw = localStorage.getItem('gorodig-save-v1'); const d = JSON.parse(raw); return { test: 'save', edits: (d.edits[1] || []).length, fieldAtWall: +w.vol.sample(30.6, 15.4, 21.4).toFixed(2), area: d.area };`),
    // 2) fall out of the world -> respawn at last safe spot, lose one heart
    ev(`window.__hp0 = p.hp; p.pos.set(32, -3, 20); p.vel.set(0, -10, 0);`), st(30),
    ev(`return { test: 'fall', hpBefore: window.__hp0, hp: p.hp, pos: p.pos.toArray().map((v) => +v.toFixed(1)), y_ok: p.pos.y > 5, state: g.state };`),
    // 3) death -> death menu -> respawn at checkpoint
    ev(`p.hp = 1; p.invuln = 0; p.hurt(p.pos.clone().add(new p.pos.constructor(1, 0, 0)), 1);`), st(40),
    ev(`return { test: 'death', state: g.state, dead: p.dead, deathMenu: document.body.innerText.includes('チェックポイント') || document.body.innerText.includes('再開') || document.body.innerText.includes('もう一度') };`),
    ev(`g.hud.menuActivate();`), st(10),
    ev(`return { test: 'respawn', state: g.state, dead: p.dead, hp: p.hp, maxHp: p.maxHp, pos: p.pos.toArray().map((v) => +v.toFixed(1)) };`),
    // 4) area transition 1 -> 2 (same path the exit shaft uses)
    ev(`g.goToArea(2);`), wait(2500), { eval: `new Promise((r) => { const t = setInterval(() => { if (window.__game.state === 'play' && window.__game.world?.def.id === 2) { clearInterval(t); r(); } }, 200); })` }, st(20),
    ev(`const d = JSON.parse(localStorage.getItem('gorodig-save-v1')); return { test: 'transition', area: w.def.id, saveArea: d.area, state: g.state, pos: p.pos.toArray().map((v) => +v.toFixed(1)), grounded: p.grounded };`),
    { shot: 'after_transition' },
    // 5) continue from save: back to title and continue -> area 2, area-1 edits still stored
    ev(`g.toTitle();`), st(5), ev(`g.continueGame();`), { eval: `new Promise((r) => { const t = setInterval(() => { if (window.__game.state === 'play') { clearInterval(t); r(); } }, 200); })` }, st(10),
    ev(`const d = JSON.parse(localStorage.getItem('gorodig-save-v1')); return { test: 'continue', area: w.def.id, edits1: (d.edits[1] || []).length, state: g.state };`),
    // 6) reload area 1 from the save and confirm the dug tunnel was replayed into the terrain
    ev(`g.save.data.area = 1; g.save.data.checkpoint = null; g.writeSave(); g.continueGame();`), { eval: `new Promise((r) => { const t = setInterval(() => { const g = window.__game; if (g.state === 'play' && g.world?.def.id === 1) { clearInterval(t); r(); } }, 200); })` }, st(5),
    ev(`return { test: 'edits-replayed', area: w.def.id, fieldAtWall: +w.vol.sample(30.6, 15.4, 21.4).toFixed(2), airMeansDug: w.vol.sample(30.6, 15.4, 21.4) > 0 };`),
  ],
};
