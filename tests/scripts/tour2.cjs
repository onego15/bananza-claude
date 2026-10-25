const { V, TP, st, info, punch, slam, jump, pound } = require('./common.cjs');
module.exports = {
  url: 'http://localhost:5173/?autotest&capture&area=2&relics=gauntlet',
  steps: [
    st(40), info, { shot: 'arrive' },
    TP(38, 32.5, 19.5, 0.2, -0.35), st(30), { shot: 'ledge' }, info,
    TP(20, 21.5, 27, 0, -0.2), st(25), ...punch, info, { shot: 'b1' },
    TP(17, 10, 43.5, -Math.PI / 2, -0.15), st(20), ...punch, ...punch, ...punch, ...punch, info, { shot: 'geode_wall' },
    TP(9.5, 10, 44.3, -Math.PI / 2, -0.15), st(20), ...punch, info, { shot: 'b2' },
    TP(51, 9, 20.5, 0, 0.6), st(20), ...punch, info, { shot: 'cage' },
    TP(54.8, 15, 24, -Math.PI / 2, -0.2), st(20), info, { shot: 'shelf' },
    ...punch, st(8), ...punch, st(8), ...punch, st(8), info,
    st(40), { shot: 'boulder' }, info,
    st(60), info, { shot: 'boulder_end' },
    TP(51, 9, 21.5, 0, -0.1), st(10), ...punch, info,
    TP(36, 10, 58, 0, -0.2), st(60), { shot: 'gate2' }, info,
    TP(36, 10, 68, 0, -0.2), st(30), info, { shot: 'quake' },
    st(50), TP(36, 10, 65, Math.PI, -0.5), st(10), ...pound, info, { shot: 'seal' },
    st(60), info, st(120), info, { shot: 'area3' },
  ],
};
