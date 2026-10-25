const V = (o) => ({ eval: `(() => { window.__game.input.virtual = ${JSON.stringify(o)}; })()` });
const TP = (x, y, z, yaw = 0, pitch = -0.3) => ({ eval: `(() => { const g = window.__game; g.player.spawn(new g.player.pos.constructor(${x},${y},${z}), ${yaw}); g.cameraRig.yaw = ${yaw}; g.cameraRig.pitch = ${pitch}; g.cameraRig.inited = false; g.cameraRig.curDist = 3; })()` });
const st = (n) => ({ step: n });
const info = { eval: '(() => { const g = window.__game; const p = g.player; if (!g.world) return { loading: true, state: g.state }; return { area: g.world.def.id, pos: p.pos.toArray().map(v=>+v.toFixed(2)), st: p.state, gr: p.grounded, hp: p.hp, obj: g.objective()?.text, sun: g.save.sunstoneCount(), gold: g.save.data.gold, flags: Object.keys(g.save.data.flags).join(",") }; })()' };
const punch = [V({ punchP: true }), st(1), V({}), st(12)];
const slam = [V({ slamP: true }), st(1), V({}), st(16)];
const jump = (n = 8) => [V({ jumpP: true, jump: true }), st(1), V({ jump: true }), st(n), V({})];
const pound = [V({ jumpP: true, jump: true }), st(1), V({ jump: true }), st(12), V({ slamP: true }), st(1), V({}), st(30)];
module.exports = { V, TP, st, info, punch, slam, jump, pound };
