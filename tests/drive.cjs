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
  for (const cmd of script.steps) {
    if (cmd.eval) { const r = await p.evaluate(cmd.eval); if (r !== undefined) console.log('[eval]', JSON.stringify(r)); }
    if (cmd.step) {
      const t0 = Date.now();
      await p.evaluate(([n, dt]) => window.__step(n, dt), [cmd.step, cmd.dt || 1 / 30]);
      if (cmd.time) console.log('[time]', cmd.step, 'steps', Date.now() - t0, 'ms');
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
