// usage: node tests/shot.cjs <url> <out.png> [waitMs] [w] [h]
const { chromium } = require('playwright');
(async () => {
  const [url, out, wait = '1000', w = '1280', h = '720'] = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  p.on('console', (m) => console.log('[console]', m.type(), m.text()));
  p.on('pageerror', (e) => console.log('[pageerror]', e.message));
  await p.goto(url);
  await p.waitForFunction(() => window.__ready, null, { timeout: 120000 }).catch(() => console.log('not ready'));
  await p.waitForTimeout(+wait);
  await p.screenshot({ path: out });
  await b.close();
})();
