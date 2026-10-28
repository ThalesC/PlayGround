'use strict';

function drawSlashEffect(e) {
  const t = clamp(e.life / e.maxLife, 0, 1);
  const a = Math.sin((1 - t) * Math.PI * 0.5);
  const pts = worldArcPoints(e.x, e.y, e.radius, e.angle, e.arc, e.z, 30);
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  pathFromPoints(pts);
  ctx.strokeStyle = e.color.replace('ALPHA', (0.24 * a).toFixed(3));
  ctx.lineWidth = e.width;
  ctx.stroke();
  pathFromPoints(pts);
  ctx.strokeStyle = e.color.replace('ALPHA', (0.72 * a).toFixed(3));
  ctx.lineWidth = Math.max(1, e.width * 0.18);
  ctx.stroke();
  ctx.restore();
}

function drawEffects(layer) {
  ctx.save();
  for (const e of G.effects) {
    if (e.layer !== layer) continue;
    const t = 1 - e.life / e.maxLife;
    if (e.kind === 'slash') {
      drawSlashEffect(e);
    } else if (e.kind === 'ring') {
      const r = lerp(e.r0, e.r1, easeOut(t));
      const a = (1 - t) * (e.alpha || 0.5);
      ctx.globalCompositeOperation = 'lighter';
      strokeWorldCircle(e.x, e.y, r, e.color.replace('ALPHA', a.toFixed(3)), e.width || 3, e.z || 1);
    } else if (e.kind === 'pulse') {
      const a = (1 - t) * (e.alpha || 0.3);
      fillWorldCircle(e.x, e.y, e.r * (0.7 + t * 0.5), e.color.replace('ALPHA', a.toFixed(3)), e.z || 1);
    } else if (e.kind === 'beam') {
      const a = (1 - t) * (e.alpha || 0.6);
      const p1 = project(e.x1, e.y1, e.z || 20);
      const p2 = project(e.x2, e.y2, e.z || 20);
      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = e.color.replace('ALPHA', a.toFixed(3));
      ctx.lineWidth = e.width * (1 - t * 0.7);
      ctx.stroke();
    } else if (e.kind === 'flash') {
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = e.color.replace('ALPHA', ((1 - t) * (e.alpha || 0.2)).toFixed(3));
      ctx.fillRect(-2000, -2000, 4000, 4000);
    }
  }
  ctx.restore();
}

function drawParticles() {
  ctx.save();
  for (const p of G.particles) {
    const a = clamp(p.life / p.maxLife, 0, 1);
    const pos = project(p.x, p.y, p.z);
    if (p.type === 'spark' || p.type === 'ember' || p.type === 'soul') {
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = a;
      ctx.strokeStyle = p.color;
      ctx.lineWidth = p.size * 0.5;
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      const tail = project(p.x - p.vx * 0.018, p.y - p.vy * 0.018, p.z - p.vz * 0.018);
      ctx.lineTo(tail.x, tail.y);
      ctx.stroke();
      if (p.type === 'soul' || p.size > 4) {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.size * 0.4, 0, TAU);
        ctx.fill();
      }
    } else if (p.type === 'blood') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = a * 0.85;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(pos.x, pos.y, p.size, p.size * 0.5, 0, 0, TAU);
      ctx.fill();
    } else if (p.type === 'dust') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = a * 0.24;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, p.size * (1 + (1 - a) * 2.4), 0, TAU);
      ctx.fill();
    } else if (p.type === 'smoke') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = a * 0.18;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, p.size * (1 + (1 - a) * 3.2), 0, TAU);
      ctx.fill();
    } else if (p.type === 'debris') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = a;
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(p.rot + G.time * p.spin);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size, -p.size * 0.5, p.size * 2, p.size);
      ctx.restore();
    }
  }
  ctx.restore();
}

function drawSouls() {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const s of G.souls) {
    const pos = project(s.x, s.y, s.z);
    const pulse = 0.6 + Math.sin(G.time * 7 + s.seed) * 0.25;
    const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 18);
    g.addColorStop(0, 'rgba(255, 244, 195, ' + (0.9 * pulse).toFixed(3) + ')');
    g.addColorStop(0.28, 'rgba(237, 177, 84, ' + (0.7 * pulse).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(180, 90, 30, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 18, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(255, 244, 206, ' + (0.8 * pulse).toFixed(3) + ')';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 3, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

function drawProjectiles() {
  for (const p of G.projectiles) {
    const pos = project(p.x, p.y, p.z);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.radius * 2.2);
    g.addColorStop(0, 'rgba(225, 255, 240, .95)');
    g.addColorStop(0.25, p.color);
    g.addColorStop(1, 'rgba(20, 80, 70, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, p.radius * 2.2, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
  for (const h of G.hazards) {
    const a = clamp(1 - h.r / h.maxR, 0, 1);
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    strokeWorldCircle(h.x, h.y, h.r, 'rgba(255, 112, 66, ' + (0.7 * a).toFixed(3) + ')', 5, 1);
    strokeWorldCircle(h.x, h.y, Math.max(0, h.r - 8), 'rgba(255, 180, 104, ' + (0.3 * a).toFixed(3) + ')', 2, 1);
    ctx.restore();
  }
}

function drawTexts() {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const t of G.texts) {
    const a = clamp(t.life / t.maxLife, 0, 1);
    const pos = project(t.x, t.y, t.z);
    ctx.globalAlpha = a;
    ctx.font = '700 ' + t.size + 'px "Trebuchet MS", sans-serif';
    ctx.strokeStyle = 'rgba(0, 0, 0, .8)';
    ctx.lineWidth = 4;
    ctx.strokeText(t.text, pos.x, pos.y);
    ctx.fillStyle = t.color;
    ctx.fillText(t.text, pos.x, pos.y);
  }
  ctx.restore();
}

function drawGlowLights() {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const b of G.braziers) {
    const pos = project(b.x, b.y, 82);
    const flicker = 0.8 + Math.sin(G.time * 9 + b.phase) * 0.12 + Math.sin(G.time * 21 + b.phase * 3) * 0.06;
    const g = ctx.createRadialGradient(pos.x, pos.y, 8, pos.x, pos.y, 170);
    g.addColorStop(0, 'rgba(255, 171, 86, ' + (0.16 * flicker).toFixed(3) + ')');
    g.addColorStop(0.4, 'rgba(219, 98, 43, ' + (0.07 * flicker).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(120, 40, 15, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 170, 0, TAU);
    ctx.fill();
  }
  if (G.player && !G.player.dead) {
    const p = project(G.player.x, G.player.y, 68);
    const g = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, 110);
    g.addColorStop(0, 'rgba(255, 140, 65, .07)');
    g.addColorStop(1, 'rgba(120, 40, 15, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 110, 0, TAU);
    ctx.fill();
  }
  if (G.boss && !G.boss.dead) {
    const p = project(G.boss.x, G.boss.y, 100);
    const g = ctx.createRadialGradient(p.x, p.y, 10, p.x, p.y, 220);
    g.addColorStop(0, 'rgba(255, 68, 45, .09)');
    g.addColorStop(1, 'rgba(80, 10, 10, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 220, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

function updateParticles(dt) {
  for (let i = G.particles.length - 1; i >= 0; i--) {
    const p = G.particles[i];
    p.life -= dt;
    if (p.life <= 0) {
      G.particles.splice(i, 1);
      continue;
    }
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.z += p.vz * dt;
    p.vx *= 1 - 2.2 * dt;
    p.vy *= 1 - 2.2 * dt;
    if (p.type === 'spark' || p.type === 'debris' || p.type === 'blood') p.vz -= 380 * dt;
    else if (p.type === 'ember' || p.type === 'soul') p.vz += 30 * dt;
    else if (p.type === 'smoke' || p.type === 'dust') p.vz += 12 * dt;
    if (p.z < 0) {
      p.z = 0;
      p.vz *= -0.18;
      p.vx *= 0.6;
      p.vy *= 0.6;
    }
    p.rot += p.spin * dt;
  }
}

function updateEffects(dt) {
  for (let i = G.effects.length - 1; i >= 0; i--) {
    const e = G.effects[i];
    e.life -= dt;
    if (e.life <= 0) G.effects.splice(i, 1);
  }
}

function updateTexts(dt) {
  for (let i = G.texts.length - 1; i >= 0; i--) {
    const t = G.texts[i];
    t.life -= dt;
    t.z += t.vy * dt;
    t.vy *= 1 - 1.8 * dt;
    t.x += t.drift * dt;
    if (t.life <= 0) G.texts.splice(i, 1);
  }
}

function updateDecals(dt) {
  for (let i = G.decals.length - 1; i >= 0; i--) {
    const d = G.decals[i];
    d.life -= dt * 0.25;
    if (d.life <= 0) G.decals.splice(i, 1);
  }
}

function updateHazards(dt) {
  for (let i = G.hazards.length - 1; i >= 0; i--) {
    const h = G.hazards[i];
    h.r += h.speed * dt;
    if (G.player && !G.player.dead && !h.hit) {
      const d = dist(h.x, h.y, G.player.x, G.player.y);
      if (Math.abs(d - h.r) < 34 + G.player.r) {
        h.hit = true;
        G.player.takeDamage(h.damage, h.x, h.y, 'shockwave');
        addShake(0.5);
      }
    }
    if (h.r >= h.maxR) G.hazards.splice(i, 1);
  }
}

function updateSouls(dt) {
  for (let i = G.souls.length - 1; i >= 0; i--) {
    const s = G.souls[i];
    s.life -= dt;
    if (s.life <= 0) {
      G.souls.splice(i, 1);
      continue;
    }
    const d = dist(s.x, s.y, G.player.x, G.player.y);
    if (d < 190) {
      const a = Math.atan2(G.player.y - s.y, G.player.x - s.x);
      const speed = 220 + (190 - d) * 2.6;
      s.x += Math.cos(a) * speed * dt;
      s.y += Math.sin(a) * speed * dt;
      s.z = damp(s.z, 38, 6, dt);
    } else {
      s.z = 28 + Math.sin(G.time * 3 + s.seed) * 5;
    }
    if (d < 26) {
      G.soulsCount += s.value;
      G.player.gainRage(2);
      addText(s.x, s.y, 46, '+' + s.value, '#e8c47c', 11, 28);
      addParticle(s.x, s.y, 36, rand(60, -60), rand(60, -60), 70, 0.4, 3, '#ffd98d', 'soul');
      audio.pickup();
      G.souls.splice(i, 1);
    }
  }
}
