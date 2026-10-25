// Keyboard + mouse (pointer lock) + gamepad input, exposing an action-based API.

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set(); // edge-triggered this frame
    this.mouseDX = 0; this.mouseDY = 0;
    this.mouseButtons = new Set();
    this.mousePressed = new Set();
    this.locked = false;
    this.sensitivity = 1.0;
    this.invertY = false;
    this.gamepad = null;
    this.padPrev = [];
    this.padPressed = new Set();
    this.lastDevice = 'kb';
    this.virtual = null; // scripted input for demo capture/tests
    this.enabled = true;

    addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.keys.add(e.code); this.pressed.add(e.code); this.lastDevice = 'kb';
      if (['Space', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => { this.keys.clear(); this.mouseButtons.clear(); });
    canvas.addEventListener('mousedown', (e) => {
      if (!this.locked && this.wantLock) this.requestLock();
      this.mouseButtons.add(e.button); this.mousePressed.add(e.button); this.lastDevice = 'kb';
    });
    addEventListener('mouseup', (e) => this.mouseButtons.delete(e.button));
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('mousemove', (e) => {
      if (this.locked) { this.mouseDX += e.movementX; this.mouseDY += e.movementY; }
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
    });
    addEventListener('gamepadconnected', (e) => { this.gamepad = e.gamepad.index; });
  }

  requestLock() {
    try { const p = this.canvas.requestPointerLock?.(); p?.catch?.(() => {}); } catch (_) {}
  }

  poll() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = this.gamepad != null ? pads[this.gamepad] : null;
    this.pad = gp || null;
    this.padPressed.clear();
    if (gp) {
      gp.buttons.forEach((b, i) => {
        if (b.pressed && !this.padPrev[i]) { this.padPressed.add(i); this.lastDevice = 'pad'; }
        this.padPrev[i] = b.pressed;
      });
      if (Math.hypot(gp.axes[0], gp.axes[1]) > 0.3) this.lastDevice = 'pad';
    }
  }

  endFrame() {
    this.pressed.clear(); this.mousePressed.clear();
    this.mouseDX = 0; this.mouseDY = 0;
  }

  // --- actions ---
  move() {
    if (this.virtual) return this.virtual.move || { x: 0, y: 0 };
    let x = 0, y = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1;
    const p = this.pad;
    if (p) {
      const ax = p.axes[0], ay = -p.axes[1];
      if (Math.hypot(ax, ay) > 0.18) { x += ax; y += ay; }
    }
    const l = Math.hypot(x, y);
    if (l > 1) { x /= l; y /= l; }
    return { x, y };
  }

  look() {
    if (this.virtual) return this.virtual.look || { x: 0, y: 0 };
    let x = this.mouseDX * 0.0025 * this.sensitivity, y = this.mouseDY * 0.0025 * this.sensitivity;
    const p = this.pad;
    if (p && p.axes.length >= 4) {
      const ax = p.axes[2], ay = p.axes[3];
      const dz = (v) => (Math.abs(v) < 0.15 ? 0 : Math.sign(v) * (Math.abs(v) - 0.15) / 0.85);
      x += dz(ax) * 0.045 * this.sensitivity; y += dz(ay) * 0.035 * this.sensitivity;
    }
    if (this.keys.has('KeyJ')) x -= 0.03;
    if (this.keys.has('KeyL')) x += 0.03;
    if (this.keys.has('KeyI')) y -= 0.02;
    if (this.keys.has('KeyK')) y += 0.02;
    if (this.invertY) y = -y;
    return { x, y };
  }

  _v(name) { return this.virtual && this.virtual[name]; }
  jumpPressed() { return this._v('jumpP') || this.pressed.has('Space') || this.padPressed.has(0); }
  jumpHeld() { return this._v('jump') || this.keys.has('Space') || (this.pad?.buttons[0]?.pressed ?? false); }
  punchPressed() { return this._v('punchP') || this.mousePressed.has(0) || this.pressed.has('KeyF') || this.padPressed.has(2); }
  slamPressed() { return this._v('slamP') || this.mousePressed.has(2) || this.pressed.has('KeyX') || this.padPressed.has(1) || this.padPressed.has(7); }
  interactPressed() { return this._v('interactP') || this.pressed.has('KeyE') || this.padPressed.has(4); }
  dashPressed() { return this._v('dashP') || this.pressed.has('ShiftLeft') || this.pressed.has('ShiftRight') || this.padPressed.has(5); }
  dashHeld() { return this._v('dash') || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || (this.pad?.buttons[5]?.pressed ?? false); }
  crouchHeld() { return this._v('crouch') || this.keys.has('KeyC') || this.keys.has('ControlLeft') || (this.pad?.buttons[6]?.pressed ?? false); }
  echoPressed() { return this._v('echoP') || this.pressed.has('KeyQ') || this.padPressed.has(3); }
  pausePressed() { return this.pressed.has('Escape') || this.pressed.has('KeyP') || this.padPressed.has(9); }
  confirmPressed() { return this.pressed.has('Enter') || this.pressed.has('Space') || this.padPressed.has(0) || this.mousePressed.has(0); }
  recenterPressed() { return this.pressed.has('KeyR') || this.padPressed.has(10) || this.padPressed.has(11); }
  mapPressed() { return this.pressed.has('Tab') || this.padPressed.has(8); }
}
