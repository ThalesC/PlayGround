'use strict';

function generateArena() {
  let seed = 917331;
  const sr = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const step = 58;
  for (let gx = -ARENA_R; gx <= ARENA_R; gx += step) {
    for (let gy = -ARENA_R; gy <= ARENA_R; gy += step) {
      const x = gx + (sr() - 0.5) * 8;
      const y = gy + (sr() - 0.5) * 8;
      const d = Math.hypot(x, y);
      if (d > ARENA_R - 24) continue;
      const edge = clamp((ARENA_R - 30 - d) / 120, 0, 1);
      const shade = Math.floor(sr() * 8);
      G.tiles.push({ x, y, d, shade, edge, worn: sr() });
    }
  }
  for (let i = 0; i < 46; i++) {
    const a = sr() * TAU;
    const r = Math.sqrt(sr()) * (ARENA_R - 60);
    let px = Math.cos(a) * r;
    let py = Math.sin(a) * r;
    const dir = sr() * TAU;
    const points = [];
    for (let s = 0; s < 5; s++) {
      points.push({ x: px, y: py });
      px += Math.cos(dir + (sr() - 0.5) * 1.4) * (20 + sr() * 34);
      py += Math.sin(dir + (sr() - 0.5) * 1.4) * (20 + sr() * 34);
    }
    G.cracks.push({ points, hot: sr() > 0.82 });
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * TAU + sr() * 0.5;
    let px = Math.cos(a) * 50;
    let py = Math.sin(a) * 50;
    const points = [];
    for (let s = 0; s < 9; s++) {
      points.push({ x: px, y: py });
      const wob = (sr() - 0.5) * 0.45;
      px += Math.cos(a + wob) * (40 + sr() * 34);
      py += Math.sin(a + wob) * (40 + sr() * 34);
      if (Math.hypot(px, py) > ARENA_R - 30) break;
    }
    G.fissures.push(points);
  }
  const pillars = [
    { x: -430, y: -440, h: 235, broken: false },
    { x: 440, y: -430, h: 265, broken: true },
    { x: -470, y: 410, h: 190, broken: true },
    { x: 460, y: 430, h: 245, broken: false },
    { x: -40, y: -570, h: 285, broken: false },
    { x: 50, y: 560, h: 210, broken: true }
  ];
  for (const p of pillars) G.props.push({ type: 'pillar', x: p.x, y: p.y, h: p.h, broken: p.broken, seed: sr() });
  const banners = [
    { x: -250, y: -510 },
    { x: 300, y: -500 },
    { x: -520, y: 150 }
  ];
  for (const b of banners) G.props.push({ type: 'banner', x: b.x, y: b.y, seed: sr() });
  const braziers = [
    { x: -340, y: -270 },
    { x: 350, y: -255 },
    { x: -355, y: 285 },
    { x: 340, y: 300 }
  ];
  for (const b of braziers) {
    G.braziers.push({ x: b.x, y: b.y, phase: rand(TAU) });
    G.props.push({ type: 'brazier', x: b.x, y: b.y, phase: rand(TAU) });
  }
  for (let i = 0; i < 24; i++) {
    const a = sr() * TAU;
    const r = 300 + sr() * 260;
    G.props.push({ type: 'rubble', x: Math.cos(a) * r, y: Math.sin(a) * r, size: 5 + sr() * 15, seed: sr() });
  }
  for (let i = 0; i < 14; i++) {
    const a = sr() * TAU;
    const r = 110 + sr() * 420;
    G.props.push({ type: 'bones', x: Math.cos(a) * r, y: Math.sin(a) * r, seed: sr() });
  }
}

function worldCircle(x, y, r, z = 0) {
  const p = [];
  for (let i = 0; i <= 48; i++) {
    const a = (i / 48) * TAU;
    p.push(project(x + Math.cos(a) * r, y + Math.sin(a) * r, z));
  }
  return p;
}

function pathFromPoints(points, close = false) {
  ctx.beginPath();
  points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  if (close) ctx.closePath();
}

function worldArcPoints(x, y, radius, angle, arc, z = 0, segments = 26) {
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const a = angle - arc / 2 + (arc * i) / segments;
    pts.push(project(x + Math.cos(a) * radius, y + Math.sin(a) * radius, z));
  }
  return pts;
}

function fillWorldCircle(x, y, r, fill, z = 0) {
  pathFromPoints(worldCircle(x, y, r, z), true);
  ctx.fillStyle = fill;
  ctx.fill();
}

function strokeWorldCircle(x, y, r, stroke, width = 2, z = 0) {
  pathFromPoints(worldCircle(x, y, r, z), true);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
}

function drawBackdrop() {
  const g = ctx.createRadialGradient(W * 0.55, H * 0.42, 0, W * 0.55, H * 0.42, Math.max(W, H) * 0.7);
  g.addColorStop(0, 'rgba(35, 35, 42, .26)');
  g.addColorStop(0.48, 'rgba(15, 17, 23, .16)');
  g.addColorStop(1, 'rgba(2, 3, 5, .45)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const glow = ctx.createRadialGradient(W * 0.5, H * 0.56, 10, W * 0.5, H * 0.56, W * 0.46);
  glow.addColorStop(0, 'rgba(114, 54, 26, .09)');
  glow.addColorStop(0.55, 'rgba(48, 26, 18, .035)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

function drawArenaBase() {
  const center = project(0, 0, 0);
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const halo = ctx.createRadialGradient(center.x, center.y, 40, center.x, center.y, ARENA_R * 1.25);
  halo.addColorStop(0, 'rgba(106, 54, 28, .10)');
  halo.addColorStop(0.55, 'rgba(40, 25, 22, .05)');
  halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.ellipse(center.x, center.y, ARENA_R * 1.25, ARENA_R * 0.62, 0, 0, TAU);
  ctx.fill();
  ctx.restore();

  pathFromPoints(worldCircle(0, 0, ARENA_R + 12, -4), true);
  ctx.fillStyle = 'rgba(2, 3, 5, .9)';
  ctx.fill();
  pathFromPoints(worldCircle(0, 0, ARENA_R + 2, 0), true);
  ctx.fillStyle = 'rgba(19, 20, 24, .96)';
  ctx.fill();

  const tileColors = [
    'rgba(44, 46, 51, .95)',
    'rgba(39, 41, 46, .95)',
    'rgba(49, 50, 54, .95)',
    'rgba(36, 38, 43, .95)',
    'rgba(47, 47, 50, .95)',
    'rgba(41, 44, 48, .95)',
    'rgba(52, 51, 52, .95)',
    'rgba(34, 37, 42, .95)'
  ];
  const tileSize = 58;
  for (const t of G.tiles) {
    const pts = [
      project(t.x - tileSize / 2, t.y - tileSize / 2),
      project(t.x + tileSize / 2, t.y - tileSize / 2),
      project(t.x + tileSize / 2, t.y + tileSize / 2),
      project(t.x - tileSize / 2, t.y + tileSize / 2)
    ];
    pathFromPoints(pts, true);
    ctx.fillStyle = tileColors[t.shade];
    ctx.fill();
    ctx.strokeStyle = 'rgba(10, 11, 14, .36)';
    ctx.lineWidth = 1;
    ctx.stroke();
    if (t.worn > 0.84) {
      ctx.beginPath();
      const a = project(t.x - 16, t.y - 10);
      const b = project(t.x + 12, t.y + 15);
      const c = project(t.x + 4, t.y - 18);
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(c.x, c.y);
      ctx.strokeStyle = 'rgba(7, 8, 10, .42)';
      ctx.stroke();
    }
    if (t.edge < 0.35 && t.worn > 0.6) {
      ctx.beginPath();
      const e = project(t.x, t.y);
      ctx.arc(e.x, e.y, 3 + t.worn * 3, 0, TAU);
      ctx.fillStyle = 'rgba(130, 74, 42, .12)';
      ctx.fill();
    }
  }

  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const runePulse = 0.5 + Math.sin(G.time * 1.1) * 0.12;
  strokeWorldCircle(0, 0, 178, 'rgba(196, 149, 82, ' + (0.11 * runePulse).toFixed(3) + ')', 2);
  strokeWorldCircle(0, 0, 246, 'rgba(196, 149, 82, ' + (0.07 * runePulse).toFixed(3) + ')', 1.5);
  strokeWorldCircle(0, 0, 300, 'rgba(196, 149, 82, ' + (0.045 * runePulse).toFixed(3) + ')', 1);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU + G.time * 0.012;
    const p1 = project(Math.cos(a) * 185, Math.sin(a) * 185);
    const p2 = project(Math.cos(a) * 238, Math.sin(a) * 238);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.strokeStyle = 'rgba(201, 158, 92, ' + (0.06 * runePulse).toFixed(3) + ')';
    ctx.lineWidth = 1;
    ctx.stroke();
    const q = project(Math.cos(a + 0.12) * 270, Math.sin(a + 0.12) * 270);
    const q2 = project(Math.cos(a + 0.18) * 286, Math.sin(a + 0.18) * 286);
    ctx.beginPath();
    ctx.moveTo(q.x, q.y);
    ctx.lineTo(q2.x, q2.y);
    ctx.strokeStyle = 'rgba(201, 158, 92, ' + (0.08 * runePulse).toFixed(3) + ')';
    ctx.stroke();
  }
  ctx.restore();

  for (const c of G.cracks) {
    pathFromPoints(c.points.map((p) => project(p.x, p.y)));
    ctx.strokeStyle = 'rgba(4, 5, 7, .6)';
    ctx.lineWidth = 2.4;
    ctx.stroke();
    if (c.hot) {
      pathFromPoints(c.points.map((p) => project(p.x, p.y, 1)));
      ctx.strokeStyle = 'rgba(179, 81, 39, ' + (0.08 + Math.sin(G.time * 2 + c.points[0].x) * 0.03).toFixed(3) + ')';
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
  }
  for (const f of G.fissures) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    pathFromPoints(f.map((p) => project(p.x, p.y)));
    ctx.strokeStyle = 'rgba(181, 74, 30, .16)';
    ctx.lineWidth = 8;
    ctx.stroke();
    pathFromPoints(f.map((p) => project(p.x, p.y, 1)));
    ctx.strokeStyle = 'rgba(255, 132, 60, .23)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  pathFromPoints(worldCircle(0, 0, ARENA_R - 10, 1), true);
  ctx.strokeStyle = 'rgba(9, 10, 13, .8)';
  ctx.lineWidth = 12;
  ctx.stroke();
  pathFromPoints(worldCircle(0, 0, ARENA_R - 20, 2), true);
  ctx.strokeStyle = 'rgba(72, 63, 52, .16)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawDecals() {
  for (const d of G.decals) {
    const a = clamp(d.life / d.maxLife, 0, 1);
    if (d.kind === 'blood') {
      ctx.save();
      ctx.globalAlpha = a * 0.45;
      fillWorldCircle(d.x, d.y, d.size, d.color, 0.5);
      for (const p of d.points) fillWorldCircle(p.x, p.y, d.size * 0.2, d.color, 0.6);
      ctx.restore();
    } else {
      ctx.save();
      ctx.globalAlpha = a * 0.75;
      pathFromPoints([project(d.x, d.y), ...d.points.map((p) => project(p.x, p.y))]);
      ctx.strokeStyle = 'rgba(7, 7, 9, .72)';
      ctx.lineWidth = 2.6;
      ctx.stroke();
      ctx.restore();
    }
  }
}

function drawPillar(p) {
  const base = project(p.x, p.y, 0);
  const top = project(p.x, p.y, p.h);
  const w = 25;
  const wTop = p.broken ? 17 : 21;
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(base.x, base.y + 3, 34, 12, 0, 0, TAU);
  ctx.fillStyle = 'rgba(0, 0, 0, .38)';
  ctx.fill();

  const shaft = [
    { x: base.x - w, y: base.y },
    { x: base.x + w, y: base.y },
    { x: top.x + wTop, y: top.y },
    { x: top.x - wTop, y: top.y }
  ];
  pathFromPoints(shaft, true);
  const grad = ctx.createLinearGradient(base.x - w, 0, base.x + w, 0);
  grad.addColorStop(0, '#1c1d21');
  grad.addColorStop(0.35, '#3f4147');
  grad.addColorStop(0.6, '#56565a');
  grad.addColorStop(1, '#202126');
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .7)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  for (let i = 1; i < 6; i++) {
    const t = i / 6;
    const y = lerp(base.y, top.y, t);
    ctx.beginPath();
    ctx.moveTo(base.x - w * (1 - t) - 2, y);
    ctx.lineTo(base.x + w * (1 - t) + 2, y);
    ctx.strokeStyle = 'rgba(12, 13, 16, .28)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  if (!p.broken) {
    ctx.fillStyle = '#4a4a4f';
    ctx.fillRect(top.x - wTop - 7, top.y - 7, (wTop + 7) * 2, 9);
    ctx.fillStyle = '#292a2f';
    ctx.fillRect(top.x - wTop - 12, top.y - 13, (wTop + 12) * 2, 7);
    ctx.strokeStyle = 'rgba(201, 168, 106, .13)';
    ctx.strokeRect(top.x - wTop - 7, top.y - 7, (wTop + 7) * 2, 9);
  } else {
    pathFromPoints([
      { x: top.x - wTop, y: top.y },
      { x: top.x - 7, y: top.y - 13 },
      { x: top.x + 2, y: top.y - 2 },
      { x: top.x + 10, y: top.y - 17 },
      { x: top.x + wTop, y: top.y }
    ]);
    ctx.fillStyle = '#1c1d21';
    ctx.fill();
  }
  if (p.seed > 0.45) {
    ctx.beginPath();
    ctx.moveTo(base.x - 8, base.y - 40);
    ctx.lineTo(base.x + 4, base.y - 100);
    ctx.lineTo(base.x - 3, base.y - 150);
    ctx.strokeStyle = 'rgba(8, 9, 11, .38)';
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }
  ctx.restore();
}

function drawBanner(p) {
  const base = project(p.x, p.y, 0);
  const top = project(p.x, p.y, 260);
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(base.x, base.y + 2, 20, 7, 0, 0, TAU);
  ctx.fillStyle = 'rgba(0, 0, 0, .3)';
  ctx.fill();
  ctx.strokeStyle = '#3b3b40';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(base.x, base.y);
  ctx.lineTo(top.x, top.y);
  ctx.stroke();
  const sway = Math.sin(G.time * 0.7 + p.seed * 8) * 6;
  ctx.beginPath();
  ctx.moveTo(top.x - 3, top.y + 10);
  ctx.lineTo(top.x + 46 + sway, top.y + 30);
  ctx.lineTo(top.x + 34 + sway, top.y + 170);
  ctx.lineTo(top.x + 13 + sway * 0.6, top.y + 146);
  ctx.lineTo(top.x - 4, top.y + 174);
  ctx.closePath();
  const g = ctx.createLinearGradient(top.x, top.y, top.x, top.y + 170);
  g.addColorStop(0, 'rgba(83, 30, 28, .9)');
  g.addColorStop(0.55, 'rgba(54, 20, 20, .82)');
  g.addColorStop(1, 'rgba(22, 11, 12, .8)');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .16)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(top.x + 22 + sway, top.y + 88, 13, 0, TAU);
  ctx.strokeStyle = 'rgba(201, 168, 106, .2)';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(top.x + 22 + sway, top.y + 75);
  ctx.lineTo(top.x + 29 + sway, top.y + 88);
  ctx.lineTo(top.x + 22 + sway, top.y + 101);
  ctx.lineTo(top.x + 15 + sway, top.y + 88);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawBrazierProp(p) {
  const base = project(p.x, p.y, 0);
  const top = project(p.x, p.y, 78);
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(base.x, base.y + 2, 24, 9, 0, 0, TAU);
  ctx.fillStyle = 'rgba(0, 0, 0, .38)';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(base.x - 12, base.y);
  ctx.lineTo(base.x - 8, top.y + 16);
  ctx.lineTo(base.x + 8, top.y + 16);
  ctx.lineTo(base.x + 12, base.y);
  ctx.closePath();
  const g = ctx.createLinearGradient(base.x - 12, 0, base.x + 12, 0);
  g.addColorStop(0, '#25262b');
  g.addColorStop(0.45, '#5a5857');
  g.addColorStop(1, '#1c1d22');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(top.x - 24, top.y + 8);
  ctx.lineTo(top.x + 24, top.y + 8);
  ctx.lineTo(top.x + 16, top.y + 26);
  ctx.lineTo(top.x - 16, top.y + 26);
  ctx.closePath();
  ctx.fillStyle = '#3a3430';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .18)';
  ctx.stroke();
  const flicker = 0.72 + Math.sin(G.time * 8 + p.phase) * 0.12 + Math.sin(G.time * 17 + p.phase * 2) * 0.06;
  ctx.globalCompositeOperation = 'lighter';
  const fg = ctx.createRadialGradient(top.x, top.y + 4, 0, top.x, top.y + 4, 54);
  fg.addColorStop(0, 'rgba(255, 224, 153, ' + (0.6 * flicker).toFixed(3) + ')');
  fg.addColorStop(0.25, 'rgba(238, 131, 58, ' + (0.36 * flicker).toFixed(3) + ')');
  fg.addColorStop(1, 'rgba(120, 38, 15, 0)');
  ctx.fillStyle = fg;
  ctx.beginPath();
  ctx.ellipse(top.x, top.y + 2, 58, 52, 0, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function drawRubble(p) {
  const pos = project(p.x, p.y, 0);
  const s = p.size;
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(pos.x, pos.y + 2, s * 1.1, s * 0.45, 0, 0, TAU);
  ctx.fillStyle = 'rgba(0, 0, 0, .25)';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(pos.x - s, pos.y);
  ctx.lineTo(pos.x - s * 0.4, pos.y - s * 0.8);
  ctx.lineTo(pos.x + s * 0.7, pos.y - s * 0.45);
  ctx.lineTo(pos.x + s, pos.y + s * 0.1);
  ctx.closePath();
  ctx.fillStyle = p.seed > 0.5 ? '#313238' : '#282a2f';
  ctx.fill();
  ctx.restore();
}

function drawBones(p) {
  const pos = project(p.x, p.y, 0);
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.rotate(p.seed * TAU);
  ctx.strokeStyle = 'rgba(154, 145, 125, .28)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(10, 0);
  ctx.moveTo(-5, -2);
  ctx.lineTo(-9, -7);
  ctx.moveTo(6, 1);
  ctx.lineTo(10, 6);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-14, 0, 3, 0, TAU);
  ctx.fillStyle = 'rgba(170, 160, 138, .3)';
  ctx.fill();
  ctx.restore();
}

function drawProp(p) {
  if (p.type === 'pillar') drawPillar(p);
  else if (p.type === 'banner') drawBanner(p);
  else if (p.type === 'brazier') drawBrazierProp(p);
  else if (p.type === 'rubble') drawRubble(p);
  else if (p.type === 'bones') drawBones(p);
}

function drawTelegraphs() {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  for (const e of G.enemies) {
    if (e.dead || e.spawnTime > 0) continue;
    if (e.state === 'windup') {
      const t = clamp(e.stateTime / e.windup, 0, 1);
      const pulse = 0.18 + t * 0.35 + Math.sin(G.time * 20) * 0.04;
      if (e.type === 'husk') {
        const pts = [project(e.x, e.y, 1), ...worldArcPoints(e.x, e.y, e.range + 32, e.attackAngle, 1.8, 1), project(e.x, e.y, 1)];
        pathFromPoints(pts, true);
        ctx.fillStyle = 'rgba(170, 35, 30, ' + (pulse * 0.3).toFixed(3) + ')';
        ctx.fill();
        pathFromPoints(worldArcPoints(e.x, e.y, e.range + 32, e.attackAngle, 1.8, 2));
        ctx.strokeStyle = 'rgba(255, 94, 62, ' + pulse.toFixed(3) + ')';
        ctx.lineWidth = 3;
        ctx.stroke();
      } else if (e.type === 'brute') {
        fillWorldCircle(e.x, e.y, e.slamRadius, 'rgba(170, 35, 30, ' + (pulse * 0.24).toFixed(3) + ')', 1);
        strokeWorldCircle(e.x, e.y, e.slamRadius * t, 'rgba(255, 104, 66, ' + pulse.toFixed(3) + ')', 3, 1);
        fillWorldCircle(e.x, e.y, 20 + t * e.slamRadius * 0.8, 'rgba(255, 92, 52, ' + (pulse * 0.08).toFixed(3) + ')', 1);
      } else if (e.type === 'wraith') {
        const p = project(G.player.x, G.player.y, 1);
        const q = project(e.x, e.y, 50);
        ctx.beginPath();
        ctx.setLineDash([8, 8]);
        ctx.moveTo(q.x, q.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = 'rgba(120, 255, 212, ' + (pulse * 0.75).toFixed(3) + ')';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.setLineDash([]);
        fillWorldCircle(G.player.x, G.player.y, 26, 'rgba(120, 255, 212, ' + (pulse * 0.15).toFixed(3) + ')', 1);
      } else if (e.type === 'boss') {
        if (e.attackKind === 'slam') {
          fillWorldCircle(e.targetX, e.targetY, e.slamRadius, 'rgba(170, 35, 30, ' + (pulse * 0.22).toFixed(3) + ')', 1);
          strokeWorldCircle(e.targetX, e.targetY, e.slamRadius, 'rgba(255, 108, 66, ' + pulse.toFixed(3) + ')', 3, 1);
          fillWorldCircle(e.targetX, e.targetY, e.slamRadius * t, 'rgba(255, 100, 56, ' + (pulse * 0.09).toFixed(3) + ')', 1);
        } else if (e.attackKind === 'cleave') {
          const pts = [project(e.x, e.y, 1), ...worldArcPoints(e.x, e.y, 215, e.attackAngle, 2.1, 1), project(e.x, e.y, 1)];
          pathFromPoints(pts, true);
          ctx.fillStyle = 'rgba(170, 35, 30, ' + (pulse * 0.3).toFixed(3) + ')';
          ctx.fill();
          pathFromPoints(worldArcPoints(e.x, e.y, 215, e.attackAngle, 2.1, 2));
          ctx.strokeStyle = 'rgba(255, 104, 62, ' + pulse.toFixed(3) + ')';
          ctx.lineWidth = 3;
          ctx.stroke();
        } else if (e.attackKind === 'charge') {
          const a = project(e.x, e.y, 1);
          const b = project(e.targetX, e.targetY, 1);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(255, 88, 50, ' + (pulse * 0.6).toFixed(3) + ')';
          ctx.lineWidth = 56;
          ctx.lineCap = 'round';
          ctx.stroke();
          ctx.strokeStyle = 'rgba(255, 180, 120, ' + (pulse * 0.65).toFixed(3) + ')';
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.lineCap = 'butt';
        } else if (e.attackKind === 'shockwave') {
          strokeWorldCircle(e.x, e.y, 40 + t * 300, 'rgba(255, 104, 62, ' + pulse.toFixed(3) + ')', 4, 1);
          strokeWorldCircle(e.x, e.y, 40 + t * 190, 'rgba(255, 104, 62, ' + (pulse * 0.6).toFixed(3) + ')', 2, 1);
        }
      }
    } else if (e.state === 'spawn') {
      const t = clamp(e.stateTime / e.spawnTime, 0, 1);
      strokeWorldCircle(e.x, e.y, 12 + t * 48, 'rgba(194, 72, 42, ' + (0.45 * (1 - t)).toFixed(3) + ')', 2, 1);
    }
  }
  ctx.restore();
}
