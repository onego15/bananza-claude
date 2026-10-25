import * as THREE from 'three';
import { area1 } from './area1.js';
import { area2 } from './area2.js';
import { area3 } from './area3.js';

const V = (a) => new THREE.Vector3(a[0], a[1] + 1.2, a[2]);
const find = (w, id) => w.entities.find((e) => e.id === id && e.alive);
const nearestInactive = (g, w, ids) => {
  let best = null, bd = 1e9;
  for (const id of ids) {
    const e = find(w, id);
    if (!e || e.active) continue;
    const d = e.pos.distanceTo(g.player.pos);
    if (d < bd) { bd = d; best = e; }
  }
  return best;
};

area1.objective = (g, w) => {
  const s = g.save;
  const p = g.player.pos;
  if (!s.flag('a1_tunnel') && p.z > 27) s.setFlag('a1_tunnel');
  if (!s.flag('a1_tunnel')) return { text: '土の壁をパンチで壊して奥へ進もう', target: V([30.6, 14, 21]) };
  if (!s.flag('a1_gate')) {
    const n = w.countSwitches('a1_gate');
    const r = nearestInactive(g, w, ['a1_r1', 'a1_r2', 'a1_r3']);
    return { text: `ルーンストーンを殴って光らせよう（${n}/3）`, target: r ? r.pos.clone().setY(r.pos.y + 1.6) : null };
  }
  if (!s.has('gauntlet')) return { text: '聖域の秘宝を手に入れよう', target: V([32, 12.1, 75.5]) };
  return { text: '聖域の床の硬岩を砕いて、さらに地下へ！', target: V([32, 11.5, 72]) };
};

area2.objective = (g, w) => {
  const s = g.save;
  if (!s.flag('a2_gate')) {
    const n = w.countSwitches('a2_beacon');
    const b = nearestInactive(g, w, ['a2_b1', 'a2_b2', 'a2_b3']);
    let text = `輝晶灯を殴って灯そう（${n}/3）`;
    if (b && b.id === 'a2_b3' && b.caged) text = `檻の上の大岩を落として輝晶灯を解放しよう（${n}/3）`;
    return { text, target: b ? b.pos.clone().setY(b.pos.y + 2.5) : null };
  }
  if (!s.has('quake')) return { text: '北の祠で秘宝を手に入れよう', target: V([36, 9.6, 70]) };
  if (!s.flag('a2_seal')) return { text: '高く跳んで急降下パンチ（右クリック）で封印石を砕け！', target: V([36, 9.6, 66]) };
  return { text: '穴に飛び込んで神殿へ！', target: V([36, 8, 66]) };
};

area3.objective = (g, w) => {
  const s = g.save;
  if (s.flag('boss_defeated')) return { text: '太陽核に光が戻った！', target: null };
  const boss = w.entities.find((e) => e.isBoss);
  if (boss && boss.awake) {
    const st = boss.state;
    if (st === 'stuck') return { text: '今だ！ 地面に刺さった拳の結晶を殴れ！', target: null };
    if (st === 'stagger') return { text: '胸のコアを殴れ！（ジャンプパンチも有効）', target: null };
    return { text: '巨像の拳を誘い、衝撃波はジャンプでかわせ', target: null };
  }
  const p = g.player.pos;
  if (p.z < 46) return { text: '神殿の奥へ進もう', target: V([30, 20, 47]) };
  return { text: '神殿の最奥へ — 何かが待ち構えている', target: V([30, 20, 70]) };
};

export const AREAS = { 1: area1, 2: area2, 3: area3 };
