import * as THREE from 'three';
import { CONFIG } from './config.js';
import { clamp, lerp, pointInSector, turnToward, yawTo } from './util.js';

function mat(color, extra = {}) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra });
}

function addMesh(parent, geo, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function sectorGeometry(radius, halfArc, segments = 22) {
  const pos = [0, 0, 0];
  const idx = [];
  for (let i = 0; i <= segments; i++) {
    const a = -halfArc + (i / segments) * halfArc * 2;
    pos.push(Math.sin(a) * radius, 0, Math.cos(a) * radius);
    if (i > 0) idx.push(0, i, i + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function tellMaterial(color = 0xffb45d) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
}

function makeTell(kind, radius, halfArc) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(
    kind === 'circle' ? new THREE.CircleGeometry(radius, 30) : sectorGeometry(radius, halfArc),
    tellMaterial()
  );
  m.rotation.x = kind === 'circle' ? -Math.PI / 2 : 0;
  m.position.y = 0.035;
  g.add(m);
  g.visible = false;
  return { group: g, mesh: m };
}

class Enemy {
  constructor(game, def, encounter) {
    this.game = game;
    this.def = def;
    this.encounter = encounter;
    this.type = def.type;
    this.cfg = CONFIG.ordinaryEnemies[def.type];
    this.name = this.cfg.name;
    this.radius = this.cfg.radius;
    this.height = this.cfg.height;
    this.maxHealth = this.cfg.health;
    this.health = this.maxHealth;
    this.home = { x: def.x, z: def.z };
    this.position = new THREE.Vector3(def.x, game.world.groundHeight(def.x, def.z), def.z);
    this.facing = 0;
    this.alive = true;
    this.engaged = false;
    this.state = 'idle';
    this.stateTime = 0;
    this.attackCounter = 0;
    this.attack = null;
    this.hitPlayer = false;
    this.staggerResistantUntil = -1;
    this.flash = 0;
    this.idlePhase = Math.random() * Math.PI * 2;
    this.deathTime = 0;
    this.hasToken = false;
    this._buildVisual();
    this.reset();
  }

  _buildVisual() {
    this.root = new THREE.Group();
    this.root.name = this.name;
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.materials = [];
    if (this.type === 'briarling') this._buildBriarling();
    else this._buildMossguard();
    this.game.scene.add(this.root);
    this.tells = {};
    if (this.type === 'briarling') {
      this.tells.lunge = makeTell('sector', this.cfg.attack.reach, this.cfg.attack.halfArc);
    } else {
      this.tells.sweep = makeTell('sector', this.cfg.attack.reach, this.cfg.attack.halfArc);
    }
    for (const key of Object.keys(this.tells)) this.game.scene.add(this.tells[key].group);
  }

  _buildBriarling() {
    const rootMat = mat(0x4c3a2b);
    const barkMat = mat(0x654b32);
    const thornMat = mat(0x3a3428);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffc766 });
    this.materials.push(rootMat, barkMat, thornMat);
    const body = addMesh(this.body, new THREE.IcosahedronGeometry(0.46, 0), rootMat, 0, 0.58, 0);
    body.scale.set(1.0, 0.82, 1.2);
    this.core = body;
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const spike = addMesh(this.body, new THREE.ConeGeometry(0.09, 0.45, 4), thornMat, Math.sin(a) * 0.38, 0.68 + (i % 2) * 0.12, Math.cos(a) * 0.42);
      spike.rotation.z = Math.cos(a) * 0.8;
      spike.rotation.x = -Math.sin(a) * 0.8;
    }
    for (const side of [-1, 1]) {
      const eye = addMesh(this.body, new THREE.IcosahedronGeometry(0.055, 0), eyeMat, side * 0.14, 0.66, 0.37);
      eye.castShadow = false;
    }
    this.legs = [];
    for (let i = 0; i < 4; i++) {
      const leg = new THREE.Group();
      leg.position.set((i % 2 ? 1 : -1) * 0.28, 0.36, (i < 2 ? 1 : -1) * 0.22);
      const m = addMesh(leg, new THREE.CylinderGeometry(0.045, 0.025, 0.55, 4), rootMat, 0, -0.25, 0);
      m.rotation.z = (i % 2 ? -1 : 1) * 0.35;
      this.body.add(leg);
      this.legs.push(leg);
    }
    this.armL = new THREE.Group();
    this.armL.position.set(-0.34, 0.62, 0.12);
    addMesh(this.armL, new THREE.CylinderGeometry(0.05, 0.03, 0.5, 4), barkMat, -0.1, -0.18, 0);
    this.body.add(this.armL);
    this.armR = new THREE.Group();
    this.armR.position.set(0.34, 0.62, 0.12);
    addMesh(this.armR, new THREE.CylinderGeometry(0.05, 0.03, 0.5, 4), barkMat, 0.1, -0.18, 0);
    this.body.add(this.armR);
  }

  _buildMossguard() {
    const stone = mat(0x69736b);
    const stoneDark = mat(0x505a53);
    const moss = mat(0x627d4a);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffc766 });
    this.materials.push(stone, stoneDark, moss);
    const torso = addMesh(this.body, new THREE.DodecahedronGeometry(0.78, 0), stone, 0, 1.22, 0);
    torso.scale.set(1.0, 1.1, 0.72);
    this.core = torso;
    addMesh(this.body, new THREE.BoxGeometry(0.82, 0.28, 0.58), moss, 0, 1.72, -0.04);
    const head = addMesh(this.body, new THREE.IcosahedronGeometry(0.28, 0), stoneDark, 0, 1.92, 0.08);
    head.scale.set(1, 0.82, 0.9);
    addMesh(this.body, new THREE.IcosahedronGeometry(0.055, 0), eyeMat, -0.11, 1.96, 0.32).castShadow = false;
    addMesh(this.body, new THREE.IcosahedronGeometry(0.055, 0), eyeMat, 0.11, 1.96, 0.32).castShadow = false;
    this.legL = new THREE.Group();
    this.legL.position.set(-0.38, 0.72, 0);
    addMesh(this.legL, new THREE.CylinderGeometry(0.17, 0.14, 0.82, 5), stoneDark, 0, -0.38, 0);
    this.body.add(this.legL);
    this.legR = new THREE.Group();
    this.legR.position.set(0.38, 0.72, 0);
    addMesh(this.legR, new THREE.CylinderGeometry(0.17, 0.14, 0.82, 5), stoneDark, 0, -0.38, 0);
    this.body.add(this.legR);
    this.armL = new THREE.Group();
    this.armL.position.set(-0.82, 1.55, 0);
    addMesh(this.armL, new THREE.CylinderGeometry(0.15, 0.12, 0.75, 5), stoneDark, 0, -0.36, 0);
    this.body.add(this.armL);
    this.armR = new THREE.Group();
    this.armR.position.set(0.82, 1.55, 0);
    addMesh(this.armR, new THREE.CylinderGeometry(0.22, 0.17, 1.0, 5), stone, 0, -0.44, 0);
    const fist = addMesh(this.armR, new THREE.DodecahedronGeometry(0.3, 0), stoneDark, 0, -0.98, 0);
    fist.scale.set(1.2, 1, 1.1);
    this.body.add(this.armR);
    addMesh(this.body, new THREE.IcosahedronGeometry(0.22, 0), moss, -0.5, 1.5, -0.4).scale.set(1, 0.4, 1);
    addMesh(this.body, new THREE.IcosahedronGeometry(0.18, 0), moss, 0.45, 0.9, 0.28).scale.set(1, 0.35, 1);
  }

  reset() {
    this.releaseToken();
    this.position.set(this.home.x, this.game.world.groundHeight(this.home.x, this.home.z), this.home.z);
    this.facing = 0;
    this.health = this.maxHealth;
    this.alive = true;
    this.engaged = false;
    this.state = 'idle';
    this.stateTime = 0;
    this.attack = null;
    this.hitPlayer = false;
    this.flash = 0;
    this.deathTime = 0;
    this.staggerResistantUntil = -1;
    this.root.visible = true;
    this.root.position.copy(this.position);
    this.root.rotation.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    this.body.scale.set(1, 1, 1);
    for (const key of Object.keys(this.tells)) this.tells[key].group.visible = false;
    this.updateHealthBar();
  }

  engage() {
    if (!this.alive || this.engaged) return;
    this.engaged = true;
    this.state = 'chase';
    this.stateTime = 0;
  }

  lockPoint() {
    return new THREE.Vector3(this.position.x, this.position.y + this.height * 0.62, this.position.z);
  }

  updateHealthBar() {}

  receiveToken() {
    if (this.hasToken) return true;
    if (this.game.ordinaryAttacker && this.game.ordinaryAttacker !== this) return false;
    this.hasToken = true;
    this.game.ordinaryAttacker = this;
    return true;
  }

  releaseToken() {
    if (this.hasToken || this.game.ordinaryAttacker === this) {
      if (this.game.ordinaryAttacker === this) this.game.ordinaryAttacker = null;
      this.hasToken = false;
    }
  }

  update(dt, game) {
    if (this.flash > 0) this.flash = Math.max(0, this.flash - dt);
    if (!this.alive) {
      this.deathTime += dt;
      this._animate(dt, game.time);
      return;
    }
    if (!this.engaged) {
      this._animate(dt, game.time);
      return;
    }
    const player = game.player;
    if (player.isDead) {
      this._animate(dt, game.time);
      return;
    }
    if (this._shouldReset(player)) {
      this.reset();
      game.onEnemyLeashReset(this);
      return;
    }
    this.stateTime += dt;
    const dx = player.position.x - this.position.x;
    const dz = player.position.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    const desiredYaw = Math.atan2(dx, dz);

    if (this.state === 'chase' || this.state === 'idle') {
      this.state = 'chase';
      if (this.stateTime < 0.2 || dist > this.cfg.stopRange) {
        this.facing = turnToward(this.facing, desiredYaw, 5.5 * dt);
      }
      if (dist > this.cfg.stopRange) {
        const speed = this.cfg.speed;
        const step = Math.min(speed * dt, dist - this.cfg.stopRange + 0.05);
        if (step > 0) this._move(Math.sin(desiredYaw) * step, Math.cos(desiredYaw) * step, game);
      } else if (!this.hasToken && game.ordinaryAttacker && game.ordinaryAttacker !== this) {
        const strafe = this.stateTime % 2 < 1 ? 1 : -1;
        const angle = desiredYaw + Math.PI / 2 * strafe;
        this._move(Math.sin(angle) * this.cfg.speed * 0.35 * dt, Math.cos(angle) * this.cfg.speed * 0.35 * dt, game);
      }
      const canAttack = dist <= this.cfg.attackRange && dist > 0.3;
      if (canAttack && this.receiveToken()) {
        this._startAttack(game);
      } else if (canAttack && !this.hasToken) {
        const strafe = Math.sin(game.time * 0.8 + this.idlePhase) > 0 ? 1 : -1;
        const angle = desiredYaw + (Math.PI / 2) * strafe;
        this._move(Math.sin(angle) * this.cfg.speed * 0.3 * dt, Math.cos(angle) * this.cfg.speed * 0.3 * dt, game);
      }
    } else if (this.state === 'windup') {
      const attack = this.attack;
      if (this.stateTime < attack.tell - this.cfg.facingLock) {
        this.facing = turnToward(this.facing, desiredYaw, 7 * dt);
      }
      if (this.stateTime >= attack.tell) {
        this.state = 'active';
        this.stateTime = 0;
        this.hitPlayer = false;
        this._hideTells();
      }
    } else if (this.state === 'active') {
      const attack = this.attack;
      if (this.type === 'briarling') {
        const step = 2.0 * dt;
        this._move(Math.sin(this.facing) * step, Math.cos(this.facing) * step, game);
      }
      if (!this.hitPlayer) {
        const contact = pointInSector(this.position, this.facing, player.position, attack.reach, attack.halfArc);
        if (contact) {
          this.hitPlayer = true;
          game.queueIncomingHit(this, attack.damage, attack.id, 'ordinary');
        }
      }
      if (this.stateTime >= attack.active) {
        this.state = 'recovery';
        this.stateTime = 0;
      }
    } else if (this.state === 'recovery') {
      if (this.stateTime >= this.attack.recovery) {
        this.releaseToken();
        this.attack = null;
        this.state = 'chase';
        this.stateTime = 0;
      }
    } else if (this.state === 'stagger') {
      if (this.stateTime >= this.cfg.staggerDuration) {
        this.state = 'chase';
        this.stateTime = 0;
      }
    }
    this.position.y = game.world.groundHeight(this.position.x, this.position.z);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.facing;
    this._animate(dt, game.time);
  }

  _shouldReset(player) {
    if (player.position.z > 3.0 && Math.abs(player.position.x) < 20) return true;
    return Math.hypot(player.position.x - this.home.x, player.position.z - this.home.z) > this.cfg.leash;
  }

  _move(dx, dz, game) {
    const prev = { x: this.position.x, z: this.position.z };
    const resolved = game.world.resolveMovement(this.position.x + dx, this.position.z + dz, this.radius, prev);
    this.position.x = resolved.x;
    this.position.z = resolved.z;
  }

  _startAttack(game) {
    this.attackCounter++;
    this.state = 'windup';
    this.stateTime = 0;
    this.attack = {
      ...this.cfg.attack,
      id: `${this.type}-${this.attackCounter}`,
      activeElapsed: 0,
    };
    const dx = game.player.position.x - this.position.x;
    const dz = game.player.position.z - this.position.z;
    this.facing = Math.atan2(dx, dz);
    game.audio.enemyTell(this.type);
    this.game.onCombatEvent();
  }

  _hideTells() {
    for (const key of Object.keys(this.tells)) this.tells[key].group.visible = false;
  }

  _showTell(key, x, z, facing, opacity, y) {
    const tell = this.tells[key];
    if (!tell) return;
    for (const k of Object.keys(this.tells)) if (k !== key) this.tells[k].group.visible = false;
    tell.group.visible = true;
    tell.group.position.set(x, y + 0.04, z);
    tell.group.rotation.y = facing;
    tell.mesh.material.opacity = opacity;
  }

  receivePlayerHit(damage, type, attackId, game) {
    if (!this.alive) return;
    this.health = Math.max(0, this.health - damage);
    this.flash = 0.18;
    game.onEnemyDamaged(this, damage, type);
    if (this.health <= 0) {
      this.die(game);
      return;
    }
    if (type === 'heavy' && this.state === 'windup' && game.time >= this.staggerResistantUntil) {
      this.staggerResistantUntil = game.time + this.cfg.staggerResistance;
      this.releaseToken();
      this.attack = null;
      this.state = 'stagger';
      this.stateTime = 0;
      this._hideTells();
      game.ui?.toast(`${this.name} staggered.`);
    }
    this.updateHealthBar();
  }

  die(game) {
    if (!this.alive) return;
    this.alive = false;
    this.engaged = false;
    this.state = 'dead';
    this.deathTime = 0;
    this.releaseToken();
    this._hideTells();
    this.attack = null;
    game.onEnemyKilled(this);
  }

  _animate(dt, time) {
    const st = this.state;
    let bodyY = Math.sin(time * 2.0 + this.idlePhase) * 0.02;
    let bodyRotX = 0;
    let bodyRotZ = 0;
    let bodyZ = 0;
    let scaleX = 1;
    let scaleY = 1;
    let scaleZ = 1;
    let armLRot = 0;
    let armRRot = 0;
    let armLZ = 0;
    let armRZ = 0;

    if (this.type === 'briarling') {
      if (st === 'windup') {
        const p = clamp(this.stateTime / this.cfg.attack.tell, 0, 1);
        bodyY = -0.18 * p;
        bodyRotX = -0.18 * p;
        scaleX = 1 + 0.18 * p;
        scaleZ = 1 - 0.16 * p;
        this._showTell('lunge', this.position.x, this.position.z, this.facing, 0.08 + p * 0.28, this.position.y);
      } else if (st === 'active') {
        bodyZ = 0.38;
        bodyRotX = 0.22;
        scaleZ = 1.28;
        scaleX = 0.9;
      } else if (st === 'recovery') {
        bodyZ = 0.1;
        bodyRotX = 0.08;
      } else if (st === 'stagger') {
        bodyRotZ = 0.55;
        bodyY = -0.12;
      } else if (st === 'dead') {
        const p = clamp(this.deathTime / 0.7, 0, 1);
        bodyRotZ = p * 1.4;
        bodyY = -p * 0.3;
      } else {
        for (let i = 0; i < this.legs.length; i++) this.legs[i].rotation.x = Math.sin(time * 4 + i * 1.7) * 0.15;
      }
      this.armL.rotation.x = -0.3 + armLRot;
      this.armR.rotation.x = -0.3 + armRRot;
      this.armL.rotation.z = armLZ;
      this.armR.rotation.z = armRZ;
      if (st === 'windup') {
        this.armL.rotation.x = -0.9;
        this.armR.rotation.x = -0.9;
      } else if (st === 'active') {
        this.armL.rotation.x = 0.7;
        this.armR.rotation.x = 0.7;
      }
    } else {
      if (st === 'windup') {
        const p = clamp(this.stateTime / this.cfg.attack.tell, 0, 1);
        bodyRotX = -0.14 * p;
        bodyY = -0.08 * p;
        armRRot = -1.1 * p;
        armLRot = 0.25 * p;
        this._showTell('sweep', this.position.x, this.position.z, this.facing, 0.08 + p * 0.28, this.position.y);
      } else if (st === 'active') {
        bodyRotX = 0.18;
        armRRot = 1.35;
        armLRot = -0.25;
      } else if (st === 'recovery') {
        bodyRotX = 0.05;
        armRRot = 0.6;
      } else if (st === 'stagger') {
        bodyRotX = -0.24;
        bodyRotZ = 0.2;
      } else if (st === 'dead') {
        const p = clamp(this.deathTime / 1.0, 0, 1);
        bodyRotZ = p * 1.35;
        bodyY = -p * 0.45;
      } else {
        this.legL.rotation.x = Math.sin(time * 2.5 + this.idlePhase) * 0.08;
        this.legR.rotation.x = -Math.sin(time * 2.5 + this.idlePhase) * 0.08;
      }
      this.armL.rotation.x = armLRot;
      this.armR.rotation.x = armRRot;
    }

    this.body.position.set(0, bodyY, bodyZ);
    this.body.rotation.x = bodyRotX;
    this.body.rotation.z = bodyRotZ;
    this.body.scale.set(scaleX, scaleY, scaleZ);
    const flash = this.flash > 0 ? this.flash / 0.18 : 0;
    for (const m of this.materials) {
      m.emissive.setRGB(flash * 0.42, flash * 0.08, flash * 0.04);
      m.emissiveIntensity = 1;
    }
  }
}

class Boss {
  constructor(game) {
    this.game = game;
    this.cfg = CONFIG.boss;
    this.name = this.cfg.name;
    this.radius = this.cfg.radius;
    this.height = this.cfg.height;
    this.maxHealth = this.cfg.health;
    this.health = this.maxHealth;
    this.home = { x: 0, z: -120.0 };
    this.position = new THREE.Vector3(this.home.x, game.world.groundHeight(this.home.x, this.home.z), this.home.z);
    this.facing = 0;
    this.alive = true;
    this.engaged = false;
    this.isBoss = true;
    this.isBossHidden = false;
    this.state = 'idle';
    this.stateTime = 0;
    this.attack = null;
    this.attackCounter = 0;
    this.hitPlayer = false;
    this.flash = 0;
    this.deathTime = 0;
    this.phase = 1;
    this.phaseTransitionPending = false;
    this.sequenceIndex = 0;
    this.idlePhase = 1.2;
    this._buildVisual();
    this.tells = {
      sweep: makeTell('sector', this.cfg.attacks.sweep.reach, this.cfg.attacks.sweep.halfArc),
      overhead: makeTell('circle', this.cfg.attacks.overhead.radius, Math.PI),
    };
    for (const key of Object.keys(this.tells)) this.game.scene.add(this.tells[key].group);
    this.reset();
  }

  _buildVisual() {
    const stone = mat(0x69746d);
    const stoneDark = mat(0x4e5953);
    const stoneLight = mat(0x889189);
    const moss = mat(0x5b7847);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffbd61 });
    this.materials = [stone, stoneDark, stoneLight, moss];
    this.root = new THREE.Group();
    this.root.name = 'Gate Warden';
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.torsoGroup = new THREE.Group();
    this.torsoGroup.position.y = 2.25;
    this.body.add(this.torsoGroup);
    const torso = addMesh(this.torsoGroup, new THREE.DodecahedronGeometry(1.15, 0), stone, 0, 0, 0);
    torso.scale.set(1.05, 1.25, 0.72);
    this.core = torso;
    addMesh(this.torsoGroup, new THREE.BoxGeometry(1.5, 0.45, 0.9), stoneDark, 0, 0.55, 0);
    addMesh(this.torsoGroup, new THREE.BoxGeometry(1.25, 0.35, 0.85), moss, 0, 0.12, -0.55).scale.set(1, 0.4, 1);
    const head = addMesh(this.torsoGroup, new THREE.IcosahedronGeometry(0.42, 0), stoneLight, 0, 1.15, 0.1);
    head.scale.set(1, 0.82, 0.95);
    addMesh(this.torsoGroup, new THREE.IcosahedronGeometry(0.075, 0), eyeMat, -0.16, 1.2, 0.47).castShadow = false;
    addMesh(this.torsoGroup, new THREE.IcosahedronGeometry(0.075, 0), eyeMat, 0.16, 1.2, 0.47).castShadow = false;
    const crest = addMesh(this.torsoGroup, new THREE.ConeGeometry(0.28, 0.7, 5), stoneDark, 0, 1.55, -0.1);
    crest.rotation.z = 0.1;
    for (const side of [-1, 1]) {
      const shoulder = addMesh(this.torsoGroup, new THREE.DodecahedronGeometry(0.55, 0), stoneDark, side * 1.15, 0.6, 0);
      shoulder.scale.set(1, 0.9, 0.85);
    }
    this.armL = new THREE.Group();
    this.armL.position.set(-1.3, 2.72, 0);
    const upperL = addMesh(this.armL, new THREE.CylinderGeometry(0.25, 0.2, 1.3, 5), stoneDark, 0, -0.6, 0);
    const fistL = addMesh(this.armL, new THREE.DodecahedronGeometry(0.48, 0), stone, 0, -1.35, 0);
    fistL.scale.set(1.15, 1, 1.1);
    this.body.add(this.armL);
    this.armR = new THREE.Group();
    this.armR.position.set(1.3, 2.72, 0);
    addMesh(this.armR, new THREE.CylinderGeometry(0.3, 0.23, 1.45, 5), stoneDark, 0, -0.66, 0);
    const fistR = addMesh(this.armR, new THREE.DodecahedronGeometry(0.58, 0), stone, 0, -1.5, 0);
    fistR.scale.set(1.2, 1.05, 1.15);
    this.body.add(this.armR);
    this.legL = new THREE.Group();
    this.legL.position.set(-0.55, 1.15, 0);
    addMesh(this.legL, new THREE.CylinderGeometry(0.3, 0.26, 1.25, 5), stoneDark, 0, -0.6, 0);
    this.body.add(this.legL);
    this.legR = new THREE.Group();
    this.legR.position.set(0.55, 1.15, 0);
    addMesh(this.legR, new THREE.CylinderGeometry(0.3, 0.26, 1.25, 5), stoneDark, 0, -0.6, 0);
    this.body.add(this.legR);
    this.phaseGlow = new THREE.PointLight(0xff8c42, 0, 10, 1.6);
    this.phaseGlow.position.set(0, 2.3, 0.6);
    this.body.add(this.phaseGlow);
    this.game.scene.add(this.root);
  }

  reset() {
    this.position.set(this.home.x, this.game.world.groundHeight(this.home.x, this.home.z), this.home.z);
    this.facing = 0;
    this.health = this.maxHealth;
    this.alive = true;
    this.engaged = false;
    this.state = 'idle';
    this.stateTime = 0;
    this.attack = null;
    this.hitPlayer = false;
    this.flash = 0;
    this.deathTime = 0;
    this.phase = 1;
    this.phaseTransitionPending = false;
    this.sequenceIndex = 0;
    this.root.visible = !this.isBossHidden;
    this.root.position.copy(this.position);
    this.root.rotation.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    this.body.scale.set(1, 1, 1);
    this.phaseGlow.intensity = 0;
    for (const key of Object.keys(this.tells)) this.tells[key].group.visible = false;
  }

  setDefeatedAbsent(absent) {
    this.isBossHidden = absent;
    if (absent) {
      this.alive = false;
      this.engaged = false;
      this.state = 'dead';
      this.root.visible = false;
      for (const key of Object.keys(this.tells)) this.tells[key].group.visible = false;
    }
  }

  engage() {
    if (!this.alive || this.engaged) return;
    this.engaged = true;
    this.state = 'chase';
    this.stateTime = 0;
    this.game.audio.bossTransition();
    this.game.ui?.toast('The Gate Warden stirs.');
  }

  lockPoint() {
    return new THREE.Vector3(this.position.x, this.position.y + 2.4, this.position.z);
  }

  update(dt, game) {
    if (this.flash > 0) this.flash = Math.max(0, this.flash - dt);
    if (!this.alive) {
      this.deathTime += dt;
      if (this.deathTime > 4.0) this.root.visible = false;
      this._animate(dt, game.time);
      return;
    }
    if (!this.engaged) {
      this._animate(dt, game.time);
      return;
    }
    const player = game.player;
    if (player.isDead) {
      this._animate(dt, game.time);
      return;
    }
    this.stateTime += dt;
    const dx = player.position.x - this.position.x;
    const dz = player.position.z - this.position.z;
    const dist = Math.hypot(dx, dz);
    const desiredYaw = Math.atan2(dx, dz);

    if (this.state === 'chase') {
      this.facing = turnToward(this.facing, desiredYaw, 4.5 * dt);
      if (dist > this.cfg.stopRange) {
        const step = Math.min(this.cfg.speed * dt, dist - this.cfg.stopRange + 0.02);
        this._move(Math.sin(desiredYaw) * step, Math.cos(desiredYaw) * step, game);
      }
      if (dist <= this.cfg.attackRange && this.stateTime > 0.25) {
        this._chooseAttack(game);
      }
    } else if (this.state === 'windup') {
      const attack = this.attack;
      if (this.stateTime < attack.tell - this.cfg.facingLock) {
        this.facing = turnToward(this.facing, desiredYaw, 4.2 * dt);
      }
      if (this.stateTime >= attack.tell) {
        this.state = 'active';
        this.stateTime = 0;
        this.hitPlayer = false;
        this._hideTells();
        game.audio.swing(attack.damage >= 30 ? 'heavy' : 'light');
      }
    } else if (this.state === 'active') {
      this._checkContact(game);
      if (this.stateTime >= this.attack.active) {
        if (this.attack.kind === 'double' && this.attack.stage === 'first') {
          this.state = 'doubleGap';
          this.stateTime = 0;
          this.attack.secondId = `${this.cfg.attacks.doubleSweep.second.id}-${++this.attackCounter}`;
        } else {
          this.state = 'recovery';
          this.stateTime = 0;
        }
      }
    } else if (this.state === 'doubleGap') {
      if (this.stateTime < this.cfg.attacks.doubleSweep.gap - this.cfg.facingLock) {
        this.facing = turnToward(this.facing, desiredYaw, 3.6 * dt);
      }
      if (this.stateTime >= this.cfg.attacks.doubleSweep.gap) {
        this.state = 'active';
        this.stateTime = 0;
        this.hitPlayer = false;
        this.attack.stage = 'second';
        this.attack.id = this.attack.secondId;
        this.attack.tell = 0;
        this._hideTells();
        game.audio.swing('light');
      }
    } else if (this.state === 'recovery') {
      if (this.stateTime >= this.attack.recovery) {
        this.attack = null;
        if (this.health <= this.maxHealth * 0.5 && this.phase === 1) {
          this.state = 'transition';
          this.stateTime = 0;
          this.phaseTransitionPending = true;
          this.phaseGlow.intensity = 2.0;
          game.audio.bossTransition();
          game.ui?.toast('The Warden draws deeper strength.');
        } else {
          this.state = 'chase';
          this.stateTime = 0;
        }
      }
    } else if (this.state === 'transition') {
      if (this.stateTime >= this.cfg.transitionTime) {
        this.phase = 2;
        this.phaseTransitionPending = false;
        this.state = 'chase';
        this.stateTime = 0;
        this.sequenceIndex = 0;
        this.phaseGlow.intensity = 0.7;
        game.ui?.toast('The Gate Warden enters a second phase.');
      }
    }
    this.position.y = game.world.groundHeight(this.position.x, this.position.z);
    this.root.position.copy(this.position);
    this.root.rotation.y = this.facing;
    this._animate(dt, game.time);
  }

  _chooseAttack(game) {
    let kind;
    if (this.phase === 1) {
      kind = this.sequenceIndex % 2 === 0 ? 'sweep' : 'overhead';
      this.sequenceIndex++;
    } else {
      const seq = ['sweep', 'overhead', 'double'];
      kind = seq[this.sequenceIndex % seq.length];
      this.sequenceIndex++;
    }
    this.attackCounter++;
    if (kind === 'sweep') {
      const a = this.cfg.attacks.sweep;
      this.attack = {
        kind: 'sweep',
        id: `${a.id}-${this.attackCounter}`,
        tell: a.tell,
        active: a.active,
        recovery: a.recovery,
        damage: a.damage,
        reach: a.reach,
        halfArc: a.halfArc,
      };
      game.audio.enemyTell('warden-sweep');
    } else if (kind === 'overhead') {
      const a = this.cfg.attacks.overhead;
      this.attack = {
        kind: 'overhead',
        id: `${a.id}-${this.attackCounter}`,
        tell: a.tell,
        active: a.active,
        recovery: a.recovery,
        damage: a.damage,
        radius: a.radius,
        impactDistance: a.impactDistance,
      };
      game.audio.enemyTell('warden-overhead');
    } else {
      const d = this.cfg.attacks.doubleSweep;
      this.attack = {
        kind: 'double',
        stage: 'first',
        id: `${d.first.id}-${this.attackCounter}`,
        tell: d.first.tell,
        active: d.first.active,
        recovery: d.recovery,
        damage: d.first.damage,
        reach: d.first.reach,
        halfArc: d.first.halfArc,
      };
      game.audio.enemyTell('warden-sweep');
    }
    this.state = 'windup';
    this.stateTime = 0;
    this.facing = Math.atan2(game.player.position.x - this.position.x, game.player.position.z - this.position.z);
    game.onCombatEvent();
  }

  _checkContact(game) {
    if (this.hitPlayer || !this.attack) return;
    const player = game.player;
    let contact = false;
    if (this.attack.kind === 'overhead') {
      const ix = this.position.x + Math.sin(this.facing) * this.attack.impactDistance;
      const iz = this.position.z + Math.cos(this.facing) * this.attack.impactDistance;
      contact = Math.hypot(player.position.x - ix, player.position.z - iz) <= this.attack.radius + player.radius;
    } else {
      contact = pointInSector(this.position, this.facing, player.position, this.attack.reach, this.attack.halfArc);
    }
    if (contact) {
      this.hitPlayer = true;
      game.queueIncomingHit(this, this.attack.damage, this.attack.id, 'boss');
    }
  }

  _move(dx, dz, game) {
    const prev = { x: this.position.x, z: this.position.z };
    const resolved = game.world.resolveMovement(this.position.x + dx, this.position.z + dz, this.radius, prev);
    this.position.x = resolved.x;
    this.position.z = resolved.z;
  }

  _hideTells() {
    for (const key of Object.keys(this.tells)) this.tells[key].group.visible = false;
  }

  _showSweepTell(opacity, offset = 0) {
    const t = this.tells.sweep;
    t.group.visible = true;
    this.tells.overhead.group.visible = false;
    t.group.position.set(this.position.x, this.position.y + 0.04, this.position.z);
    t.group.rotation.y = this.facing + offset;
    t.mesh.material.opacity = opacity;
  }

  _showOverheadTell(opacity) {
    const t = this.tells.overhead;
    t.group.visible = true;
    this.tells.sweep.group.visible = false;
    const ix = this.position.x + Math.sin(this.facing) * this.cfg.attacks.overhead.impactDistance;
    const iz = this.position.z + Math.cos(this.facing) * this.cfg.attacks.overhead.impactDistance;
    t.group.position.set(ix, this.position.y + 0.04, iz);
    t.group.rotation.y = 0;
    t.mesh.material.opacity = opacity;
  }

  receivePlayerHit(damage, type, attackId, game) {
    if (!this.alive) return;
    this.health = Math.max(0, this.health - damage);
    this.flash = 0.16;
    game.onBossDamaged(this, damage, type);
    if (this.health <= 0) this.die(game);
  }

  die(game) {
    if (!this.alive) return;
    this.alive = false;
    this.engaged = false;
    this.state = 'dead';
    this.deathTime = 0;
    this._hideTells();
    this.attack = null;
    this.phaseGlow.intensity = 0;
    game.onBossDefeated(this);
  }

  _animate(dt, time) {
    const st = this.state;
    const a = this.attack;
    let bodyY = Math.sin(time * 1.5 + this.idlePhase) * 0.018;
    let bodyRotX = 0;
    let bodyRotZ = 0;
    let torsoYaw = 0;
    let torsoPitch = 0;
    let armLX = 0;
    let armRX = 0;
    let armLZ = 0;
    let armRZ = 0;
    let legLX = 0;
    let legRX = 0;

    if (st === 'windup' && a) {
      const p = clamp(this.stateTime / a.tell, 0, 1);
      if (a.kind === 'sweep' || a.kind === 'double') {
        torsoYaw = -1.1 * p;
        armRZ = -1.25 * p;
        armRX = -0.4 * p;
        armLZ = 0.3 * p;
        bodyY = -0.1 * p;
        this._showSweepTell(0.08 + p * 0.3);
      } else {
        torsoPitch = -0.24 * p;
        armLX = -2.25 * p;
        armRX = -2.25 * p;
        bodyY = 0.12 * p;
        this._showOverheadTell(0.08 + p * 0.32);
      }
    } else if (st === 'active' && a) {
      if (a.kind === 'sweep' || a.kind === 'double') {
        const p = clamp(this.stateTime / a.active, 0, 1);
        if (a.stage === 'second') {
          torsoYaw = lerp(0.95, -0.95, p);
          armRZ = lerp(1.2, -1.2, p);
        } else {
          torsoYaw = lerp(-1.1, 1.0, p);
          armRZ = lerp(-1.25, 1.2, p);
        }
        bodyRotX = 0.12;
        bodyY = -0.05;
      } else {
        const p = clamp(this.stateTime / a.active, 0, 1);
        torsoPitch = lerp(-0.24, 0.38, p);
        armLX = lerp(-2.25, 0.8, p);
        armRX = lerp(-2.25, 0.8, p);
        bodyY = lerp(0.12, -0.25, p);
        if (p > 0.9) bodyY = -0.2;
      }
    } else if (st === 'doubleGap' && a) {
      const p = clamp(this.stateTime / this.cfg.attacks.doubleSweep.gap, 0, 1);
      torsoYaw = 0.95;
      armRZ = 1.2;
      armRX = 0.25;
      bodyY = -0.04;
      this._showSweepTell(0.1 + p * 0.32, 0);
    } else if (st === 'recovery' && a) {
      const p = clamp(this.stateTime / a.recovery, 0, 1);
      if (a.kind === 'sweep' || a.kind === 'double') {
        torsoYaw = 1.0 * (1 - p);
        armRZ = 1.1 * (1 - p);
        armRX = 0.4 * (1 - p);
      } else {
        torsoPitch = 0.38 * (1 - p);
        armLX = 0.8 * (1 - p);
        armRX = 0.8 * (1 - p);
        bodyY = -0.2 * (1 - p);
      }
    } else if (st === 'transition') {
      const p = clamp(this.stateTime / this.cfg.transitionTime, 0, 1);
      const pulse = Math.sin(p * Math.PI * 4);
      bodyY = -0.18 * Math.sin(p * Math.PI);
      torsoPitch = -0.18 * Math.sin(p * Math.PI);
      armLZ = 0.5 + pulse * 0.2;
      armRZ = -0.5 - pulse * 0.2;
      this.phaseGlow.intensity = 2.2 + pulse * 0.6;
      legLX = 0.1;
      legRX = -0.1;
    } else if (st === 'dead') {
      const p = clamp(this.deathTime / 1.8, 0, 1);
      bodyRotZ = p * 1.25;
      bodyY = -p * 0.9;
      torsoPitch = p * 0.4;
      armLX = p * 0.8;
      armRX = p * 0.8;
      legLX = -p * 0.5;
      legRX = p * 0.5;
    } else {
      armLZ = 0.06 + Math.sin(time * 1.2) * 0.025;
      armRZ = -0.06 - Math.sin(time * 1.2) * 0.025;
      legLX = Math.sin(time * 1.4) * 0.025;
      legRX = -Math.sin(time * 1.4) * 0.025;
    }

    this.body.position.y = bodyY;
    this.body.rotation.x = bodyRotX;
    this.body.rotation.z = bodyRotZ;
    this.torsoGroup.rotation.y = torsoYaw;
    this.torsoGroup.rotation.x = torsoPitch;
    this.armL.rotation.x = armLX;
    this.armR.rotation.x = armRX;
    this.armL.rotation.z = armLZ;
    this.armR.rotation.z = armRZ;
    this.legL.rotation.x = legLX;
    this.legR.rotation.x = legRX;
    const flash = this.flash > 0 ? this.flash / 0.16 : 0;
    for (const m of this.materials) {
      m.emissive.setRGB(flash * 0.5, flash * 0.1, flash * 0.05);
      m.emissiveIntensity = 1;
    }
  }
}

export { Enemy, Boss };
