import * as THREE from 'three';
import {
  CONFIG,
  CHECKPOINTS,
  CACHES,
  ENCOUNTERS,
  DIALOGUE,
  OBJECTIVES,
  SAVE_VERSION,
} from './config.js';
import { World } from './world.js';
import { Player } from './player.js';
import { Enemy, Boss } from './enemy.js';
import { Input } from './input.js';
import { AudioManager } from './audio.js';
import { SaveManager, createDefaultProgress, validateProgress } from './save.js';
import { UI } from './ui.js';
import { clamp, damp, lerp } from './util.js';

const clone = (v) => JSON.parse(JSON.stringify(v));
const STEP = 1 / 60;

class CameraRig {
  constructor(game) {
    this.game = game;
    this.yaw = 0;
    this.pitch = CONFIG.player.camera.pitch;
    this.distance = CONFIG.player.camera.distance;
    this.currentDistance = this.distance;
    this.raycaster = new THREE.Raycaster();
    this.tempTarget = new THREE.Vector3();
    this.tempDir = new THREE.Vector3();
    this.tempDesired = new THREE.Vector3();
    this.tempCam = new THREE.Vector3();
    this.titleAngle = 0;
    this.cinematic = null;
    this.shakeOffset = new THREE.Vector3();
  }

  reset() {
    this.yaw = 0;
    this.pitch = CONFIG.player.camera.pitch;
    this.currentDistance = this.distance;
    this.cinematic = null;
    this.game.input.consumeMouse();
  }

  setCinematic(position, lookAt) {
    this.cinematic = { position: position.clone(), lookAt: lookAt.clone() };
  }

  clearCinematic() {
    this.cinematic = null;
  }

  update(dt) {
    const game = this.game;
    const camera = game.camera;
    if (game.mode === 'title') {
      this.titleAngle += dt * 0.035;
      const a = this.titleAngle + 0.3;
      camera.position.set(Math.sin(a) * 19 + 4, 8.2, 15 + Math.cos(a) * 19);
      camera.lookAt(0, 1.7, 14.5);
      return;
    }
    if (game.mode === 'ending' && this.cinematic) {
      camera.position.lerp(this.cinematic.position, 1 - Math.exp(-2.2 * dt));
      const look = this.cinematic.lookAt;
      const current = new THREE.Vector3();
      camera.getWorldDirection(current);
      const target = new THREE.Vector3().copy(camera.position).add(current.multiplyScalar(10));
      target.lerp(look, 1 - Math.exp(-2.2 * dt));
      camera.lookAt(target);
      return;
    }
    if (game.mode !== 'playing' && game.mode !== 'transition') return;
    if (!game.player) return;

    const mouse = game.input.consumeMouse();
    const settings = game.progress.settings;
    this.yaw -= mouse.x;
    this.pitch += mouse.y * (settings.invertY ? -1 : 1);
    this.pitch = clamp(this.pitch, CONFIG.player.camera.minPitch, CONFIG.player.camera.maxPitch);

    const target = this.tempTarget.set(
      game.player.position.x,
      game.player.position.y + CONFIG.player.camera.targetHeight,
      game.player.position.z
    );
    const cp = Math.cos(this.pitch);
    const dir = this.tempDir.set(
      Math.sin(this.yaw) * cp,
      Math.sin(this.pitch),
      Math.cos(this.yaw) * cp
    ).normalize();

    const desiredDistance = this.distance;
    let allowed = desiredDistance;
    this.raycaster.set(target, dir);
    this.raycaster.far = desiredDistance + 0.4;
    const hits = this.raycaster.intersectObjects(game.world.cameraOccluders, true);
    for (const hit of hits) {
      if (hit.distance < allowed) allowed = hit.distance - CONFIG.player.camera.collisionRadius;
    }
    allowed = Math.max(CONFIG.player.camera.minDistance, allowed);
    if (allowed < this.currentDistance) {
      this.currentDistance = allowed;
    } else {
      this.currentDistance = damp(this.currentDistance, allowed, CONFIG.player.camera.restoreSpeed, dt);
    }

    const camPos = this.tempCam.copy(target).addScaledVector(dir, this.currentDistance);
    const ground = game.world.groundHeight(camPos.x, camPos.z);
    if (camPos.y < ground + 0.32) {
      camPos.y = ground + 0.32;
    }
    if (game.shake > 0 && settings.cameraShake) {
      const s = game.shake;
      camPos.x += (Math.random() - 0.5) * s;
      camPos.y += (Math.random() - 0.5) * s * 0.7;
      camPos.z += (Math.random() - 0.5) * s;
    }
    camera.position.copy(camPos);
    camera.lookAt(target);
  }
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.mode = 'title';
    this.time = 0;
    this.ambientTime = 0;
    this.accumulator = 0;
    this.lastFrame = performance.now();
    this.lastCombatEvent = -99;
    this.deathTimer = 0;
    this.shake = 0;
    this.outgoingHits = [];
    this.incomingHits = [];
    this.effects = [];
    this.ordinaryAttacker = null;
    this.currentInteraction = null;
    this.hasStarted = false;
    this.hasSave = false;
    this.pendingSave = null;
    this.settingsOrigin = 'title';
    this.endingState = null;
    this.farBoundaryShown = false;
    this.transitionTimer = null;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.render.highPixelRatio));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.03;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.render.fov,
      window.innerWidth / window.innerHeight,
      CONFIG.render.near,
      CONFIG.render.far
    );

    this.audio = new AudioManager();
    this.input = new Input(canvas);
    this.saveManager = new SaveManager((status, text) => {
      this.saveStatus = { status, text };
      this.ui?.showSaveStatus(status, text);
    });
    this.progress = createDefaultProgress();
    const loaded = this.saveManager.load();
    if (loaded.ok) {
      this.progress = loaded.progress;
      this.pendingSave = clone(loaded.progress);
      this.hasSave = true;
      this.loadedFromBackup = loaded.source === 'backup';
    } else {
      this.loadError = loaded.reason;
    }
    this.world = new World(this.scene, this.renderer);
    this.player = new Player(this);
    this.boss = new Boss(this);
    this.enemies = [];
    this.encounters = [];
    this._setupEncounters();
    this.cameraRig = new CameraRig(this);
    this.ui = new UI(this);
    this.input.attach(this);
    this.sparkGeo = new THREE.IcosahedronGeometry(0.06, 0);
    this._resize();
    window.addEventListener('resize', () => this._resize());
    this.applySettings(false);
    this.applyProgressVisuals();
    this.player.root.visible = false;
    this.ui.showTitle(this.hasSave, !this.saveManager.available);
    const footer = document.querySelector('.title-footer');
    if (footer && !this.saveManager.available) footer.textContent = 'Save unavailable in this browser · Progress cannot persist between sessions';
    else if (footer && this.loadedFromBackup) footer.textContent = 'Recovered the last valid autosave';
    else if (footer && this.loadError && this.loadError !== 'empty') footer.textContent = 'Previous save could not be read · Starting a new journey will replace it';
    this.currentInteraction = null;
    this._setupDebug();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  _setupEncounters() {
    for (const def of Object.values(ENCOUNTERS)) {
      const encounter = {
        id: def.id,
        def,
        active: false,
        cleared: false,
        enemies: [],
      };
      for (const e of def.enemies) {
        const enemy = new Enemy(this, e, encounter);
        encounter.enemies.push(enemy);
        this.enemies.push(enemy);
      }
      this.encounters.push(encounter);
    }
  }

  _resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const low = this.progress.settings.lowQuality;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, low ? CONFIG.render.lowPixelRatio : CONFIG.render.highPixelRatio));
  }

  applySettings(save = false) {
    const s = this.progress.settings;
    this.ui?.applyTextScale(s.textScale);
    this.audio.applySettings(s);
    this.world.setQuality(s.lowQuality ? 'low' : 'high');
    this.renderer.shadowMap.enabled = !s.lowQuality;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, s.lowQuality ? CONFIG.render.lowPixelRatio : CONFIG.render.highPixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (save) this.saveNow('settings');
  }

  onSettingsChanged(key, final = false) {
    this.applySettings(false);
    if (final) this.saveNow('settings');
  }

  _setupDebug() {
    if (!new URLSearchParams(window.location.search).has('debug')) return;
    const game = this;
    window.__waykeepers = {
      game,
      snapshot: () => ({
        mode: game.mode,
        time: game.time,
        progress: clone(game.progress),
        player: {
          x: game.player.position.x,
          y: game.player.position.y,
          z: game.player.position.z,
          health: game.player.health,
          stamina: game.player.stamina,
          healCharges: game.player.healCharges,
          state: game.player.state,
          lock: game.player.lockTarget?.name || null,
        },
        enemies: game.enemies.map((e) => ({
          type: e.type,
          x: e.position.x,
          z: e.position.z,
          health: e.health,
          alive: e.alive,
          engaged: e.engaged,
          state: e.state,
        })),
        boss: {
          x: game.boss.position.x,
          z: game.boss.position.z,
          health: game.boss.health,
          alive: game.boss.alive,
          engaged: game.boss.engaged,
          state: game.boss.state,
          phase: game.boss.phase,
        },
        checkpoint: game.progress.activeCheckpoint,
        saveAvailable: game.saveManager.available,
      }),
      teleport: (x, z) => {
        game.player.position.set(x, game.world.groundHeight(x, z), z);
        game.player.safePosition.copy(game.player.position);
        game.player.root.position.copy(game.player.position);
        game.cameraRig.reset();
      },
      setPlayerHealth: (h) => { game.player.health = h; },
      setPlayerStamina: (s) => { game.player.stamina = s; },
      setBossHealth: (h) => { game.boss.health = h; },
      setEnemyHealth: (i, h) => { if (game.enemies[i]) game.enemies[i].health = h; },
      damagePlayer: (n) => game.player.takeDamage(n, null, 'debug', game),
      damageBoss: (n) => game.boss.receivePlayerHit(n, 'light', 'debug', game),
      damageEnemy: (i, n) => game.enemies[i]?.receivePlayerHit(n, 'light', 'debug', game),
      giveSalvage: (n) => { game.progress.salvage += n; game.saveNow('debug'); },
      forceSave: () => game.saveNow('debug'),
      forceLoad: () => { const l = game.saveManager.load(); return l; },
      resetProgress: () => { game.progress = createDefaultProgress(); game.saveNow('debug'); game.applyProgressVisuals(); },
      setProgress: (patch) => { Object.assign(game.progress, patch); game.saveNow('debug'); game.applyProgressVisuals(); },
      activateBrazier: () => game.activateBrazier(),
      openRest: (id) => game.openRest(id),
      openProject: (kind) => game.openProject(kind),
      buildWorkshop: () => game.buildProject('workshop'),
      buildBeacon: () => game.buildProject('beacon'),
      openDialogue: (id) => game.openDialogueData(DIALOGUE[id] || DIALOGUE.arrival, 'Alder Hollow'),
      closeDialogue: () => game.closeDialogue(),
      interact: () => game.interact(),
      respawn: () => game.respawnAfterDeath(),
      resetCombat: () => game.resetCombatAndEnemies(),
      setTimeScale: (n) => { game.debugTimeScale = n; },
      rendererInfo: () => ({ ...game.renderer.info.render, memory: { ...game.renderer.info.memory } }),
    };
  }

  loop(now) {
    requestAnimationFrame(this.loop);
    const raw = (now - this.lastFrame) / 1000;
    this.lastFrame = now;
    const dt = Math.min(0.1, Math.max(0, raw));
    const timeScale = this.debugTimeScale || 1;
    this.ambientTime += dt;
    this.shake = Math.max(0, this.shake - dt * 0.65);

    if (this.mode === 'playing') {
      this.accumulator += dt * timeScale;
      let steps = 0;
      while (this.accumulator >= STEP && steps < 6) {
        this.fixedUpdate(STEP);
        this.accumulator -= STEP;
        steps++;
      }
      if (steps === 15) this.accumulator = 0;
    } else {
      this.accumulator = 0;
    }

    if (this.mode === 'ending') this.updateEnding(dt);
    if (this.mode !== 'paused' && this.mode !== 'journal' && this.mode !== 'settings' && this.mode !== 'dialogue' && this.mode !== 'rest' && this.mode !== 'project' && this.mode !== 'confirm' && this.mode !== 'transition') {
      this.world.update(dt, this.mode === 'playing' ? this.time : this.ambientTime, this);
    }
    this.cameraRig.update(dt);
    this.audio.update(dt, this);
    this.ui.update(dt);
    this.renderer.render(this.scene, this.camera);
  }

  fixedUpdate(dt) {
    this.time += dt;
    if (this.mode !== 'playing') return;
    this._updateEncounterTriggers();
    this._updateBossTrigger();
    this._updateBossArenaGate();
    this.outgoingHits.length = 0;
    this.incomingHits.length = 0;
    this.player.update(dt, this);
    for (const enemy of this.enemies) enemy.update(dt, this);
    this.boss.update(dt, this);
    this._resolveHits();
    this._updateEncounters();
    this._updateEffects(dt);
    this.currentInteraction = this.player.isDead ? null : this.findInteraction();
    if (this.player.isDead) {
      this.deathTimer += dt;
      if (this.deathTimer >= 2.6) this.respawnAfterDeath();
    }
    this._checkFarBoundary();
  }

  _resolveHits() {
    for (const hit of this.outgoingHits) {
      if (!hit.target || !hit.target.alive) continue;
      hit.target.receivePlayerHit(hit.damage, hit.type, hit.attackId, this);
    }
    for (const hit of this.incomingHits) {
      if (this.player.isDead) break;
      this.player.takeDamage(hit.damage, hit.source, hit.attackId, this);
    }
    this.outgoingHits.length = 0;
    this.incomingHits.length = 0;
  }

  queueOutgoingHit(target, damage, type, attackId) {
    this.outgoingHits.push({ target, damage, type, attackId });
  }

  queueIncomingHit(source, damage, attackId, kind) {
    this.incomingHits.push({ source, damage, attackId, kind });
  }

  _updateEncounterTriggers() {
    if (this.player.isDead) return;
    for (const enc of this.encounters) {
      if (enc.active || enc.cleared) continue;
      const t = enc.def.trigger;
      const d = Math.hypot(this.player.position.x - t.x, this.player.position.z - t.z);
      if (d <= t.radius) {
        enc.active = true;
        for (const enemy of enc.enemies) enemy.engage();
        const names = [...new Set(enc.enemies.map((e) => e.name))].join(' and ');
        this.ui.toast(names === 'Briarling' ? 'A Briarling blocks the Mossroad.' : names === 'Mossguard' ? 'A Mossguard holds the cart yard.' : 'A Mossguard and a Briarling guard the wayhouse.');
        this.onCombatEvent();
      }
    }
  }

  _updateEncounters() {
    for (const enc of this.encounters) {
      if (!enc.active) continue;
      if (enc.enemies.every((e) => !e.alive)) {
        enc.active = false;
        enc.cleared = true;
        if (this.ordinaryAttacker && enc.enemies.includes(this.ordinaryAttacker)) this.ordinaryAttacker = null;
      }
    }
  }

  _updateBossTrigger() {
    if (this.player.isDead) return;
    if (this.progress.bossDefeated || this.boss.engaged) return;
    if (!this.progress.activatedCheckpoints.includes('brazier')) return;
    if (this.player.position.z < CONFIG.world.bossTriggerZ) {
      this.progress.activeCheckpoint = 'brazier';
      this.saveNow('arena-entry');
      this.boss.engage();
      this.bossGateNotified = false;
      this.onCombatEvent();
      this.ui.toast('The Gate Warden wakes. Advance into the courtyard.');
    }
  }

  _updateBossArenaGate() {
    if (!this.boss.engaged || this.progress.bossDefeated) return;
    if (this.player.position.z >= -108.5) return;
    this.world.setBossGate(false);
    if (!this.bossGateNotified) {
      this.bossGateNotified = true;
      this.ui.toast('The gate grinds shut behind you.');
    }
  }

  onCombatEvent() {
    this.lastCombatEvent = this.time;
    if (this.player) this.player.lastCombatEvent = this.time;
  }

  onEnemyDamaged(enemy, damage, type) {
    this.onCombatEvent();
    this._spawnHitEffect(enemy.lockPoint(), type === 'heavy');
    this.audio.hit(type === 'heavy');
    if (this.progress.settings.cameraShake) this.shake = Math.min(0.18, this.shake + (type === 'heavy' ? 0.075 : 0.045));
  }

  onBossDamaged(boss, damage, type) {
    this.onCombatEvent();
    this._spawnHitEffect(boss.lockPoint(), type === 'heavy');
    this.audio.hit(type === 'heavy');
    if (this.progress.settings.cameraShake) this.shake = Math.min(0.2, this.shake + (type === 'heavy' ? 0.08 : 0.05));
  }

  onPlayerDamaged(source, amount) {
    this.onCombatEvent();
    this.ui.damageFlash();
    if (this.progress.settings.cameraShake) this.shake = Math.min(0.28, this.shake + 0.16);
  }

  onPlayerDeath() {
    this.deathTimer = 0;
    this.currentInteraction = null;
    const cp = CHECKPOINTS[this.progress.activeCheckpoint] || CHECKPOINTS.camp;
    this.ui.showDeath(`Returning to ${cp.name}...`);
  }

  onEnemyKilled(enemy) {
    this.ui.toast(`${enemy.name} falls.`);
    if (this.ordinaryAttacker === enemy) this.ordinaryAttacker = null;
    this._updateEncounters();
  }

  onEnemyLeashReset(enemy) {
    const enc = enemy.encounter;
    if (!enc) return;
    for (const e of enc.enemies) e.reset();
    enc.active = false;
    enc.cleared = false;
    if (this.ordinaryAttacker && enc.enemies.includes(this.ordinaryAttacker)) this.ordinaryAttacker = null;
    this.ui.toast('The road falls quiet. The enemy returns to its post.');
  }

  onBossDefeated(boss) {
    if (this.progress.bossDefeated) return;
    this.progress.bossDefeated = true;
    this.progress.lens = true;
    this.progress.salvage += CONFIG.economy.bossSalvage;
    this.world.setBossGate(true);
    this.onCombatEvent();
    this.audio.bossDefeat();
    this.saveNow('boss-victory');
    this.ui.toast('Beacon Lens recovered. +4 Salvage.');
    this.ui.showChapterBanner('The Warden falls', 'Beacon Lens recovered', 3.6);
  }

  saveNow(reason) {
    if (!this.hasStarted && !this.hasSave) return false;
    const ok = this.saveManager.save(this.progress);
    if (ok) {
      this.hasSave = true;
      this.pendingSave = clone(this.progress);
    }
    return ok;
  }

  applyProgressVisuals() {
    const p = this.progress;
    this.world.setWorkshopBuilt(p.workshopBuilt);
    this.player.setReinforced(p.workshopBuilt);
    this.world.setBeaconBuilt(p.beaconBuilt);
    for (const cache of CACHES) this.world.setCacheClaimed(cache.id, p.claimedCaches.includes(cache.id));
    this.world.setKeepsakeCollected(p.keepsake);
    this.world.setShortcutOpen(p.shortcutOpen);
    this.world.setBrazierActive(p.activatedCheckpoints.includes('brazier'));
    if (p.bossDefeated) this.boss.setDefeatedAbsent(true);
    else {
      this.boss.isBossHidden = false;
      if (this.boss.state === 'dead') this.boss.reset();
    }
    this.updateBossGate();
  }

  updateBossGate() {
    if (this.boss.engaged) {
      this.world.setBossGate(false);
      return;
    }
    const open = this.progress.bossDefeated || this.progress.activatedCheckpoints.includes('brazier');
    this.world.setBossGate(open);
  }

  resetCombatAndEnemies() {
    this.ordinaryAttacker = null;
    this.bossGateNotified = false;
    for (const enc of this.encounters) {
      enc.active = false;
      enc.cleared = false;
      for (const enemy of enc.enemies) enemy.reset();
    }
    if (this.progress.bossDefeated) {
      this.boss.setDefeatedAbsent(true);
    } else {
      this.boss.isBossHidden = false;
      this.boss.reset();
    }
    this.outgoingHits.length = 0;
    this.incomingHits.length = 0;
    this.lastCombatEvent = -99;
    this.deathTimer = 0;
    this.updateBossGate();
  }

  startAtCheckpoint(id, restore = true) {
    let checkpointId = id;
    if (!CHECKPOINTS[checkpointId] || !this.progress.activatedCheckpoints.includes(checkpointId)) checkpointId = 'camp';
    this.progress.activeCheckpoint = checkpointId;
    const cp = CHECKPOINTS[checkpointId];
    this.player.root.visible = true;
    this.player.resetAt(cp, restore);
    this.cameraRig.reset();
    this.resetCombatAndEnemies();
    this.ui.hideDeath();
    this.ui.hideEnding();
    this.currentInteraction = null;
    this.farBoundaryShown = false;
    this.ambientTime = 0;
    this.lastCombatEvent = -99;
  }

  continueGame() {
    if (this.mode !== 'title') return;
    let progress = this.pendingSave ? clone(this.pendingSave) : null;
    if (!progress) {
      const loaded = this.saveManager.load();
      if (loaded.ok) progress = loaded.progress;
    }
    if (!progress || !validateProgress(progress).ok) {
      this.ui.toast('No valid journey to continue.');
      return;
    }
    this.progress = progress;
    this.hasStarted = true;
    this.hasSave = true;
    this.pendingSave = clone(progress);
    this.applySettings(false);
    this.applyProgressVisuals();
    this.startAtCheckpoint(this.progress.activeCheckpoint, true);
    this.mode = 'playing';
    this.ui.showGame();
    this.ui.toast(this.loadedFromBackup ? 'Recovered the last valid autosave.' : `Continued at ${CHECKPOINTS[this.progress.activeCheckpoint].name}.`);
    this.loadedFromBackup = false;
    this.input.requestCapture();
    if (this.progress.chapterComplete) this.ui.showChapterBanner('Chapter complete', 'Light the Road', 4.0);
    else this.ui.showChapterBanner('Alder Hollow', 'Chapter I · Light the Road', 3.2);
  }

  requestNewGame() {
    if (this.mode !== 'title') return;
    const replace = this.hasSave || this.hasStarted;
    if (replace) {
      this.ui.showConfirm(
        'Replace this journey?',
        'Starting a new game replaces the saved journey in this browser. This cannot be undone.',
        () => this.startNewGame()
      );
      this.mode = 'confirm';
    } else {
      this.startNewGame();
    }
  }

  startNewGame() {
    const settings = { ...this.progress.settings };
    this.progress = createDefaultProgress();
    this.progress.settings = settings;
    this.hasStarted = true;
    this.hasSave = true;
    this.loadedFromBackup = false;
    this.loadError = null;
    this.pendingSave = clone(this.progress);
    this.applySettings(false);
    this.applyProgressVisuals();
    this.startAtCheckpoint('camp', true);
    this.mode = 'playing';
    this.ui.hideConfirm();
    this.ui.showGame();
    this.ui.hideDeath();
    this.saveNow('new-game');
    this.input.requestCapture();
    this.ui.showChapterBanner('Light the Road', 'Chapter I', 4.2);
    this.ui.toast('Mara waits by the hearth.');
    this.audio.start();
  }

  cancelConfirm() {
    this.ui.hideConfirm();
    this.mode = 'title';
    this.ui.showTitle(this.hasSave || this.hasStarted, !this.saveManager.available);
  }

  pause(reason = 'pause') {
    if (this.mode !== 'playing') return;
    this.mode = 'paused';
    this.accumulator = 0;
    this.input.consumeMouse();
    this.input.releaseCapture();
    this.ui.showPause();
    this.pauseReason = reason;
  }

  resumeFromPause() {
    if (this.mode !== 'paused') return;
    this.mode = 'playing';
    this.accumulator = 0;
    this.input.consumeMouse();
    this.ui.hidePause();
    this.input.requestCapture();
    this.ui.updateCaptureHint();
  }

  returnToTitle() {
    if (!['paused', 'playing'].includes(this.mode)) return;
    this.saveNow('return-title');
    this.pendingSave = clone(this.progress);
    this.mode = 'title';
    this.input.releaseCapture();
    this.input.consumeMouse();
    this.player.root.visible = false;
    this.currentInteraction = null;
    this.ui.showTitle(this.hasSave || this.hasStarted, !this.saveManager.available);
  }

  openJournal() {
    if (this.mode !== 'paused') return;
    this.mode = 'journal';
    this.input.consumeMouse();
    this.ui.openJournal();
  }

  closeJournal() {
    if (this.mode !== 'journal') return;
    this.ui.closeJournal();
    this.mode = 'paused';
    this.ui.showPause();
  }

  openSettings(origin = 'pause') {
    if (!['title', 'paused'].includes(this.mode)) return;
    this.settingsOrigin = origin;
    this.mode = 'settings';
    this.input.consumeMouse();
    this.ui.openSettings(origin);
  }

  closeSettings() {
    if (this.mode !== 'settings') return;
    this.ui.closeSettings();
    if (this.settingsOrigin === 'pause') {
      this.mode = 'paused';
      this.ui.showPause();
    } else {
      this.mode = 'title';
      this.ui.showTitle(this.hasSave || this.hasStarted, !this.saveManager.available);
    }
  }

  acceptsGameplayInput() {
    return this.mode === 'playing' && !this.player.isDead;
  }

  getHostileTargets() {
    const list = this.enemies.filter((e) => e.alive);
    if (this.boss.alive && !this.boss.isBossHidden) list.push(this.boss);
    return list;
  }

  getEngagedEnemies() {
    return this.enemies.filter((e) => e.alive && e.engaged);
  }

  hasLineOfSight(point) {
    if (!this.camera) return true;
    const origin = this.camera.position.clone();
    const dir = point.clone().sub(origin);
    const dist = dir.length();
    if (dist < 0.2) return true;
    dir.normalize();
    const ray = new THREE.Raycaster(origin, dir, 0.1, Math.max(0.2, dist - 0.6));
    const hits = ray.intersectObjects(this.world.cameraOccluders, true);
    return hits.length === 0;
  }

  getObjective() {
    if (this.progress.beaconBuilt) return OBJECTIVES.complete;
    if (this.progress.bossDefeated || this.progress.lens) {
      return this.progress.salvage >= CONFIG.economy.beaconCost ? OBJECTIVES.lens : OBJECTIVES.lensNoSalvage;
    }
    if (this.boss.engaged) return OBJECTIVES.boss;
    if (this.progress.activatedCheckpoints.includes('brazier')) return OBJECTIVES.brazier;
    return OBJECTIVES.initial;
  }

  getJournalData() {
    const p = this.progress;
    const rest = [];
    for (const id of ['camp', 'brazier']) {
      rest.push(p.activatedCheckpoints.includes(id) ? `${CHECKPOINTS[id].name} — active` : `${CHECKPOINTS[id].name} — undiscovered`);
    }
    const discoveries = [];
    discoveries.push(`Supply caches: ${p.claimedCaches.length} of 4`);
    if (p.keepsake) discoveries.push('Carved keepsake — on the hearth shelf');
    if (p.workshopBuilt) discoveries.push('Workshop restored');
    if (p.bossDefeated) discoveries.push('Gate Warden defeated');
    if (p.beaconBuilt) discoveries.push('Bridge beacon restored');
    if (!discoveries.length) discoveries.push('Nothing discovered yet.');
    return {
      objective: this.getObjective(),
      resources: `Salvage: ${p.salvage} · Beacon Lens: ${p.beaconBuilt ? 'set in the beacon' : p.lensConsumed ? 'spent' : p.lens ? 'carried' : 'not found'}`,
      restPoints: rest,
      shortcut: p.shortcutOpen ? 'Open — cart yard to Alder Hollow' : 'Closed — opens from the cart yard side',
      discoveries,
    };
  }

  findInteraction() {
    if (!this.player || this.player.isDead) return null;
    const p = this.player.position;
    const list = [];
    const add = (id, label, x, z, range = CONFIG.world.interactionRange) => {
      const d = Math.hypot(p.x - x, p.z - z);
      if (d <= range) list.push({ id, label, x, z, distance: d });
    };
    add('mara', 'Talk to Mara', -4.2, 17.8);
    add('hearth', 'Rest at the hearth', 0, 16.0, 3.4);
    add('workshop', this.progress.workshopBuilt ? 'Inspect the restored workshop' : 'Restore the workshop', -8.6, 13.3, 3.1);
    if (this.progress.beaconBuilt) add('beacon', 'Inspect the bridge beacon', 8.2, 20.5, 3.1);
    else if (this.progress.lens) add('beacon', 'Restore the bridge beacon', 8.2, 20.5, 3.1);
    else add('beacon', 'Inspect the broken beacon', 8.2, 20.5, 3.1);
    for (const cache of CACHES) {
      if (!this.progress.claimedCaches.includes(cache.id)) {
        add(`cache:${cache.id}`, `Open ${cache.name.toLowerCase()}`, cache.x, cache.z, 2.5);
      }
    }
    if (!this.progress.keepsake) add('keepsake', 'Take the carved keepsake', 27.5, -25.4, 2.5);
    if (this.progress.activatedCheckpoints.includes('brazier')) {
      add('brazier', 'Rest at the field brazier', 0, -96.0, 3.3);
    } else {
      add('brazier', 'Activate the field brazier', 0, -96.0, 3.3);
    }
    if (!this.progress.shortcutOpen) {
      const far = p.z < -20.8;
      add('shortcut', far ? 'Open the shortcut gate' : 'Inspect the shortcut gate', 20, -20.0, 3.3);
    }
    list.sort((a, b) => a.distance - b.distance);
    return list[0] || null;
  }

  interact() {
    if (this.mode !== 'playing' || this.player.isDead) return;
    const interaction = this.findInteraction();
    if (!interaction) return;
    const id = interaction.id;
    if (id === 'mara') this.talkToMara();
    else if (id === 'hearth') this.openRest('camp');
    else if (id === 'workshop') this.openProject('workshop');
    else if (id === 'beacon') {
      if (this.progress.beaconBuilt) this.openDialogueData(DIALOGUE.beaconRestored, 'The Bridge Beacon');
      else if (this.progress.lens) this.openProject('beacon');
      else {
        this.progress.dialogue.beaconInspected = true;
        this.saveNow('beacon-inspected');
        this.openDialogueData(DIALOGUE.beaconInspected, 'The Broken Beacon');
      }
    } else if (id.startsWith('cache:')) {
      this.collectCache(id.slice(6));
    } else if (id === 'keepsake') {
      this.collectKeepsake();
    } else if (id === 'brazier') {
      if (this.progress.activatedCheckpoints.includes('brazier')) this.openRest('brazier');
      else this.activateBrazier();
    } else if (id === 'shortcut') {
      if (this.player.position.z < -20.8) this.openShortcut();
      else this.openDialogueData(DIALOGUE.shortcutLocked, 'Shortcut Gate');
    }
  }

  talkToMara() {
    let data;
    if (this.progress.beaconBuilt) {
      data = DIALOGUE.complete;
      this.progress.dialogue.completeSeen = true;
    } else if (this.progress.bossDefeated || this.progress.lens) {
      data = this.progress.salvage >= CONFIG.economy.beaconCost ? DIALOGUE.lens : DIALOGUE.lensPoor;
      this.progress.dialogue.lensSeen = true;
    } else {
      data = DIALOGUE.arrival;
      this.progress.dialogue.arrivalSeen = true;
    }
    this.saveNow('dialogue');
    this.openDialogueData(data, 'Alder Hollow');
  }

  openDialogueData(data, kicker) {
    if (this.mode !== 'playing') return;
    this.mode = 'dialogue';
    this.input.consumeMouse();
    this.input.releaseCapture();
    this.ui.showDialogue(data.title, data.body, kicker);
  }

  closeDialogue() {
    if (this.mode !== 'dialogue') return;
    this.ui.hideDialogue();
    this.mode = 'playing';
    this.input.requestCapture();
    this.ui.updateCaptureHint();
  }

  collectCache(id) {
    if (this.progress.claimedCaches.includes(id)) return;
    const cache = CACHES.find((c) => c.id === id);
    if (!cache) return;
    this.progress.claimedCaches.push(id);
    this.progress.salvage += CONFIG.economy.cacheSalvage;
    this.world.setCacheClaimed(id, true);
    this.audio.pickup();
    this.saveNow('cache');
    this.ui.toast(`${cache.name}: +2 Salvage.`);
  }

  collectKeepsake() {
    if (this.progress.keepsake) return;
    this.progress.keepsake = true;
    this.world.setKeepsakeCollected(true);
    this.audio.pickup();
    this.saveNow('keepsake');
    this.ui.toast('Carved keepsake recovered. It now rests on the hearth shelf.');
  }

  openShortcut() {
    if (this.progress.shortcutOpen) return;
    this.progress.shortcutOpen = true;
    this.world.setShortcutOpen(true);
    this.audio.gate();
    this.saveNow('shortcut');
    this.ui.toast('Shortcut opened: cart yard to Alder Hollow.');
    this.ui.showChapterBanner('Shortcut opened', 'The old road returns', 3.0);
  }

  isRestAllowed() {
    if (this.player.isDead) return false;
    if (this.boss.engaged || this.enemies.some((e) => e.alive && e.engaged)) return false;
    if (this.time - this.lastCombatEvent < CONFIG.world.combatQuietTime) return false;
    return true;
  }

  openRest(checkpointId) {
    if (this.mode !== 'playing') return;
    if (!this.isRestAllowed()) {
      this.ui.toast('You cannot rest while the road is restless. Wait five seconds after combat.');
      return;
    }
    const activated = this.progress.activatedCheckpoints;
    const canTravel = checkpointId === 'brazier' || activated.includes('brazier');
    const travelOptions = [];
    if (canTravel) {
      for (const id of ['camp', 'brazier']) {
        if (id === checkpointId || !activated.includes(id)) continue;
        travelOptions.push({ id, short: CHECKPOINTS[id].short, name: CHECKPOINTS[id].name });
      }
    }
    this.mode = 'rest';
    this.input.consumeMouse();
    this.input.releaseCapture();
    this.ui.showRestMenu({
      checkpointId,
      title: CHECKPOINTS[checkpointId].name,
      body: 'Rest restores health, stamina and both healing charges. Ordinary enemies and an undefeated Gate Warden reset. Permanent progress remains.\n\nWalking past a rest point does not rest you.',
      canTravel: travelOptions.length > 0,
      travelOptions,
    });
  }

  closeMenu() {
    if (!['rest', 'project'].includes(this.mode)) return;
    this.ui.hideRest();
    this.ui.hideProject();
    this.mode = 'playing';
    this.input.requestCapture();
    this.ui.updateCaptureHint();
  }

  performRestAt(checkpointId) {
    if (!this.isRestAllowed()) {
      this.ui.hideRest();
      this.mode = 'playing';
      this.ui.toast('The road is still restless.');
      this.input.requestCapture();
      return;
    }
    this.progress.activeCheckpoint = checkpointId;
    this.startAtCheckpoint(checkpointId, true);
    this.saveNow('rest');
    this.ui.hideRest();
    this._runTransition(`Resting at ${CHECKPOINTS[checkpointId].name}`, 0.75);
    this.ui.toast('Rested. Health, stamina and healing charges restored.');
  }

  travelTo(checkpointId) {
    if (!this.isRestAllowed()) {
      this.ui.hideRest();
      this.mode = 'playing';
      this.ui.toast('The road is still restless.');
      this.input.requestCapture();
      return;
    }
    if (!this.progress.activatedCheckpoints.includes(checkpointId)) return;
    this.progress.activeCheckpoint = checkpointId;
    this.startAtCheckpoint(checkpointId, true);
    this.saveNow('travel');
    this.ui.hideRest();
    this._runTransition(`Traveling to ${CHECKPOINTS[checkpointId].name}`, 0.9);
    this.ui.toast(`Traveled to ${CHECKPOINTS[checkpointId].name}.`);
  }

  activateBrazier() {
    if (this.progress.activatedCheckpoints.includes('brazier')) return;
    if (this.mode !== 'playing') return;
    this.progress.activatedCheckpoints.push('brazier');
    this.progress.activeCheckpoint = 'brazier';
    this.world.setBrazierActive(true);
    this.updateBossGate();
    this.startAtCheckpoint('brazier', true);
    this.saveNow('brazier');
    this.audio.beacon();
    this._runTransition('The field brazier catches', 1.0);
    this.ui.toast('Field brazier lit. It is now your active rest point.');
    this.ui.showChapterBanner('Field Brazier Lit', 'A safe place before the gate', 3.6);
  }

  openProject(kind) {
    if (this.mode !== 'playing') return;
    this.mode = 'project';
    this.input.consumeMouse();
    this.input.releaseCapture();
    const salvage = this.progress.salvage;
    let data;
    if (kind === 'workshop') {
      const built = this.progress.workshopBuilt;
      data = {
        kind,
        title: built ? 'Restored Workshop' : 'Restore the Workshop',
        body: built
          ? 'The bench is true, the roof is whole and the tools are warm. The reinforced spear tip raises light thrusts to 30 damage and heavy thrusts to 54.'
          : 'Repair the bench, roof and tools. Warm light returns to the workshop, and the visible spear tip is reinforced.\n\nBenefit: light thrust 25 → 30 damage, heavy thrust 45 → 54. Reach, speed and stamina are unchanged.\n\nA Briarling falls in two light hits; a Mossguard in three.',
        resources: `Salvage <strong>${salvage}</strong> · Cost <strong>${CONFIG.economy.workshopCost}</strong>`,
        built,
        canBuild: !built && salvage >= CONFIG.economy.workshopCost,
        buildLabel: `Restore workshop · ${CONFIG.economy.workshopCost} Salvage`,
      };
    } else {
      const built = this.progress.beaconBuilt;
      data = {
        kind,
        title: built ? 'The Bridge Beacon' : 'Restore the Bridge Beacon',
        body: built
          ? 'The Beacon Lens is set, the bridge lamps burn and the road gate stands open. The chapter is complete; Alder Hollow remains yours to explore.'
          : 'Fit the Beacon Lens and repair the beacon. Bridge lamps will wake along the old crossing and the road gate will open.\n\nRequires the Beacon Lens from the Gate Warden and eight Salvage.\n\nCompleting this restores the chapter.',
        resources: `Salvage <strong>${salvage}</strong> · Cost <strong>${CONFIG.economy.beaconCost}</strong> · Lens <strong>${this.progress.lens ? 'carried' : 'missing'}</strong>`,
        built,
        canBuild: !built && this.progress.lens && salvage >= CONFIG.economy.beaconCost,
        buildLabel: `Restore bridge beacon · ${CONFIG.economy.beaconCost} Salvage + Lens`,
      };
    }
    this.ui.showProject(data);
  }

  buildProject(kind) {
    if (this.mode !== 'project') return;
    if (kind === 'workshop') {
      if (this.progress.workshopBuilt) return;
      if (this.progress.salvage < CONFIG.economy.workshopCost) {
        this.ui.toast('Not enough Salvage for the workshop.');
        return;
      }
      this.progress.salvage -= CONFIG.economy.workshopCost;
      this.progress.workshopBuilt = true;
      this.world.setWorkshopBuilt(true);
      this.player.setReinforced(true);
      this.saveNow('workshop-built');
      this.audio.construction();
      this.ui.hideProject();
      this._runTransition('The workshop takes shape', 0.9);
      this.ui.toast('Workshop restored. Spear damage is now 30 light / 54 heavy.');
      this.ui.showChapterBanner('Workshop Restored', 'The spear tip is reinforced', 3.2);
    } else if (kind === 'beacon') {
      if (this.progress.beaconBuilt) return;
      if (!this.progress.lens) {
        this.ui.toast('The Beacon Lens is still missing.');
        return;
      }
      if (this.progress.salvage < CONFIG.economy.beaconCost) {
        this.ui.toast('Not enough Salvage for the bridge beacon.');
        return;
      }
      this.progress.salvage -= CONFIG.economy.beaconCost;
      this.progress.lensConsumed = true;
      this.progress.beaconBuilt = true;
      this.progress.chapterComplete = true;
      this.saveNow('beacon-built');
      this.world.setBeaconBuilt(true);
      this.ui.hideProject();
      this.startEnding();
    }
  }

  startEnding() {
    this.mode = 'ending';
    this.input.consumeMouse();
    this.input.releaseCapture();
    this.ui.hideProject();
    this.ui.hideHud();
    this.audio.beacon();
    this.world.setBeaconBuilt(true);
    this.world.setBridgeLights(false);
    this.world.beaconLens.visible = true;
    this.world.beaconLight.intensity = 3.2;
    for (const lamp of this.world.bridgeLamps) {
      lamp.bulb.visible = false;
      lamp.light.visible = false;
      lamp.light.intensity = 0;
    }
    this.cameraRig.setCinematic(
      new THREE.Vector3(14.2, 5.1, 30.0),
      new THREE.Vector3(8.4, 2.5, 22.2)
    );
    this.endingState = { elapsed: 0, shown: false, lamps: 0 };
    this.ui.showChapterBanner('The bridge wakes', 'Light the Road', 2.4);
  }

  updateEnding(dt) {
    if (!this.endingState) return;
    this.endingState.elapsed += dt;
    const e = this.endingState.elapsed;
    const targetLamps = clamp(Math.floor((e - 0.55) / 0.42) + 1, 0, this.world.bridgeLamps.length);
    if (targetLamps > this.endingState.lamps) {
      for (let i = this.endingState.lamps; i < targetLamps; i++) {
        const lamp = this.world.bridgeLamps[i];
        lamp.bulb.visible = true;
        lamp.light.visible = true;
        lamp.light.intensity = 1.4;
        this.audio._tone({ freq: 480 + i * 90, type: 'sine', duration: 0.5, volume: 0.03, slide: 60 });
      }
      this.endingState.lamps = targetLamps;
    }
    if (e >= 2.9 && !this.endingState.shown) {
      this.endingState.shown = true;
      this.world.setBridgeLights(true);
      this.ui.showEnding(
        'Mara stands at the hearth and watches the old lamps answer one by one.\n\n“You have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.”\n\nChapter complete — Light the Road.'
      );
    }
  }

  finishEnding() {
    if (this.mode !== 'ending') return;
    this.world.setBridgeLights(true);
    this.ui.hideEnding();
    this.ui.showGame();
    this.cameraRig.clearCinematic();
    this.mode = 'playing';
    this.endingState = null;
    this.saveNow('chapter-complete');
    this.input.requestCapture();
    this.ui.showChapterBanner('Chapter complete', 'Light the Road', 5.0);
    this.ui.toast('The road is lit. Explore Alder Hollow and finish any missed work.');
  }

  respawnAfterDeath() {
    const cp = CHECKPOINTS[this.progress.activeCheckpoint] || CHECKPOINTS.camp;
    this.player.resetAt(cp, true);
    this.cameraRig.reset();
    this.resetCombatAndEnemies();
    this.outgoingHits.length = 0;
    this.incomingHits.length = 0;
    this.lastCombatEvent = -99;
    this.deathTimer = 0;
    this.currentInteraction = null;
    this.ui.hideDeath();
    this.ui.toast(`Returned to ${cp.name}.`);
  }

  _checkFarBoundary() {
    if (this.farBoundaryShown || !this.progress.chapterComplete) return;
    if (this.player.position.z < -129.0) {
      this.farBoundaryShown = true;
      this.ui.showChapterBanner('Chapter complete', 'The road beyond is not yet built', 5.0);
      this.ui.toast('Chapter complete. The next road is not part of this build.');
    }
  }

  _runTransition(label, duration) {
    this.mode = 'transition';
    this.input.consumeMouse();
    this.ui.showTransition(label);
    this.input.requestCapture();
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
    this.transitionTimer = setTimeout(() => {
      this.ui.fadeTransition();
      this.mode = 'playing';
      this.accumulator = 0;
      this.input.consumeMouse();
      this.ui.updateCaptureHint();
    }, duration * 1000);
  }

  _spawnHitEffect(point, heavy) {
    const group = new THREE.Group();
    group.position.copy(point);
    const material = new THREE.MeshBasicMaterial({
      color: heavy ? 0xffd083 : 0xf2c27a,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const parts = [];
    const count = heavy ? 8 : 5;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, material);
      mesh.position.set(0, 0, 0);
      const a = Math.random() * Math.PI * 2;
      const up = Math.random() * 1.7 + 0.4;
      const speed = Math.random() * 2.2 + 0.8;
      parts.push({
        mesh,
        vx: Math.sin(a) * speed,
        vy: up,
        vz: Math.cos(a) * speed,
      });
      group.add(mesh);
    }
    this.scene.add(group);
    this.effects.push({ group, material, parts, life: 0.36, maxLife: 0.36 });
  }

  _updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= dt;
      for (const p of e.parts) {
        p.vy -= 9.8 * dt;
        p.mesh.position.x += p.vx * dt;
        p.mesh.position.y += p.vy * dt;
        p.mesh.position.z += p.vz * dt;
        p.mesh.scale.setScalar(Math.max(0.1, e.life / e.maxLife));
      }
      e.material.opacity = Math.max(0, e.life / e.maxLife);
      if (e.life <= 0) {
        this.scene.remove(e.group);
        e.material.dispose();
        this.effects.splice(i, 1);
      }
    }
  }
}
