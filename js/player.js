'use strict';

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 22;
    this.face = { x: 0.7, y: 0.7 };
    this.maxHp = 120;
    this.hp = this.maxHp;
    this.maxStam = 100;
    this.stam = this.maxStam;
    this.rage = 0;
    this.flasks = 3;
    this.speed = 248;
    this.state = 'idle';
    this.stateTime = 0;
    this.walkPhase = 0;
    this.moving = false;
    this.attack = null;
    this.lightChain = -1;
    this.lightChainTimer = 0;
    this.dodgeTimer = 0;
    this.dodgeDir = { x: 1, y: 0 };
    this.invuln = 0;
    this.guard = false;
    this.guardTime = 0;
    this.guardBroken = 0;
    this.stamDelay = 0;
    this.flaskCooldown = 0;
    this.hurtTime = 0;
    this.heavyCharge = 0;
    this.dead = false;
    this.deadTimer = 0;
    this.footTimer = 0;
    this.damageMult = 1;
    this.heavyRadiusMult = 1;
    this.lifesteal = 0;
    this.dodgeCostMult = 1;
    this.parryBonus = 0;
    this.trailTimer = 0;
  }

  aim() {
    return aimDirection();
  }

  faceAim() {
    const a = this.aim();
    this.face.x = a.x;
    this.face.y = a.y;
    return a;
  }

  startLight() {
    if (this.dead) return;
    if (this.state === 'attack' && this.attack && this.attack.type === 'light') {
      if (this.attack.time > this.attack.duration * 0.26) this.attack.queued = true;
      return;
    }
    if (this.state === 'dodge' || this.state === 'heavy') return;
    if (this.state === 'attack' && this.attack && this.attack.type !== 'light') return;
    const cost = 8;
    if (this.stam < cost) {
      addText(this.x, this.y, 122, 'EXHAUSTED', '#a99f8d', 11, 20);
      return;
    }
    this.lightChain = this.lightChainTimer > 0 ? (this.lightChain + 1) % 3 : 0;
    this.lightChainTimer = 0.64;
    this.stam -= cost;
    this.stamDelay = 0.55;
    const dir = this.faceAim();
    const combos = [
      { duration: 0.42, hitTime: 0.17, damage: 19, radius: 92, arc: 1.72, lunge: 92 },
      { duration: 0.46, hitTime: 0.19, damage: 24, radius: 100, arc: 1.9, lunge: 118 },
      { duration: 0.62, hitTime: 0.28, damage: 37, radius: 118, arc: 2.35, lunge: 150 }
    ];
    const c = combos[this.lightChain];
    this.state = 'attack';
    this.stateTime = 0;
    this.attack = {
      type: 'light',
      combo: this.lightChain,
      time: 0,
      duration: c.duration,
      hitTime: c.hitTime,
      damage: c.damage,
      radius: c.radius,
      arc: c.arc,
      lunge: c.lunge,
      dir,
      hitDone: false,
      queued: false
    };
    audio.swing(false);
  }

  startHeavy() {
    if (this.dead) return;
    if (this.state === 'attack' || this.state === 'dodge' || this.state === 'heavy') return;
    if (this.stam < 26) {
      addText(this.x, this.y, 122, 'EXHAUSTED', '#a99f8d', 11, 20);
      return;
    }
    this.state = 'heavy';
    this.stateTime = 0;
    this.heavyCharge = 0;
    this.guard = false;
    this.faceAim();
  }

  releaseHeavy() {
    if (this.state !== 'heavy') return;
    const ratio = clamp(this.heavyCharge / 1.0, 0, 1);
    this.stam = Math.max(0, this.stam - (26 + ratio * 10));
    this.stamDelay = 0.7;
    const dir = this.faceAim();
    this.state = 'attack';
    this.stateTime = 0;
    this.attack = {
      type: 'heavy',
      time: 0,
      duration: 0.94,
      hitTime: 0.46,
      damage: (48 + ratio * 44) * this.damageMult,
      radius: (118 + ratio * 54) * this.heavyRadiusMult,
      arc: 2.55,
      lunge: 176 + ratio * 58,
      dir,
      ratio,
      hitDone: false,
      queued: false
    };
    audio.swing(true);
    addShake(0.18 + ratio * 0.12);
  }

  dodge() {
    if (this.dead || this.state === 'dodge') return;
    if (this.state === 'attack' && this.attack && this.attack.type === 'ult') return;
    const cost = 22 * this.dodgeCostMult;
    if (this.stam < cost) {
      addText(this.x, this.y, 122, 'EXHAUSTED', '#a99f8d', 11, 20);
      return;
    }
    const mv = moveVector();
    const dir = mv.active ? mv : this.face;
    this.state = 'dodge';
    this.stateTime = 0;
    this.attack = null;
    this.heavyCharge = 0;
    this.dodgeTimer = 0.31;
    this.dodgeDir = { x: dir.x, y: dir.y };
    this.invuln = 0.34;
    this.stam -= cost;
    this.stamDelay = 0.65;
    this.guard = false;
    audio.dodge();
    for (let i = 0; i < 8; i++) {
      addParticle(this.x + rand(20, -20), this.y + rand(20, -20), rand(26, 2), rand(70, -70), rand(70, -70), rand(45, 10), rand(0.5, 0.2), rand(7, 2), 'rgba(129, 126, 114, .4)', 'dust');
    }
  }

  useFlask() {
    if (this.dead || this.flasks <= 0 || this.flaskCooldown > 0) return;
    if (this.state === 'attack' || this.state === 'dodge') return;
    this.flasks--;
    this.flaskCooldown = 1.15;
    const heal = 42;
    this.hp = Math.min(this.maxHp, this.hp + heal);
    audio.heal();
    addFeed('EMBER FLASK', 'pale');
    addText(this.x, this.y, 138, '+' + heal, '#9fd6a7', 17, 50);
    addEffect('pulse', { x: this.x, y: this.y, r: 42, life: 0.55, alpha: 0.22, color: 'rgba(120, 220, 150, ALPHA)', layer: 'under' });
    for (let i = 0; i < 16; i++) {
      const a = rand(TAU);
      addParticle(this.x + Math.cos(a) * rand(22, 2), this.y + Math.sin(a) * rand(22, 2), rand(85, 4), Math.cos(a) * 22, Math.sin(a) * 22, rand(100, 35), rand(0.8, 0.4), rand(4, 1.5), '#8fe0a6', 'ember');
    }
  }

  ultimate() {
    if (this.dead || this.rage < 100) return;
    if (this.state === 'attack' || this.state === 'dodge') return;
    this.rage = 0;
    this.state = 'attack';
    this.stateTime = 0;
    this.attack = {
      type: 'ult',
      time: 0,
      duration: 1.12,
      hitTime: 0.5,
      damage: 105 * this.damageMult,
      radius: 310,
      arc: TAU,
      lunge: 0,
      dir: this.faceAim(),
      hitDone: false,
      queued: false
    };
    this.invuln = Math.max(this.invuln, 0.7);
    audio.ult();
    addFeed('WRATH UNLEASHED', 'danger');
    addShake(0.8);
    addSlowmo(0.48, 0.34);
  }

  takeDamage(amount, sourceX, sourceY, type = 'melee', source = null) {
    if (this.dead) return;
    if (this.invuln > 0) {
      addText(this.x, this.y, 126, 'DODGED', '#a9c6c0', 12, 25);
      return;
    }
    if (this.guard && this.guardBroken <= 0) {
      const toSource = Math.atan2(sourceY - this.y, sourceX - this.x);
      const facing = Math.atan2(this.face.y, this.face.x);
      if (Math.abs(angleDiff(toSource, facing)) < 1.25) {
        if (this.guardTime < 0.22) {
          this.rage = Math.min(100, this.rage + 16 + this.parryBonus);
          audio.parry();
          addShake(0.5);
          G.hitstop = Math.max(G.hitstop, 0.09);
          addFeed('PERFECT PARRY', 'pale');
          addText(this.x, this.y, 142, 'PARRY', '#f7e4b2', 21, 58);
          addEffect('ring', { x: this.x, y: this.y, r0: 28, r1: 120, life: 0.42, alpha: 0.8, color: 'rgba(255, 224, 150, ALPHA)', width: 4 });
          addEffect('flash', { life: 0.16, alpha: 0.2, color: 'rgba(255, 225, 170, ALPHA)' });
          for (let i = 0; i < 22; i++) {
            const a = rand(TAU);
            addParticle(this.x + Math.cos(a) * 26, this.y + Math.sin(a) * 26, rand(95, 30), Math.cos(a) * rand(300, 80), Math.sin(a) * rand(300, 80), rand(160, 20), rand(0.45, 0.18), rand(5, 2), '#ffe0a0', 'spark');
          }
          if (source) source.stagger(1.3);
          return;
        }
        const cost = amount * 2.15;
        if (this.stam >= cost) {
          this.stam -= cost;
          this.stamDelay = 0.7;
          amount *= 0.16;
          audio.metal();
          addShake(0.22);
          addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: 56, life: 0.24, alpha: 0.35, color: 'rgba(200, 220, 235, ALPHA)', width: 3 });
        } else {
          this.stam = 0;
          this.guardBroken = 0.8;
          amount *= 0.55;
          addFeed('GUARD BROKEN', 'danger');
          audio.metal();
        }
      }
    }
    amount = Math.max(1, amount);
    this.hp -= amount;
    this.hurtTime = 0.24;
    G.damageFlash = 1;
    addShake(0.58);
    audio.hurt();
    addText(this.x, this.y, 128, '-' + Math.round(amount), '#ff7b64', 18, 40);
    burst(this.x, this.y, 55, 14, 'rgba(135, 22, 22, .85)', 'blood', 150);
    addDecal('blood', this.x, this.y, 18, 'rgba(96, 15, 18, .4)', 12);
    if (this.hp <= 0) {
      this.hp = 0;
      this.die();
    }
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.state = 'dead';
    this.deadTimer = 0;
    audio.death();
    addSlowmo(1.2, 0.28);
    addShake(1);
    addFeed('YOU DIED', 'danger');
    burst(this.x, this.y, 70, 38, 'rgba(126, 24, 24, .9)', 'blood', 260);
    addDecal('blood', this.x, this.y, 46, 'rgba(90, 12, 16, .48)', 30);
    addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: 230, life: 1.1, alpha: 0.35, color: 'rgba(190, 50, 36, ALPHA)', width: 6 });
  }

  gainRage(amount) {
    this.rage = Math.min(100, this.rage + amount);
  }

  update(dt) {
    if (this.dead) {
      this.deadTimer += dt;
      return;
    }
    this.stateTime += dt;
    this.invuln = Math.max(0, this.invuln - dt);
    this.stamDelay = Math.max(0, this.stamDelay - dt);
    this.flaskCooldown = Math.max(0, this.flaskCooldown - dt);
    this.hurtTime = Math.max(0, this.hurtTime - dt);
    this.guardBroken = Math.max(0, this.guardBroken - dt);
    this.lightChainTimer = Math.max(0, this.lightChainTimer - dt);
    if (this.lightChainTimer <= 0) this.lightChain = -1;

    const aim = this.faceAim();
    if (this.state === 'dodge') {
      this.dodgeTimer -= dt;
      this.x += this.dodgeDir.x * 760 * dt;
      this.y += this.dodgeDir.y * 760 * dt;
      this.trailTimer -= dt;
      if (this.trailTimer <= 0) {
        this.trailTimer = 0.045;
        addParticle(this.x, this.y, 28, rand(35, -35), rand(35, -35), 12, 0.35, 10, 'rgba(140, 136, 122, .3)', 'dust');
      }
      if (this.dodgeTimer <= 0) {
        this.state = 'idle';
        this.stateTime = 0;
      }
      this.clampArena();
      return;
    }

    if (this.state === 'attack') {
      this.updateAttack(dt);
      this.clampArena();
      return;
    }

    if (this.state === 'heavy') {
      this.heavyCharge = Math.min(1.25, this.heavyCharge + dt);
      if (Math.random() < dt * 36) {
        const a = rand(TAU);
        addParticle(this.x + Math.cos(a) * rand(26, 4), this.y + Math.sin(a) * rand(26, 4), rand(95, 35), Math.cos(a) * 14, Math.sin(a) * 14, rand(80, 20), rand(0.5, 0.2), rand(4, 1), '#ffb15e', 'ember');
      }
      const mv = moveVector();
      if (mv.active) {
        this.x += mv.x * this.speed * 0.28 * dt;
        this.y += mv.y * this.speed * 0.28 * dt;
        this.moving = true;
      } else {
        this.moving = false;
      }
      this.clampArena();
      return;
    }

    this.guard = (input.keys.has('ShiftLeft') || input.keys.has('ShiftRight')) && this.stam > 2 && this.guardBroken <= 0;
    if (this.guard) {
      this.guardTime += dt;
      this.stam = Math.max(0, this.stam - 4 * dt);
      this.stamDelay = 0.2;
    } else {
      this.guardTime = 0;
    }

    const mv = moveVector();
    this.moving = mv.active;
    if (mv.active) {
      let speed = this.speed;
      if (this.guard) speed *= 0.44;
      this.x += mv.x * speed * dt;
      this.y += mv.y * speed * dt;
      this.walkPhase += dt * (this.guard ? 7 : 12) * mv.intensity;
      this.footTimer -= dt;
      if (this.footTimer <= 0) {
        this.footTimer = this.guard ? 0.34 : 0.25;
        addParticle(this.x + rand(14, -14), this.y + rand(14, -14), 2, rand(18, -18), rand(18, -18), rand(22, 4), rand(0.55, 0.3), rand(6, 2), 'rgba(115, 108, 96, .2)', 'dust');
      }
    } else {
      this.walkPhase += dt * 1.5;
    }

    if (!this.guard && this.stamDelay <= 0) this.stam = Math.min(this.maxStam, this.stam + 24 * dt);
    if (this.state === 'idle') this.stateTime += dt;
    this.clampArena();
  }

  updateAttack(dt) {
    const a = this.attack;
    a.time += dt;
    if (a.time < a.hitTime) {
      const move = a.lunge * (dt / a.hitTime);
      this.x += a.dir.x * move;
      this.y += a.dir.y * move;
    }
    if (a.time >= a.hitTime && !a.hitDone) {
      a.hitDone = true;
      this.performHit(a);
    }
    if (a.time >= a.duration) {
      this.state = 'idle';
      this.stateTime = 0;
      this.attack = null;
      if (a.type === 'light' && a.queued) this.startLight();
    }
  }

  performHit(a) {
    const angle = Math.atan2(a.dir.y, a.dir.x);
    const heavy = a.type !== 'light';
    let hits = 0;
    let hitX = this.x + a.dir.x * a.radius * 0.5;
    let hitY = this.y + a.dir.y * a.radius * 0.5;
    for (const e of G.enemies) {
      if (e.dead || e.spawnTime > 0) continue;
      const d = dist(this.x, this.y, e.x, e.y);
      if (d > a.radius + e.r) continue;
      if (a.arc < TAU - 0.01) {
        const ea = Math.atan2(e.y - this.y, e.x - this.x);
        if (Math.abs(angleDiff(ea, angle)) > a.arc / 2) continue;
      }
      hits++;
      hitX = e.x;
      hitY = e.y;
      e.hurt(a.damage, a.dir, heavy, this);
      if (this.lifesteal > 0) this.hp = Math.min(this.maxHp, this.hp + this.lifesteal);
      const color = e.type === 'brute' ? '#ffbd73' : e.type === 'wraith' ? '#8ff2d4' : '#ff8861';
      addText(e.x, e.y, 100 + e.r, Math.round(a.damage), color, heavy ? 24 : 17, 48);
      burst(e.x, e.y, 55 + e.r, heavy ? 24 : 11, color, 'spark', heavy ? 280 : 180);
      if (e.type !== 'wraith') burst(e.x, e.y, 45, heavy ? 15 : 7, 'rgba(124, 20, 20, .9)', 'blood', 170);
      addDecal('blood', e.x, e.y, heavy ? 28 : 15, 'rgba(91, 13, 15, .32)', 14);
    }
    if (hits > 0) {
      G.combo += hits;
      G.comboTimer = 2.2;
      G.bestCombo = Math.max(G.bestCombo, G.combo);
      this.gainRage(3 + hits);
      G.hitstop = Math.max(G.hitstop, heavy ? 0.105 : 0.052);
      addShake(heavy ? 0.72 : 0.28);
      audio.hit(heavy);
      if (heavy) {
        addEffect('ring', { x: hitX, y: hitY, r0: 18, r1: a.radius * 0.8, life: 0.46, alpha: 0.55, color: 'rgba(255, 170, 96, ALPHA)', width: 5 });
        addEffect('ring', { x: hitX, y: hitY, r0: 10, r1: a.radius * 0.42, life: 0.3, alpha: 0.7, color: 'rgba(255, 236, 190, ALPHA)', width: 3 });
        addDecal('crack', hitX, hitY, 46, '#08090b', 30);
        burst(hitX, hitY, 6, 22, 'rgba(94, 84, 70, .45)', 'dust', 150);
        burst(hitX, hitY, 10, 10, '#4b4a48', 'debris', 220);
        G.damageFlash = 0.35;
      }
    } else if (heavy) {
      addShake(0.2);
      addEffect('ring', { x: this.x + a.dir.x * 60, y: this.y + a.dir.y * 60, r0: 12, r1: 76, life: 0.35, alpha: 0.25, color: 'rgba(255, 170, 96, ALPHA)', width: 3 });
      addDecal('crack', this.x + a.dir.x * 80, this.y + a.dir.y * 80, 30, '#08090b', 24);
    }

    if (a.type === 'ult') {
      addShake(1.1);
      addSlowmo(0.55, 0.32);
      audio.ult();
      addEffect('flash', { life: 0.28, alpha: 0.32, color: 'rgba(255, 198, 120, ALPHA)' });
      addEffect('ring', { x: this.x, y: this.y, r0: 40, r1: a.radius, life: 0.9, alpha: 0.85, color: 'rgba(255, 170, 92, ALPHA)', width: 9 });
      addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: a.radius * 0.65, life: 0.65, alpha: 0.75, color: 'rgba(255, 235, 190, ALPHA)', width: 5 });
      addEffect('ring', { x: this.x, y: this.y, r0: 15, r1: a.radius * 0.32, life: 0.45, alpha: 0.9, color: 'rgba(255, 255, 235, ALPHA)', width: 3 });
      for (let i = 0; i < 5; i++) addDecal('crack', this.x + rand(180, -180), this.y + rand(180, -180), rand(60, 22), '#08090b', 34);
      burst(this.x, this.y, 30, 50, '#ffb05e', 'spark', 520);
      burst(this.x, this.y, 20, 28, 'rgba(110, 96, 76, .42)', 'dust', 310);
      this.hp = Math.min(this.maxHp, this.hp + 18);
    } else {
      addEffect('slash', {
        x: this.x,
        y: this.y,
        radius: a.radius * 0.82,
        angle,
        arc: a.arc,
        life: 0.24,
        z: 62,
        width: heavy ? 30 : 20,
        color: heavy ? 'rgba(255, 184, 102, ALPHA)' : 'rgba(255, 218, 162, ALPHA)'
      });
    }
    this.attackSource = null;
  }

  clampArena() {
    const d = Math.hypot(this.x, this.y);
    const max = ARENA_R - 42;
    if (d > max) {
      this.x = (this.x / d) * max;
      this.y = (this.y / d) * max;
    }
  }
}
