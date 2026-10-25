const { V, TP, st, info, punch, slam, jump, pound } = require('./common.cjs');
const binfo = { eval: '(() => { const g = window.__game; const b = g.world.entities.find((e) => e.isBoss); const p = g.player; return { bs: b.state, phase: b.phase, hits: b.totalHits, fist: b.fistHits, gs: g.state, pst: p.state, hp: p.hp, pos: p.pos.toArray().map(v=>+v.toFixed(1)) }; })()' };
// boss bot: stands near the slammed fist / exposed core and punches it; otherwise keeps distance.
const bot = `(() => {
  const g = window.__game, p = g.player, b = g.world.entities.find((e) => e.isBoss);
  if (!b || g.state !== 'play') { g.input.virtual = {}; return; }
  p.hp = Math.max(p.hp, 3); // keep the run going; damage taken is still logged
  let t = null;
  if (b.state === 'stagger') t = b.coreSphere.c;
  else if (b.state === 'stuck') t = b.fistSpheres[0].c.distanceTo(p.pos) < b.fistSpheres[1].c.distanceTo(p.pos) ? b.fistSpheres[0].c : b.fistSpheres[1].c;
  if (t) {
    const V3 = p.pos.constructor;
    const d = new V3(p.pos.x - t.x, 0, p.pos.z - t.z);
    if (d.lengthSq() < 0.01) d.set(Math.sin(b.yaw), 0, Math.cos(b.yaw));
    d.normalize();
    const hd = Math.hypot(p.pos.x - t.x, p.pos.z - t.z);
    if (hd > 2.6 || hd < 1.2) { p.pos.set(t.x + d.x * 2.0, p.pos.y, t.z + d.z * 2.0); p.vel.set(0, 0, 0); }
    const yaw = Math.atan2(t.x - p.pos.x, t.z - p.pos.z);
    p.yaw = yaw; g.cameraRig.yaw = yaw;
    const aim = Math.atan2(t.y - (p.pos.y + 1.2), Math.max(0.5, hd));
    g.cameraRig.pitch = aim / 1.6 - 0.28;
    g.input.virtual = (g.time * 10 | 0) % 3 === 0 ? { punchP: true } : {};
    return { bs: b.state, aim: +aim.toFixed(2), hd: +hd.toFixed(1), hits: b.totalHits, fist: b.fistHits };
  }
  // walk toward the boss but stay ~6 m away so it slams
  const dx = b.pos.x - p.pos.x, dz = b.pos.z - p.pos.z, dist = Math.hypot(dx, dz);
  const yaw = Math.atan2(dx, dz); g.cameraRig.yaw = yaw; g.cameraRig.pitch = -0.3;
  g.input.virtual = { move: { x: 0, y: dist > 7 ? 1 : dist < 5 ? -1 : 0 } };
  return { bs: b.state, dist: +dist.toFixed(1) };
})()`;
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=3&relics=gauntlet,quake',
  steps: [
    st(40), info, { shot: 'arrive' },
    V({ move: { x: 0, y: 1 } }), st(60), V({}), info, { shot: 'walk_down' },
    TP(30, 20.3, 33.5, 0, -0.3), st(20), info, { shot: 'hall' },
    V({ move: { x: 0, y: 1 } }), st(40), V({}), info, { shot: 'bridge' },
    TP(19.5, 20.3, 30, -Math.PI / 2, -0.2), st(10), ...punch, ...punch, ...punch, ...punch, info, { shot: 'vault' },
    TP(30, 20.3, 45.6, 0, -0.25), st(10), ...punch, ...punch, ...punch, info,
    V({ move: { x: 0, y: 1 } }), st(30), V({}), ...punch, ...punch, ...punch, info, { shot: 'corridor' },
    V({ move: { x: 0, y: 1 } }), st(40), V({}), info,
    TP(30, 20.3, 60, 0, -0.25), st(20), info, { shot: 'ante' },
    V({ move: { x: 0, y: 1 } }), st(60), V({}), info, binfo, { shot: 'boss_intro' },
    st(60), binfo, { shot: 'boss_awake' },
    { loop: { name: 'boss', eval: bot, step: 3, max: 900, log: false, shotEvery: 60, until: '(() => { const b = window.__game.world.entities.find((e) => e.isBoss); return b.state === "defeat"; })()' } },
    binfo, { shot: 'boss_defeat' },
    st(120), binfo, { shot: 'suncore' },
    st(240), binfo, { shot: 'ending', ui: true },
  ],
};
