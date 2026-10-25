// Teleport tour of area 1 + interaction checks
const V = (o) => `(() => { window.__game.input.virtual = ${JSON.stringify(o)}; })()`;
const TP = (x, y, z, yaw = 0, pitch = -0.3) => `(() => { const g = window.__game; g.player.spawn(new g.player.pos.constructor(${x},${y},${z}), ${yaw}); g.cameraRig.yaw = ${yaw}; g.cameraRig.pitch = ${pitch}; g.cameraRig.inited = false; })()`;
const st = (n) => ({ step: n });
const info = '(() => { const g = window.__game; const p = g.player; return { pos: p.pos.toArray().map(v=>+v.toFixed(2)), st: p.state, gr: p.grounded, hp: p.hp, obj: g.objective()?.text, sun: g.save.sunstoneCount(), gold: g.save.data.gold }; })()';
const punch = [{ eval: V({ punchP: true }) }, st(1), { eval: V({}) }, st(12)];
module.exports = {
  url: 'http://localhost:5173/?autotest&capture',
  steps: [
    st(5),
    { eval: TP(32, 13, 33, 0, -0.25) }, st(20), { shot: 'hall_entry' }, { eval: info },
    { eval: TP(27, 18, 41.8, -Math.PI / 2, -0.35) }, st(25), { shot: 'dais_r1' }, { eval: info },
    { eval: TP(21, 18, 41.8, -Math.PI / 2, -0.2) }, st(20), ...punch, { eval: info }, { shot: 'r1_hit' },
    { eval: TP(43, 13, 44, Math.PI / 2, -0.2) }, st(20), ...punch, ...punch, ...punch, { shot: 'r2_wall' }, { eval: info },
    { eval: TP(53, 13, 44, Math.PI / 2, -0.2) }, st(20), ...punch, { shot: 'r2_room' }, { eval: info },
    { eval: TP(26, 12.5, 48, 0, -1.0) }, st(15), { eval: V({ slamP: true }) }, st(1), { eval: V({}) }, st(20), { eval: V({ slamP: true }) }, st(1), { eval: V({}) }, st(30), { shot: 'r3_dig' }, { eval: info },
    { eval: TP(26, 8.5, 48, 0, -0.1) }, st(20), ...punch, { shot: 'r3_hit' }, { eval: info },
    { eval: TP(32, 12.5, 56, 0, -0.15) }, st(60), { shot: 'gate' }, { eval: info },
    { eval: TP(32, 12.5, 66, 0, -0.25) }, st(30), { shot: 'sanctum' }, { eval: info },
    { eval: TP(32, 12.5, 73.5, 0, -0.2) }, st(40), { shot: 'relic' }, { eval: info },
    { eval: TP(32, 13, 70.2, 0, -0.9) }, st(10), { eval: V({ slamP: true }) }, st(1), { eval: V({}) }, st(20), { eval: info }, { shot: 'seal' },
    { eval: V({ slamP: true }) }, st(1), { eval: V({}) }, st(30), { eval: info },
    st(60), { eval: info }, { shot: 'after' },
  ],
};
