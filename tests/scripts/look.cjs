module.exports = {
  url: 'http://localhost:5173/?autotest&capture',
  steps: [
    { step: 30, time: true },
    { shot: 'start' },
    { eval: '(() => { const g = window.__game; g.cameraRig.yaw = Math.PI; return [g.player.pos.toArray(), g.world.terrain.triCount]; })()' },
    { step: 20 },
    { shot: 'start_back' },
  ],
};
