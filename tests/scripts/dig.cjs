const V = (o) => `(() => { window.__game.input.virtual = ${JSON.stringify(o)}; })()`;
const st = (n) => ({ step: n });
module.exports = {
  url: 'http://localhost:5173/?autotest&capture',
  steps: [
    st(10),
    { eval: V({ move: { x: 0, y: 1 } }) }, st(30),
    { shot: 'walk' },
    { eval: '(() => { const g = window.__game; return [g.player.pos.toArray().map(v=>+v.toFixed(2)), g.player.state, g.player.grounded]; })()' },
    { eval: V({ move: { x: 0, y: 1 } }) }, st(20),
    { eval: '(() => { const g = window.__game; return [g.player.pos.toArray().map(v=>+v.toFixed(2)), g.player.state]; })()' },
    { eval: V({ punchP: true }) }, st(1), { eval: V({}) }, st(3), { shot: 'punch1' }, st(6),
    { eval: V({ punchP: true }) }, st(1), { eval: V({}) }, st(10),
    { eval: V({ punchP: true }) }, st(1), { eval: V({}) }, st(5), { shot: 'punch3' }, st(12),
    { eval: '(() => { const g = window.__game; return [g.player.pos.toArray().map(v=>+v.toFixed(2)), g.stats.dug, g.fx.debris.length]; })()' },
    { eval: V({ move: { x: 0, y: 1 } }) }, st(15),
    { eval: V({ punchP: true, move: { x: 0, y: 1 } }) }, st(1), { eval: V({ move: { x: 0, y: 1 } }) }, st(9),
    { eval: V({ punchP: true, move: { x: 0, y: 1 } }) }, st(1), { eval: V({ move: { x: 0, y: 1 } }) }, st(9),
    { eval: V({ punchP: true, move: { x: 0, y: 1 } }) }, st(1), { eval: V({ move: { x: 0, y: 1 } }) }, st(14),
    { shot: 'tunnel' },
    { eval: '(() => { const g = window.__game; return [g.player.pos.toArray().map(v=>+v.toFixed(2)), g.stats.dug]; })()' },
    { eval: V({ slamP: true }) }, st(1), { eval: V({}) }, st(10), { shot: 'slam' }, st(10),
    { eval: '(() => { const g = window.__game; return [g.player.pos.toArray().map(v=>+v.toFixed(2)), g.player.grounded, g.player.state]; })()' },
  ],
};
