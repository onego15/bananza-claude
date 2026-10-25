import * as THREE from 'three';

// DOM-based HUD and menus. Kept framework-free; every screen is plain HTML built here.

const HEART_SVG = `<svg viewBox="0 0 34 31" class="heart"><path d="M17 29 C7 21 2 15.5 2 9.5 C2 5 5.5 2 9.6 2 C12.8 2 15.3 3.8 17 6.6 C18.7 3.8 21.2 2 24.4 2 C28.5 2 32 5 32 9.5 C32 15.5 27 21 17 29Z" fill="#ff5a6e" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><ellipse cx="10.5" cy="9" rx="3.5" ry="2.4" fill="rgba(255,255,255,0.55)" transform="rotate(-30 10.5 9)"/></svg>`;
const GOLD_ICO = `<svg viewBox="0 0 28 28" class="ico"><path d="M5 18 L9 9 L19 7 L24 15 L20 22 L9 23 Z" fill="#ffc23d" stroke="#7a4a00" stroke-width="2" stroke-linejoin="round"/><path d="M9 9 L13 15 L19 7 M13 15 L20 22 M13 15 L5 18" stroke="#b07a10" stroke-width="1.4" fill="none"/></svg>`;
const SUN_ICO = `<svg viewBox="0 0 28 28" class="ico"><path d="M14 2 L21 14 L14 26 L7 14 Z" fill="#ffd36b" stroke="#a0560a" stroke-width="2" stroke-linejoin="round"/><path d="M14 2 L14 26 M7 14 L21 14" stroke="#ffa21f" stroke-width="1.4"/><circle cx="14" cy="14" r="12.5" fill="none" stroke="rgba(255,240,180,0.7)" stroke-width="1.2"/></svg>`;

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};

export class HUD {
  constructor(game) {
    this.game = game;
    const root = (this.root = document.getElementById('ui'));
    this.hud = el('div', 'hud off');
    root.appendChild(this.hud);
    // top-left
    const tl = el('div', 'hud-tl');
    this.heartsEl = el('div', 'hearts');
    const counters = el('div', 'counters');
    this.goldEl = el('div', 'counter', `${GOLD_ICO}<span>0</span>`);
    this.sunEl = el('div', 'counter', `${SUN_ICO}<span>0</span><small>/15</small>`);
    counters.append(this.goldEl, this.sunEl);
    tl.append(this.heartsEl, counters);
    // top-right
    const tr = el('div', 'hud-tr');
    this.areaEl = el('div', 'area-name');
    this.objEl = el('div', 'objective', '<span class="dot"></span><span class="t"></span>');
    tr.append(this.areaEl, el('br'), this.objEl);
    this.toasts = el('div', 'toasts');
    this.signEl = el('div', 'sign hidden');
    this.promptEl = el('div', 'prompt hidden');
    this.ctrlEl = el('div', 'controls-hint');
    this.bossEl = el('div', 'boss hidden', '<div class="name"></div><div class="bar"><div class="fill"></div></div>');
    this.wpEl = el('div', 'waypoint hidden', '<div class="wp-arrow"></div><div class="wp-dia"></div><div class="wp-dist"></div>');
    this.vignette = el('div', 'vignette');
    this.hud.append(tl, tr, this.toasts, this.signEl, this.promptEl, this.ctrlEl, this.bossEl, this.wpEl, this.vignette);
    this.pings = [];
    // overlay layers (outside HUD so they show on menus)
    this.areaCardEl = el('div', 'area-card', '<div class="no"></div><div class="line"></div><div class="t"></div><div class="s"></div>');
    this.fadeEl = el('div', 'fade');
    this.screenEl = el('div', 'screen-host');
    root.append(this.areaCardEl, this.screenEl, this.fadeEl);
    this.signSrc = null;
    this.menuButtons = [];
    this.menuSel = 0;
    this.lastHearts = -1;
    this.setControlsHint();
    this.vecTmp = new THREE.Vector3();
    addEventListener('keydown', (e) => this.menuKey(e));
  }

  show(on) { this.hud.classList.toggle('off', !on); }

  // ---------- HUD elements ----------
  hearts(hp, max) {
    const key = hp + '/' + max;
    if (key === this.lastHearts) return;
    const prev = this.lastHeartsN ?? hp;
    this.lastHearts = key; this.lastHeartsN = hp;
    this.heartsEl.innerHTML = '';
    for (let i = 0; i < max; i++) {
      const w = el('span', '', HEART_SVG);
      const svg = w.firstChild;
      if (i >= hp) svg.classList.add('empty');
      if (i === hp - 1 && hp > prev) svg.classList.add('pulse');
      this.heartsEl.appendChild(svg);
    }
  }
  pulseHearts() { this.lastHearts = -1; }
  gold(n) {
    this.goldEl.querySelector('span').textContent = n;
    this.goldEl.classList.remove('bump'); void this.goldEl.offsetWidth; this.goldEl.classList.add('bump');
  }
  sunstone(n) {
    this.sunEl.querySelector('span').textContent = n;
    this.sunEl.classList.remove('bump'); void this.sunEl.offsetWidth; this.sunEl.classList.add('bump');
  }
  area(name, sub) { this.areaEl.innerHTML = `${name}<small>${sub}</small>`; }
  objective(text, flash = true) {
    if (this.objText === text) return;
    this.objText = text;
    this.objEl.querySelector('.t').textContent = text;
    this.objEl.classList.toggle('hidden', !text);
    if (flash) { this.objEl.classList.remove('flash'); void this.objEl.offsetWidth; this.objEl.classList.add('flash'); }
  }
  toast(text, kind = 'info', dur = 2600) {
    if ([...this.toasts.children].some((c) => c.textContent === text)) return;
    const t = el('div', 'toast ' + kind, text);
    this.toasts.appendChild(t);
    while (this.toasts.children.length > 3) this.toasts.firstChild.remove();
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 400); }, dur);
  }
  showSign(text, src) {
    this.signSrc = src;
    if (this.signEl.textContent !== text) this.signEl.textContent = text;
    this.signEl.classList.remove('hidden');
  }
  hideSign(src) { if (this.signSrc === src) { this.signEl.classList.add('hidden'); this.signSrc = null; } }
  prompt(html) {
    if (!html) { this.promptEl.classList.add('hidden'); return; }
    if (this.promptEl.innerHTML !== html) this.promptEl.innerHTML = html;
    this.promptEl.classList.remove('hidden');
  }
  bossBar(name, frac) {
    if (frac == null) { this.bossEl.classList.add('hidden'); return; }
    this.bossEl.classList.remove('hidden');
    if (name) this.bossEl.querySelector('.name').textContent = name;
    this.bossEl.querySelector('.fill').style.width = Math.max(0, frac * 100) + '%';
  }
  hideBoss() { this.bossEl.classList.add('hidden'); }
  flashDamage() {
    this.vignette.style.opacity = 1;
    clearTimeout(this.vt);
    this.vt = setTimeout(() => (this.vignette.style.opacity = 0), 160);
  }
  fade(on) { this.fadeEl.classList.toggle('on', on); }
  areaCard(no, title, sub, dur = 3200) {
    const c = this.areaCardEl;
    c.querySelector('.no').textContent = no;
    c.querySelector('.t').textContent = title;
    c.querySelector('.s').textContent = sub;
    c.classList.add('on');
    clearTimeout(this.act);
    this.act = setTimeout(() => c.classList.remove('on'), dur);
  }
  setControlsHint() {
    this.ctrlEl.innerHTML = `<kbd>WASD</kbd>移動 <kbd>Space</kbd>ジャンプ <kbd>Shift</kbd>ダッシュ<br>
      <kbd>左クリック</kbd>パンチ（視点の向きで上下に掘る） <kbd>右クリック</kbd>足元を掘る／空中で急降下<br>
      <kbd>Q</kbd>エコー（埋まった宝を探す） <kbd>E</kbd>祠で強化 <kbd>Esc</kbd>メニュー`;
  }
  dimControls(d) { this.ctrlEl.classList.toggle('dim', d); }
  ping(pos, dur = 5) {
    const p = el('div', 'ping');
    this.hud.appendChild(p);
    this.pings.push({ el: p, pos: pos.clone(), t: dur });
  }

  // project 3D markers each frame
  update(dt, camera, waypoint) {
    const w = innerWidth, h = innerHeight;
    const v = this.vecTmp;
    for (let i = this.pings.length - 1; i >= 0; i--) {
      const p = this.pings[i];
      p.t -= dt;
      if (p.t <= 0) { p.el.remove(); this.pings.splice(i, 1); continue; }
      v.copy(p.pos).project(camera);
      const vis = v.z < 1;
      p.el.style.display = vis ? 'block' : 'none';
      p.el.style.left = ((v.x * 0.5 + 0.5) * w) + 'px';
      p.el.style.top = ((-v.y * 0.5 + 0.5) * h) + 'px';
    }
    if (!waypoint) { this.wpEl.classList.add('hidden'); return; }
    this.wpEl.classList.remove('hidden');
    const dist = waypoint.distanceTo(camera.position);
    v.copy(waypoint).applyMatrix4(camera.matrixWorldInverse);
    const behind = v.z > 0;
    v.copy(waypoint).project(camera);
    let x = v.x, y = v.y;
    if (behind) { x = -x; y = -y; }
    const margin = 0.9;
    const off = behind || Math.abs(x) > margin || Math.abs(y) > margin;
    if (off) {
      const m = Math.max(Math.abs(x), Math.abs(y)) || 1;
      x = (x / m) * margin; y = (y / m) * margin;
    }
    const sx = (x * 0.5 + 0.5) * w, sy = (-y * 0.5 + 0.5) * h;
    this.wpEl.style.left = sx + 'px';
    this.wpEl.style.top = sy + 'px';
    const arrow = this.wpEl.querySelector('.wp-arrow');
    arrow.style.display = off ? 'block' : 'none';
    if (off) arrow.style.transform = `rotate(${Math.atan2(x, y)}rad)`;
    this.wpEl.querySelector('.wp-dist').textContent = Math.round(dist) + 'm';
    this.wpEl.style.opacity = dist < 4 ? 0.2 : 0.95;
  }

  // ---------- screens ----------
  clearScreen() {
    this.screenEl.innerHTML = '';
    this.menuButtons = [];
    this.menuOnBack = null;
  }
  screenOpen() { return this.screenEl.children.length > 0; }

  makeMenu(container, items, onBack) {
    const menu = el('div', 'menu');
    this.menuButtons = [];
    for (const it of items) {
      const b = el('button', 'btn', it.label + (it.sub ? `<small>${it.sub}</small>` : ''));
      if (it.disabled) b.disabled = true;
      b.addEventListener('click', (e) => { e.stopPropagation(); this.game.audio.play('select'); it.action(); });
      b.addEventListener('mouseenter', () => { this.menuSel = this.menuButtons.indexOf(b); this.refreshSel(); });
      menu.appendChild(b);
      if (!it.disabled) this.menuButtons.push(b);
    }
    container.appendChild(menu);
    this.menuSel = 0;
    this.menuOnBack = onBack || null;
    this.refreshSel();
    return menu;
  }
  refreshSel() { this.menuButtons.forEach((b, i) => b.classList.toggle('sel', i === this.menuSel)); }
  menuMove(d) {
    if (!this.menuButtons.length) return;
    this.menuSel = (this.menuSel + d + this.menuButtons.length) % this.menuButtons.length;
    this.refreshSel();
    this.game.audio.play('select');
  }
  menuActivate() { this.menuButtons[this.menuSel]?.click(); }
  menuKey(e) {
    if (!this.screenOpen()) return;
    if (e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'KeyS') { this.menuMove(1); e.preventDefault(); }
    else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'KeyW') { this.menuMove(-1); e.preventDefault(); }
    else if (e.code === 'Enter' || e.code === 'Space') { if (this.menuButtons.length) { this.menuActivate(); e.preventDefault(); } }
    else if (e.code === 'Escape' && this.menuOnBack) { this.menuOnBack(); e.preventDefault(); }
  }

  showTitle(hasSave, handlers) {
    this.clearScreen();
    const s = el('div', 'screen');
    const wrap = el('div', 'title-wrap');
    wrap.appendChild(el('div', 'logo', 'GORO DIG<span class="l2">地底のこぶし</span>'));
    wrap.appendChild(el('div', 'logo-sub', '掘って、殴って、地底を照らせ。'));
    const items = [];
    if (hasSave) items.push({ label: 'つづきから', action: handlers.cont });
    items.push({ label: 'はじめから', sub: hasSave ? 'セーブは上書き' : '', action: handlers.start });
    items.push({ label: '操作説明', action: handlers.help });
    items.push({ label: '設定', action: handlers.settings });
    this.makeMenu(wrap, items);
    s.appendChild(wrap);
    s.appendChild(el('div', 'title-foot', 'オリジナル作品 / 全アセット手続き生成<br>マウス＋キーボード / ゲームパッド対応'));
    this.screenEl.appendChild(s);
  }

  showLoading(title, tip) {
    this.clearScreen();
    const s = el('div', 'loading');
    s.innerHTML = `<div class="lt">${title}</div><div class="bar"><div></div></div><div class="msg">準備中…</div><div class="tip">${tip || ''}</div>`;
    this.screenEl.appendChild(s);
    this.loadingEl = s;
  }
  setLoading(p, msg) {
    if (!this.loadingEl) return;
    this.loadingEl.querySelector('.bar div').style.width = Math.round(p * 100) + '%';
    if (msg) this.loadingEl.querySelector('.msg').textContent = msg;
  }

  showStory(lines, onDone) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const box = el('div', 'story');
    s.appendChild(box);
    this.screenEl.appendChild(s);
    let i = 0;
    const next = () => {
      if (i >= lines.length) { this.clearScreen(); onDone(); return; }
      box.innerHTML = lines[i++] + '<div class="cont">クリック / Enter で進む</div>';
    };
    s.addEventListener('click', next);
    this.menuButtons = [{ click: next, classList: { toggle() {} } }];
    this.menuOnBack = () => { i = lines.length; next(); };
    next();
  }

  showHelp(onBack) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const p = el('div', 'panel');
    p.innerHTML = `<h2>操作説明</h2>
      <div class="ctrl-grid">
        <div><span>移動</span><span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / 左スティック</span></div>
        <div><span>カメラ</span><span>マウス / 右スティック</span></div>
        <div><span>ジャンプ（長押しで高く）</span><span><kbd>Space</kbd> / Ⓐ</span></div>
        <div><span>ダッシュ（空中でも1回）</span><span><kbd>Shift</kbd> / RB</span></div>
        <div><span>パンチ（3連コンボ）</span><span><kbd>左クリック</kbd> <kbd>F</kbd> / Ⓧ</span></div>
        <div><span>足元掘り / 急降下パンチ</span><span><kbd>右クリック</kbd> <kbd>X</kbd> / Ⓑ</span></div>
        <div><span>エコー（埋まった宝を探知）</span><span><kbd>Q</kbd> / Ⓨ</span></div>
        <div><span>祠で強化 / 調べる</span><span><kbd>E</kbd> / LB</span></div>
        <div><span>カメラを背後へ</span><span><kbd>R</kbd> / スティック押し込み</span></div>
        <div><span>メニュー</span><span><kbd>Esc</kbd> / START</span></div>
      </div>
      <h3>地形を壊して進め</h3>
      <p>パンチは<b>カメラの向き</b>に飛びます。下を見ながら殴れば斜め下へ、上を見れば上へ掘れます。土はよく削れ、岩は少し硬く、黒い硬岩は特別な籠手が必要。光る文様の古代石と岩盤は壊せません。</p>
      <p>壁に向かってジャンプすると<b>壁にしがみついて登れます</b>。掘りすぎて穴に落ちても、壁を登って脱出できます。</p>
      <p>キラキラ光る地面の下には何かが埋まっています。<kbd>Q</kbd>のエコーで太陽石の位置を探りましょう。</p>`;
    this.makeMenu(p, [{ label: '戻る', action: onBack }], onBack);
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  showSettings(save, onChange, onBack) {
    this.clearScreen();
    const st = save.settings;
    const s = el('div', 'screen dim');
    const p = el('div', 'panel');
    p.innerHTML = `<h2>設定</h2>
      <div class="row"><span>マウス感度</span><input type="range" id="s-sens" min="0.3" max="2.5" step="0.05" value="${st.sens}"></div>
      <div class="row"><span>カメラ上下反転</span><input type="checkbox" id="s-inv" ${st.invertY ? 'checked' : ''}></div>
      <div class="row"><span>BGM 音量</span><input type="range" id="s-music" min="0" max="1" step="0.05" value="${st.music}"></div>
      <div class="row"><span>効果音 音量</span><input type="range" id="s-sfx" min="0" max="1" step="0.05" value="${st.sfx}"></div>
      <div class="row"><span>画面の揺れ</span><input type="range" id="s-shake" min="0" max="1.5" step="0.05" value="${st.shake}"></div>
      <div class="row"><span>画質</span><select id="s-q">
        <option value="auto" ${st.quality === 'auto' ? 'selected' : ''}>自動（推奨）</option>
        <option value="high" ${st.quality === 'high' ? 'selected' : ''}>高</option>
        <option value="medium" ${st.quality === 'medium' ? 'selected' : ''}>中</option>
        <option value="low" ${st.quality === 'low' ? 'selected' : ''}>低</option></select></div>`;
    const bind = (id, key, conv = parseFloat) => {
      const i = p.querySelector('#' + id);
      i.addEventListener('input', () => { st[key] = i.type === 'checkbox' ? i.checked : conv(i.value); save.writeSettings(); onChange(); });
      i.addEventListener('change', () => { st[key] = i.type === 'checkbox' ? i.checked : conv(i.value); save.writeSettings(); onChange(); });
    };
    bind('s-sens', 'sens'); bind('s-inv', 'invertY'); bind('s-music', 'music'); bind('s-sfx', 'sfx'); bind('s-shake', 'shake'); bind('s-q', 'quality', (v) => v);
    this.makeMenu(p, [{ label: '戻る', action: onBack }], onBack);
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  showPause(handlers) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const p = el('div', 'panel');
    p.style.width = 'min(460px, 92vw)';
    p.innerHTML = '<h2>ポーズ</h2>';
    const m = this.makeMenu(p, [
      { label: 'ゲームに戻る', action: handlers.resume },
      { label: '操作説明', action: handlers.help },
      { label: '設定', action: handlers.settings },
      { label: 'チェックポイントからやり直す', action: handlers.retry },
      { label: 'タイトルへ戻る', sub: '進行は自動セーブ済み', action: handlers.title },
    ], handlers.resume);
    m.style.flexDirection = 'column';
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  showShop(save, offers, onBuy, onClose) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const p = el('div', 'panel');
    p.innerHTML = `<h2>太陽の祠</h2><p>集めた金をお供えして力を授かろう。　所持金：<b style="color:var(--gold)">${save.data.gold}</b></p>`;
    const items = offers.map((o) => {
      const row = el('div', 'shop-item');
      row.innerHTML = `<div><div class="nm">${o.name}<span class="lv">${o.lvText}</span></div><div class="ds">${o.desc}</div></div>`;
      p.appendChild(row);
      return { label: o.maxed ? '最大' : `${o.cost} 金で強化`, action: () => onBuy(o), disabled: o.maxed || save.data.gold < o.cost, row };
    });
    const menu = el('div', '');
    p.appendChild(menu);
    this.makeMenu(menu, [...items.map((it) => ({ ...it, label: it.row.querySelector('.nm').firstChild.textContent + '：' + it.label })), { label: '閉じる', action: onClose }], onClose);
    menu.querySelector('.menu').style.flexDirection = 'column';
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  showDeath(onRetry) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const p = el('div', 'panel');
    p.style.width = 'min(460px, 92vw)';
    p.style.textAlign = 'center';
    p.innerHTML = '<h2>ゴロはたおれた…</h2><p>最後に灯した祠からやり直します。<br>掘った地形と集めた宝はそのままです。</p>';
    this.makeMenu(p, [{ label: 'もう一度！', action: onRetry }]);
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  showEnding(stats, onDone) {
    this.clearScreen();
    const s = el('div', 'screen dim');
    const p = el('div', 'panel credits');
    p.innerHTML = `<div class="big">THE END</div>
      <p>太陽核に光が戻り、地底の世界は再び温かな光に包まれた。<br>ゴロの拳が掘った道は、これから多くの仲間をつなぐだろう。</p>
      <div class="stats">
        <span>クリアタイム</span><b>${stats.time}</b>
        <span>太陽石</span><b>${stats.sun} / 15</b>
        <span>集めた金</span><b>${stats.gold}</b>
        <span>倒した敵</span><b>${stats.kills}</b>
        <span>掘った地形</span><b>${stats.dug} ボクセル</b>
        <span>倒れた回数</span><b>${stats.deaths}</b>
      </div>
      <div class="rank">${stats.rank}</div>
      <p style="opacity:.75;font-size:14px">GORO DIG — 地底のこぶし<br>企画・プログラム・モデル・サウンド：すべてコードで手続き生成（AI制作）<br>Thanks for playing!</p>`;
    this.makeMenu(p, [{ label: 'タイトルへ', action: onDone }]);
    s.appendChild(p);
    this.screenEl.appendChild(s);
  }

  clickHint(on) {
    if (on && !this.ch) { this.ch = el('div', 'click-hint', 'クリックしてカメラ操作を開始'); this.hud.appendChild(this.ch); }
    if (!on && this.ch) { this.ch.remove(); this.ch = null; }
  }
}
