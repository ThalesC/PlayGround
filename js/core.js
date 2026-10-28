'use strict';

const TAU = Math.PI * 2;
const ISO_X = 0.9;
const ISO_Y = 0.5;
const ARENA_R = 620;

const canvas = document.getElementById('game');
const gameCtx = canvas.getContext('2d', { alpha: true });
const fxCanvas = document.getElementById('fx');
const fxCtx = fxCanvas.getContext('2d', { alpha: true });
let ctx = gameCtx;
let W = 0;
let H = 0;
let DPR = 1;

const $ = (id) => document.getElementById(id);
const ui = {
  hud: $('hud'),
  menu: $('menu'),
  upgrade: $('upgrade'),
  cards: $('cards'),
  end: $('end-screen'),
  endKicker: $('end-kicker'),
  endTitle: $('end-title'),
  endCopy: $('end-copy'),
  endWave: $('end-wave'),
  endSouls: $('end-souls'),
  endCombo: $('end-combo'),
  retry: $('retry-btn'),
  pause: $('pause'),
  start: $('start-btn'),
  mute: $('mute-btn'),
  hpFill: $('hp-fill'),
  hpText: $('hp-text'),
  stamFill: $('stam-fill'),
  rageFill: $('rage-fill'),
  flaskCount: $('flask-count'),
  waveLabel: $('wave-label'),
  waveSub: $('wave-sub'),
  soulCount: $('soul-count'),
  combo: $('combo'),
  comboNum: $('combo-num'),
  feed: $('feed'),
  boss: $('boss'),
  bossFill: $('boss-fill'),
  bossName: $('boss-name'),
  bossPhase: $('boss-phase'),
  warning: $('warning'),
  hurt: $('hurt-flash'),
  touch: $('touch-ui'),
  stick: $('stick'),
  knob: $('stick-knob')
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
const rand = (a = 1, b = 0) => b + Math.random() * (a - b);
const randInt = (a, b) => Math.floor(rand(b + 1, a));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const dist = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);
const easeIn = (t) => t * t * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const angleDiff = (a, b) => {
  let d = (a - b + Math.PI) % TAU;
  if (d < 0) d += TAU;
  return d - Math.PI;
};
const roman = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI'];

function project(x, y, z = 0) {
  return { x: (x - y) * ISO_X, y: (x + y) * ISO_Y - z };
}

function unproject(px, py) {
  const a = px / ISO_X;
  const b = py / ISO_Y;
  return { x: (a + b) / 2, y: (b - a) / 2 };
}

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = window.innerWidth;
  H = window.innerHeight;
  for (const c of [canvas, fxCanvas]) {
    c.width = Math.floor(W * DPR);
    c.height = Math.floor(H * DPR);
    c.style.width = W + 'px';
    c.style.height = H + 'px';
  }
}
window.addEventListener('resize', resize);
resize();

const audio = {
  ctx: null,
  master: null,
  ambientGain: null,
  muted: false,
  ready: false,
  init() {
    if (this.ready) {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.58;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 22;
    comp.ratio.value = 8;
    comp.attack.value = 0.003;
    comp.release.value = 0.28;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    this.ready = true;
    this.startAmbient();
  },
  startAmbient() {
    if (!this.ready) return;
    const c = this.ctx;
    const g = c.createGain();
    g.gain.value = 0.055;
    g.connect(this.master);
    this.ambientGain = g;
    const o1 = c.createOscillator();
    o1.type = 'sine';
    o1.frequency.value = 42;
    const o2 = c.createOscillator();
    o2.type = 'triangle';
    o2.frequency.value = 63.2;
    const og = c.createGain();
    og.gain.value = 0.11;
    o1.connect(og);
    o2.connect(og);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 170;
    og.connect(lp);
    lp.connect(g);
    o1.start();
    o2.start();

    const len = c.sampleRate * 2;
    const buffer = c.createBuffer(1, len, c.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.014 * white) / 1.014;
      data[i] = last * 3.2;
    }
    const src = c.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 340;
    bp.Q.value = 0.7;
    const ng = c.createGain();
    ng.gain.value = 0.12;
    src.connect(bp);
    bp.connect(ng);
    ng.connect(g);
    src.start();
    const lfo = c.createOscillator();
    lfo.frequency.value = 0.075;
    const lfoGain = c.createGain();
    lfoGain.gain.value = 0.022;
    lfo.connect(lfoGain);
    lfoGain.connect(g.gain);
    lfo.start();
  },
  setMuted(v) {
    this.muted = v;
    if (this.master) this.master.gain.setTargetAtTime(v ? 0 : 0.58, this.ctx.currentTime, 0.04);
  },
  tone(freq, dur, gain = 0.1, type = 'sine', slide = 0, delay = 0) {
    if (!this.ready) return;
    const c = this.ctx;
    const t = c.currentTime + delay;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  },
  noise(dur, gain = 0.1, freq = 900, q = 1, slide = 0, delay = 0, type = 'bandpass') {
    if (!this.ready) return;
    const c = this.ctx;
    const t = c.currentTime + delay;
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buffer = c.createBuffer(1, len, c.sampleRate);
    const d = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buffer;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (slide) f.frequency.exponentialRampToValueAtTime(Math.max(40, slide), t + dur);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.02);
  },
  swing(heavy = false) {
    this.noise(heavy ? 0.34 : 0.2, heavy ? 0.28 : 0.16, heavy ? 520 : 900, 0.9, heavy ? 160 : 380, 0);
    this.tone(heavy ? 88 : 150, heavy ? 0.24 : 0.14, heavy ? 0.13 : 0.05, 'triangle', heavy ? 42 : 82);
  },
  hit(heavy = false) {
    this.tone(heavy ? 72 : 118, heavy ? 0.32 : 0.17, heavy ? 0.5 : 0.25, 'sine', heavy ? 30 : 52);
    this.noise(heavy ? 0.24 : 0.12, heavy ? 0.36 : 0.2, heavy ? 240 : 520, 0.8, 80);
    this.tone(heavy ? 1200 : 1700, 0.06, 0.04, 'square', 600);
  },
  metal() {
    this.noise(0.12, 0.12, 2600, 5, 900);
    this.tone(2100, 0.16, 0.035, 'triangle', 1600);
  },
  parry() {
    this.tone(1600, 0.25, 0.09, 'triangle', 2800);
    this.tone(2400, 0.32, 0.05, 'sine', 1800);
    this.noise(0.18, 0.14, 3200, 2, 1200);
  },
  dodge() {
    this.noise(0.22, 0.12, 600, 0.7, 1600);
  },
  hurt() {
    this.tone(94, 0.22, 0.32, 'sawtooth', 44);
    this.noise(0.18, 0.22, 280, 0.8, 90);
  },
  death() {
    this.tone(72, 0.8, 0.4, 'sine', 28);
    this.noise(0.6, 0.2, 180, 0.6, 60);
  },
  growl() {
    this.tone(74, 0.55, 0.18, 'sawtooth', 42);
    this.noise(0.4, 0.14, 160, 0.7, 80);
  },
  roar() {
    this.tone(58, 1.4, 0.5, 'sawtooth', 34);
    this.tone(87, 1.2, 0.22, 'square', 43);
    this.noise(1.1, 0.3, 220, 0.5, 60);
  },
  ult() {
    this.tone(52, 1.4, 0.55, 'sine', 24);
    this.tone(104, 1.1, 0.3, 'triangle', 36);
    this.noise(1.0, 0.4, 300, 0.5, 50);
    this.noise(0.6, 0.2, 2000, 1.2, 200, 0.12);
  },
  heal() {
    this.tone(330, 0.35, 0.07, 'sine', 660);
    this.tone(495, 0.4, 0.05, 'triangle', 880, 0.08);
  },
  pickup() {
    this.tone(760, 0.12, 0.05, 'sine', 1180);
  },
  ui() {
    this.tone(420, 0.06, 0.035, 'triangle', 520);
  },
  bossPhase() {
    this.roar();
    this.tone(120, 0.7, 0.2, 'sawtooth', 60);
  }
};

const G = {
  state: 'title',
  time: 0,
  realTime: 0,
  timeScale: 1,
  slowTimer: 0,
  hitstop: 0,
  wave: 0,
  waveState: 'idle',
  waveTimer: 0,
  pendingSpawns: [],
  enemies: [],
  projectiles: [],
  hazards: [],
  souls: [],
  particles: [],
  effects: [],
  decals: [],
  texts: [],
  props: [],
  braziers: [],
  tiles: [],
  cracks: [],
  fissures: [],
  player: null,
  camera: { x: -250, y: -20, zoom: 1, shake: 0, sx: 0, sy: 0 },
  combo: 0,
  comboTimer: 0,
  bestCombo: 0,
  soulsCount: 0,
  totalKills: 0,
  boss: null,
  endTimer: 0,
  introTimer: 0,
  damageFlash: 0,
  isTouch: matchMedia('(pointer: coarse)').matches || (window.innerWidth < 760 && 'ontouchstart' in window)
};

const input = {
  keys: new Set(),
  mouse: { x: W / 2, y: H / 2, active: false },
  touch: { x: 0, y: 0, active: false },
  leftDown: false,
  rightDown: false
};

function worldFromScreen(sx, sy) {
  const px = (sx - W / 2 - G.camera.sx) / G.camera.zoom + G.camera.x;
  const py = (sy - H / 2 - G.camera.sy) / G.camera.zoom + G.camera.y;
  return unproject(px, py);
}

function moveVector() {
  let mx = 0;
  let my = 0;
  if (input.keys.has('KeyW') || input.keys.has('ArrowUp')) my -= 1;
  if (input.keys.has('KeyS') || input.keys.has('ArrowDown')) my += 1;
  if (input.keys.has('KeyA') || input.keys.has('ArrowLeft')) mx -= 1;
  if (input.keys.has('KeyD') || input.keys.has('ArrowRight')) mx += 1;
  if (input.touch.active) {
    mx += input.touch.x;
    my += input.touch.y;
  }
  if (Math.abs(mx) + Math.abs(my) < 0.05) return { x: 0, y: 0, active: false, intensity: 0 };
  const wx = (mx / ISO_X + my / ISO_Y) / 2;
  const wy = (my / ISO_Y - mx / ISO_X) / 2;
  const len = Math.hypot(wx, wy) || 1;
  return { x: wx / len, y: wy / len, active: true, intensity: clamp(Math.hypot(mx, my), 0, 1) };
}

function aimDirection() {
  if (!G.player) return { x: 1, y: 0 };
  if (G.isTouch) {
    let best = null;
    let bd = 460;
    for (const e of G.enemies) {
      if (e.dead) continue;
      const d = dist(G.player.x, G.player.y, e.x, e.y);
      if (d < bd) {
        bd = d;
        best = e;
      }
    }
    if (best) {
      const dx = best.x - G.player.x;
      const dy = best.y - G.player.y;
      const l = Math.hypot(dx, dy) || 1;
      return { x: dx / l, y: dy / l };
    }
    const mv = moveVector();
    if (mv.active) return mv;
    return G.player.face;
  }
  const m = worldFromScreen(input.mouse.x, input.mouse.y);
  const dx = m.x - G.player.x;
  const dy = m.y - G.player.y;
  const l = Math.hypot(dx, dy) || 1;
  return { x: dx / l, y: dy / l };
}

function addShake(amount) {
  G.camera.shake = clamp(G.camera.shake + amount, 0, 1.4);
}

function addSlowmo(duration, scale = 0.28) {
  G.slowTimer = Math.max(G.slowTimer, duration);
  G.timeScale = scale;
}

function addFeed(text, tone = '') {
  if (!ui.feed) return;
  const el = document.createElement('div');
  el.className = 'feed-line ' + tone;
  el.textContent = text;
  ui.feed.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

function addText(x, y, z, text, color = '#f0d59a', size = 18, vy = 46) {
  G.texts.push({ x, y, z, text, color, size, life: 0.9, maxLife: 0.9, vy, drift: rand(18, -18) });
}

function addParticle(x, y, z, vx, vy, vz, life, size, color, type = 'spark') {
  if (G.particles.length > 900) G.particles.shift();
  G.particles.push({ x, y, z, vx, vy, vz, life, maxLife: life, size, color, type, rot: rand(TAU), spin: rand(8, -8) });
}

function burst(x, y, z, count, color, type, speed = 190) {
  for (let i = 0; i < count; i++) {
    const a = rand(TAU);
    const s = rand(speed, speed * 0.18);
    addParticle(
      x + rand(10, -10),
      y + rand(10, -10),
      z + rand(10, -10),
      Math.cos(a) * s,
      Math.sin(a) * s,
      rand(150, 20),
      rand(0.55, 0.18),
      rand(5, 1.5),
      color,
      type
    );
  }
}

function addEffect(kind, opts) {
  const e = Object.assign({ kind, life: 0.5, maxLife: 0.5, layer: 'over' }, opts);
  e.maxLife = e.life;
  G.effects.push(e);
}

function addDecal(kind, x, y, size, color, life = 22) {
  if (G.decals.length > 90) G.decals.shift();
  const points = [];
  const n = kind === 'crack' ? 7 : 5;
  for (let i = 0; i < n; i++) {
    const a = rand(TAU);
    const r = rand(size, size * 0.25);
    points.push({ x: x + Math.cos(a) * r, y: y + Math.sin(a) * r });
  }
  G.decals.push({ kind, x, y, size, color, points, life, maxLife: life });
}
