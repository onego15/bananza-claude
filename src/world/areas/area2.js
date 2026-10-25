import { MAT } from '../../terrain/volume.js';
import { AreaBuilder } from '../gen.js';

// AREA 2 — 輝晶の大空洞 (Crystal Hollow)
// A vast crystal cavern. Light three beacon crystals: one on a mesa, one inside a geode
// sealed by hard rock (needs the gauntlet), one caged — dig away the shelf holding a boulder
// so it smashes the cage. The crypt then opens with the Quake Idol and a slam-only seal.

const stalactite = (B, x, z, ytop, len, r, mat) => {
  B.solid([x - r, ytop - len, z - r, x + r, ytop, z + r], (px, py, pz) => {
    const t = Math.max(0, Math.min(1, (py - (ytop - len)) / len));
    return Math.max(Math.hypot(px - x, pz - z) - r * Math.pow(t, 0.7), ytop - len - py);
  }, mat);
};

export const area2 = {
  id: 2,
  name: '輝晶の大空洞',
  sub: 'Crystal Hollow',
  size: [72, 52, 76],
  voxel: 0.5,
  seed: 2203,
  decor: 'crystal',
  tip: '黒い「硬岩」は大地の籠手で砕ける。大空洞では高い場所から全体を見渡そう。',
  theme: {
    dirtA: 0x3f3549, dirtB: 0x625470, rockA: 0x56546e, rockB: 0x7d7a96, hard: 0x262c3e,
    crystal: 0x5fd0f0, brick: 0x8a86a0, ancient: 0x262336, rune: 0x8fe8ff, bedrock: 0x15121c,
    moss: 0x3fb0a8, mossAmt: 0.35,
    fog: 0x161a2a, fogDensity: 0.014, bg: 0x0a0f1e,
    hemiSky: 0xaab6d8, hemiGround: 0x2c2040, hemiInt: 1.0,
    keyColor: 0xb8d4ff, keyInt: 1.7, keyDir: [-0.3, 1, 0.35],
    bloom: 0.6, grade: 0xf0f6ff,
    playerLight: 0xd0e4ff,
    music: 'crystal',
  },
  build(noise) {
    const B = new AreaBuilder(noise);
    B.baseMat = (x, y, z) => {
      const r = noise.fbm(x * 0.05, y * 0.07, z * 0.05, 2);
      if (y < 3) return MAT.HARD;
      const c = noise.ridged(x * 0.07, y * 0.07, z * 0.07, 2);
      if (c > 0.86) return MAT.CRYSTAL;
      if (noise.noise(x * 0.15 + 9, y * 0.15, z * 0.15) > 0.66) return MAT.GOLD;
      if (r > 0.18) return MAT.DIRT;
      if (r < -0.3) return MAT.HARD;
      return MAT.ROCK;
    };

    // arrival chamber + drop shaft
    B.room(36, 42.5, 8, 6.5, 4, 6, { floor: 39.5 });
    B.cylinder(36, 8, 42, 50.5, 3);
    B.tunnel([[36, 40.5, 13], [37, 37, 18], [38, 33, 21.5]], 3);
    // the great cavern
    B.room(36, 20, 36, 27, 22, 23, { floor: 8 });
    // overlook ledge + descending mesas
    B.boxSolid(38, 30.5, 19.5, 4, 1.5, 3, MAT.ROCK, 0.6);
    B.pillar(42, 28, 7, 27, 3, MAT.ROCK, { taper: 0.1 });
    B.pillar(48, 33, 7, 22, 3, MAT.ROCK, { taper: 0.1 });
    B.pillar(52, 38.5, 7, 17, 3.2, MAT.ROCK, { taper: 0.1 });
    // beacon mesa
    B.pillar(20, 30, 7, 21, 3.2, MAT.ROCK, { taper: 0.12 });
    // crystal spires
    B.pillar(22, 48, 7, 30, 2.4, MAT.CRYSTAL, { taper: 0.45 });
    B.pillar(56, 50, 7, 24, 2, MAT.CRYSTAL, { taper: 0.8 });
    B.pillar(29, 22, 7, 17, 1.4, MAT.CRYSTAL, { taper: 0.75 });
    B.pillar(46, 46, 7, 13, 1.2, MAT.CRYSTAL, { taper: 0.7 });
    for (const [x, z, len, r, m] of [[30, 34, 9, 1.6, MAT.CRYSTAL], [44, 38, 7, 1.3, MAT.ROCK], [26, 42, 6, 1.2, MAT.CRYSTAL], [40, 28, 8, 1.4, MAT.ROCK], [48, 30, 6, 1.1, MAT.CRYSTAL], [34, 46, 7, 1.3, MAT.ROCK]]) {
      stalactite(B, x, z, 43, len, r, m);
    }
    // underground lake + island
    B.room(34, 4.5, 44, 12, 4.5, 8, { rough: 0.5 });
    B.sphereSolid(34, 4.5, 44, 3.8, MAT.DIRT, { k: 0.6 });
    // geode chamber behind hard rock (beacon 2 + sunstone)
    B.room(6.5, 11.5, 44, 3.6, 3, 3.6, { floor: 9.5, rough: 0.4 });
    B.veinSphere(6.5, 11.5, 44, 5.2, MAT.CRYSTAL);
    B.tunnel([[16, 10.5, 43.5], [8.5, 10.5, 44]], 1.9, { flat: 0.5 });
    B.sphereSolid(12.2, 10.5, 43.7, 2.5, MAT.HARD);
    // boulder shelf above the cage
    B.boxSolid(53, 13.9, 24, 4.6, 0.7, 2.6, MAT.DIRT, 0.35);
    // gold pocket with a sunstone west of the ledge
    B.veinSphere(30, 31, 17, 2.4, MAT.GOLD);
    // crypt: ancient shell, doorway, slam seal shaft
    B.box(36, 12, 57, 3, 3, 4, 0.6, { rough: 0.3 });
    B.boxSolid(36, 13, 67, 8, 6, 6, MAT.ANCIENT, 0.3, { after: true });
    B.cutBox(36, 13.5, 67, 5.5, 4, 4, 0.5);
    B.cutBox(36, 12, 61, 2.2, 2.6, 2.2, 0.3);
    B.cut([33, 2, 63, 39, 11.5, 69], (x, y, z) => Math.max(Math.hypot(x - 36, z - 66) - 1.9, 2.5 - y, y - 11.0));
    return B;
  },

  entities: [
    { type: 'spawn', pos: [36, 46, 8], yaw: 0 },
    { type: 'checkpoint', id: 'a2_start', pos: [32.5, 39.6, 6.5] },
    { type: 'checkpoint', id: 'a2_floor', pos: [40, 8.1, 29] },
    { type: 'checkpoint', id: 'a2_crypt', pos: [31.5, 9.6, 65] },
    { type: 'sign', pos: [36.5, 32, 21], text: '見渡すかぎりの大空洞！\n3つの輝晶灯を灯せば、北の祠が開くらしい' },
    { type: 'hint', pos: [17, 8.2, 43.5], text: '黒い硬岩の奥から青い光が漏れている…' },
    { type: 'hint', pos: [48, 8.2, 26], text: '檻の真上の岩棚に、大岩が乗っている…' },
    { type: 'hint', pos: [36, 9.6, 66], text: 'ひび割れた封印石。\n強烈な一撃でなければ割れない' },

    { type: 'sunstone', id: 'a2_s1', pos: [41.8, 40.4, 11] },
    { type: 'sunstone', id: 'a2_s2', pos: [22, 30.4, 48] },
    { type: 'sunstone', id: 'a2_s3', pos: [5, 10.0, 46.5] },
    { type: 'sunstone', id: 'a2_s4', pos: [34, 7.6, 44] },
    { type: 'sunstone', id: 'a2_s5', pos: [30, 31, 17] },

    { type: 'beacon', id: 'a2_b1', pos: [20, 21, 30], group: 'a2_beacon' },
    { type: 'beacon', id: 'a2_b2', pos: [6.5, 9.5, 44.5], group: 'a2_beacon' },
    { type: 'beacon', id: 'a2_b3', pos: [51, 8, 24], group: 'a2_beacon', caged: true },
    { type: 'cage', id: 'a2_cage', target: 'a2_b3', pos: [51, 8, 24], r: 1.6, h: 3.6 },
    { type: 'boulder', id: 'a2_boulder', pos: [51, 16.2, 24], r: 1.6, endPos: [51, 9.2, 24], cageTarget: 'a2_b3' },
    { type: 'gate', id: 'a2_gate', pos: [36, 9.4, 61], w: 4.4, h: 5.2, group: 'a2_beacon', need: 3 },
    { type: 'relic', id: 'quake', pos: [36, 9.6, 70] },
    { type: 'seal', id: 'a2_seal', pos: [36, 9.6, 66], r: 2.2 },
    { type: 'exitShaft', pos: [36, 66], y: 5.5, r: 1.9, to: 3 },
    { type: 'liquid', kind: 'water', pos: [34, 7.2, 44], size: [26, 18] },
    { type: 'shimmer', pos: [33.8, 32.1, 18.5] },

    { type: 'bat', pos: [36, 25, 34] },
    { type: 'bat', pos: [24, 20, 40] },
    { type: 'bat', pos: [46, 24, 44] },
    { type: 'bat', pos: [30, 28, 28] },
    { type: 'grub', variant: 'crystal', pos: [40, 8.3, 32] },
    { type: 'grub', variant: 'crystal', pos: [27, 8.3, 30] },
    { type: 'grub', variant: 'crystal', pos: [44, 8.3, 50] },
    { type: 'grub', variant: 'crystal', pos: [14, 9.6, 43.5] },

    { type: 'brazier', pos: [33, 9.5, 63.5] },
    { type: 'brazier', pos: [39, 9.5, 63.5] },
    { type: 'brazier', pos: [33.5, 39.5, 12] },
    { type: 'godray', pos: [36, 50, 8], r: 2.8, h: 12, color: 0xc8e0ff, opacity: 0.18 },
    { type: 'skylight', pos: [36, 50.3, 8], r: 3 },
  ],
};
