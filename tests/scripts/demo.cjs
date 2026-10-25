// Records the README demo: real gameplay driven by scripted input in capture mode.
const { V, TP, st } = require('./common.cjs');
const rec = (frames, every = 2) => ({ rec: { frames, every } });
const mv = (x, y, extra = {}) => V({ move: { x, y }, ...extra });
const look = (yaw, pitch) => ({ eval: `(() => { const r = window.__game.cameraRig; r.yaw = ${yaw}; r.pitch = ${pitch}; })()` });
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=1',
  steps: [
    st(30), look(-0.15, -0.25),
    // run from the sunlit sinkhole to the soft dirt wall
    mv(0, 1), rec(24),
    // punch combo straight through the wall
    V({ move: { x: 0, y: 0.35 }, punchP: true }), rec(1), mv(0, 0.35), rec(5),
    V({ move: { x: 0, y: 0.35 }, punchP: true }), rec(1), mv(0, 0.35), rec(5),
    V({ move: { x: 0, y: 0.35 }, punchP: true }), rec(1), mv(0, 0.35), rec(8),
    V({ move: { x: 0, y: 0.5 }, punchP: true }), rec(1), mv(0, 0.5), rec(5),
    V({ move: { x: 0, y: 0.5 }, punchP: true }), rec(1), mv(0, 0.5), rec(5),
    V({ move: { x: 0, y: 0.5 }, punchP: true }), rec(1), mv(0, 0.6), rec(8),
    V({ move: { x: 0, y: 0.6 }, punchP: true }), rec(1), mv(0, 0.6), rec(5),
    V({ move: { x: 0, y: 0.6 }, punchP: true }), rec(1), mv(0, 0.6), rec(5),
    V({ move: { x: 0, y: 0.6 }, punchP: true }), rec(1), mv(0, 1), rec(16),
    // dash out into the ruins hall, jump and ground-pound a crater
    V({ move: { x: 0, y: 1 }, dashP: true }), rec(1), mv(0, 1), rec(10),
    V({ move: { x: 0, y: 1 }, jumpP: true, jump: true }), rec(1), V({ move: { x: 0, y: 0.5 }, jump: true }), rec(5),
    V({ slamP: true }), rec(1), V({}), rec(14),
    // dig straight down
    V({ slamP: true }), rec(1), V({}), rec(9),
    V({ slamP: true }), rec(1), V({}), rec(9),
    V({ slamP: true }), rec(1), V({}), rec(12),
  ],
};
