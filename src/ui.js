import { CONFIG } from './config.js';

const $ = (sel) => document.querySelector(sel);

export class UI {
  constructor(game) {
    this.game = game;
    this.refs = {
      hud: $('#hud'),
      objective: $('#objective-text'),
      save: $('#save-indicator'),
      salvage: $('#salvage-pill'),
      healthFill: $('#health-fill'),
      healthText: $('#health-text'),
      staminaFill: $('#stamina-fill'),
      staminaText: $('#stamina-text'),
      healPips: [...document.querySelectorAll('.heal-pip')],
      enemyHud: $('#enemy-hud'),
      bossHud: $('#boss-hud'),
      bossFill: $('#boss-fill'),
      bossPhase: $('#boss-phase'),
      interaction: $('#interaction-prompt'),
      interactionText: $('#interaction-text'),
      toast: $('#toast'),
      chapterBanner: $('#chapter-banner'),
      lockReticle: $('#lock-reticle'),
      captureHint: $('#capture-hint'),
      damageFlash: $('#damage-flash'),
      title: $('#title-screen'),
      continueBtn: $('#btn-continue'),
      pause: $('#pause-menu'),
      journal: $('#journal-panel'),
      settings: $('#settings-panel'),
      dialogue: $('#dialogue-panel'),
      rest: $('#rest-panel'),
      project: $('#project-panel'),
      confirm: $('#confirm-panel'),
      death: $('#death-overlay'),
      deathText: $('#death-text'),
      ending: $('#ending-panel'),
      endingText: $('#ending-text'),
      transition: $('#transition-overlay'),
      transitionText: $('#transition-text'),
      controlsHint: $('#controls-hint'),
    };
    this.toastTimer = null;
    this.saveTimer = null;
    this.bannerTimer = null;
    this.dialogueClose = null;
    this.confirmYes = null;
    this.settingsOrigin = 'title';
    this.currentRest = null;
    this.projectKind = null;
    this.enemyRows = new Map();
    this.enemySignature = '';
    this._bind();
    this.applyTextScale(game.progress.settings.textScale);
    this.populateSettings();
  }

  _bind() {
    const click = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', (e) => {
        e.preventDefault();
        this.game.audio.start();
        this.game.audio.uiClick();
        fn(e);
      });
    };
    click('btn-continue', () => this.game.continueGame());
    click('btn-new-game', () => this.game.requestNewGame());
    click('btn-title-settings', () => this.game.openSettings('title'));
    click('btn-resume', () => this.game.resumeFromPause());
    click('btn-journal', () => this.game.openJournal());
    click('btn-pause-settings', () => this.game.openSettings('pause'));
    click('btn-title-return', () => this.game.returnToTitle());
    click('btn-dialogue-continue', () => this.game.closeDialogue());
    click('btn-confirm-yes', () => {
      const fn = this.confirmYes;
      this.confirmYes = null;
      this.hide(this.refs.confirm);
      if (fn) fn();
    });
    click('btn-confirm-no', () => this.game.cancelConfirm());
    click('btn-ending-continue', () => this.game.finishEnding());
    document.querySelectorAll('[data-close="journal"]').forEach((el) => el.addEventListener('click', () => this.game.closeJournal()));
    document.querySelectorAll('[data-close="settings"]').forEach((el) => el.addEventListener('click', () => this.game.closeSettings()));
    window.addEventListener('keydown', (e) => {
      if (e.code !== 'Escape') return;
      if (this.game.mode === 'journal') this.game.closeJournal();
      else if (this.game.mode === 'settings') this.game.closeSettings();
      else if (this.game.mode === 'dialogue') this.game.closeDialogue();
      else if (this.game.mode === 'rest') this.game.closeMenu();
      else if (this.game.mode === 'project') this.game.closeMenu();
      else if (this.game.mode === 'confirm') this.game.cancelConfirm();
    });
    this._bindSettings();
  }

  _bindSettings() {
    const bindRange = (id, outId, key, fmt = (v) => v.toFixed(2)) => {
      const input = document.getElementById(id);
      const out = document.getElementById(outId);
      const apply = (final) => {
        const s = this.game.progress.settings;
        s[key] = Number(input.value);
        out.textContent = fmt(s[key]);
        this.game.onSettingsChanged(key, final);
      };
      input.addEventListener('input', () => apply(false));
      input.addEventListener('change', () => apply(true));
    };
    const bindCheck = (id, key) => {
      const input = document.getElementById(id);
      input.addEventListener('change', () => {
        this.game.progress.settings[key] = input.checked;
        this.game.onSettingsChanged(key, true);
      });
    };
    bindRange('set-sensitivity', 'out-sensitivity', 'mouseSensitivity', (v) => `${v.toFixed(2)}×`);
    bindCheck('set-invert', 'invertY');
    bindCheck('set-shake', 'cameraShake');
    bindCheck('set-motion', 'motionBlur');
    bindRange('set-text', 'out-text', 'textScale', (v) => `${Math.round(v * 100)}%`);
    bindRange('set-music', 'out-music', 'musicVolume', (v) => `${Math.round(v * 100)}%`);
    bindRange('set-effects', 'out-effects', 'effectsVolume', (v) => `${Math.round(v * 100)}%`);
    bindCheck('set-quality', 'lowQuality');
  }

  populateSettings() {
    const s = this.game.progress.settings;
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.value = value; };
    const check = (id, value) => { const el = document.getElementById(id); if (el) el.checked = value; };
    set('set-sensitivity', s.mouseSensitivity);
    check('set-invert', s.invertY);
    check('set-shake', s.cameraShake);
    check('set-motion', s.motionBlur);
    set('set-text', s.textScale);
    set('set-music', s.musicVolume);
    set('set-effects', s.effectsVolume);
    check('set-quality', s.lowQuality);
    $('#out-sensitivity').textContent = `${s.mouseSensitivity.toFixed(2)}×`;
    $('#out-text').textContent = `${Math.round(s.textScale * 100)}%`;
    $('#out-music').textContent = `${Math.round(s.musicVolume * 100)}%`;
    $('#out-effects').textContent = `${Math.round(s.effectsVolume * 100)}%`;
  }

  applyTextScale(scale) {
    document.documentElement.style.setProperty('--text-scale', String(scale));
  }

  show(el) { el.classList.remove('hidden'); }
  hide(el) { el.classList.add('hidden'); }

  showTitle(hasSave, saveUnavailable = false) {
    this.hide(this.refs.hud);
    this.hide(this.refs.pause);
    this.hide(this.refs.journal);
    this.hide(this.refs.settings);
    this.hide(this.refs.dialogue);
    this.hide(this.refs.rest);
    this.hide(this.refs.project);
    this.hide(this.refs.confirm);
    this.hide(this.refs.death);
    this.hide(this.refs.ending);
    this.hide(this.refs.transition);
    this.show(this.refs.title);
    this.refs.continueBtn.disabled = !hasSave;
    this.refs.continueBtn.classList.toggle('hidden', !hasSave);
    this.hide(this.refs.captureHint);
    const footer = document.querySelector('.title-footer');
    if (footer) {
      footer.textContent = saveUnavailable
        ? 'Save unavailable in this browser · Progress cannot persist between sessions'
        : 'Solo expedition · Saves belong to this browser and device';
    }
  }

  showGame() {
    this.hide(this.refs.title);
    this.hide(this.refs.pause);
    this.hide(this.refs.journal);
    this.hide(this.refs.settings);
    this.hide(this.refs.dialogue);
    this.hide(this.refs.rest);
    this.hide(this.refs.project);
    this.hide(this.refs.confirm);
    this.hide(this.refs.death);
    this.hide(this.refs.ending);
    this.show(this.refs.hud);
    this.updateCaptureHint();
  }

  showPause() {
    this.hide(this.refs.journal);
    this.hide(this.refs.settings);
    this.hide(this.refs.dialogue);
    this.hide(this.refs.rest);
    this.hide(this.refs.project);
    this.hide(this.refs.confirm);
    this.show(this.refs.pause);
    this.hide(this.refs.captureHint);
  }

  hidePause() { this.hide(this.refs.pause); }

  openJournal() {
    this.hide(this.refs.pause);
    this.hide(this.refs.settings);
    this.show(this.refs.journal);
    this.updateJournal();
  }

  openSettings(origin) {
    this.settingsOrigin = origin;
    this.hide(this.refs.pause);
    this.hide(this.refs.journal);
    this.show(this.refs.settings);
    this.populateSettings();
  }

  closeSettings() { this.hide(this.refs.settings); }
  closeJournal() { this.hide(this.refs.journal); }

  showDialogue(title, body, kicker, onClose) {
    $('#dialogue-kicker').textContent = kicker || 'Alder Hollow';
    $('#dialogue-title').textContent = title;
    $('#dialogue-body').textContent = body;
    this.dialogueClose = onClose || null;
    this.hide(this.refs.pause);
    this.hide(this.refs.journal);
    this.show(this.refs.dialogue);
  }

  hideDialogue() { this.hide(this.refs.dialogue); }

  showRestMenu(data) {
    this.currentRest = data;
    $('#rest-title').textContent = data.title;
    $('#rest-body').textContent = data.body;
    const actions = $('#rest-actions');
    actions.innerHTML = '';
    const add = (label, cls, fn) => {
      const b = document.createElement('button');
      b.className = `menu-button ${cls || ''}`;
      b.textContent = label;
      b.addEventListener('click', () => {
        this.game.audio.uiClick();
        fn();
      });
      actions.appendChild(b);
    };
    add('Rest', '', () => this.game.performRestAt(data.checkpointId));
    if (data.canTravel) {
      for (const dest of data.travelOptions) {
        add(`Travel to ${dest.short}`, '', () => this.game.travelTo(dest.id));
      }
    }
    add('Leave', 'subtle', () => this.game.closeMenu());
    this.hide(this.refs.pause);
    this.show(this.refs.rest);
  }

  hideRest() { this.hide(this.refs.rest); }

  showProject(data) {
    this.projectKind = data.kind;
    $('#project-title').textContent = data.title;
    $('#project-body').textContent = data.body;
    $('#project-resources').innerHTML = data.resources;
    const actions = $('#project-actions');
    actions.innerHTML = '';
    if (!data.built && data.canBuild) {
      const b = document.createElement('button');
      b.className = 'menu-button';
      b.textContent = data.buildLabel;
      b.addEventListener('click', () => {
        this.game.audio.uiClick();
        this.game.buildProject(data.kind);
      });
      actions.appendChild(b);
    }
    const close = document.createElement('button');
    close.className = 'menu-button subtle';
    close.textContent = 'Leave';
    close.addEventListener('click', () => {
      this.game.audio.uiClick();
      this.game.closeMenu();
    });
    actions.appendChild(close);
    this.hide(this.refs.pause);
    this.show(this.refs.project);
  }

  hideProject() { this.hide(this.refs.project); }

  showConfirm(title, body, yes) {
    $('#confirm-title').textContent = title;
    $('#confirm-body').textContent = body;
    this.confirmYes = yes;
    this.hide(this.refs.pause);
    this.show(this.refs.confirm);
  }

  hideConfirm() { this.hide(this.refs.confirm); }

  showDeath(text) {
    this.refs.deathText.textContent = text;
    this.show(this.refs.death);
    this.hide(this.refs.captureHint);
  }

  hideDeath() { this.hide(this.refs.death); }

  showEnding(text) {
    this.refs.endingText.textContent = text;
    this.show(this.refs.ending);
    this.hide(this.refs.hud);
    this.hide(this.refs.captureHint);
  }

  hideEnding() { this.hide(this.refs.ending); }

  hideHud() { this.hide(this.refs.hud); }

  showTransition(text) {
    this.refs.transitionText.textContent = text;
    this.refs.transition.classList.remove('fade');
    this.show(this.refs.transition);
  }

  fadeTransition() {
    this.refs.transition.classList.add('fade');
    setTimeout(() => this.hide(this.refs.transition), 500);
  }

  showTransitionText(text) {
    this.refs.transitionText.textContent = text;
  }

  setCaptureState(locked) {
    this.updateCaptureHint();
  }

  updateCaptureHint() {
    const game = this.game;
    if (!this.refs.captureHint) return;
    const modalOpen = ['title', 'paused', 'journal', 'settings', 'dialogue', 'rest', 'project', 'confirm', 'ending', 'transition'].includes(game.mode);
    const show = game.mode === 'playing' && !game.input.pointerLocked && !modalOpen && !game.player.isDead;
    this.refs.captureHint.classList.toggle('hidden', !show);
  }

  toast(text, duration = 2.4) {
    if (!text) return;
    this.refs.toast.textContent = text;
    this.refs.toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.refs.toast.classList.remove('show'), duration * 1000);
  }

  showSaveStatus(status, text) {
    const el = this.refs.save;
    if (!el) return;
    const footer = document.querySelector('.title-footer');
    const onTitle = this.refs.title && !this.refs.title.classList.contains('hidden');
    el.classList.remove('save-idle', 'save-saved', 'save-unavailable');
    clearTimeout(this.saveTimer);
    if (status === 'saved') {
      el.textContent = text || 'Saved';
      el.classList.add('save-saved');
      this.saveTimer = setTimeout(() => {
        el.textContent = 'Autosave ready';
        el.classList.add('save-idle');
      }, 2200);
    } else if (status === 'unavailable') {
      el.textContent = text || 'Save unavailable';
      el.classList.add('save-unavailable');
      this.toast('Save unavailable. Progress remains for this session only.', 5);
      if (footer && onTitle) footer.textContent = 'Save unavailable in this browser · Progress cannot persist between sessions';
    } else {
      if (footer && onTitle) footer.textContent = 'Solo expedition · Saves belong to this browser and device';
      el.textContent = text || 'Autosave ready';
      el.classList.add('save-idle');
    }
  }

  damageFlash() {
    this.refs.damageFlash.classList.add('show');
    clearTimeout(this.damageTimer);
    this.damageTimer = setTimeout(() => this.refs.damageFlash.classList.remove('show'), 90);
  }

  showChapterBanner(title, subtitle, duration = 4.0) {
    this.refs.chapterBanner.innerHTML = `<small>${subtitle || ''}</small>${title}`;
    this.refs.chapterBanner.classList.remove('hidden');
    requestAnimationFrame(() => this.refs.chapterBanner.classList.add('show'));
    clearTimeout(this.bannerTimer);
    this.bannerTimer = setTimeout(() => {
      this.refs.chapterBanner.classList.remove('show');
      setTimeout(() => this.refs.chapterBanner.classList.add('hidden'), 800);
    }, duration * 1000);
  }

  updateJournal() {
    const data = this.game.getJournalData();
    $('#journal-objective').textContent = data.objective;
    $('#journal-resources').textContent = data.resources;
    const rest = $('#journal-rest');
    rest.innerHTML = '';
    for (const item of data.restPoints) {
      const li = document.createElement('li');
      li.textContent = item;
      rest.appendChild(li);
    }
    $('#journal-shortcut').textContent = data.shortcut;
    const disc = $('#journal-discoveries');
    disc.innerHTML = '';
    for (const item of data.discoveries) {
      const li = document.createElement('li');
      li.textContent = item;
      disc.appendChild(li);
    }
  }

  update(dt) {
    const game = this.game;
    const showHud = game.mode === 'playing' || game.mode === 'paused' || game.mode === 'journal' || game.mode === 'settings' || game.mode === 'dialogue' || game.mode === 'rest' || game.mode === 'project' || game.mode === 'confirm';
    this.refs.hud.classList.toggle('hidden', !showHud);
    if (game.mode === 'title') {
      this.hide(this.refs.captureHint);
      return;
    }
    this.updateVitals();
    this.updateObjective();
    this.updateInteraction();
    this.updateEnemyHud();
    this.updateBossHud();
    this.updateReticle();
    this.updateCaptureHint();
  }

  updateVitals() {
    const p = this.game.player;
    const hp = Math.max(0, Math.ceil(p.health));
    const st = Math.max(0, Math.ceil(p.stamina));
    this.refs.healthFill.style.width = `${(p.health / CONFIG.player.maxHealth) * 100}%`;
    this.refs.staminaFill.style.width = `${(p.stamina / CONFIG.player.maxStamina) * 100}%`;
    this.refs.healthText.textContent = `${hp}`;
    this.refs.staminaText.textContent = `${st}`;
    this.refs.healPips.forEach((pip, i) => pip.classList.toggle('filled', i < p.healCharges));
    this.refs.salvage.textContent = `Salvage ${this.game.progress.salvage}`;
  }

  updateObjective() {
    this.refs.objective.textContent = this.game.getObjective();
  }

  updateInteraction() {
    const game = this.game;
    const interaction = game.currentInteraction;
    const active = game.mode === 'playing' && interaction && !game.player.isDead;
    this.refs.interaction.classList.toggle('hidden', !active);
    if (active) this.refs.interactionText.textContent = interaction.label;
  }

  updateEnemyHud() {
    const game = this.game;
    const enemies = game.getEngagedEnemies().filter((e) => !e.isBoss && e.alive);
    const signature = enemies.map((e) => `${e.name}:${e.home.x}`).join('|');
    if (signature !== this.enemySignature) {
      this.enemySignature = signature;
      this.refs.enemyHud.innerHTML = '';
      this.enemyRows.clear();
      for (const enemy of enemies) {
        const wrap = document.createElement('div');
        wrap.className = 'enemy-bar-wrap';
        const label = document.createElement('div');
        label.className = 'enemy-bar-label';
        const n = document.createElement('span');
        n.textContent = enemy.name;
        const hp = document.createElement('span');
        hp.className = 'enemy-hp-text';
        label.append(n, hp);
        const bar = document.createElement('div');
        bar.className = 'bar enemy-bar';
        const fill = document.createElement('div');
        bar.appendChild(fill);
        wrap.append(label, bar);
        this.refs.enemyHud.appendChild(wrap);
        this.enemyRows.set(enemy, { wrap, hp, fill });
      }
    }
    for (const enemy of enemies) {
      const row = this.enemyRows.get(enemy);
      if (!row) continue;
      const ratio = Math.max(0, enemy.health / enemy.maxHealth);
      row.fill.style.width = `${ratio * 100}%`;
      row.hp.textContent = `${Math.ceil(enemy.health)} / ${enemy.maxHealth}`;
    }
    this.refs.enemyHud.classList.toggle('hidden', enemies.length === 0);
  }

  updateBossHud() {
    const game = this.game;
    const boss = game.boss;
    const active = boss && boss.alive && boss.engaged && game.mode === 'playing';
    this.refs.bossHud.classList.toggle('hidden', !active);
    if (active) {
      this.refs.bossFill.style.width = `${Math.max(0, (boss.health / boss.maxHealth) * 100)}%`;
      this.refs.bossPhase.textContent = boss.phase === 1 ? 'I' : 'II';
    }
  }

  updateReticle() {
    const game = this.game;
    const target = game.player.lockTarget;
    if (!target || !target.alive || game.mode !== 'playing') {
      this.refs.lockReticle.classList.add('hidden');
      return;
    }
    const p = target.lockPoint().project(game.camera);
    if (p.z > 1 || p.z < -1) {
      this.refs.lockReticle.classList.add('hidden');
      return;
    }
    const x = (p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
    this.refs.lockReticle.style.left = `${x}px`;
    this.refs.lockReticle.style.top = `${y}px`;
    this.refs.lockReticle.classList.remove('hidden');
  }
}
