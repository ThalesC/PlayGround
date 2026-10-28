'use strict';

function drawPlayer(p) {
  const pos = project(p.x, p.y, 0);
  const f = project(p.face.x, p.face.y, 0);
  const flip = f.x < -0.01 ? -1 : 1;
  const t = G.time;
  const moving = p.moving && (p.state === 'idle' || p.state === 'heavy' || p.guard);
  const walk = moving ? Math.sin(p.walkPhase) : 0;
  const bob = moving ? Math.abs(Math.sin(p.walkPhase)) * 2.4 : Math.sin(t * 2.1) * 1.2;

  ctx.save();
  ctx.translate(pos.x, pos.y);

  ctx.beginPath();
  ctx.ellipse(0, 4, 38, 13, 0, 0, TAU);
  ctx.fillStyle = 'rgba(0, 0, 0, .48)';
  ctx.fill();

  if (p.dead) {
    ctx.restore();
    drawFallenPlayer(pos, flip, p);
    return;
  }

  ctx.scale(flip, 1);
  ctx.translate(0, bob);

  let weaponAngle = 0.86 + Math.sin(t * 1.7) * 0.025;
  let lean = 0;
  let crouch = 0;
  let guardPose = false;
  let twoHands = false;

  if (p.guard) {
    weaponAngle = 1.55;
    lean = -1.5;
    guardPose = true;
    twoHands = true;
  }
  if (p.state === 'heavy') {
    weaponAngle = -1.98 + Math.sin(t * 10) * 0.035;
    lean = -3;
    crouch = 3;
    twoHands = true;
  }
  if (p.state === 'dodge') {
    weaponAngle = 1.12;
    lean = 3;
    crouch = 8;
  }
  if (p.attack) {
    const a = p.attack;
    const prog = clamp(a.time / a.duration, 0, 1);
    const hitP = a.hitTime / a.duration;
    if (a.type === 'ult') {
      weaponAngle = -2.65 + prog * 7.2;
      lean = Math.sin(prog * Math.PI) * 4;
      crouch = 4 + Math.sin(prog * Math.PI) * 8;
      twoHands = true;
    } else if (prog < hitP) {
      const k = easeIn(prog / hitP);
      weaponAngle = lerp(a.type === 'heavy' ? -2.6 : -2.38, a.type === 'heavy' ? 0.58 : 0.78, k);
      lean = -6 * (1 - k) + 3 * k;
      crouch = a.type === 'heavy' ? 4 + k * 5 : k * 3;
      twoHands = a.type === 'heavy';
    } else {
      const k = (prog - hitP) / (1 - hitP);
      weaponAngle = lerp(a.type === 'heavy' ? 0.58 : 0.78, 1.32, easeOut(k));
      lean = lerp(4, 1, k);
      crouch = lerp(a.type === 'heavy' ? 9 : 3, 0, k);
      twoHands = a.type === 'heavy';
    }
  }

  const breath = Math.sin(t * 2.1) * 1.1;
  ctx.translate(lean, crouch);
  ctx.rotate((lean * Math.PI) / 540);

  const capeSway = Math.sin(t * 2.2 + p.walkPhase * 0.4) * 4 + walk * 4;
  ctx.beginPath();
  ctx.moveTo(-19, -102);
  ctx.quadraticCurveTo(-31 + capeSway * 0.3, -63, -33 - capeSway, -16);
  ctx.lineTo(-16, -7);
  ctx.lineTo(7, -13);
  ctx.quadraticCurveTo(22, -62, 22, -101);
  ctx.closePath();
  const capeGrad = ctx.createLinearGradient(0, -105, 0, -8);
  capeGrad.addColorStop(0, '#4f1b1c');
  capeGrad.addColorStop(0.55, '#381216');
  capeGrad.addColorStop(1, '#1b0b0d');
  ctx.fillStyle = capeGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(188, 142, 83, .28)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-22, -95);
  ctx.quadraticCurveTo(-28, -55, -27 - capeSway * 0.6, -22);
  ctx.strokeStyle = 'rgba(201, 158, 94, .18)';
  ctx.stroke();

  const legStep = walk * 8;
  drawPlayerLeg(-9, -58, -15, -31, -16 - legStep, -4, false);
  drawPlayerLeg(9, -58, 14, -31, 16 + legStep, -4, true);

  ctx.beginPath();
  ctx.moveTo(-19, -64);
  ctx.lineTo(19, -64);
  ctx.lineTo(16, -53);
  ctx.lineTo(-16, -53);
  ctx.closePath();
  ctx.fillStyle = '#272a30';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .24)';
  ctx.stroke();

  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 7 - 4, -62);
    ctx.lineTo(i * 7 + 1, -45);
    ctx.lineTo(i * 7 + 6, -62);
    ctx.closePath();
    const tg = ctx.createLinearGradient(0, -64, 0, -44);
    tg.addColorStop(0, '#4a4e55');
    tg.addColorStop(1, '#24272d');
    ctx.fillStyle = tg;
    ctx.fill();
    ctx.strokeStyle = 'rgba(8, 9, 11, .5)';
    ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(-25, -101 + breath * 0.3);
  ctx.lineTo(25, -101 + breath * 0.3);
  ctx.lineTo(19, -59);
  ctx.lineTo(8, -54);
  ctx.lineTo(-8, -54);
  ctx.lineTo(-19, -59);
  ctx.closePath();
  const torsoGrad = ctx.createLinearGradient(-25, -100, 25, -55);
  torsoGrad.addColorStop(0, '#3d424a');
  torsoGrad.addColorStop(0.35, '#777d84');
  torsoGrad.addColorStop(0.62, '#565c64');
  torsoGrad.addColorStop(1, '#2c3036');
  ctx.fillStyle = torsoGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .68)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-14, -94);
  ctx.lineTo(14, -94);
  ctx.lineTo(10, -74);
  ctx.lineTo(0, -67);
  ctx.lineTo(-10, -74);
  ctx.closePath();
  const chestGrad = ctx.createLinearGradient(-14, -94, 14, -67);
  chestGrad.addColorStop(0, '#686f78');
  chestGrad.addColorStop(1, '#3b4048');
  ctx.fillStyle = chestGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .28)';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, -88);
  ctx.lineTo(6, -79);
  ctx.lineTo(0, -70);
  ctx.lineTo(-6, -79);
  ctx.closePath();
  ctx.fillStyle = 'rgba(224, 120, 61, .72)';
  ctx.fill();
  ctx.shadowColor = 'rgba(255, 135, 60, .85)';
  ctx.shadowBlur = 10;
  ctx.fillStyle = 'rgba(255, 195, 115, .8)';
  ctx.beginPath();
  ctx.arc(0, -79, 2.4, 0, TAU);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.moveTo(-20, -64);
  ctx.lineTo(20, -64);
  ctx.lineTo(20, -58);
  ctx.lineTo(-20, -58);
  ctx.closePath();
  ctx.fillStyle = '#2b2118';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .42)';
  ctx.stroke();
  ctx.fillStyle = '#c9a86a';
  ctx.beginPath();
  ctx.arc(0, -61, 4.2, 0, TAU);
  ctx.fill();
  ctx.fillStyle = '#2a1b12';
  ctx.beginPath();
  ctx.arc(0, -61, 2.2, 0, TAU);
  ctx.fill();

  drawPauldron(-26, -95, -1);
  drawPauldron(26, -95, 1);

  ctx.beginPath();
  ctx.rect(-7, -108, 14, 9);
  ctx.fillStyle = '#24272c';
  ctx.fill();

  const headTilt = lean * 0.08;
  ctx.save();
  ctx.translate(0, -112 + breath * 0.2);
  ctx.rotate(headTilt);
  ctx.beginPath();
  ctx.moveTo(-14, -4);
  ctx.lineTo(-11, -16);
  ctx.lineTo(-3, -22);
  ctx.lineTo(8, -21);
  ctx.lineTo(14, -12);
  ctx.lineTo(13, 2);
  ctx.lineTo(5, 8);
  ctx.lineTo(-7, 7);
  ctx.closePath();
  const helmGrad = ctx.createLinearGradient(-14, -20, 14, 8);
  helmGrad.addColorStop(0, '#4a5059');
  helmGrad.addColorStop(0.45, '#8a9097');
  helmGrad.addColorStop(1, '#30343a');
  ctx.fillStyle = helmGrad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .72)';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-11, -4);
  ctx.lineTo(11, -5);
  ctx.lineTo(9, -1);
  ctx.lineTo(-9, 0);
  ctx.closePath();
  ctx.fillStyle = '#121417';
  ctx.fill();
  ctx.fillStyle = 'rgba(255, 154, 74, .95)';
  ctx.shadowColor = 'rgba(255, 110, 50, .9)';
  ctx.shadowBlur = 8;
  ctx.fillRect(-7, -3.5, 14, 1.8);
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.moveTo(-3, -22);
  ctx.lineTo(0, -33);
  ctx.lineTo(4, -22);
  ctx.closePath();
  ctx.fillStyle = '#b18e59';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-4, -33);
  ctx.quadraticCurveTo(-13, -39, -17, -31);
  ctx.quadraticCurveTo(-8, -34, -4, -27);
  ctx.closePath();
  ctx.fillStyle = '#7b2523';
  ctx.fill();
  ctx.restore();

  const pivot = { x: 22, y: -82 + breath * 0.2 };
  const grip = { x: pivot.x + Math.cos(weaponAngle) * 18, y: pivot.y + Math.sin(weaponAngle) * 18 };
  const second = { x: pivot.x + Math.cos(weaponAngle) * 39, y: pivot.y + Math.sin(weaponAngle) * 39 };

  if (!guardPose) {
    drawArm(-25, -92, -18, -60, false, false);
  }

  drawHammer(pivot, weaponAngle, p);

  drawArm(24, -92, grip.x, grip.y, true, false);
  if (twoHands) drawArm(-24, -91, second.x, second.y, false, true);

  if (p.state === 'heavy') {
    const glow = 0.45 + Math.sin(t * 14) * 0.2;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const end = { x: pivot.x + Math.cos(weaponAngle) * 88, y: pivot.y + Math.sin(weaponAngle) * 88 };
    const g = ctx.createRadialGradient(end.x, end.y, 0, end.x, end.y, 48);
    g.addColorStop(0, 'rgba(255, 206, 136, ' + (glow * 0.5).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(255, 96, 34, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(end.x, end.y, 48, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  if (p.guard) {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.beginPath();
    ctx.arc(0, -62, 54, -2.5, 0.4);
    ctx.strokeStyle = 'rgba(170, 207, 216, .18)';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();
  }

  ctx.restore();
}

function drawPlayerLeg(hipX, hipY, kneeX, kneeY, footX, footY, front) {
  ctx.beginPath();
  ctx.moveTo(hipX - 6, hipY);
  ctx.lineTo(hipX + 7, hipY);
  ctx.lineTo(kneeX + 6, kneeY);
  ctx.lineTo(kneeX - 5, kneeY);
  ctx.closePath();
  const tg = ctx.createLinearGradient(hipX, hipY, kneeX, kneeY);
  tg.addColorStop(0, front ? '#4d5259' : '#363a40');
  tg.addColorStop(1, front ? '#666b72' : '#454a51');
  ctx.fillStyle = tg;
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .62)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(kneeX - 5, kneeY);
  ctx.lineTo(kneeX + 6, kneeY);
  ctx.lineTo(footX + 8, footY - 4);
  ctx.lineTo(footX - 7, footY - 4);
  ctx.closePath();
  const sg = ctx.createLinearGradient(kneeX, kneeY, footX, footY);
  sg.addColorStop(0, front ? '#5b6067' : '#3d4148');
  sg.addColorStop(1, '#24272c');
  ctx.fillStyle = sg;
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .6)';
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(footX, footY - 2, 9, 4.5, 0, 0, TAU);
  ctx.fillStyle = '#1f2227';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .18)';
  ctx.stroke();
}

function drawPauldron(x, y, side) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.ellipse(0, 0, 14, 11, side * 0.22, 0, TAU);
  const g = ctx.createLinearGradient(-14, -10, 14, 10);
  g.addColorStop(0, '#8d939a');
  g.addColorStop(0.45, '#5b6068');
  g.addColorStop(1, '#292d33');
  ctx.fillStyle = g;
  ctx.fill();
  ctx.strokeStyle = 'rgba(7, 8, 10, .65)';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(side * 4, -8);
  ctx.lineTo(side * 12, -21);
  ctx.lineTo(side * 14, -6);
  ctx.closePath();
  ctx.fillStyle = '#b08e5a';
  ctx.fill();
  ctx.strokeStyle = 'rgba(40, 26, 14, .7)';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(side * 4, -3, 2.2, 0, TAU);
  ctx.fillStyle = 'rgba(224, 170, 98, .65)';
  ctx.fill();
  ctx.restore();
}

function drawArm(x1, y1, x2, y2, front, both) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = front ? '#6c7178' : '#464b52';
  ctx.lineWidth = 9;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = 'rgba(201, 168, 106, .18)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x2, y2, 5.2, 0, TAU);
  ctx.fillStyle = '#2d3036';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .35)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.lineCap = 'butt';
}

function drawHammer(pivot, angle, p) {
  const len = 88;
  const end = { x: pivot.x + Math.cos(angle) * len, y: pivot.y + Math.sin(angle) * len };
  ctx.save();
  ctx.translate(pivot.x, pivot.y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(len - 8, 0);
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 7;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(4, 0);
  ctx.lineTo(len - 12, 0);
  ctx.strokeStyle = '#7a5c34';
  ctx.lineWidth = 2;
  ctx.stroke();
  for (let i = 8; i < len - 18; i += 13) {
    ctx.beginPath();
    ctx.moveTo(i, -3);
    ctx.lineTo(i + 3, 3);
    ctx.strokeStyle = 'rgba(201, 168, 106, .42)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  ctx.translate(len - 6, 0);
  ctx.beginPath();
  ctx.moveTo(-16, -20);
  ctx.lineTo(10, -17);
  ctx.lineTo(16, -7);
  ctx.lineTo(16, 7);
  ctx.lineTo(10, 17);
  ctx.lineTo(-16, 20);
  ctx.closePath();
  const hg = ctx.createLinearGradient(-16, -20, 16, 20);
  hg.addColorStop(0, '#5b6068');
  hg.addColorStop(0.32, '#9ba0a4');
  hg.addColorStop(0.6, '#585d64');
  hg.addColorStop(1, '#25292f');
  ctx.fillStyle = hg;
  ctx.fill();
  ctx.strokeStyle = 'rgba(7, 8, 10, .75)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-12, -16);
  ctx.lineTo(8, -13);
  ctx.moveTo(-12, 16);
  ctx.lineTo(8, 13);
  ctx.strokeStyle = 'rgba(201, 168, 106, .28)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-4, -8);
  ctx.lineTo(4, 0);
  ctx.lineTo(-4, 8);
  ctx.lineTo(-10, 0);
  ctx.closePath();
  ctx.fillStyle = p.state === 'heavy' ? 'rgba(255, 184, 96, .9)' : 'rgba(224, 120, 61, .65)';
  ctx.shadowColor = 'rgba(255, 132, 55, .9)';
  ctx.shadowBlur = p.state === 'heavy' ? 16 : 8;
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.restore();
}

function drawFallenPlayer(pos, flip, p) {
  ctx.save();
  ctx.translate(pos.x, pos.y);
  ctx.scale(flip, 1);
  ctx.rotate(1.15);
  ctx.globalAlpha = clamp(1 - Math.max(0, p.deadTimer - 1.8) * 0.25, 0.3, 1);
  ctx.beginPath();
  ctx.moveTo(-14, -54);
  ctx.lineTo(14, -54);
  ctx.lineTo(20, -4);
  ctx.lineTo(-20, -4);
  ctx.closePath();
  ctx.fillStyle = '#343840';
  ctx.fill();
  ctx.strokeStyle = 'rgba(8, 9, 11, .7)';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, -62, 13, 0, TAU);
  ctx.fillStyle = '#5b6068';
  ctx.fill();
  ctx.strokeStyle = 'rgba(201, 168, 106, .25)';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(12, -46);
  ctx.lineTo(88, -26);
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.save();
  ctx.translate(92, -24);
  ctx.rotate(0.24);
  ctx.fillStyle = '#565b62';
  ctx.fillRect(-14, -14, 28, 28);
  ctx.strokeStyle = 'rgba(7, 8, 10, .7)';
  ctx.strokeRect(-14, -14, 28, 28);
  ctx.restore();
  ctx.restore();
}
