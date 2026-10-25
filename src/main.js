import '@fontsource/m-plus-rounded-1c/700.css';
import '@fontsource/m-plus-rounded-1c/800.css';
import '@fontsource/lilita-one/400.css';
import './ui/style.css';
import { Game } from './game.js';

const canvas = document.getElementById('game');
const params = new URLSearchParams(location.search);
if (params.has('dev')) {
  import('./devview.js').then((m) => m.devView(canvas));
} else {
  const game = new Game(canvas);
  game.start().catch((e) => {
    console.error(e);
    document.getElementById('ui').innerHTML = `<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-family:sans-serif;padding:20px;text-align:center">起動に失敗しました：${e.message}<br>WebGL2 対応ブラウザでお試しください。</div>`;
  });
}
