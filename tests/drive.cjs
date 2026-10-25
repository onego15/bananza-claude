// Drives the game deterministically in capture mode and takes screenshots.
// usage: node tests/drive.cjs <script.json|inline-js-file> <outdir> [w h]
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [scriptPath, outDir, w = '1280', h = '720'] = process.argv.slice(2);
  const script = require(require('path').resolve(scriptPath));
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const logs = [];
  p.on('console', (m) => { if (!m.text().includes('[vite]')) { logs.push(m.text()); console.log('[console]', m.type(), m.text()); } });
  p.on('pageerror', (e) => console.log('[pageerror]', e.message, e.stack));
  await p.goto(script.url);
  await p.waitForFunction(() => window.__ready, null, { timeout: 180000 });
  let shot = 0;
  let recN = 0;
  for (const cmd of script.steps) {
    if (cmd.eval) { const r = await p.evaluate(cmd.eval); if (r !== undefined) console.log('[eval]', JSON.stringify(r)); }
    if (cmd.step) {
      const t0 = Date.now();
      await p.evaluate(([n, dt]) => window.__step(n, dt), [cmd.step, cmd.dt || 1 / 30]);
      if (cmd.time) console.log('[time]', cmd.step, 'steps', Date.now() - t0, 'ms');
    }
    if (cmd.loop) {
      // repeat: run bot JS, advance frames, until a condition holds (or max iterations)
      const L = cmd.loop;
      let i = 0, done = false;
      for (; i < (L.max || 100) && !done; i++) {
        if (L.eval) { const r = await p.evaluate(L.eval); if (r !== undefined && L.log) console.log('[loop]', i, JSON.stringify(r)); }
        await p.evaluate(([n, dt]) => window.__step(n, dt), [L.step || 4, 1 / 30]);
        if (L.shotEvery && i % L.shotEvery === 0) {
          const data = await p.evaluate(() => document.getElementById('game').toDataURL('image/jpeg', 0.85));
          fs.writeFileSync(`${outDir}/${L.name || 'loop'}_${String(i).padStart(4, '0')}.jpg`, Buffer.from(data.split(',')[1], 'base64'));
        }
        if (L.until) done = await p.evaluate(L.until);
      }
      console.log('[loop-end]', L.name || '', 'iterations', i, 'done', done);
    }
    if (cmd.rec) {
      // record gameplay frames (including the DOM HUD) for the demo GIF/MP4
      const R = cmd.rec;
      fs.mkdirSync(`${outDir}/rec`, { recursive: true });
      for (let i = 0; i < R.frames; i++) {
        if (R.eval) await p.evaluate(R.eval);
        await p.evaluate(([n, dt]) => window.__step(n, dt), [R.every || 2, 1 / 30]);
        await p.screenshot({ path: `${outDir}/rec/f${String(recN++).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 90, timeout: 120000 });
      }
    }
    if (cmd.shot) {
      await p.evaluate(() => window.__step(1, 1 / 60));
      const file = `${outDir}/${cmd.shot}.png`;
      const data = await p.evaluate(() => document.getElementById('game').toDataURL('image/png'));
      fs.writeFileSync(file, Buffer.from(data.split(',')[1], 'base64'));
      if (cmd.ui) await p.screenshot({ path: `${outDir}/${cmd.shot}_ui.png`, timeout: 120000 });
      shot++;
    }
  }
  await b.close();
})();
