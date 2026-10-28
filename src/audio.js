export class AudioManager {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.settings = null;
    this.musicGain = null;
    this.effectsGain = null;
    this.campGain = null;
    this.windGain = null;
    this.campDistance = 99;
  }

  start() {
    if (this.started) {
      if (this.ctx?.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      this.started = true;
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.effectsGain = this.ctx.createGain();
      this.musicGain.connect(this.master);
      this.effectsGain.connect(this.master);
      this._buildAmbience();
      this.applySettings(this.settings);
    } catch {
      this.ctx = null;
    }
  }

  _noiseBuffer(seconds = 2) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      data[i] = last * 3.5;
    }
    return buffer;
  }

  _buildAmbience() {
    const ctx = this.ctx;
    const wind = ctx.createBufferSource();
    wind.buffer = this._noiseBuffer(3);
    wind.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 520;
    windFilter.Q.value = 0.4;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0.12;
    wind.connect(windFilter).connect(this.windGain).connect(this.musicGain);
    wind.start();

    const camp = ctx.createBufferSource();
    camp.buffer = this._noiseBuffer(2.2);
    camp.loop = true;
    const campFilter = ctx.createBiquadFilter();
    campFilter.type = 'bandpass';
    campFilter.frequency.value = 740;
    campFilter.Q.value = 0.8;
    this.campGain = ctx.createGain();
    this.campGain.gain.value = 0;
    camp.connect(campFilter).connect(this.campGain).connect(this.musicGain);
    camp.start();

    const drone = ctx.createGain();
    drone.gain.value = 0.035;
    drone.connect(this.musicGain);
    for (const [freq, vol] of [[55, 0.5], [82.5, 0.22], [110, 0.12]]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = vol;
      osc.connect(g).connect(drone);
      osc.start();
    }
  }

  applySettings(settings) {
    this.settings = settings;
    if (!this.ctx || !settings) return;
    const t = this.ctx.currentTime;
    this.musicGain.gain.setTargetAtTime(settings.musicVolume * 0.72, t, 0.08);
    this.effectsGain.gain.setTargetAtTime(settings.effectsVolume, t, 0.05);
  }

  update(dt, game) {
    if (!this.ctx || !this.campGain) return;
    if (game?.player) {
      const p = game.player.position;
      this.campDistance = Math.hypot(p.x - 0, p.z - 16);
    }
    const campTarget = this.campDistance < 16 ? Math.max(0, 0.055 * (1 - this.campDistance / 16)) : 0;
    this.campGain.gain.setTargetAtTime(campTarget, this.ctx.currentTime, 0.15);
  }

  _env(gainNode, start, attack, hold, release, peak) {
    const g = gainNode.gain;
    g.cancelScheduledValues(start);
    g.setValueAtTime(0.0001, start);
    g.exponentialRampToValueAtTime(Math.max(0.0002, peak), start + attack);
    g.setValueAtTime(Math.max(0.0002, peak), start + attack + hold);
    g.exponentialRampToValueAtTime(0.0001, start + attack + hold + release);
  }

  _tone({ freq = 220, type = 'sine', duration = 0.2, volume = 0.1, slide = 0, attack = 0.01, release = 0.15, pan = 0, delay = 0 }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createStereoPanner();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + duration);
    this._env(gain, t, attack, Math.max(0, duration - attack - release), release, volume);
    panner.pan.value = pan;
    osc.connect(gain).connect(panner).connect(this.effectsGain);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  _noise({ duration = 0.2, volume = 0.1, freq = 800, q = 0.8, type = 'bandpass', slide = 0, pan = 0, delay = 0 }) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this._noiseBuffer(Math.max(0.12, duration + 0.1));
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, t);
    filter.Q.value = q;
    if (slide) filter.frequency.exponentialRampToValueAtTime(Math.max(60, freq + slide), t + duration);
    const gain = ctx.createGain();
    this._env(gain, t, 0.01, Math.max(0, duration - 0.06), 0.05, volume);
    const panner = ctx.createStereoPanner();
    panner.pan.value = pan;
    src.connect(filter).connect(gain).connect(panner).connect(this.effectsGain);
    src.start(t);
    src.stop(t + duration + 0.15);
  }

  uiClick() { this._tone({ freq: 520, type: 'triangle', duration: 0.06, volume: 0.045, slide: -90 }); }
  pickup() {
    this._tone({ freq: 430, type: 'triangle', duration: 0.16, volume: 0.08, slide: 190 });
    this._tone({ freq: 640, type: 'sine', duration: 0.22, volume: 0.05, slide: 120, delay: 0.08 });
  }
  save() { this._tone({ freq: 760, type: 'sine', duration: 0.08, volume: 0.025, slide: 80 }); }
  denied() { this._tone({ freq: 120, type: 'square', duration: 0.12, volume: 0.04, slide: -30 }); }
  lockOn() { this._tone({ freq: 900, type: 'sine', duration: 0.09, volume: 0.035, slide: 220 }); }

  swing(kind = 'light') {
    if (kind === 'heavy') this._noise({ duration: 0.22, volume: 0.16, freq: 420, q: 0.7, slide: -240 });
    else this._noise({ duration: 0.14, volume: 0.12, freq: 720, q: 0.9, slide: -380 });
  }
  hit(heavy = false) {
    this._tone({ freq: heavy ? 95 : 135, type: 'triangle', duration: 0.16, volume: heavy ? 0.18 : 0.12, slide: -40 });
    this._noise({ duration: 0.08, volume: heavy ? 0.15 : 0.1, freq: 1300, q: 1.2, slide: -700 });
  }
  hurt() {
    this._tone({ freq: 170, type: 'sawtooth', duration: 0.24, volume: 0.11, slide: -85 });
    this._noise({ duration: 0.12, volume: 0.08, freq: 600, q: 0.5, slide: -260 });
  }
  dodge() { this._noise({ duration: 0.22, volume: 0.07, freq: 900, q: 0.4, slide: -600 }); }
  healStart() {
    this._tone({ freq: 320, type: 'sine', duration: 0.6, volume: 0.035, slide: 160 });
  }
  healComplete() {
    this._tone({ freq: 540, type: 'sine', duration: 0.5, volume: 0.055, slide: 120 });
    this._tone({ freq: 810, type: 'sine', duration: 0.6, volume: 0.03, slide: 80, delay: 0.12 });
  }
  death() {
    this._tone({ freq: 140, type: 'sawtooth', duration: 1.0, volume: 0.1, slide: -90 });
    this._noise({ duration: 0.7, volume: 0.06, freq: 300, q: 0.5, slide: -200 });
  }
  enemyTell(type) {
    if (type === 'briarling') {
      this._noise({ duration: 0.55, volume: 0.08, freq: 1800, q: 1.2, slide: -900 });
      this._tone({ freq: 340, type: 'triangle', duration: 0.35, volume: 0.04, slide: 100 });
    } else if (type === 'mossguard') {
      this._noise({ duration: 0.8, volume: 0.11, freq: 260, q: 0.7, slide: 120 });
      this._tone({ freq: 78, type: 'sawtooth', duration: 0.65, volume: 0.045, slide: -10 });
    } else if (type === 'warden-sweep') {
      this._noise({ duration: 0.9, volume: 0.12, freq: 420, q: 0.6, slide: 300 });
      this._tone({ freq: 70, type: 'sawtooth', duration: 0.9, volume: 0.05, slide: 15 });
    } else if (type === 'warden-overhead') {
      this._tone({ freq: 115, type: 'square', duration: 1.0, volume: 0.055, slide: 90 });
      this._noise({ duration: 0.8, volume: 0.08, freq: 900, q: 0.8, slide: -400 });
    } else {
      this._tone({ freq: 200, type: 'triangle', duration: 0.5, volume: 0.05, slide: 80 });
    }
  }
  gate() {
    this._noise({ duration: 0.7, volume: 0.12, freq: 320, q: 0.7, slide: 220 });
    this._tone({ freq: 90, type: 'triangle', duration: 0.8, volume: 0.06, slide: 35 });
  }
  construction() {
    this._tone({ freq: 220, type: 'triangle', duration: 0.25, volume: 0.08, slide: 110 });
    this._tone({ freq: 330, type: 'triangle', duration: 0.3, volume: 0.06, slide: 140, delay: 0.22 });
    this._tone({ freq: 494, type: 'sine', duration: 0.7, volume: 0.04, slide: 90, delay: 0.46 });
  }
  beacon() {
    this._tone({ freq: 196, type: 'sine', duration: 1.4, volume: 0.06, slide: 98 });
    this._tone({ freq: 392, type: 'sine', duration: 1.6, volume: 0.04, slide: 196, delay: 0.35 });
    this._tone({ freq: 587, type: 'sine', duration: 1.9, volume: 0.03, slide: 90, delay: 0.7 });
  }
  bossTransition() {
    this._tone({ freq: 55, type: 'sawtooth', duration: 1.0, volume: 0.08, slide: 55 });
    this._noise({ duration: 1.0, volume: 0.08, freq: 240, q: 0.5, slide: 500 });
  }
  bossDefeat() {
    this._tone({ freq: 120, type: 'sawtooth', duration: 1.8, volume: 0.09, slide: -70 });
    this._tone({ freq: 392, type: 'sine', duration: 1.4, volume: 0.05, slide: 180, delay: 0.5 });
  }
  footstep(sprint = false) {
    this._noise({ duration: 0.06, volume: sprint ? 0.025 : 0.014, freq: 180, q: 0.5, slide: -60 });
  }
}
