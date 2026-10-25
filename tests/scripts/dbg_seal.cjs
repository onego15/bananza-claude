const { V, TP, st, pound } = require('./common.cjs');
const q = { eval: `(() => { const g = window.__game, w = g.world, p = g.player; const s = w.entities.find((e) => e.def.type === 'seal'); return { f9: +w.vol.sample(36, 9, 66).toFixed(2), f8: +w.vol.sample(36, 8, 66).toFixed(2), f95_65: +w.vol.sample(36, 9.2, 65).toFixed(2), m: w.vol.materialAt(36, 9.4, 66), seal: s && { broken: s.broken, col: !!s.collider }, p: p.pos.toArray().map(v=>+v.toFixed(2)), st: p.state, gr: p.grounded }; })()` };
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=2&relics=gauntlet,quake',
  steps: [ st(10), q, TP(36, 10, 65, Math.PI, -0.5), st(10), ...pound, q, st(30), q,
    { eval: `(() => { const w = window.__game.world; const s = w.entities.find((e) => e.def.type === 'seal'); if (!s.broken) s.shatter(); })()` }, st(30), q ],
};
