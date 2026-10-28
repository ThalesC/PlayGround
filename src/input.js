import { CONFIG } from './config.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.game = null;
    this.keys = new Set();
    this.pressed = new Set();
    this.pointerLocked = false;
    this.mouse = { dx: 0, dy: 0 };
    this.ignoreUnlock = false;
    this.firstGesture = false;
    this._bind();
  }

  attach(game) {
    this.game = game;
  }

  _bind() {
    window.addEventListener('keydown', (e) => {
      if (['Space', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        if (this.game?.mode === 'playing') e.preventDefault();
      }
      this._gesture();
      if (e.repeat) return;
      this.keys.add(e.code);
      this.pressed.add(e.code);
      if (e.code === 'Escape') {
        if (this.game?.mode === 'playing') {
          e.preventDefault();
          this.game.pause('pause');
        } else if (this.game?.mode === 'paused') {
          this.game.resumeFromPause();
        }
        return;
      }
      if (!this.game?.acceptsGameplayInput()) return;
      if (e.code === 'Space') this.game.player.queueAction('dodge');
      else if (e.code === 'KeyR') this.game.player.queueAction('heal');
      else if (e.code === 'KeyE') this.game.interact();
      else if (e.code === 'KeyQ') this.game.player.toggleLockOn();
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    window.addEventListener('blur', () => {
      this.keys.clear();
      if (this.game?.mode === 'playing') this.game.pause('focus');
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.game?.mode === 'playing') this.game.pause('focus');
    });

    window.addEventListener('contextmenu', (e) => {
      if (this.game?.mode === 'playing') e.preventDefault();
    });

    this.canvas.addEventListener('mousedown', (e) => {
      this._gesture();
      if (this.game?.mode !== 'playing') return;
      if (!this.pointerLocked) {
        this.requestCapture();
        return;
      }
      if (e.button === 0) this.game.player.queueAction('light');
      else if (e.button === 2) this.game.player.queueAction('heavy');
    });

    this.canvas.addEventListener('wheel', (e) => {
      if (this.game?.mode !== 'playing' || !this.pointerLocked) return;
      e.preventDefault();
      if (this.game.player.lockTarget) this.game.player.cycleLockTarget(Math.sign(e.deltaY));
    }, { passive: false });

    document.addEventListener('mousemove', (e) => {
      if (!this.pointerLocked || this.game?.mode !== 'playing') return;
      const sens = CONFIG.player.camera.mouseSensitivity * (this.game.progress?.settings.mouseSensitivity ?? 1);
      this.mouse.dx += e.movementX * sens;
      this.mouse.dy += e.movementY * sens;
    });

    document.addEventListener('pointerlockchange', () => {
      const wasLocked = this.pointerLocked;
      this.pointerLocked = document.pointerLockElement === this.canvas;
      if (!this.pointerLocked && wasLocked) {
        this.keys.clear();
        if (this.game?.mode === 'playing' && !this.ignoreUnlock) this.game.pause('mouse');
      }
      this.ignoreUnlock = false;
      this.game?.ui?.setCaptureState(this.pointerLocked);
    });

    document.addEventListener('pointerlockerror', () => {
      this.game?.ui?.showCaptureHint();
    });
  }

  _gesture() {
    if (!this.firstGesture) {
      this.firstGesture = true;
      this.game?.audio?.start();
    }
  }

  requestCapture() {
    if (this.pointerLocked) return;
    try {
      const p = this.canvas.requestPointerLock();
      if (p && typeof p.catch === 'function') p.catch(() => this.game?.ui?.showCaptureHint());
    } catch {
      this.game?.ui?.showCaptureHint();
    }
  }

  releaseCapture() {
    if (document.pointerLockElement) {
      this.ignoreUnlock = true;
      document.exitPointerLock();
    }
    this.pointerLocked = false;
    this.keys.clear();
  }

  consumeMouse() {
    const d = { x: this.mouse.dx, y: this.mouse.dy };
    this.mouse.dx = 0;
    this.mouse.dy = 0;
    return d;
  }

  isDown(code) {
    return this.keys.has(code);
  }

  movementAxes() {
    let x = 0;
    let z = 0;
    if (this.keys.has('KeyW')) z += 1;
    if (this.keys.has('KeyS')) z -= 1;
    if (this.keys.has('KeyA')) x -= 1;
    if (this.keys.has('KeyD')) x += 1;
    return { x, z };
  }

  clear() {
    this.keys.clear();
    this.pressed.clear();
    this.mouse.dx = 0;
    this.mouse.dy = 0;
  }
}
