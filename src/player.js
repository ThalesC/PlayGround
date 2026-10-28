import * as THREE from 'three';
import { CONFIG } from './config.js';
import { angleDelta, clamp, lerp, pointInSector, segmentPointDistance2D, turnToward, yawTo } from './util.js';

const UP = new THREE.Vector3(0, 1, 0);

function mat(color, extra = {}) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra });
}

function mesh(geo, material, parent) {
  const m = new THREE.Mesh(geo, material);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

export class Player {
  constructor(game) {
    this.game = game;
    this.radius = CONFIG.player.radius;
    this.position = new THREE.Vector3();
    this.safePosition = new THREE.Vector3();
    this.facing = Math.PI;
    this.health = CONFIG.player.maxHealth;
    this.stamina = CONFIG.player.maxStamina;
    this.healCharges = CONFIG.player.healCharges;
    this.state = 'normal';
    this.stateTime = 0;
    this.attack = null;
    this.attackCounter = 0;
    this.dodge = null;
    this.heal = null;
    this.hurtTimer = 0;
    this.deathTimer = 0;
    this.invulnerableUntil = -1;
    this.lastDamageTime = -99;
    this.lastStaminaUse = -99;
    this.lastCombatEvent = -99;
    this.queuedAction = null;
    this.queuedAt = -99;
    this.lockTarget = null;
    this.sprinting = false;
    this.walkPhase = 0;
    this.lastStep = -1;
    this.flash = 0;
    this.facingCommitted = false;
    this.spearReinforced = false;
    this._buildMesh();
    this.updateVisual(0, 0);
  }

  _buildMesh() {
    this.root = new THREE.Group();
    this.root.name = 'Traveler';
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.bodyMats = [];
    const cloakMat = mat(0x866c50);
    const tunicMat = mat(0x4f5c51);
    const skinMat = mat(0xc6a07a);
    const leatherMat = mat(0x4d3b2b);
    const bootMat = mat(0x382f27);
    this.bodyMats.push(cloakMat, tunicMat, skinMat, leatherMat, bootMat);

    this.hips = new THREE.Group();
    this.hips.position.y = 0.9;
    this.body.add(this.hips);
    const torso = mesh(new THREE.CylinderGeometry(0.24, 0.34, 0.78, 6), tunicMat, this.hips);
    torso.position.y = 0.3;
    this.torso = torso;
    const chest = mesh(new THREE.CylinderGeometry(0.3, 0.25, 0.28, 6), leatherMat, this.hips);
    chest.position.y = 0.56;
    const head = mesh(new THREE.IcosahedronGeometry(0.19, 1), skinMat, this.hips);
    head.position.y = 0.88;
    const hood = mesh(new THREE.ConeGeometry(0.29, 0.42, 6), cloakMat, this.hips);
    hood.position.set(0, 1.01, -0.02);
    hood.rotation.x = -0.06;
    const cloak = mesh(new THREE.ConeGeometry(0.47, 0.95, 6, 1, true), cloakMat, this.body);
    cloak.position.set(0, 0.78, -0.23);
    cloak.rotation.x = 0.1;
    cloak.material = cloakMat;
    this.cloak = cloak;
    const pack = mesh(new THREE.BoxGeometry(0.42, 0.46, 0.25), leatherMat, this.body);
    pack.position.set(0, 1.08, -0.31);
    pack.rotation.x = 0.08;
    this.pack = pack;

    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.14, 0.78, 0);
    this.body.add(this.leftLeg);
    const leftLegMesh = mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.72, 5), bootMat, this.leftLeg);
    leftLegMesh.position.y = -0.36;
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.14, 0.78, 0);
    this.body.add(this.rightLeg);
    const rightLegMesh = mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.72, 5), bootMat, this.rightLeg);
    rightLegMesh.position.y = -0.36;

    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.3, 1.36, 0);
    this.body.add(this.leftArm);
    const leftArmMesh = mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.58, 5), tunicMat, this.leftArm);
    leftArmMesh.position.y = -0.27;
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.31, 1.36, 0);
    this.body.add(this.rightArm);
    const rightArmMesh = mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.58, 5), tunicMat, this.rightArm);
    rightArmMesh.position.y = -0.27;

    this.spearPivot = new THREE.Group();
    this.spearPivot.position.set(0.34, 1.22, 0.1);
    this.body.add(this.spearPivot);
    const shaft = mesh(new THREE.CylinderGeometry(0.032, 0.038, 2.35, 6), leatherMat, this.spearPivot);
    shaft.rotation.x = Math.PI / 2;
    shaft.position.z = 1.03;
    const collar = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 6), mat(0x6d6454), this.spearPivot);
    collar.rotation.x = Math.PI / 2;
    collar.position.z = 2.13;
    this.spearTipMat = mat(0xb5b0a0, { emissive: 0x11100c, emissiveIntensity: 0.2 });
    const tip = mesh(new THREE.ConeGeometry(0.075, 0.34, 5), this.spearTipMat, this.spearPivot);
    tip.rotation.x = Math.PI / 2;
    tip.position.z = 2.36;
    this.spearTip = tip;

    this.healGlow = new THREE.PointLight(0x91e0a0, 0, 3.2, 2);
    this.healGlow.position.set(0, 1.1, 0);
    this.body.add(this.healGlow);

    this.root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.game.scene.add(this.root);
  }

  setReinforced(reinforced) {
    this.spearReinforced = reinforced;
    this.spearTipMat.color.setHex(reinforced ? 0xf2d18a : 0xb5b0a0);
    this.spearTipMat.emissive.setHex(reinforced ? 0x5a3a08 : 0x11100c);
    this.spearTipMat.emissiveIntensity = reinforced ? 0.45 : 0.2;
  }

  resetAt(checkpoint, fullRestore = true) {
    const spawn = checkpoint.spawn;
    this.position.set(spawn.x, this.game.world.groundHeight(spawn.x, spawn.z), spawn.z);
    this.safePosition.copy(this.position);
    this.facing = spawn.yaw;
    this.state = 'normal';
    this.stateTime = 0;
    this.attack = null;
    this.dodge = null;
    this.heal = null;
    this.hurtTimer = 0;
    this.deathTimer = 0;
    this.queuedAction = null;
    this.lockTarget = null;
    this.invulnerableUntil = -1;
    this.lastDamageTime = -99;
    this.lastStaminaUse = -99;
    this.lastCombatEvent = -99;
    this.sprinting = false;
    this.flash = 0;
    if (fullRestore) {
      this.health = CONFIG.player.maxHealth;
      this.stamina = CONFIG.player.maxStamina;
      this.healCharges = CONFIG.player.healCharges;
    }
    this.root.visible = true;
    this.body.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    this.root.rotation.set(0, this.facing, 0);
    this.root.position.copy(this.position);
    this.updateVisual(0, this.game.time);
  }

  get isDead() {
    return this.state === 'dead';
  }

  get isBusy() {
    return this.state === 'attack' || this.state === 'dodge' || this.state === 'heal' || this.state === 'hurt' || this.state === 'dead';
  }

  get attackDamage() {
    if (!this.attack) return 0;
    const base = CONFIG.player.attacks[this.attack.type].damage;
    return this.spearReinforced ? CONFIG.player.workshopUpgrade[this.attack.type] : base;
  }

  queueAction(action) {
    if (this.isDead) return;
    this.queuedAction = action;
    this.queuedAt = this.game.time;
  }

  toggleLockOn() {
    if (this.isDead) return;
    if (this.lockTarget) {
      this.lockTarget = null;
      this.game.audio.lockOn();
      return;
    }
    const candidates = this.getLockCandidates();
    if (candidates.length) {
      this.lockTarget = candidates[0];
      this.game.audio.lockOn();
      this.game.ui?.toast(`Locked: ${this.lockTarget.name}`);
    } else {
      this.game.ui?.toast('No visible target within reach.');
    }
  }

  cycleLockTarget(direction) {
    const candidates = this.getLockCandidates();
    if (!candidates.length) {
      this.lockTarget = null;
      return;
    }
    let idx = candidates.indexOf(this.lockTarget);
    if (idx < 0) idx = 0;
    else idx = (idx + (direction > 0 ? 1 : -1) + candidates.length) % candidates.length;
    this.lockTarget = candidates[idx];
    this.game.audio.lockOn();
  }

  getLockCandidates() {
    const targets = this.game.getHostileTargets().filter((t) => t.alive && !t.isBossHidden);
    const cam = this.game.camera;
    const camPos = cam.position;
    const out = [];
    for (const target of targets) {
      const p = target.lockPoint();
      const dist = Math.hypot(p.x - this.position.x, p.z - this.position.z);
      if (dist > CONFIG.player.lockOn.acquireRange) continue;
      const proj = p.clone().project(cam);
      if (proj.z < -1 || proj.z > 1) continue;
      if (Math.abs(proj.x) > 0.85 || Math.abs(proj.y) > 0.82) continue;
      const camDist = camPos.distanceTo(p);
      if (camDist > 24) continue;
      if (!this.game.hasLineOfSight(p)) continue;
      const screenScore = Math.hypot(proj.x, proj.y);
      out.push({ target, score: screenScore * 2.1 + dist * 0.035 });
    }
    out.sort((a, b) => a.score - b.score);
    return out.map((o) => o.target);
  }

  update(dt, game) {
    const now = game.time;
    this.stateTime += dt;
    if (this.flash > 0) this.flash = Math.max(0, this.flash - dt);

    if (this.state === 'dead') {
      this.deathTimer += dt;
      this.updateVisual(dt, now);
      return;
    }

    this.validateLockTarget();
    if (this.queuedAction && now - this.queuedAt > CONFIG.player.inputBuffer) this.queuedAction = null;

    const axes = game.input.movementAxes();
    const camYaw = game.cameraRig.yaw;
    const fwdX = -Math.sin(camYaw);
    const fwdZ = -Math.cos(camYaw);
    const rightX = Math.cos(camYaw);
    const rightZ = -Math.sin(camYaw);
    let mx = fwdX * axes.z + rightX * axes.x;
    let mz = fwdZ * axes.z + rightZ * axes.x;
    const mag = Math.hypot(mx, mz);
    if (mag > 0.001) {
      mx /= mag;
      mz /= mag;
    }
    const moving = mag > 0.001;
    const wantSprint = game.input.isDown('ShiftLeft') && moving && !this.isBusy && this.state !== 'heal';

    if (this.state === 'normal' || this.state === 'heal') {
      if (this.queuedAction && this.state === 'normal') this.tryStartAction(this.queuedAction, mx, mz, moving, game);
      if (this.state === 'normal') {
        this.sprinting = wantSprint && this.stamina > 0;
        let speed = this.sprinting ? CONFIG.player.sprintSpeed : CONFIG.player.walkSpeed;
        if (this.sprinting) {
          this.stamina -= CONFIG.player.sprintStaminaPerSecond * dt;
          this.lastStaminaUse = now;
          if (this.stamina <= 0) {
            this.stamina = 0;
            this.sprinting = false;
            speed = CONFIG.player.walkSpeed;
          }
        }
        if (moving) {
          this.moveWithCollision(mx * speed * dt, mz * speed * dt, game);
          if (this.lockTarget) {
            const target = this.lockTarget.lockPoint();
            this.facing = turnToward(this.facing, yawTo(this.position.x, this.position.z, target.x, target.z), CONFIG.player.lockOn.facingTurnRate * dt);
          } else {
            this.facing = turnToward(this.facing, Math.atan2(mx, mz), 13 * dt);
          }
          this.walkPhase += speed * dt * 2.5;
          const stepPhase = Math.floor(this.walkPhase / Math.PI);
          if (stepPhase !== this.lastStep) {
            this.lastStep = stepPhase;
            game.audio.footstep(this.sprinting);
          }
        } else if (this.lockTarget) {
          const target = this.lockTarget.lockPoint();
          this.facing = turnToward(this.facing, yawTo(this.position.x, this.position.z, target.x, target.z), CONFIG.player.lockOn.facingTurnRate * dt);
        }
      } else if (this.state === 'heal') {
        this.sprinting = false;
        if (moving) {
          this.moveWithCollision(mx * CONFIG.player.healMoveSpeed * dt, mz * CONFIG.player.healMoveSpeed * dt, game);
          this.facing = turnToward(this.facing, Math.atan2(mx, mz), 5 * dt);
        }
        this.updateHeal(dt, game);
      }
    } else if (this.state === 'attack') {
      this.sprinting = false;
      this.updateAttack(dt, now, game, mx, mz, moving);
    } else if (this.state === 'dodge') {
      this.sprinting = false;
      this.updateDodge(dt, game);
    } else if (this.state === 'hurt') {
      this.sprinting = false;
      this.hurtTimer -= dt;
      if (this.hurtTimer <= 0) this.state = 'normal';
    }

    if (this.state === 'normal' && this.queuedAction) {
      this.tryStartAction(this.queuedAction, mx, mz, moving, game);
    }

    const regenBlocked = this.state === 'attack' || this.state === 'dodge' || this.state === 'heal' || this.state === 'hurt' || this.sprinting;
    if (!regenBlocked && now - this.lastStaminaUse >= CONFIG.player.staminaRegenDelay) {
      this.stamina = Math.min(CONFIG.player.maxStamina, this.stamina + CONFIG.player.staminaRegenPerSecond * dt);
    }

    this.position.y = game.world.groundHeight(this.position.x, this.position.z);
    if (!game.world.isPositionValid(this.position.x, this.position.z, this.radius)) {
      this.position.x = this.safePosition.x;
      this.position.z = this.safePosition.z;
      this.position.y = game.world.groundHeight(this.position.x, this.position.z);
    } else {
      this.safePosition.copy(this.position);
    }
    this.root.position.copy(this.position);
    this.root.rotation.y = this.facing;
    this.updateVisual(dt, now);
  }

  validateLockTarget() {
    if (!this.lockTarget) return;
    if (!this.lockTarget.alive) {
      this.lockTarget = null;
      return;
    }
    const p = this.lockTarget.lockPoint();
    if (Math.hypot(p.x - this.position.x, p.z - this.position.z) > CONFIG.player.lockOn.releaseRange) {
      this.lockTarget = null;
    }
  }

  tryStartAction(action, mx, mz, moving, game) {
    if (action === 'light' || action === 'heavy') {
      const cfg = CONFIG.player.attacks[action];
      if (this.stamina < cfg.stamina) return false;
      this.startAttack(action, mx, mz, moving, game);
      return true;
    }
    if (action === 'dodge') {
      if (this.stamina < CONFIG.player.dodge.stamina) return false;
      this.startDodge(mx, mz, moving, game);
      return true;
    }
    if (action === 'heal') {
      if (this.health >= CONFIG.player.maxHealth || this.healCharges <= 0) return false;
      this.startHeal(game);
      return true;
    }
    return false;
  }

  startAttack(type, mx, mz, moving, game) {
    const cfg = CONFIG.player.attacks[type];
    this.stamina -= cfg.stamina;
    this.lastStaminaUse = game.time;
    this.lastCombatEvent = game.time;
    this.state = 'attack';
    this.stateTime = 0;
    this.queuedAction = null;
    this.facingCommitted = false;
    let desired = this.facing;
    if (this.lockTarget && this.lockTarget.alive) {
      const t = this.lockTarget.lockPoint();
      desired = yawTo(this.position.x, this.position.z, t.x, t.z);
    } else if (moving) {
      desired = Math.atan2(mx, mz);
    }
    this.facing = desired;
    this.attack = {
      type,
      id: `${type}-${++this.attackCounter}`,
      elapsed: 0,
      hit: new Set(),
      prevTip: null,
      stepped: 0,
      damage: this.spearReinforced ? CONFIG.player.workshopUpgrade[type] : cfg.damage,
    };
    game.audio.swing(type);
    game.onCombatEvent();
  }

  startDodge(mx, mz, moving, game) {
    const cfg = CONFIG.player.dodge;
    this.stamina -= cfg.stamina;
    this.lastStaminaUse = game.time;
    this.lastCombatEvent = game.time;
    let dx = mx;
    let dz = mz;
    if (!moving) {
      dx = -Math.sin(this.facing);
      dz = -Math.cos(this.facing);
    }
    this.state = 'dodge';
    this.stateTime = 0;
    this.queuedAction = null;
    this.dodge = {
      elapsed: 0,
      dx,
      dz,
      distance: cfg.distance,
      duration: cfg.duration,
      moved: 0,
    };
    this.facing = Math.atan2(dx, dz);
    game.audio.dodge();
    game.onCombatEvent();
  }

  startHeal(game) {
    this.state = 'heal';
    this.stateTime = 0;
    this.queuedAction = null;
    this.heal = { elapsed: 0 };
    game.audio.healStart();
    game.onCombatEvent();
  }

  updateAttack(dt, now, game, mx, mz, moving) {
    const cfg = CONFIG.player.attacks[this.attack.type];
    this.attack.elapsed += dt;
    const elapsed = this.attack.elapsed;
    const total = cfg.windup + cfg.active + cfg.recovery;
    if (!this.facingCommitted) {
      if (elapsed <= cfg.facingWindow) {
        if (this.lockTarget && this.lockTarget.alive) {
          const t = this.lockTarget.lockPoint();
          this.facing = turnToward(this.facing, yawTo(this.position.x, this.position.z, t.x, t.z), 18 * dt);
        } else if (moving) {
          this.facing = turnToward(this.facing, Math.atan2(mx, mz), 10 * dt);
        }
      } else {
        this.facingCommitted = true;
      }
    }
    const stepEnd = cfg.windup + cfg.active * 0.5;
    if (elapsed < stepEnd && this.attack.stepped < cfg.forwardStep) {
      const step = Math.min(cfg.forwardStep - this.attack.stepped, 1.6 * dt);
      this.attack.stepped += step;
      this.moveWithCollision(Math.sin(this.facing) * step, Math.cos(this.facing) * step, game);
    }
    this.root.updateMatrixWorld(true);
    const tip = this.getSpearTip();
    if (!this.attack.prevTip) this.attack.prevTip = tip.clone();
    if (elapsed >= cfg.windup && elapsed <= cfg.windup + cfg.active) {
      for (const target of game.getHostileTargets()) {
        if (!target.alive || this.attack.hit.has(target)) continue;
        const p = target.lockPoint();
        const centerDist = Math.hypot(p.x - this.position.x, p.z - this.position.z);
        if (centerDist > cfg.reach) continue;
        const tipDist = segmentPointDistance2D(this.attack.prevTip.x, this.attack.prevTip.z, tip.x, tip.z, p.x, p.z);
        const shaftDist = segmentPointDistance2D(this.position.x, this.position.z, tip.x, tip.z, p.x, p.z);
        if (Math.min(tipDist, shaftDist) > cfg.tipRadius + target.radius) continue;
        this.attack.hit.add(target);
        game.queueOutgoingHit(target, this.attack.damage, this.attack.type, this.attack.id);
      }
    }
    this.attack.prevTip.copy(tip);
    if (elapsed >= total) {
      this.attack = null;
      this.state = 'normal';
      this.stateTime = 0;
    }
  }

  updateDodge(dt, game) {
    const cfg = CONFIG.player.dodge;
    this.dodge.elapsed += dt;
    const step = (cfg.distance / cfg.duration) * dt;
    const beforeX = this.position.x;
    const beforeZ = this.position.z;
    this.moveWithCollision(this.dodge.dx * step, this.dodge.dz * step, game);
    this.dodge.moved += Math.hypot(this.position.x - beforeX, this.position.z - beforeZ);
    if (this.dodge.elapsed >= cfg.duration) {
      this.dodge = null;
      this.state = 'normal';
      this.stateTime = 0;
    }
  }

  updateHeal(dt, game) {
    this.heal.elapsed += dt;
    if (this.heal.elapsed >= CONFIG.player.healTime) {
      this.health = Math.min(CONFIG.player.maxHealth, this.health + CONFIG.player.healAmount);
      this.healCharges = Math.max(0, this.healCharges - 1);
      this.heal = null;
      this.state = 'normal';
      this.stateTime = 0;
      game.audio.healComplete();
      game.ui?.toast('Wounds bound. One healing charge spent.');
    }
  }

  moveWithCollision(dx, dz, game) {
    if (dx === 0 && dz === 0) return;
    const prev = { x: this.position.x, z: this.position.z };
    const nx = this.position.x + dx;
    const nz = this.position.z + dz;
    const resolved = game.world.resolveMovement(nx, nz, this.radius, prev);
    if (Number.isFinite(resolved.x) && Number.isFinite(resolved.z)) {
      this.position.x = resolved.x;
      this.position.z = resolved.z;
    }
    this.position.y = game.world.groundHeight(this.position.x, this.position.z);
  }

  isInvulnerable(now = this.game.time) {
    if (now < this.invulnerableUntil) return true;
    if (this.state === 'dodge' && this.dodge) {
      const cfg = CONFIG.player.dodge;
      if (this.dodge.elapsed >= cfg.invulnerableFrom && this.dodge.elapsed <= cfg.invulnerableTo) return true;
    }
    return false;
  }

  takeDamage(amount, source, attackId, game) {
    const now = game.time;
    if (this.state === 'dead' || this.isInvulnerable(now)) return false;
    this.health = Math.max(0, this.health - amount);
    this.invulnerableUntil = now + CONFIG.player.damageInvulnerability;
    this.lastDamageTime = now;
    this.lastCombatEvent = now;
    this.flash = 0.22;
    this.clearCommittedAttack();
    if (this.state === 'heal') {
      this.heal = null;
      game.ui?.toast('Healing interrupted.');
    }
    if (this.state === 'dodge') this.dodge = null;
    this.state = 'hurt';
    this.stateTime = 0;
    this.hurtTimer = CONFIG.player.hitReactionTime;
    this.sprinting = false;
    game.audio.hurt();
    game.onPlayerDamaged(source, amount);
    if (this.health <= 0) this.die(game);
    return true;
  }

  clearCommittedAttack() {
    if (this.attack) {
      this.attack.hit.clear();
      this.attack.prevTip = null;
      this.attack = null;
    }
  }

  die(game) {
    this.state = 'dead';
    this.deathTimer = 0;
    this.attack = null;
    this.heal = null;
    this.dodge = null;
    this.lockTarget = null;
    this.sprinting = false;
    game.audio.death();
    game.onPlayerDeath();
  }

  getSpearTip() {
    const v = new THREE.Vector3(0, 0, 2.38);
    this.spearPivot.updateWorldMatrix(true, false);
    return this.spearPivot.localToWorld(v);
  }

  updateVisual(dt, now) {
    const st = this.state;
    const t = this.stateTime;
    let bodyTilt = 0;
    let bodyY = 0;
    let bodyRotZ = 0;
    let spearZ = 0.1;
    let spearRotX = 0;
    let spearRotY = 0;
    let leftLegRot = 0;
    let rightLegRot = 0;
    let leftArmRot = 0;
    let rightArmRot = 0;

    const moving = this.state === 'normal' && (this.game.input?.movementAxes().x !== 0 || this.game.input?.movementAxes().z !== 0);
    if (moving) {
      const amp = this.sprinting ? 0.75 : 0.48;
      leftLegRot = Math.sin(this.walkPhase) * amp;
      rightLegRot = -Math.sin(this.walkPhase) * amp;
      leftArmRot = -Math.sin(this.walkPhase) * amp * 0.55;
      bodyY = Math.abs(Math.sin(this.walkPhase * 2)) * 0.035;
      bodyTilt = this.sprinting ? 0.18 : 0.04;
    } else if (st === 'normal') {
      bodyY = Math.sin(now * 1.8) * 0.012;
    }

    if (st === 'attack' && this.attack) {
      const cfg = CONFIG.player.attacks[this.attack.type];
      const e = this.attack.elapsed;
      if (e < cfg.windup) {
        const p = e / cfg.windup;
        spearZ = lerp(0.1, -0.34, p);
        bodyTilt = -0.08 * p;
        rightArmRot = -0.6 * p;
        leftArmRot = 0.3 * p;
        spearRotY = -0.08 * p;
      } else if (e < cfg.windup + cfg.active) {
        const p = (e - cfg.windup) / cfg.active;
        spearZ = lerp(-0.34, 0.62, p);
        bodyTilt = lerp(-0.08, 0.28, p);
        rightArmRot = lerp(-0.6, 0.8, p);
        leftArmRot = lerp(0.3, -0.45, p);
        spearRotY = lerp(-0.08, 0.03, p);
        bodyY = -0.05;
      } else {
        const p = (e - cfg.windup - cfg.active) / cfg.recovery;
        spearZ = lerp(0.62, 0.1, p);
        bodyTilt = lerp(0.28, 0, p);
        rightArmRot = lerp(0.8, 0, p);
        leftArmRot = lerp(-0.45, 0, p);
        spearRotY = lerp(0.03, 0, p);
      }
      if (this.attack.type === 'heavy') {
        spearRotX = Math.sin((e / (cfg.windup + cfg.active + cfg.recovery)) * Math.PI) * -0.12;
      }
    } else if (st === 'dodge' && this.dodge) {
      const p = clamp(this.dodge.elapsed / CONFIG.player.dodge.duration, 0, 1);
      bodyTilt = Math.sin(p * Math.PI) * 0.5;
      bodyY = -Math.sin(p * Math.PI) * 0.28;
      bodyRotZ = Math.sin(p * Math.PI) * 0.32;
      leftLegRot = 0.7;
      rightLegRot = -0.7;
      spearZ = -0.05;
    } else if (st === 'heal') {
      bodyTilt = -0.08;
      leftArmRot = -0.65;
      rightArmRot = -0.2;
      spearZ = -0.1;
      this.healGlow.intensity = 0.8 + Math.sin(now * 7) * 0.3;
    } else if (st === 'hurt') {
      const p = 1 - this.hurtTimer / CONFIG.player.hitReactionTime;
      bodyTilt = -0.28 * Math.sin(p * Math.PI);
      bodyRotZ = 0.14 * Math.sin(p * Math.PI);
      leftArmRot = -0.35;
      rightArmRot = -0.35;
    } else if (st === 'dead') {
      const p = clamp(this.deathTimer / 0.85, 0, 1);
      bodyRotZ = p * 1.42;
      bodyY = -p * 0.52;
      this.healGlow.intensity = 0;
    }
    if (st !== 'heal') this.healGlow.intensity = 0;

    this.body.rotation.x = bodyTilt;
    this.body.rotation.z = bodyRotZ;
    this.body.position.y = bodyY;
    this.leftLeg.rotation.x = leftLegRot;
    this.rightLeg.rotation.x = rightLegRot;
    this.leftArm.rotation.x = leftArmRot;
    this.rightArm.rotation.x = rightArmRot;
    this.spearPivot.position.z = spearZ;
    this.spearPivot.rotation.x = spearRotX;
    this.spearPivot.rotation.y = spearRotY;
    this.cloak.rotation.x = 0.1 + bodyTilt * 0.4 + (this.sprinting ? 0.16 : 0);

    const flash = this.flash > 0 ? this.flash / 0.22 : 0;
    for (const m of this.bodyMats) {
      m.emissive.setRGB(flash * 0.5, flash * 0.07, flash * 0.04);
      m.emissiveIntensity = 1;
    }
  }
}
