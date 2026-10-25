import { MAT } from '../../terrain/volume.js';
import { AreaBuilder } from '../gen.js';

// AREA 1 — 翠の地下遺跡 (Verdant Ruins)
// Sunlit sinkhole -> tutorial dirt wall -> overgrown ruins hall with 3 rune stones
// -> sealed sanctum with the Terra Gauntlet -> hard-rock floor seal down to Area 2.

export const area1 = {
  id: 1,
  name: '翠の地下遺跡',
  sub: 'Verdant Ruins',
  size: [64, 36, 84],
  voxel: 0.5,
  seed: 1201,
  theme: {
    dirtA: 0x4e321f, dirtB: 0x7a5434, rockA: 0x6c655c, rockB: 0x958a7a, hard: 0x313a4c,
    crystal: 0x6ff0ff, brick: 0xa49274, ancient: 0x2f2b38, rune: 0x5dffd2, bedrock: 0x1c1714,
    moss: 0x4f8a2c, mossAmt: 0.8,
    fog: 0x1c3326, fogDensity: 0.02, bg: 0x13221a,
    hemiSky: 0xb4e0b0, hemiGround: 0x3a2a18, hemiInt: 1.15,
    keyColor: 0xffe1b0, keyInt: 2.2, keyDir: [0.35, 1, 0.25],
    bloom: 0.55,
    music: 'ruins',
  },
  build(noise) {
    const B = new AreaBuilder(noise);
    B.baseMat = (x, y, z) => {
      const r = noise.fbm(x * 0.06, y * 0.09, z * 0.06, 2);
      if (y < 4) return MAT.HARD;
      if (y < 8 + r * 4) return noise.noise(x * 0.2, y * 0.2, z * 0.2) > 0.55 ? MAT.GOLD : MAT.ROCK;
      if (r > 0.22) return MAT.ROCK;
      if (noise.noise(x * 0.12 + 40, y * 0.12, z * 0.12) > 0.72) return MAT.GOLD;
      return MAT.DIRT;
    };

    // --- start: sunlit sinkhole cave ---
    B.room(32, 18, 11, 11, 7, 9, { floor: 13.5 });
    B.cylinder(32, 10, 16, 33.6, 5.5);
    B.sphereSolid(36.5, 13.6, 13.5, 1.7, MAT.DIRT, { k: 0.8 }); // mound hiding a sunstone

    // --- tunnel to the ruins, blocked by a soft dirt wall (tutorial) ---
    B.tunnel([[32, 15.5, 16], [30, 15, 24], [28, 14.5, 32]], 3.4);
    B.sphereSolid(30.6, 15.4, 23.2, 3.5, MAT.DIRT);
    // hidden gold grotto beside the tunnel (sunstone S3)
    B.room(19, 15.2, 25, 4.5, 3.0, 4.2, { floor: 13.2 });
    B.veinSphere(24.3, 15.2, 25.6, 1.6, MAT.GOLD);
    B.veinSphere(16.5, 14.5, 22.5, 1.8, MAT.GOLD);
    B.veinSphere(20.5, 17.5, 28.5, 1.5, MAT.GOLD);

    // --- ruins hall ---
    B.room(32, 19, 45, 17, 10, 14, { floor: 12 });
    for (const x of [20, 44]) for (const z of [38, 46, 54]) {
      const broken = x === 44 && z === 46;
      B.pillar(x, z, 11, broken ? 17 : 30, 1.25, MAT.BRICK, { base: true });
    }
    B.boxSolid(32, 12.6, 38, 5, 1.0, 0.45, MAT.BRICK, 0.15);
    B.boxSolid(37, 12.5, 50.5, 0.45, 0.9, 3.5, MAT.BRICK, 0.15);
    // raised dais (brick over an ancient core) + ancient stairs
    B.boxSolid(19, 14.25, 41.8, 3, 3.25, 2.8, MAT.BRICK, 0.2);
    B.boxSolid(19, 14.1, 41.8, 2.3, 3.1, 2.1, MAT.ANCIENT, 0.1, { after: true });
    for (let i = 0; i < 6; i++) {
      const top = 12.4 + 0.85 * i;
      B.boxSolid(29 - 1.2 * i, (11 + top) / 2, 41.8, 0.62, (top - 11) / 2, 1.5, MAT.ANCIENT, 0.08, { after: true });
    }
    // side chamber behind a cracked dirt wall (rune R2, sunstone S5)
    B.room(55, 15, 44, 4.6, 3.3, 4.6, { floor: 12.5 });
    B.tunnel([[45, 14.6, 44], [52, 14.6, 44]], 2.1, { flat: 0.5 });
    B.sphereSolid(48.6, 14.6, 44, 2.6, MAT.DIRT);
    B.sphereSolid(57.2, 12.2, 47.6, 1.7, MAT.DIRT, { k: 0.6 });
    // buried chamber under the hall floor (rune R3)
    B.room(26, 9.4, 50, 2.7, 1.9, 2.7, { floor: 7.9, rough: 0.3 });
    B.vein([22, 7, 46, 30, 13, 54], (x, y, z) => Math.hypot(x - 26, (y - 10) * 1.2, z - 50) - 3.8, MAT.DIRT);

    // --- sanctum: unbreakable ancient shell, gate, relic, exit seal ---
    B.box(32, 15.2, 57.5, 3.2, 3.4, 3.5, 0.6, { rough: 0.3 });
    B.boxSolid(32, 16, 70, 10, 7.5, 9.5, MAT.ANCIENT, 0.3, { after: true });
    B.cutBox(32, 16.5, 70, 7, 4.5, 7, 0.5);
    B.cutBox(32, 15, 60.5, 2.2, 3.0, 2.2, 0.3);
    B.cut([28, 2.5, 68, 36, 13, 76], (x, y, z) => Math.max(Math.hypot(x - 32, z - 72) - 2.3, 3 - y, y - 12.6));
    B.plugCyl(32, 72, 11.0, 12.15, 2.6, MAT.HARD);

    return B;
  },

  // world-space entity placements (y is the floor height the entity stands on)
  entities: [
    { type: 'spawn', pos: [32, 14.2, 7.5], yaw: 0 },
    { type: 'skylight', pos: [32, 33.4, 10], r: 5.5 },
    { type: 'checkpoint', id: 'a1_start', pos: [27.5, 13.6, 9.5] },
    { type: 'checkpoint', id: 'a1_hall', pos: [27, 12.1, 34.5] },
    { type: 'checkpoint', id: 'a1_sanct', pos: [26.5, 12.1, 66.5] },
    { type: 'sign', pos: [35.2, 14, 18.2], text: 'やわらかい土の壁だ。\n【左クリック】でパンチ！' },
    { type: 'sign', pos: [29, 12.1, 35.5], text: '古代の扉は3つの\nルーンストーンで開く' },

    { type: 'sunstone', id: 'a1_s1', pos: [36.5, 13.9, 13.5] },
    { type: 'sunstone', id: 'a1_s2', pos: [44, 17.9, 46] },
    { type: 'sunstone', id: 'a1_s3', pos: [18.5, 14.0, 25.5] },
    { type: 'sunstone', id: 'a1_s4', pos: [20, 13.6, 54] },
    { type: 'sunstone', id: 'a1_s5', pos: [57.2, 13.0, 47.6] },

    { type: 'rune', id: 'a1_r1', pos: [19, 17.5, 41.8], group: 'a1_gate' },
    { type: 'rune', id: 'a1_r2', pos: [56, 12.5, 43.5], group: 'a1_gate' },
    { type: 'rune', id: 'a1_r3', pos: [26, 7.9, 50], group: 'a1_gate' },
    { type: 'gate', id: 'a1_gate', pos: [32, 12, 61], w: 4.4, h: 6, group: 'a1_gate', need: 3 },
    { type: 'relic', id: 'gauntlet', pos: [32, 12.1, 75.5] },
    { type: 'exitShaft', pos: [32, 72], y: 6.5, r: 2.3, to: 2 },
    { type: 'hint', pos: [32, 12.2, 72], text: '硬い岩盤の床… 籠手があれば砕けそうだ' },
    { type: 'shimmer', pos: [26, 12.1, 50] },

    { type: 'grub', pos: [31, 12.2, 43] },
    { type: 'grub', pos: [40, 12.2, 53] },
    { type: 'grub', pos: [24, 12.2, 49] },
    { type: 'grub', pos: [29, 14.2, 28] },
    { type: 'grub', pos: [55, 12.7, 42] },

    { type: 'urn', pos: [23.5, 12, 36] },
    { type: 'urn', pos: [24.4, 12, 35.2] },
    { type: 'urn', pos: [41.5, 12, 56.5] },
    { type: 'urn', pos: [46.5, 12, 41] },
    { type: 'urn', pos: [35, 12, 64.5] },
    { type: 'urn', pos: [29, 12, 64.5] },
    { type: 'urn', pos: [53, 12.5, 41] },

    { type: 'brazier', pos: [28.5, 12, 57] },
    { type: 'brazier', pos: [35.5, 12, 57] },
    { type: 'brazier', pos: [26.5, 12, 33.5] },
    { type: 'brazier', pos: [27, 12, 76] },
    { type: 'brazier', pos: [37, 12, 76] },
    { type: 'brazier', pos: [54, 12.5, 48] },
    { type: 'godray', pos: [27, 29, 44], r: 1.6, h: 18 },
    { type: 'godray', pos: [38, 28, 50], r: 1.2, h: 17 },
    { type: 'godray', pos: [32, 34, 10], r: 5.2, h: 21 },
  ],
};
