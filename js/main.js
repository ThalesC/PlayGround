'use strict';

const WAVES = [
  { name: 'THE THRONE ROAD', sub: 'A KINGLESS HALL', spawns: [{ type: 'husk', count: 4, step: 0.32 }] },
  { name: 'THE BLEEDING GALLERY', sub: 'THEY REMEMBER YOU', spawns: [{ type: 'husk', count: 6, step: 0.28 }, { type: 'brute', count: 1, step: 0.5 }] },
  { name: 'THE CINDER CHAPEL', sub: 'KNEEL OR BURN', spawns: [{ type: 'husk', count: 5, step: 0.24 }, { type: 'brute', count: 2, step: 0.55 }, { type: 'wraith', count: 2, step: 0.45 }] },
  { name: 'THE HOLLOW THRONE', sub: 'THE KING STIRS', boss: true }
];

const UPGRADES = [
  {
    id: 'ironhide',
    icon: '✦',
    name: 'IRON HIDE',
    desc: 'Your oath hardens. Gain 30 maximum health and mend 30 health.',
    tag: '+30 MAX HEALTH',
    apply(p) {
      p.maxHp += 30;
      p.hp = Math.min(p.maxHp, p.hp + 30);
    }
  },
  {
    id: 'reserves',
    icon: '⟡',
    name: 'DEEP RESERVES',
    desc: 'Breathe deeper. Gain 25 maximum stamina and refill your reserves.',
    tag: '+25 MAX STAMINA',
    apply(p) {
      p.maxStam += 25;
      p.stam = p.maxStam;
    }
  },
  {
    id: 'wrath',
    icon: '◈',
    name: 'WRATHFUL EDGE',
    desc: 'Every blow lands heavier. All damage dealt is increased by 18%.',
    tag: '+18% DAMAGE',
    apply(p) {
      p.damageMult += 0.18;
    }
  },
  {
    id: 'blood',
    icon: '♰',
    name: 'BLOODTHIRST',
    desc: 'The court feeds you. Restore 3 health with every enemy struck.',
    tag: 'LIFE ON HIT',
    apply(p) {
      p.lifesteal += 3;
    }
  },
  {
    id: 'quickstep',
    icon: '⌁',
    name: 'QUICKSTEP',
    desc: 'The cinders lift your heels. Dodges cost 35% less stamina.',
    tag: 'CHEAPER DODGE',
    apply(p) {
      p.dodgeCostMult = Math.max(0.35, p.dodgeCostMult * 0.65);
    }
  },
  {
    id: 'colossus',
    icon: '☄',
    name: 'COLOSSUS',
    desc: 'Make the floor remember you. Heavy attack reach is increased by 30%.',
    tag: '+30% HEAVY REACH',
    apply(p) {
      p.heavyRadiusMult += 0.3;
    }
  },
  {
    id: 'ward',
    icon: '⛨',
    name: 'EMBER WARD',
    desc: 'Perfect parries grant 8 additional wrath and stagger longer.',
    tag: 'PARRY REWARD',
    apply(p) {
      p.parryBonus += 8;
    }
  }
];

function baseZoom() {
  if (G.isTouch) return clamp(Math.min(W / 640, 0.72), 0.56, 0.78);
  return clamp(Math.min(W / 1520, H / 980), 0.72, 1.06);
}

function setTouchVisible(visible) {
  if (!G.isTouch) {
    ui.touch.classList.add('is-hidden');
    return;
  }
  ui.touch.classList.toggle('is-hidden', !visible);
}

function clearWorld() {
  G.enemies.length = 0;
  G.projectiles.length = 0;
  G.hazards.length = 0;
  G.souls.length = 0;
  G.particles.length = 0;
  G.effects.length = 0;
  G.decals.length = 0;
  G.texts.length = 0;
  G.pendingSpawns.length = 0;
  G.boss = null;
  G.combo = 0;
  G.comboTimer = 0;
  G.bestCombo = 0;
  G.soulsCount = 0;
  G.totalKills = 0;
  G.wave = 0;
  G.waveState = 'idle';
  G.waveTimer = 0;
  G.hitstop = 0;
  G.slowTimer = 0;
  G.timeScale = 1;
  G.damageFlash = 0;
  G.endTimer = 0;
  ui.boss.classList.add('is-hidden');
  ui.warning.classList.add('is-hidden');
  ui.hurt.style.opacity = '0';
  ui.feed.innerHTML = '';
}

function resetRun() {
  clearWorld();
  G.player = new Player(0, 70);
  G.player.face = { x: 1, y: 0 };
  const p = project(G.player.x, G.player.y, 0);
  G.camera.x = p.x;
  G.camera.y = p.y - 24;
  G.camera.zoom = baseZoom();
  G.state = 'playing';
  G.endTimer = 0;
  ui.menu.classList.add('is-hidden');
  ui.hud.classList.remove('is-hidden');
  ui.upgrade.classList.add('is-hidden');
  ui.end.classList.add('is-hidden');
  ui.pause.classList.add('is-hidden');
  ui.warning.classList.add('is-hidden');
  setTouchVisible(true);
  startWave(1);
}

function startRun() {
  audio.init();
  resetRun();
}

function startWave(n) {
  G.wave = n;
  G.waveState = 'fighting';
  G.waveTimer = 0;
  G.pendingSpawns.length = 0;
  const wave = WAVES[n - 1];
  if (!wave) return;
  ui.waveLabel.textContent = 'WAVE ' + roman[n];
  ui.waveSub.textContent = wave.sub;
  addFeed('WAVE ' + roman[n], 'pale');
  if (wave.boss) {
    G.boss = new Boss(0, -410);
    G.enemies.push(G.boss);
    ui.boss.classList.remove('is-hidden');
    ui.bossName.textContent = 'THE HOLLOW KING';
    ui.bossPhase.textContent = 'FIRST BREATH';
    ui.bossFill.style.width = '100%';
    ui.warning.textContent = 'THE KING STIRS';
    ui.warning.classList.remove('is-hidden');
    addShake(0.5);
    audio.roar();
    addEffect('ring', { x: 0, y: -410, r0: 20, r1: 260, life: 1.2, alpha: 0.5, color: 'rgba(255, 98, 54, ALPHA)', width: 6 });
    return;
  }
  let delay = 0.2;
  for (const group of wave.spawns) {
    for (let i = 0; i < group.count; i++) {
      let angle = rand(TAU);
      let radius = rand(560, 430);
      let x = Math.cos(angle) * radius;
      let y = Math.sin(angle) * radius;
      if (dist(x, y, G.player.x, G.player.y) < 260) {
        angle += Math.PI;
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
      }
      G.pendingSpawns.push({ type: group.type, x, y, t: delay + rand(0.16) });
      delay += group.step;
    }
  }
}

function processSpawns(dt) {
  for (let i = G.pendingSpawns.length - 1; i >= 0; i--) {
    const p = G.pendingSpawns[i];
    p.t -= dt;
    if (p.t > 0) continue;
    G.pendingSpawns.splice(i, 1);
    const e = new Enemy(p.type, p.x, p.y);
    G.enemies.push(e);
    addEffect('ring', { x: p.x, y: p.y, r0: 8, r1: 54, life: 0.55, alpha: 0.42, color: 'rgba(205, 78, 44, ALPHA)', width: 3 });
    burst(p.x, p.y, 3, 14, 'rgba(100, 83, 66, .35)', 'dust', 90);
    if (p.type === 'brute') audio.growl();
  }
}

function separateEntities() {
  const list = [];
  if (G.player && !G.player.dead) list.push(G.player);
  for (const e of G.enemies) if (!e.dead) list.push(e);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i];
      const b = list[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 1;
      const min = a.r + b.r;
      if (d < min) {
        const push = (min - d) * 0.5;
        const nx = dx / d;
        const ny = dy / d;
        a.x -= nx * push;
        a.y -= ny * push;
        b.x += nx * push;
        b.y += ny * push;
      }
    }
  }
  for (const e of G.enemies) {
    if (e.dead) continue;
    const d = Math.hypot(e.x, e.y);
    const max = ARENA_R - 38;
    if (d > max) {
      e.x = (e.x / d) * max;
      e.y = (e.y / d) * max;
    }
  }
}

function waveCleared() {
  G.waveState = 'cleared';
  G.waveTimer = G.wave >= WAVES.length ? 2.4 : 1.5;
  addFeed('WAVE CLEARED', 'pale');
  addShake(0.25);
  if (G.player && !G.player.dead) {
    G.player.flasks = Math.min(3, G.player.flasks + 1);
    G.player.hp = Math.min(G.player.maxHp, G.player.hp + 18);
    G.player.gainRage(12);
    addText(G.player.x, G.player.y, 150, 'EMBER FLASK RESTORED', '#e8c47c', 11, 28);
  }
}

function showUpgrade() {
  G.state = 'upgrade';
  G.waveState = 'idle';
  setTouchVisible(false);
  ui.upgrade.classList.remove('is-hidden');
  ui.cards.innerHTML = '';
  const pool = UPGRADES.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  for (const up of pool.slice(0, 3)) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'card';
    card.innerHTML = '<div class="card-icon"><span>' + up.icon + '</span></div><h3>' + up.name + '</h3><p>' + up.desc + '</p><span class="card-tag">' + up.tag + '</span>';
    card.addEventListener('click', () => {
      up.apply(G.player);
      audio.ui();
      audio.heal();
      addFeed(up.name, 'pale');
      ui.upgrade.classList.add('is-hidden');
      G.state = 'playing';
      setTouchVisible(true);
      startWave(G.wave + 1);
    });
    ui.cards.appendChild(card);
  }
}

function showEnd(victory) {
  if (G.state === 'dead' || G.state === 'victory') return;
  G.state = victory ? 'victory' : 'dead';
  setTouchVisible(false);
  ui.warning.classList.add('is-hidden');
  ui.end.classList.remove('is-hidden');
  ui.endKicker.textContent = victory ? 'THE COURT IS SILENT' : 'YOU DIED';
  ui.endTitle.textContent = victory ? 'A CROWN OF ASHES' : 'THE COURT KEEPS YOU';
  ui.endCopy.textContent = victory ? 'The Hollow King is dust. The debt is paid.' : 'The cinders remember your name.';
  if (victory) {
    for (const s of G.souls) G.soulsCount += s.value;
    G.souls.length = 0;
    ui.boss.classList.add('is-hidden');
    audio.bossPhase();
  }
  ui.endWave.textContent = Math.max(1, G.wave);
  ui.endSouls.textContent = G.soulsCount;
  ui.endCombo.textContent = G.bestCombo;
}

function togglePause() {
  if (G.state === 'playing') {
    G.state = 'paused';
    ui.pause.classList.remove('is-hidden');
    setTouchVisible(false);
    input.keys.clear();
    input.touch.active = false;
    input.touch.x = 0;
    input.touch.y = 0;
    if (ui.knob) ui.knob.style.transform = '';
  } else if (G.state === 'paused') {
    G.state = 'playing';
    ui.pause.classList.add('is-hidden');
    setTouchVisible(true);
  }
}

function updateGameplay(dt) {
  if (!G.player) return;
  if (G.player.dead) {
    G.endTimer += dt;
    updateAmbient(dt * 0.35);
    if (G.endTimer > 1.65) showEnd(false);
    return;
  }
  processSpawns(dt);
  G.player.update(dt);
  for (const e of G.enemies) e.update(dt);
  separateEntities();
  for (let i = G.projectiles.length - 1; i >= 0; i--) {
    const p = G.projectiles[i];
    p.update(dt);
    if (p.dead) G.projectiles.splice(i, 1);
  }
  updateHazards(dt);
  updateSouls(dt);
  updateAmbient(dt);

  if (G.comboTimer > 0) {
    G.comboTimer -= dt;
    if (G.comboTimer <= 0) G.combo = 0;
  }

  if (G.waveState === 'fighting' && G.pendingSpawns.length === 0 && !G.enemies.some((e) => !e.dead)) waveCleared();

  if (G.waveState === 'cleared') {
    G.waveTimer -= dt;
    if (G.waveTimer <= 0) {
      if (G.wave >= WAVES.length) showEnd(true);
      else showUpgrade();
    }
  }

  if (G.boss && !G.boss.dead) {
    ui.bossFill.style.width = clamp((G.boss.hp / G.boss.maxHp) * 100, 0, 100) + '%';
    ui.bossPhase.textContent = G.boss.phase === 1 ? 'FIRST BREATH' : 'THE CROWN BREAKS';
    if (G.boss.state !== 'intro') ui.warning.classList.add('is-hidden');
  } else if (G.boss && G.boss.dead) {
    ui.bossFill.style.width = '0%';
    if (G.waveState === 'cleared') ui.boss.classList.add('is-hidden');
  }
}

function updateAmbient(dt) {
  if (Math.random() < dt * 10) {
    const b = pick(G.braziers);
    if (b) {
      addParticle(b.x + rand(16, -16), b.y + rand(16, -16), rand(100, 82), rand(18, -18), rand(18, -18), rand(80, 30), rand(1.2, 0.5), rand(3, 1), '#ffb15e', 'ember');
    }
  }
  if (Math.random() < dt * 3) {
    const a = rand(TAU);
    const r = rand(ARENA_R - 30, 60);
    addParticle(Math.cos(a) * r, Math.sin(a) * r, rand(70, 5), rand(8, -8), rand(8, -8), rand(40, 12), rand(2.2, 0.8), rand(2.5, 0.8), 'rgba(201, 148, 82, .55)', 'ember');
  }
  if (Math.random() < dt * 4 && G.player) {
    const a = rand(TAU);
    addParticle(G.player.x + Math.cos(a) * rand(48, 12), G.player.y + Math.sin(a) * rand(48, 12), rand(20, 1), rand(10, -10), rand(10, -10), rand(22, 5), rand(0.8, 0.35), rand(4, 1), 'rgba(110, 104, 94, .18)', 'dust');
  }
}

function updateCamera(dt) {
  if (G.state === 'title') {
    const t = G.realTime;
    G.camera.x = damp(G.camera.x, -245 + Math.sin(t * 0.13) * 18, 1.4, dt);
    G.camera.y = damp(G.camera.y, -26 + Math.cos(t * 0.11) * 10, 1.4, dt);
    G.camera.zoom = damp(G.camera.zoom, baseZoom() * 1.03, 1.8, dt);
  } else if (G.player) {
    const p = G.player;
    const proj = project(p.x + p.face.x * 24, p.y + p.face.y * 24, 0);
    const targetY = proj.y - (G.isTouch ? 36 : 28);
    G.camera.x = damp(G.camera.x, proj.x, 4.8, dt);
    G.camera.y = damp(G.camera.y, targetY, 4.8, dt);
    G.camera.zoom = damp(G.camera.zoom, baseZoom(), 3, dt);
  }
  G.camera.shake = Math.max(0, G.camera.shake - dt * 1.45);
  const s = G.camera.shake * G.camera.shake;
  G.camera.sx = rand(1, -1) * 26 * s;
  G.camera.sy = rand(1, -1) * 20 * s;
}

function updateUI() {
  if (!G.player) return;
  const p = G.player;
  ui.hpFill.style.width = clamp((p.hp / p.maxHp) * 100, 0, 100) + '%';
  ui.hpText.textContent = Math.ceil(p.hp) + ' / ' + p.maxHp;
  ui.stamFill.style.width = clamp((p.stam / p.maxStam) * 100, 0, 100) + '%';
  ui.rageFill.style.width = clamp((p.rage / 100) * 100, 0, 100) + '%';
  ui.flaskCount.textContent = p.flasks;
  ui.soulCount.textContent = G.soulsCount;
  ui.waveLabel.textContent = 'WAVE ' + roman[Math.max(1, G.wave)];
  if (G.combo >= 2) {
    ui.combo.classList.remove('is-hidden');
    ui.comboNum.textContent = G.combo;
  } else {
    ui.combo.classList.add('is-hidden');
  }
  ui.hurt.style.opacity = (G.damageFlash * 0.85).toFixed(3);
  if (G.boss) {
    if (!G.boss.dead) {
      ui.boss.classList.remove('is-hidden');
    } else if (G.waveState === 'cleared' || G.state === 'victory') {
      ui.boss.classList.add('is-hidden');
    }
  }
  if (!G.boss || G.boss.state !== 'intro') ui.warning.classList.add('is-hidden');
}

function render() {
  ctx = gameCtx;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, W, H);
  drawBackdrop();

  ctx.save();
  ctx.translate(W / 2 + G.camera.sx, H / 2 + G.camera.sy);
  ctx.scale(G.camera.zoom, G.camera.zoom);
  ctx.translate(-G.camera.x, -G.camera.y);

  drawArenaBase();
  drawDecals();
  drawEffects('under');
  drawTelegraphs();

  const use3D = isWorld3DReady();
  const list = [];
  for (const p of G.props) list.push(p);
  if (!use3D) {
    for (const e of G.enemies) list.push(e);
    if (G.player) list.push(G.player);
  }
  list.sort((a, b) => (a.x + a.y) - (b.x + b.y));

  for (const item of list) {
    if (item instanceof Player) drawPlayer(item);
    else if (item instanceof Enemy) drawEnemy(item);
    else drawProp(item);
  }
  ctx.restore();

  if (use3D) renderWorld3D();

  ctx = fxCtx;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.translate(W / 2 + G.camera.sx, H / 2 + G.camera.sy);
  ctx.scale(G.camera.zoom, G.camera.zoom);
  ctx.translate(-G.camera.x, -G.camera.y);

  if (use3D) {
    for (const e of G.enemies) {
      if (!e.dead && e.type !== 'boss' && e.hp < e.maxHp && e.spawnTime <= 0) {
        drawEnemyHealth(e, project(e.x, e.y, 0));
      }
    }
  }

  drawProjectiles();
  drawSouls();
  drawEffects('over');
  drawParticles();
  drawGlowLights();
  drawTexts();
  ctx.restore();
  ctx = gameCtx;
}

function update(dt) {
  G.realTime += dt;
  if (G.slowTimer > 0) {
    G.slowTimer -= dt;
    G.timeScale = 0.3;
  } else {
    G.timeScale = damp(G.timeScale, 1, 4.5, dt);
  }
  const sdt = dt * G.timeScale;
  G.time += sdt;
  G.damageFlash = Math.max(0, G.damageFlash - dt * 2.8);
  updateCamera(dt);

  if (G.hitstop > 0) {
    G.hitstop -= dt;
    updateParticles(dt * 0.18);
    updateEffects(dt * 0.18);
    updateTexts(dt * 0.18);
    updateDecals(dt * 0.18);
    updateUI();
    return;
  }

  if (G.state === 'playing') {
    updateGameplay(sdt);
  } else if (G.state === 'title') {
    updateAmbient(sdt);
  } else if (G.state === 'paused' || G.state === 'upgrade') {
    updateAmbient(sdt * 0.25);
  } else if (G.state === 'dead' || G.state === 'victory') {
    updateAmbient(sdt * 0.35);
  }

  updateParticles(sdt);
  updateEffects(sdt);
  updateTexts(sdt);
  updateDecals(sdt);
  updateUI();
}

let lastFrame = performance.now();
function frame(now) {
  const dt = Math.min((now - lastFrame) / 1000, 0.034);
  lastFrame = now;
  update(dt);
  render();
  requestAnimationFrame(frame);
}

function setupInput() {
  window.addEventListener('keydown', (ev) => {
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(ev.code)) ev.preventDefault();
    if (ev.code === 'Escape') {
      togglePause();
      return;
    }
    if ((G.state === 'dead' || G.state === 'victory') && ev.code === 'KeyR') {
      startRun();
      return;
    }
    input.keys.add(ev.code);
    if (G.state !== 'playing' || !G.player) return;
    if (ev.code === 'Space') G.player.dodge();
    else if (ev.code === 'KeyQ') G.player.ultimate();
    else if (ev.code === 'KeyE') G.player.useFlask();
  });
  window.addEventListener('keyup', (ev) => {
    input.keys.delete(ev.code);
  });
  window.addEventListener('blur', () => {
    input.keys.clear();
    input.leftDown = false;
    input.rightDown = false;
    if (G.player && G.player.state === 'heavy') G.player.releaseHeavy();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && G.state === 'playing') togglePause();
  });

  canvas.addEventListener('contextmenu', (ev) => ev.preventDefault());
  canvas.addEventListener('mousemove', (ev) => {
    input.mouse.x = ev.clientX;
    input.mouse.y = ev.clientY;
    input.mouse.active = true;
  });
  canvas.addEventListener('mousedown', (ev) => {
    if (G.state !== 'playing' || !G.player) return;
    if (ev.button === 0) {
      input.leftDown = true;
      G.player.startLight();
    } else if (ev.button === 2) {
      input.rightDown = true;
      G.player.startHeavy();
    }
  });
  window.addEventListener('mouseup', (ev) => {
    if (ev.button === 0) input.leftDown = false;
    if (ev.button === 2) {
      input.rightDown = false;
      if (G.player) G.player.releaseHeavy();
    }
  });

  ui.start.addEventListener('click', startRun);
  ui.retry.addEventListener('click', startRun);
  ui.mute.addEventListener('click', () => {
    audio.init();
    audio.setMuted(!audio.muted);
    ui.mute.classList.toggle('muted', audio.muted);
    audio.ui();
  });

  setupTouch();
}

function setupTouch() {
  if (!ui.stick) return;
  let stickPointer = null;
  let center = { x: 0, y: 0 };

  const moveStick = (ev) => {
    const dx = ev.clientX - center.x;
    const dy = ev.clientY - center.y;
    const len = Math.hypot(dx, dy);
    const max = 38;
    const nx = len > max ? (dx / len) * max : dx;
    const ny = len > max ? (dy / len) * max : dy;
    input.touch.x = nx / max;
    input.touch.y = ny / max;
    input.touch.active = true;
    ui.knob.style.transform = 'translate(' + nx + 'px, ' + ny + 'px)';
  };

  ui.stick.addEventListener('pointerdown', (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    stickPointer = ev.pointerId;
    ui.stick.setPointerCapture(ev.pointerId);
    const rect = ui.stick.getBoundingClientRect();
    center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    moveStick(ev);
  });
  ui.stick.addEventListener('pointermove', (ev) => {
    if (ev.pointerId !== stickPointer) return;
    ev.preventDefault();
    moveStick(ev);
  });
  const endStick = (ev) => {
    if (ev.pointerId !== stickPointer) return;
    stickPointer = null;
    input.touch.active = false;
    input.touch.x = 0;
    input.touch.y = 0;
    ui.knob.style.transform = '';
  };
  ui.stick.addEventListener('pointerup', endStick);
  ui.stick.addEventListener('pointercancel', endStick);
  ui.stick.addEventListener('pointerleave', (ev) => {
    if (stickPointer !== null && ev.pointerId === stickPointer && ev.buttons === 0) endStick(ev);
  });

  const buttons = document.querySelectorAll('.touch-btn');
  for (const btn of buttons) {
    const act = btn.dataset.act;
    if (act === 'heavy') {
      btn.addEventListener('pointerdown', (ev) => {
        ev.preventDefault();
        if (G.state === 'playing' && G.player) G.player.startHeavy();
      });
      btn.addEventListener('pointerup', (ev) => {
        ev.preventDefault();
        if (G.player) G.player.releaseHeavy();
      });
      btn.addEventListener('pointercancel', () => {
        if (G.player) G.player.releaseHeavy();
      });
    } else {
      btn.addEventListener('pointerdown', (ev) => {
        ev.preventDefault();
        if (G.state !== 'playing' || !G.player) return;
        if (act === 'light') G.player.startLight();
        else if (act === 'dodge') G.player.dodge();
        else if (act === 'ult') G.player.ultimate();
        else if (act === 'flask') G.player.useFlask();
      });
    }
  }
}

function initTitleScene() {
  G.player = new Player(0, 15);
  G.player.face = { x: 1, y: 0.2 };
  const h1 = new Enemy('husk', 185, -110);
  h1.spawnTime = 0;
  h1.state = 'chase';
  h1.face = { x: -0.8, y: 0.5 };
  h1.walkPhase = 1.2;
  const h2 = new Enemy('husk', 250, 65);
  h2.spawnTime = 0;
  h2.state = 'chase';
  h2.face = { x: -0.9, y: -0.2 };
  h2.walkPhase = 3.4;
  G.enemies.push(h1, h2);
  G.camera.x = -245;
  G.camera.y = -26;
  G.camera.zoom = baseZoom() * 1.03;
}

function init() {
  generateArena();
  initTitleScene();
  initWorld3D();
  setupInput();
  requestAnimationFrame(frame);
}

init();
