// Smoke test against a deployed build (GitHub Pages or a local static server).
// usage: node tests/live-check.cjs <baseUrl> [outDir]
// Checks: every request succeeds, no page errors, title screen renders, a new game can be
// started from the menu, and in capture mode punching actually carves the terrain.
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const base = (process.argv[2] || 'http://localhost:4173/bananza-claude/').replace(/\/?$/, '/');
  const out = process.argv[3] || 'live-check';
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const result = { base, failedRequests: [], pageErrors: [], checks: {} };
  const page = await b.newPage({ viewport: { width: 1280, height: 720 } });
  page.on('requestfailed', (r) => result.failedRequests.push(`${r.url()} ${r.failure()?.errorText}`));
  page.on('response', (r) => { if (r.status() >= 400) result.failedRequests.push(`${r.url()} HTTP ${r.status()}`); });
  page.on('pageerror', (e) => result.pageErrors.push(e.message));

  // 1) title screen (normal entry point)
  await page.goto(base, { waitUntil: 'load', timeout: 180000 });
  await page.waitForFunction(() => window.__ready, null, { timeout: 240000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${out}/1-title.png`, timeout: 180000 });
  result.checks.title = await page.evaluate(() => !!document.querySelector('#ui') && document.body.innerText.includes('はじめから'));

  // 2) start a new game from the menu, skip the story, reach gameplay
  await page.getByText('はじめから').first().click();
  for (let i = 0; i < 8; i++) { await page.keyboard.press('Enter'); await page.waitForTimeout(400); }
  await page.waitForFunction(() => window.__game?.state === 'play', null, { timeout: 240000 }).catch(() => {});
  await page.waitForTimeout(4000);
  await page.screenshot({ path: `${out}/2-play.png`, timeout: 180000 });
  result.checks.newGame = await page.evaluate(() => window.__game?.state);
  await page.close(); // the live render loop is heavy on software GL; free the CPU for part 3

  // 3) capture mode: deterministic frames, punch the tutorial dirt wall and confirm the terrain changed
  const p2 = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p2.on('pageerror', (e) => result.pageErrors.push(e.message));
  await p2.goto(base + '?autotest&capture&area=1', { timeout: 180000 });
  await p2.waitForFunction(() => window.__ready, null, { timeout: 240000 });
  const dig = await p2.evaluate(() => {
    const g = window.__game, p = g.player;
    p.spawn(new p.pos.constructor(31.5, 14.6, 18.6), -0.15);
    g.cameraRig.yaw = -0.15;
    window.__step(20, 1 / 30);
    const before = g.world.vol.sample(30.6, 15.4, 21.4);
    for (let i = 0; i < 6; i++) { g.input.virtual = { punchP: true }; window.__step(1, 1 / 30); g.input.virtual = {}; window.__step(12, 1 / 30); }
    const after = g.world.vol.sample(30.6, 15.4, 21.4);
    return { before: +before.toFixed(2), after: +after.toFixed(2), edits: (g.save.edits(1) || []).length, hp: p.hp };
  });
  await p2.evaluate(() => window.__step(1, 1 / 60));
  await p2.screenshot({ path: `${out}/3-dig.png`, timeout: 180000 });
  result.checks.dig = dig;
  result.ok = result.checks.title && result.checks.newGame === 'play' && dig.after > dig.before && dig.edits > 0 && !result.pageErrors.length && !result.failedRequests.length;
  fs.writeFileSync(`${out}/result.json`, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  await b.close();
  process.exit(result.ok ? 0 : 1);
})();
