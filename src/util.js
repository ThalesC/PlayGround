import * as THREE from 'three';

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (t) => {
  t = clamp(t, 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const rand = (min, max) => min + Math.random() * (max - min);

export function angleDelta(from, to) {
  let d = to - from;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export function turnToward(current, target, maxStep) {
  const d = angleDelta(current, target);
  if (Math.abs(d) <= maxStep) return target;
  return current + Math.sign(d) * maxStep;
}

export function yawTo(x1, z1, x2, z2) {
  return Math.atan2(x2 - x1, z2 - z1);
}

export function forwardFromYaw(yaw, out = new THREE.Vector3()) {
  return out.set(Math.sin(yaw), 0, Math.cos(yaw));
}

export function pointInSector(origin, facingYaw, point, reach, halfArc) {
  const dx = point.x - origin.x;
  const dz = point.z - origin.z;
  const dist = Math.hypot(dx, dz);
  if (dist > reach) return false;
  if (dist < 0.001) return true;
  const angle = Math.atan2(dx, dz);
  return Math.abs(angleDelta(facingYaw, angle)) <= halfArc;
}

export function segmentPointDistance2D(ax, az, bx, bz, px, pz) {
  const abx = bx - ax;
  const abz = bz - az;
  const apx = px - ax;
  const apz = pz - az;
  const len2 = abx * abx + abz * abz;
  let t = len2 > 0.000001 ? (apx * abx + apz * abz) / len2 : 0;
  t = clamp(t, 0, 1);
  const cx = ax + abx * t;
  const cz = az + abz * t;
  return Math.hypot(px - cx, pz - cz);
}

export function isVisibleOnScreen(camera, worldPoint, maxDistance = 1.05) {
  const projected = worldPoint.clone().project(camera);
  if (projected.z > 1 || projected.z < -1) return false;
  return Math.abs(projected.x) <= maxDistance && Math.abs(projected.y) <= maxDistance;
}

export function makeTextSprite(text, options = {}) {
  const canvas = document.createElement('canvas');
  const size = 256;
  canvas.width = size;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, 128);
  ctx.font = `${options.fontWeight || 600} ${options.fontSize || 34}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = options.color || 'rgba(255,244,218,0.96)';
  ctx.shadowColor = 'rgba(0,0,0,0.85)';
  ctx.shadowBlur = 8;
  ctx.fillText(text, size / 2, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  const scale = options.scale || 1;
  sprite.scale.set(3.0 * scale, 1.5 * scale, 1);
  return sprite;
}
