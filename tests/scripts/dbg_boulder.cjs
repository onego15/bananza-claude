const { V, TP, st, punch } = require('./common.cjs');
const bi = { eval: `(() => { const g = window.__game; const b = g.world.entities.find((e) => e.def.type === 'boulder'); const c = g.world.entities.find((e) => e.def.type === 'cage'); return { bs: b.state, pushes: b.pushes, bpos: b.pos.toArray().map(v=>+v.toFixed(2)), cage: c.broken, p: g.player.pos.toArray().map(v=>+v.toFixed(2)), pst: g.player.state }; })()` };
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=2&relics=gauntlet',
  steps: [
    st(20), bi,
    TP(54.8, 15, 24, -Math.PI / 2, -0.2), st(20), bi,
    ...punch, bi, ...punch, bi, ...punch, bi, st(20), bi, st(40), bi, { shot: 'b' },
    TP(51, 9, 21.5, 0, -0.1), st(10), ...punch, bi,
    { eval: '(() => window.__game.save.data.flags)()' },
  ],
};
