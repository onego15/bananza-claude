import { MAT } from '../../terrain/volume.js';
import { AreaBuilder, sdBox } from '../gen.js';

// AREA 3 — 陽の地底神殿 (Sunken Sun Temple)
// Sandstone halls over lava, brick walls to smash through, a hard-rock gold vault,
// and the colossus Gravemaw guarding the dimmed Sun Core.

export const area3 = {
  id: 3,
  name: '陽の地底神殿',
  sub: 'Sunken Sun Temple',
  size: [60, 44, 96],
  voxel: 0.5,
  seed: 3307,
  decor: 'temple',
  tip: 'レンガの壁は殴って崩せる。溶岩に落ちると大ダメージ！',
  theme: {
    dirtA: 0x6a4a30, dirtB: 0x9a7048, rockA: 0x7a6050, rockB: 0xa48468, hard: 0x2e2a36,
    crystal: 0xffb35a, brick: 0xd2aa78, ancient: 0x2c2230, rune: 0xffc860, bedrock: 0x1a120c,
    moss: 0x8a8a40, mossAmt: 0.15,
    fog: 0x2a170c, fogDensity: 0.018, bg: 0x160c06,
    hemiSky: 0xffd8b0, hemiGround: 0x40200c, hemiInt: 1.0,
    keyColor: 0xffcc96, keyInt: 2.0, keyDir: [0.25, 1, -0.3],
    bloom: 0.75, grade: 0xfff4e8,
    music: 'temple',
  },
  build(noise) {
    const B = new AreaBuilder(noise);
    B.baseMat = (x, y, z) => {
      const r = noise.fbm(x * 0.06, y * 0.08, z * 0.06, 2);
      if (y < 3) return MAT.HARD;
      if (noise.noise(x * 0.16 + 3, y * 0.16, z * 0.16) > 0.6) return MAT.GOLD;
      if (r > 0.15) return MAT.DIRT;
      return MAT.ROCK;
    };
    // arrival pit + shaft
    B.room(30, 34, 8, 6, 4, 6, { floor: 31 });
    B.cylinder(30, 8, 34, 42.5, 3);
    B.tunnel([[30, 32.5, 13], [30, 28, 19], [30, 23.5, 24.5]], 3);
    // temple hall (masonry walls)
    B.box(30, 26, 34, 9, 6, 10, 1.0, { rough: 0.15 });
    B.vein([18, 18, 22, 42, 34, 46], (x, y, z) => sdBox(x - 30, y - 26, z - 34, 11.5, 8, 12.5, 0.5), MAT.BRICK);
    for (const x of [23.5, 36.5]) for (const z of [27, 32, 43]) B.pillar(x, z, 19, 33, 0.95, MAT.BRICK, { base: true });
    // lava trench with a brick bridge and a tiny pillar island
    B.cutBox(30, 17.5, 38, 9, 2.6, 2.2, 0.3);
    B.plug(30, 19.6, 38, 1.15, 0.4, 2.6, MAT.BRICK, 0.1);
    B.plugCyl(24.5, 38, 14, 20.2, 0.85, MAT.ANCIENT);
    // gold vault behind hard rock
    B.room(14, 22.5, 30, 3.5, 2.5, 3.5, { floor: 20, rough: 0.4 });
    B.tunnel([[21.5, 21.5, 30], [16, 21.5, 30]], 1.6, { flat: 0.5 });
    B.sphereSolid(18.6, 21.5, 30, 2.1, MAT.HARD);
    B.veinSphere(12, 23, 28, 2, MAT.GOLD);
    B.veinSphere(15, 21, 33, 1.6, MAT.GOLD);
    // corridor with brick walls + secret alcove
    B.box(30, 23, 50, 3, 3, 6.5, 0.6, { rough: 0.1 });
    B.vein([25, 18, 43, 35, 28, 57], (x, y, z) => sdBox(x - 30, y - 23, z - 50, 4.5, 4.5, 7), MAT.BRICK);
    B.boxSolid(30, 23, 48, 3.3, 3.3, 0.6, MAT.BRICK, 0.1);
    B.boxSolid(30, 23, 53, 3.3, 3.3, 0.6, MAT.BRICK, 0.1);
    B.room(36.6, 21.5, 50.5, 2.2, 1.6, 2, { floor: 20, rough: 0.2 });
    // antechamber + hidden loft above it
    B.box(30, 23, 60, 6, 3, 4, 0.6, { rough: 0.15 });
    B.room(30, 29.6, 60, 2.6, 1.8, 2.6, { floor: 28.2, rough: 0.2 });
    // boss arena
    B.room(30, 27, 76, 15, 14, 15, { floor: 20, rough: 0.35 });
    B.vein([14, 10, 60, 46, 19.2, 92], () => -1, MAT.ANCIENT);
    for (const [x, z] of [[21, 76], [39, 76], [30, 67], [30, 85]]) B.pillar(x, z, 19, 42, 1.3, MAT.BRICK, { base: true });
    return B;
  },

  entities: [
    { type: 'spawn', pos: [30, 40, 8], yaw: 0 },
    { type: 'checkpoint', id: 'a3_start', pos: [26, 31.1, 6.5] },
    { type: 'checkpoint', id: 'a3_hall', pos: [25.5, 20.1, 60.5] },
    { type: 'sign', pos: [31.5, 20.1, 26.5], text: '太陽を祀る地底神殿。\n最奥で何かが眠っている…' },
    { type: 'hint', pos: [21.5, 20.1, 30], text: '硬岩の向こうで金がきらめいている' },

    { type: 'sunstone', id: 'a3_s1', pos: [34.6, 31.6, 10.5] },
    { type: 'sunstone', id: 'a3_s2', pos: [37, 20.4, 50.5] },
    { type: 'sunstone', id: 'a3_s3', pos: [24.5, 20.6, 38] },
    { type: 'sunstone', id: 'a3_s4', pos: [13.5, 20.4, 30.5] },
    { type: 'sunstone', id: 'a3_s5', pos: [30, 28.6, 60] },
    { type: 'shimmer', pos: [32.6, 20.1, 50.5] },

    { type: 'liquid', kind: 'lava', pos: [30, 16.8, 38], size: [18, 4.4] },
    { type: 'golem', pos: [33, 20.3, 30], yaw: Math.PI },
    { type: 'golem', pos: [27, 20.3, 42], yaw: Math.PI },
    { type: 'golem', pos: [30, 20.3, 57], yaw: Math.PI },
    { type: 'grub', pos: [25, 20.3, 28] },

    { type: 'urn', pos: [12, 20, 32] }, { type: 'urn', pos: [16, 20, 27.5] }, { type: 'urn', pos: [34.5, 20, 58] },
    { type: 'urn', pos: [26, 20, 25.5] }, { type: 'urn', pos: [38, 20, 41] },
    { type: 'brazier', pos: [22.5, 20, 25] }, { type: 'brazier', pos: [37.5, 20, 25] },
    { type: 'brazier', pos: [22.5, 20, 44.5] }, { type: 'brazier', pos: [37.5, 20, 44.5] },
    { type: 'brazier', pos: [25.5, 20, 63.5] }, { type: 'brazier', pos: [34.5, 20, 63.5] },
    { type: 'brazier', pos: [20, 20, 70] }, { type: 'brazier', pos: [40, 20, 70] },
    { type: 'brazier', pos: [20, 20, 82] }, { type: 'brazier', pos: [40, 20, 82] },
    { type: 'godray', pos: [30, 42, 8], r: 2.8, h: 14, color: 0xffe0b0, opacity: 0.16 },
    { type: 'skylight', pos: [30, 42.3, 8], r: 3 },

    { type: 'boss', pos: [30, 20, 82], arena: [30, 20, 76], arenaR: 13 },
    { type: 'suncore', pos: [30, 35, 76] },
  ],
};
