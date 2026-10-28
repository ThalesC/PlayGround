'use strict';

const ENEMY_DEFS = {
  husk: {
    hp: 74,
    speed: 104,
    r: 20,
    damage: 12,
    range: 84,
    windup: 0.5,
    recover: 0.52,
    cooldown: 1.0,
    poise: 26,
    souls: 12,
    height: 78,
    scale: 0.9
  },
  brute: {
    hp: 235,
    speed: 62,
    r: 34,
    damage: 22,
    range: 100,
    windup: 0.94,
    recover: 0.88,
    cooldown: 1.6,
    poise: 84,
    souls: 34,
    height: 112,
    scale: 1.26,
    slamRadius: 128
  },
  wraith: {
    hp: 98,
    speed: 86,
    r: 18,
    damage: 15,
    range: 330,
    windup: 0.8,
    recover: 0.76,
    cooldown: 1.9,
    poise: 20,
    souls: 20,
    height: 108,
    scale: 1
  }
};

class Enemy {
  constructor(type, x, y) {
    const def = ENEMY_DEFS[type];
    this.type = type;
    this.x = x;
    this.y = y;
    this.r = def.r;
    this.maxHp = def.hp;
    this.hp = def.hp;
    this.speed = def.speed;
    this.damage = def.damage;
    this.range = def.range;
    this.windup = def.windup;
    this.recover = def.recover;
    this.cooldown = def.cooldown;
    this.maxPoise = def.poise;
    this.poise = def.poise;
    this.soulValue = def.souls;
    this.height = def.height;
    this.scale = def.scale;
    this.slamRadius = def.slamRadius || 0;
    this.face = { x: 0, y: 1 };
    this.state = 'spawn';
    this.stateTime = 0;
    this.spawnTime = 0.7;
    this.cooldownTimer = rand(0.7, 0.2);
    this.staggerTime = 0;
    this.flash = 0;
    this.hitTimer = 0;
    this.dead = false;
    this.deathTime = 0;
    this.attackAngle = 0;
    this.targetX = x;
    this.targetY = y;
    this.kx = 0;
    this.ky = 0;
    this.walkPhase = rand(TAU);
    this.seed = rand(100);
    this.attackKind = '';
  }

  startWindup(kind = 'melee') {
    this.state = 'windup';
    this.stateTime = 0;
    this.attackKind = kind;
    this.attackAngle = Math.atan2(G.player.y - this.y, G.player.x - this.x);
    this.targetX = G.player.x;
    this.targetY = G.player.y;
    this.cooldownTimer = this.cooldown;
    if (this.type === 'wraith') {
      addEffect('pulse', { x: this.x, y: this.y, r: 24, life: 0.8, alpha: 0.2, color: 'rgba(118, 255, 212, ALPHA)', layer: 'under' });
    }
  }

  think(dt) {
    const p = G.player;
    if (!p || p.dead) return;
    const d = dist(this.x, this.y, p.x, p.y);
    const ang = Math.atan2(p.y - this.y, p.x - this.x);
    if (this.state !== 'windup') {
      this.face.x = Math.cos(ang);
      this.face.y = Math.sin(ang);
    }

    if (this.state === 'windup') {
      if (this.stateTime >= this.windup) {
        this.state = 'recover';
        this.stateTime = 0;
        this.executeAttack();
      }
      return;
    }
    if (this.state === 'recover') {
      if (this.stateTime >= this.recover) {
        this.state = 'chase';
        this.stateTime = 0;
      }
      return;
    }
    if (this.state !== 'chase') {
      this.state = 'chase';
      this.stateTime = 0;
    }

    if (this.type === 'wraith') {
      const want = d < 210 ? -1 : d > 320 ? 1 : 0;
      if (want !== 0) this.moveToward(p.x, p.y, this.speed * (want > 0 ? 1 : 0.85), dt);
      else {
        const side = Math.sin(G.time * 1.1 + this.seed) > 0 ? 1 : -1;
        this.x += Math.cos(ang + Math.PI / 2) * side * this.speed * 0.45 * dt;
        this.y += Math.sin(ang + Math.PI / 2) * side * this.speed * 0.45 * dt;
      }
      if (d < this.range && this.cooldownTimer <= 0) this.startWindup('ranged');
      return;
    }

    if (d > this.range * 0.82) this.moveToward(p.x, p.y, this.speed, dt);
    else if (this.type === 'brute') {
      this.x -= Math.cos(ang) * 12 * dt;
      this.y -= Math.sin(ang) * 12 * dt;
    }
    if (d < this.range + (this.type === 'brute' ? 18 : 8) && this.cooldownTimer <= 0) this.startWindup('melee');
  }

  moveToward(tx, ty, speed, dt) {
    const a = Math.atan2(ty - this.y, tx - this.x);
    this.x += Math.cos(a) * speed * dt;
    this.y += Math.sin(a) * speed * dt;
    this.walkPhase += dt * 9;
  }

  executeAttack() {
    const p = G.player;
    if (this.type === 'husk') {
      const d = dist(this.x, this.y, p.x, p.y);
      const ang = Math.atan2(p.y - this.y, p.x - this.x);
      addEffect('slash', {
        x: this.x,
        y: this.y,
        radius: this.range + 24,
        angle: this.attackAngle,
        arc: 1.7,
        life: 0.22,
        z: 54,
        width: 14,
        color: 'rgba(255, 96, 70, ALPHA)'
      });
      audio.swing(false);
      if (d < this.range + 32 && Math.abs(angleDiff(ang, this.attackAngle)) < 0.95) {
        p.takeDamage(this.damage, this.x, this.y, 'melee', this);
      } else {
        burst(this.x + Math.cos(this.attackAngle) * 50, this.y + Math.sin(this.attackAngle) * 50, 4, 8, 'rgba(100, 93, 82, .35)', 'dust', 90);
      }
    } else if (this.type === 'brute') {
      addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: this.slamRadius, life: 0.55, alpha: 0.65, color: 'rgba(255, 112, 66, ALPHA)', width: 6 });
      addEffect('ring', { x: this.x, y: this.y, r0: 12, r1: this.slamRadius * 0.55, life: 0.36, alpha: 0.5, color: 'rgba(255, 200, 130, ALPHA)', width: 3 });
      addDecal('crack', this.x, this.y, 50, '#08090b', 30);
      burst(this.x, this.y, 4, 28, 'rgba(96, 84, 70, .4)', 'dust', 240);
      burst(this.x, this.y, 12, 12, '#504b46', 'debris', 260);
      addShake(0.55);
      audio.hit(true);
      if (dist(this.x, this.y, p.x, p.y) < this.slamRadius + p.r) p.takeDamage(this.damage, this.x, this.y, 'slam', this);
    } else if (this.type === 'wraith') {
      const ang = Math.atan2(this.targetY - this.y, this.targetX - this.x);
      G.projectiles.push(new Projectile(this.x, this.y, 48, ang, this.damage));
      addEffect('pulse', { x: this.x, y: this.y, r: 30, life: 0.35, alpha: 0.3, color: 'rgba(118, 255, 212, ALPHA)' });
      audio.growl();
    }
  }

  hurt(amount, dir, heavy, source) {
    if (this.dead) return;
    this.hp -= amount;
    this.flash = 0.13;
    this.hitTimer = 0.09;
    this.poise -= amount * (heavy ? 2.1 : 1);
    this.kx += dir.x * (heavy ? 300 : 140);
    this.ky += dir.y * (heavy ? 300 : 140);
    if (this.poise <= 0) {
      this.poise = this.maxPoise;
      this.stagger(heavy ? 1.0 : 0.65);
    }
    if (this.hp <= 0) this.die();
  }

  stagger(duration) {
    if (this.dead) return;
    this.state = 'stagger';
    this.stateTime = 0;
    this.staggerTime = duration;
    this.attackKind = '';
    addText(this.x, this.y, 120 + this.r, 'STAGGER', '#f2d599', 14, 32);
    addEffect('ring', { x: this.x, y: this.y, r0: 12, r1: 56, life: 0.4, alpha: 0.35, color: 'rgba(255, 220, 160, ALPHA)', width: 2 });
    audio.metal();
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathTime = 0;
    this.state = 'dead';
    G.totalKills++;
    if (G.player && !G.player.dead) {
      G.player.gainRage(6);
      G.player.hp = Math.min(G.player.maxHp, G.player.hp + 1.5);
    }
    G.combo += 1;
    G.comboTimer = 2.2;
    G.bestCombo = Math.max(G.bestCombo, G.combo);
    const count = this.type === 'brute' ? 5 : 3;
    for (let i = 0; i < count; i++) {
      G.souls.push({
        x: this.x + rand(26, -26),
        y: this.y + rand(26, -26),
        z: rand(60, 10),
        value: Math.max(1, Math.round(this.soulValue / count)),
        life: 12,
        seed: rand(TAU)
      });
    }
    burst(this.x, this.y, 48, this.type === 'brute' ? 26 : 14, 'rgba(116, 20, 20, .9)', 'blood', 200);
    addDecal('blood', this.x, this.y, this.type === 'brute' ? 38 : 22, 'rgba(92, 12, 15, .38)', 18);
    addEffect('ring', { x: this.x, y: this.y, r0: 12, r1: 80, life: 0.55, alpha: 0.3, color: 'rgba(230, 170, 90, ALPHA)', width: 3 });
    addParticle(this.x, this.y, 50, 0, 0, 90, 0.6, 8, '#f4c779', 'soul');
    if (this.type === 'brute') {
      addShake(0.3);
      audio.hit(true);
    } else {
      audio.growl();
    }
  }

  applyMotion(dt) {
    this.x += this.kx * dt;
    this.y += this.ky * dt;
    this.kx *= 1 - 7 * dt;
    this.ky *= 1 - 7 * dt;
    const d = Math.hypot(this.x, this.y);
    const max = ARENA_R - 38;
    if (d > max) {
      this.x = (this.x / d) * max;
      this.y = (this.y / d) * max;
    }
  }

  update(dt) {
    if (this.dead) {
      this.deathTime += dt;
      this.kx *= 1 - 5 * dt;
      this.ky *= 1 - 5 * dt;
      this.x += this.kx * dt;
      this.y += this.ky * dt;
      return;
    }
    this.flash = Math.max(0, this.flash - dt);
    this.hitTimer = Math.max(0, this.hitTimer - dt);
    if (this.spawnTime > 0) {
      this.spawnTime -= dt;
      this.stateTime += dt;
      if (this.spawnTime <= 0) {
        this.state = 'chase';
        this.stateTime = 0;
      }
      return;
    }
    if (this.staggerTime > 0) {
      this.staggerTime -= dt;
      this.stateTime += dt;
      this.applyMotion(dt);
      if (this.staggerTime <= 0) {
        this.state = 'chase';
        this.stateTime = 0;
        this.cooldownTimer = 0.35;
      }
      return;
    }
    this.cooldownTimer -= dt;
    this.stateTime += dt;
    this.think(dt);
    this.applyMotion(dt);
  }
}

class Boss extends Enemy {
  constructor(x, y) {
    super('husk', x, y);
    this.type = 'boss';
    this.x = x;
    this.y = y;
    this.r = 54;
    this.maxHp = 1050;
    this.hp = this.maxHp;
    this.speed = 72;
    this.damage = 30;
    this.range = 170;
    this.windup = 0.9;
    this.recover = 1.0;
    this.cooldown = 1.3;
    this.maxPoise = 310;
    this.poise = this.maxPoise;
    this.soulValue = 420;
    this.height = 190;
    this.scale = 1.75;
    this.slamRadius = 175;
    this.state = 'intro';
    this.stateTime = 0;
    this.spawnTime = 0;
    this.phase = 1;
    this.chargeTimer = 0;
    this.chargeDir = { x: 0, y: 1 };
    this.chargeHit = false;
    this.summoned1 = false;
    this.summoned2 = false;
    this.pattern = 0;
  }

  startWindup(kind) {
    this.attackKind = kind;
    this.state = 'windup';
    this.stateTime = 0;
    this.attackAngle = Math.atan2(G.player.y - this.y, G.player.x - this.x);
    this.targetX = G.player.x;
    this.targetY = G.player.y;
    this.cooldownTimer = this.cooldown;
    if (kind === 'slam') this.windup = 1.0;
    else if (kind === 'cleave') this.windup = 0.72;
    else if (kind === 'charge') this.windup = 0.88;
    else if (kind === 'shockwave') this.windup = 1.05;
    else this.windup = 0.8;
    if (kind === 'charge') {
      this.chargeDir.x = Math.cos(this.attackAngle);
      this.chargeDir.y = Math.sin(this.attackAngle);
    }
  }

  choosePattern() {
    if (this.hp < this.maxHp * 0.62 && !this.summoned1) {
      this.summoned1 = true;
      return 'summon';
    }
    if (this.hp < this.maxHp * 0.32 && !this.summoned2) {
      this.summoned2 = true;
      return 'summon';
    }
    if (this.phase === 2 && Math.random() < 0.22) return 'shockwave';
    const d = dist(this.x, this.y, G.player.x, G.player.y);
    if (d > 260 && Math.random() < 0.55) return 'charge';
    this.pattern = (this.pattern + 1) % 3;
    return this.pattern === 0 ? 'cleave' : this.pattern === 1 ? 'slam' : 'charge';
  }

  think(dt) {
    const p = G.player;
    if (!p || p.dead) return;
    const d = dist(this.x, this.y, p.x, p.y);
    const ang = Math.atan2(p.y - this.y, p.x - this.x);
    this.face.x = Math.cos(ang);
    this.face.y = Math.sin(ang);

    if (this.phase === 1 && this.hp < this.maxHp * 0.5) {
      this.phase = 2;
      this.speed = 88;
      this.damage = 34;
      audio.bossPhase();
      addFeed('THE KING REMEMBERS', 'danger');
      addShake(1);
      addEffect('flash', { life: 0.4, alpha: 0.25, color: 'rgba(255, 88, 50, ALPHA)' });
      addEffect('ring', { x: this.x, y: this.y, r0: 30, r1: 360, life: 1.2, alpha: 0.55, color: 'rgba(255, 82, 48, ALPHA)', width: 7 });
    }

    if (this.state === 'intro') {
      if (this.stateTime > 1.5) {
        this.state = 'chase';
        this.stateTime = 0;
        ui.warning.classList.add('is-hidden');
      }
      return;
    }
    if (this.state === 'windup') {
      if (this.stateTime >= this.windup) {
        this.state = 'recover';
        this.stateTime = 0;
        this.executeAttack();
      }
      return;
    }
    if (this.state === 'charge') {
      this.chargeTimer -= dt;
      this.x += this.chargeDir.x * 620 * dt;
      this.y += this.chargeDir.y * 620 * dt;
      addParticle(this.x, this.y, 20, rand(80, -80), rand(80, -80), rand(80, 10), 0.5, 16, 'rgba(255, 90, 48, .3)', 'dust');
      if (!this.chargeHit && d < this.r + p.r + 18) {
        this.chargeHit = true;
        p.takeDamage(28, this.x, this.y, 'charge', this);
        addShake(0.8);
      }
      if (this.chargeTimer <= 0) {
        this.state = 'recover';
        this.stateTime = 0;
        this.recover = 0.75;
      }
      return;
    }
    if (this.state === 'recover') {
      if (this.stateTime >= this.recover) {
        this.state = 'chase';
        this.stateTime = 0;
      }
      return;
    }
    if (this.state !== 'chase') {
      this.state = 'chase';
      this.stateTime = 0;
    }
    if (d > 190) this.moveToward(p.x, p.y, this.speed, dt);
    else {
      this.x -= Math.cos(ang) * 18 * dt;
      this.y -= Math.sin(ang) * 18 * dt;
    }
    if (this.cooldownTimer <= 0 && d < 300) this.startWindup(this.choosePattern());
  }

  executeAttack() {
    const p = G.player;
    const kind = this.attackKind;
    if (kind === 'slam') {
      addEffect('ring', { x: this.targetX, y: this.targetY, r0: 24, r1: this.slamRadius, life: 0.7, alpha: 0.8, color: 'rgba(255, 94, 52, ALPHA)', width: 8 });
      addEffect('ring', { x: this.targetX, y: this.targetY, r0: 14, r1: this.slamRadius * 0.55, life: 0.48, alpha: 0.7, color: 'rgba(255, 214, 150, ALPHA)', width: 4 });
      addDecal('crack', this.targetX, this.targetY, 80, '#08090b', 36);
      burst(this.targetX, this.targetY, 4, 38, 'rgba(100, 84, 68, .42)', 'dust', 280);
      burst(this.targetX, this.targetY, 12, 16, '#4c4843', 'debris', 300);
      addShake(0.95);
      audio.hit(true);
      if (dist(this.targetX, this.targetY, p.x, p.y) < this.slamRadius + p.r) p.takeDamage(this.damage, this.targetX, this.targetY, 'slam', this);
      this.recover = 1.0;
    } else if (kind === 'cleave') {
      addEffect('slash', {
        x: this.x,
        y: this.y,
        radius: 225,
        angle: this.attackAngle,
        arc: 2.2,
        life: 0.34,
        z: 78,
        width: 42,
        color: 'rgba(255, 96, 54, ALPHA)'
      });
      audio.swing(true);
      const pd = dist(this.x, this.y, p.x, p.y);
      const pa = Math.atan2(p.y - this.y, p.x - this.x);
      if (pd < 235 && Math.abs(angleDiff(pa, this.attackAngle)) < 1.15) p.takeDamage(this.damage, this.x, this.y, 'cleave', this);
      addShake(0.5);
      this.recover = 0.9;
    } else if (kind === 'charge') {
      this.state = 'charge';
      this.stateTime = 0;
      this.chargeTimer = 0.52;
      this.chargeHit = false;
      audio.growl();
      addShake(0.35);
      this.recover = 0.8;
    } else if (kind === 'shockwave') {
      G.hazards.push({ x: this.x, y: this.y, r: 26, maxR: 470, speed: 350, damage: 25, hit: false });
      G.hazards.push({ x: this.x, y: this.y, r: 8, maxR: 360, speed: 250, damage: 18, hit: false });
      addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: 470, life: 0.9, alpha: 0.5, color: 'rgba(255, 88, 50, ALPHA)', width: 6 });
      addShake(0.75);
      audio.roar();
      this.recover = 1.0;
    } else if (kind === 'summon') {
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * TAU + rand(0.5);
        const x = this.x + Math.cos(a) * 120;
        const y = this.y + Math.sin(a) * 120;
        spawnEnemy('husk', x, y, 0.4);
        addEffect('ring', { x, y, r0: 8, r1: 52, life: 0.6, alpha: 0.4, color: 'rgba(200, 74, 42, ALPHA)', width: 3 });
      }
      addFeed('RISE', 'danger');
      addShake(0.5);
      audio.roar();
      this.recover = 0.8;
    }
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathTime = 0;
    this.state = 'dead';
    G.totalKills++;
    G.combo += 4;
    G.comboTimer = 3;
    G.bestCombo = Math.max(G.bestCombo, G.combo);
    G.player.gainRage(30);
    addSlowmo(1.6, 0.22);
    addShake(1.4);
    audio.roar();
    audio.death();
    addFeed('THE KING FALLS', 'pale');
    addEffect('flash', { life: 0.7, alpha: 0.35, color: 'rgba(255, 180, 110, ALPHA)' });
    addEffect('ring', { x: this.x, y: this.y, r0: 20, r1: 620, life: 1.4, alpha: 0.8, color: 'rgba(255, 150, 80, ALPHA)', width: 10 });
    addEffect('ring', { x: this.x, y: this.y, r0: 10, r1: 420, life: 1.0, alpha: 0.7, color: 'rgba(255, 238, 200, ALPHA)', width: 5 });
    addDecal('crack', this.x, this.y, 110, '#08090b', 40);
    burst(this.x, this.y, 60, 70, '#ffb05e', 'spark', 520);
    burst(this.x, this.y, 40, 40, 'rgba(120, 22, 22, .9)', 'blood', 300);
    for (let i = 0; i < 14; i++) {
      G.souls.push({ x: this.x + rand(90, -90), y: this.y + rand(90, -90), z: rand(100, 20), value: 30, life: 18, seed: rand(TAU) });
    }
  }
}

class Projectile {
  constructor(x, y, z, angle, damage) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.vx = Math.cos(angle) * 360;
    this.vy = Math.sin(angle) * 360;
    this.radius = 12;
    this.damage = damage;
    this.life = 2.4;
    this.dead = false;
    this.color = 'rgba(118, 255, 212, .8)';
    this.seed = rand(TAU);
  }

  update(dt) {
    if (this.dead) return;
    this.life -= dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.z += Math.sin(G.time * 12 + this.seed) * 10 * dt;
    if (Math.random() < dt * 50) {
      addParticle(this.x, this.y, this.z, rand(40, -40), rand(40, -40), rand(30, -10), rand(0.45, 0.15), rand(4, 1.5), '#8ff2d4', 'spark');
    }
    const p = G.player;
    if (p && !p.dead && dist(this.x, this.y, p.x, p.y) < this.radius + p.r) {
      p.takeDamage(this.damage, this.x, this.y, 'projectile', this);
      burst(this.x, this.y, this.z, 14, '#8ff2d4', 'spark', 220);
      this.dead = true;
    }
    if (this.life <= 0 || Math.hypot(this.x, this.y) > ARENA_R) this.dead = true;
  }
}

function spawnEnemy(type, x, y, delay = 0) {
  G.pendingSpawns.push({ type, x, y, t: delay });
}
