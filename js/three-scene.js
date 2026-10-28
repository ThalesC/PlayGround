'use strict';

let world3D = null;

function isWorld3DReady() {
  return !!(world3D && world3D.ready);
}

function initWorld3D() {
  if (world3D) return;
  const canvas3d = document.getElementById('world3d');
  if (!canvas3d || typeof THREE === 'undefined') {
    if (canvas3d) canvas3d.style.display = 'none';
    world3D = { ready: false };
    return;
  }

  try {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas3d,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.98;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.matrixAutoUpdate = false;
    camera.matrixWorld.identity();
    camera.matrixWorldInverse.identity();
    camera.matrixWorldNeedsUpdate = false;
    camera.near = -4000;
    camera.far = 4000;

    const hemi = new THREE.HemisphereLight(0x9fb0c2, 0x24170f, 0.62);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xffd2a0, 1.08);
    key.position.set(360, -240, 560);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -900;
    key.shadow.camera.right = 900;
    key.shadow.camera.top = 900;
    key.shadow.camera.bottom = -900;
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 2200;
    key.shadow.bias = -0.0005;
    key.shadow.normalBias = 0.02;
    key.shadow.camera.updateProjectionMatrix();
    key.target.position.set(0, 0, 0);
    scene.add(key);
    scene.add(key.target);
    const fill = new THREE.DirectionalLight(0x7e9fc4, 0.32);
    fill.position.set(-380, 320, 220);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xff7a42, 0.34);
    rim.position.set(-240, -360, 180);
    scene.add(rim);

    const env = makeEnvironmentTexture();
    scene.environment = env;
    const shadowGround = new THREE.Mesh(
      new THREE.PlaneGeometry(2600, 2600),
      new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.34 })
    );
    shadowGround.position.z = -1.2;
    shadowGround.receiveShadow = true;
    shadowGround.material.depthWrite = false;
    shadowGround.renderOrder = -2;
    scene.add(shadowGround);

    world3D = {
      ready: true,
      renderer,
      scene,
      camera,
      models: new Map(),
      materials: new Map(),
      haloMaterials: new Map(),
      shadowTexture: makeShadowTexture(),
      shadowMaterial: null,
      proj: new THREE.Matrix4(),
      lastTime: 0
    };
    world3D.shadowMaterial = new THREE.MeshBasicMaterial({
      map: world3D.shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.45
    });

    canvas3d.style.display = 'block';
    resizeWorld3D();
    window.addEventListener('resize', resizeWorld3D);
    canvas3d.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      world3D.ready = false;
      canvas3d.style.display = 'none';
    });
  } catch (err) {
    console.warn('3D character renderer unavailable, using 2D fallback.', err);
    canvas3d.style.display = 'none';
    world3D = { ready: false };
  }
}

function resizeWorld3D() {
  if (!isWorld3DReady()) return;
  world3D.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  world3D.renderer.setSize(W, H, false);
}

function makeShadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 6, 64, 64, 62);
  grad.addColorStop(0, 'rgba(0,0,0,.72)');
  grad.addColorStop(0.45, 'rgba(0,0,0,.42)');
  grad.addColorStop(0.78, 'rgba(0,0,0,.14)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function makeEnvironmentTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#2f4057');
  grad.addColorStop(0.42, '#171b22');
  grad.addColorStop(0.58, '#2a1b13');
  grad.addColorStop(1, '#070504');
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 256);
  const warm = g.createRadialGradient(370, 86, 4, 370, 86, 120);
  warm.addColorStop(0, 'rgba(255, 192, 118, .85)');
  warm.addColorStop(0.45, 'rgba(224, 120, 61, .28)');
  warm.addColorStop(1, 'rgba(224, 120, 61, 0)');
  g.fillStyle = warm;
  g.fillRect(0, 0, 512, 256);
  const cool = g.createRadialGradient(120, 54, 4, 120, 54, 150);
  cool.addColorStop(0, 'rgba(126, 159, 196, .5)');
  cool.addColorStop(1, 'rgba(126, 159, 196, 0)');
  g.fillStyle = cool;
  g.fillRect(0, 0, 512, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.encoding = THREE.sRGBEncoding;
  tex.needsUpdate = true;
  return tex;
}

function getMat(color, opts = {}) {
  const key = color + '|' + JSON.stringify(opts);
  let mat = world3D.materials.get(key);
  if (!mat) {
    mat = new THREE.MeshStandardMaterial(Object.assign({
      color,
      roughness: 0.78,
      metalness: 0.08,
      flatShading: false,
      envMapIntensity: 0.48
    }, opts));
    world3D.materials.set(key, mat);
  }
  return mat;
}

function box(w, h, d, material) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
}

function roundedRectShape(w, h, r) {
  const x = -w / 2;
  const y = -h / 2;
  const s = new THREE.Shape();
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function rbox(w, h, d, r, material) {
  const radius = Math.min(r, Math.min(w, h) * 0.45);
  const shape = roundedRectShape(w, h, radius);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: d,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: radius * 0.28,
    bevelThickness: radius * 0.28,
    curveSegments: 3
  });
  geo.center();
  return new THREE.Mesh(geo, material);
}

function cyl(rTop, rBottom, h, seg, material) {
  return new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, Math.max(8, seg)), material);
}

function sphere(r, material, seg = 12) {
  return new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, Math.floor(seg * 0.75))), material);
}

function cone(r, h, seg, material) {
  return new THREE.Mesh(new THREE.ConeGeometry(r, h, Math.max(8, seg)), material);
}

function addPart(parent, mesh, x, y, z) {
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function makeShadow(w, d) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, d), world3D.shadowMaterial);
  mesh.position.z = -0.6;
  mesh.renderOrder = -1;
  return mesh;
}

function makeLimb(length, rTop, rBottom, material) {
  const geo = new THREE.CylinderGeometry(rTop, rBottom, length, 10, 1);
  geo.translate(0, -length / 2, 0);
  const mesh = new THREE.Mesh(geo, material);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function makeLeg(parent, side, z, length, radius, limbMat, bootMat, boot) {
  const pivot = new THREE.Group();
  pivot.position.set(0, side, z);
  parent.add(pivot);
  pivot.add(makeLimb(length, radius, radius * 0.82, limbMat));
  const foot = box(boot[0], boot[1], boot[2], bootMat);
  foot.position.set(boot[0] * 0.22, 0, -length + boot[2] * 0.35);
  pivot.add(foot);
  return pivot;
}

function makeArm(parent, side, z, length, radius, limbMat, handMat) {
  const pivot = new THREE.Group();
  pivot.position.set(0, side, z);
  parent.add(pivot);
  pivot.add(makeLimb(length, radius, radius * 0.72, limbMat));
  const hand = sphere(radius * 1.16, handMat, 6);
  hand.position.z = -length;
  pivot.add(hand);
  return pivot;
}

function makeCape(width, height, material, segments = 8) {
  const geo = new THREE.PlaneGeometry(width, height, segments, 4);
  const mesh = new THREE.Mesh(geo, material);
  mesh.rotation.y = Math.PI / 2;
  mesh.userData.capeBase = geo.attributes.position.array.slice();
  mesh.userData.capeWidth = width;
  mesh.userData.capeHeight = height;
  return mesh;
}

function makeRobeGeometry(bottomR, topR, height, steps = 10) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const r = bottomR + (topR - bottomR) * Math.pow(t, 0.72);
    points.push(new THREE.Vector2(r, t * height));
  }
  return new THREE.LatheGeometry(points, 20);
}

function animateCape(cape, t, speed, amp) {
  if (!cape) return;
  const pos = cape.geometry.attributes.position;
  const base = cape.userData.capeBase;
  const w = cape.userData.capeWidth;
  for (let i = 0; i < pos.count; i++) {
    const x = base[i * 3];
    const y = base[i * 3 + 1];
    const down = clamp(x / w + 0.5, 0, 1);
    const z = (Math.sin(x * 0.22 + t * speed + y * 0.17) * amp + Math.sin(y * 0.5 + t * speed * 0.63) * amp * 0.35) * down;
    pos.setZ(i, z);
  }
  pos.needsUpdate = true;
  cape.geometry.computeVertexNormals();
}

function getHaloMat(color, opacity) {
  const key = color + '|' + opacity;
  let mat = world3D.haloMaterials.get(key);
  if (!mat) {
    mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    world3D.haloMaterials.set(key, mat);
  }
  return mat;
}

function makeHalo(color, radius) {
  const group = new THREE.Group();
  const layers = [
    [radius, 0.48],
    [radius * 1.7, 0.16],
    [radius * 2.55, 0.055]
  ];
  for (const [r, o] of layers) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 9), getHaloMat(color, o));
    mesh.userData.noShadow = true;
    group.add(mesh);
  }
  return group;
}

function addFlash(body, radius, z) {
  const material = new THREE.MeshBasicMaterial({
    color: 0xffe4bd,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 10, 8), material);
  mesh.position.z = z;
  mesh.visible = false;
  mesh.userData.noShadow = true;
  body.add(mesh);
  return mesh;
}

function createPlayerModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const steel = getMat(0x59636d, { roughness: 0.34, metalness: 0.72 });
  const steelDark = getMat(0x262a30, { roughness: 0.5, metalness: 0.62 });
  const steelLight = getMat(0x7e8995, { roughness: 0.3, metalness: 0.78 });
  const cloth = getMat(0x5e171c, { roughness: 0.95, metalness: 0, side: THREE.DoubleSide });
  const clothDark = getMat(0x380e11, { roughness: 0.97, metalness: 0, side: THREE.DoubleSide });
  const leather = getMat(0x3b2a22, { roughness: 0.96 });
  const gold = getMat(0xb08a4e, { roughness: 0.28, metalness: 0.9 });
  const eye = getMat(0xffd58a, { emissive: 0xff8a35, emissiveIntensity: 3.2, roughness: 0.3 });

  root.add(makeShadow(60, 34));

  const hips = new THREE.Group();
  hips.position.z = 50;
  body.add(hips);
  addPart(hips, rbox(16, 24, 12, 2.5, steelDark), 0, 0, 0);
  addPart(hips, rbox(18, 26, 5, 2, gold), 0, 0, 6);
  addPart(hips, rbox(5, 9, 22, 1.5, cloth), 0, -9, -8);
  addPart(hips, rbox(5, 9, 22, 1.5, cloth), 0, 9, -8);
  addPart(hips, rbox(3, 18, 10, 1, steelDark), 8, 0, -8);
  addPart(hips, rbox(3, 18, 10, 1, steelDark), -8, 0, -8);

  const legL = makeLeg(hips, -10, -2, 46, 6.2, steelDark, steel, [10, 14, 8]);
  const legR = makeLeg(hips, 10, -2, 46, 6.2, steelDark, steel, [10, 14, 8]);
  for (const leg of [legL, legR]) {
    addPart(leg, sphere(5.2, steelLight, 10), 2.5, 0, -22);
    addPart(leg, rbox(7, 8, 16, 1.5, steel), 2, 0, -34);
    addPart(leg, rbox(3, 10, 4, 1, gold), 6.5, 0, -34);
  }

  const torso = new THREE.Group();
  torso.position.z = 76;
  body.add(torso);
  addPart(torso, rbox(18, 28, 38, 3.5, steel), 0, 0, 0);
  addPart(torso, rbox(20, 26, 20, 3, steelLight), 0, 0, 8);
  addPart(torso, rbox(16, 20, 10, 2, steelDark), 0, 0, -10);
  addPart(torso, rbox(16, 24, 18, 2, steelDark), -10, 0, 0);
  const gorget = cyl(9, 10, 5, 12, gold);
  gorget.rotation.x = Math.PI / 2;
  gorget.position.z = 19;
  torso.add(gorget);
  addPart(torso, box(3, 22, 26, gold), 14, 0, 2);
  addPart(torso, box(4, 20, 4, gold), 14, 0, 14);
  addPart(torso, sphere(4, gold, 10), 15, 0, 10);

  const cape = makeCape(44, 22, cloth, 10);
  cape.position.set(-17, 0, 0);
  torso.add(cape);
  addPart(torso, rbox(2, 10, 30, 1, cloth), 14.6, 0, 0);
  addPart(torso, rbox(2.4, 1.6, 26, 1, gold), 15.1, -4.5, 0);
  addPart(torso, rbox(2.4, 1.6, 26, 1, gold), 15.1, 4.5, 0);
  addPart(torso, rbox(2, 8, 10, 1, clothDark), 14.7, 0, -18);

  for (const side of [-1, 1]) {
    const pauldron = sphere(10, steel, 12);
    pauldron.scale.set(1.05, 0.95, 0.9);
    pauldron.position.set(0, side * 18, 14);
    torso.add(pauldron);
    addPart(torso, sphere(6.5, steelLight, 10), 0, side * 18, 19);
    addPart(torso, box(14, 4, 3, gold), 0, side * 18, 22);
    const spike = cone(2.2, 8, 8, gold);
    spike.rotation.x = Math.PI / 2;
    spike.position.set(0, side * 18, 24);
    torso.add(spike);
  }

  const head = new THREE.Group();
  head.position.z = 105;
  body.add(head);
  const helm = sphere(11, steel, 14);
  helm.scale.set(1, 0.96, 1.08);
  head.add(helm);
  addPart(head, rbox(2.5, 4, 12, 1, steelDark), 7, -7, 0);
  addPart(head, rbox(2.5, 4, 12, 1, steelDark), 7, 7, 0);
  addPart(head, rbox(2, 10, 4, 1, eye), 10.2, 0, 1);
  addPart(head, rbox(4, 12, 3, 1, steelDark), 10.5, 0, 4);
  addPart(head, rbox(3, 14, 2, 1, steelLight), 11, 0, 7);
  const crest = cone(3.2, 15, 8, cloth);
  crest.rotation.x = Math.PI / 2;
  crest.position.set(-2, 0, 13);
  head.add(crest);
  const visorGlow = makeHalo(0xffb15e, 3.2);
  visorGlow.position.set(11.5, 0, 1);
  head.add(visorGlow);

  const armL = makeArm(body, -20, 86, 40, 5.5, steel, leather);
  const armR = makeArm(body, 20, 86, 40, 5.5, steel, leather);
  for (const arm of [armL, armR]) {
    addPart(arm, sphere(5.6, steelLight, 10), 0, 0, -20);
    addPart(arm, rbox(7, 7, 12, 1.5, steelLight), 0, 0, -32);
    addPart(arm, box(8, 2, 3, gold), 0, 0, -36);
  }

  const shield = cyl(11, 11, 3, 16, steel);
  shield.rotation.z = Math.PI / 2;
  shield.position.set(-2, 0, -36);
  armL.add(shield);
  const shieldRim = cyl(12.5, 12.5, 1.2, 16, gold);
  shieldRim.rotation.z = Math.PI / 2;
  shieldRim.position.set(-3.4, 0, -36);
  armL.add(shieldRim);
  addPart(armL, sphere(4.5, steel, 12), -3.8, 0, -36);
  const shieldCross = box(1.5, 10, 2, cloth);
  shieldCross.position.set(-4.2, 0, -36);
  armL.add(shieldCross);
  const shieldCross2 = box(1.5, 2, 10, cloth);
  shieldCross2.position.set(-4.2, 0, -36);
  armL.add(shieldCross2);

  const hammer = new THREE.Group();
  hammer.position.z = -40;
  armR.add(hammer);
  const haft = cyl(2.5, 3, 38, 10, leather);
  haft.rotation.x = Math.PI / 2;
  haft.position.z = -19;
  hammer.add(haft);
  addPart(hammer, sphere(3.5, gold, 10), 0, 0, 0);
  addPart(hammer, rbox(18, 12, 12, 2, steelDark), 0, 0, -38);
  addPart(hammer, rbox(19, 13, 2.5, 1, gold), 0, 0, -33);
  addPart(hammer, rbox(19, 13, 2.5, 1, gold), 0, 0, -43);
  const hammerSpike = cone(2.6, 9, 8, steelLight);
  hammerSpike.rotation.z = -Math.PI / 2;
  hammerSpike.position.set(10, 0, -38);
  hammer.add(hammerSpike);

  root.userData = {
    kind: 'player',
    body,
    hips,
    legL,
    legR,
    armL,
    armR,
    head,
    weapon: hammer,
    cape,
    baseZ: 0,
    hunch: 0,
    flashMesh: null
  };
  return root;
}

function createHuskModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const skin = getMat(0x414a42, { roughness: 0.92, metalness: 0 });
  const skinDark = getMat(0x2e342e, { roughness: 0.95, metalness: 0 });
  const rag = getMat(0x23211d, { roughness: 0.98, metalness: 0, side: THREE.DoubleSide });
  const ragLight = getMat(0x35302a, { roughness: 0.98, metalness: 0, side: THREE.DoubleSide });
  const bone = getMat(0x8f8772, { roughness: 0.8, metalness: 0 });
  const eye = getMat(0xff6a3c, { emissive: 0xff2d12, emissiveIntensity: 2.6, roughness: 0.32 });

  root.add(makeShadow(48, 28));

  const hips = new THREE.Group();
  hips.position.z = 32;
  body.add(hips);
  addPart(hips, rbox(12, 18, 10, 2, rag), 0, 0, 0);
  addPart(hips, rbox(13, 20, 3, 1, bone), 0, 0, 5);
  addPart(hips, rbox(4, 12, 16, 1, ragLight), 7, 0, -8);
  const legL = makeLeg(hips, -7, -2, 30, 4.4, skinDark, rag, [8, 10, 6]);
  const legR = makeLeg(hips, 7, -2, 30, 4.4, skinDark, rag, [8, 10, 6]);
  for (const leg of [legL, legR]) {
    addPart(leg, sphere(4.2, bone, 9), 2, 0, -15);
    addPart(leg, rbox(3, 6, 10, 1, bone), 4, 0, -22);
  }

  const torso = new THREE.Group();
  torso.position.z = 49;
  body.add(torso);
  addPart(torso, rbox(14, 22, 30, 3, rag), 0, 0, 0);
  addPart(torso, rbox(12, 18, 20, 2.5, skin), 1, 0, 3);
  addPart(torso, rbox(5, 18, 20, 1.5, ragLight), -8, 0, -12);
  for (let i = 0; i < 4; i++) {
    addPart(torso, box(2.6, 14, 2.6, bone), 8, 0, 11 - i * 5);
  }
  addPart(torso, box(2.4, 11, 2.4, bone), 7, -6, 6);
  addPart(torso, box(2.4, 11, 2.4, bone), 7, 6, 6);
  for (let i = 0; i < 4; i++) {
    const spine = cone(1.4, 6, 6, bone);
    spine.rotation.z = Math.PI / 2;
    spine.position.set(-11, 0, 12 - i * 5);
    torso.add(spine);
  }
  addPart(torso, rbox(6, 10, 8, 2, ragLight), 0, -11, 13);
  addPart(torso, rbox(6, 10, 8, 2, ragLight), 0, 11, 13);

  const cloak = makeCape(36, 22, rag, 8);
  cloak.position.set(-10, 0, 49);
  body.add(cloak);

  const armL = makeArm(body, -11, 57, 42, 4, skin, skinDark);
  const armR = makeArm(body, 11, 57, 42, 4, skin, skinDark);
  for (const arm of [armL, armR]) {
    addPart(arm, sphere(4.2, bone, 9), 0, 0, -21);
    addPart(arm, rbox(4, 4, 9, 1, skinDark), 0, 0, -31);
  }
  for (const [arm, side] of [[armL, -1], [armR, 1]]) {
    for (let i = 0; i < 3; i++) {
      const claw = cone(1.2, 8, 7, bone);
      claw.position.set(0, side * (i - 1) * 2.2, -45);
      claw.rotation.x = -Math.PI / 2;
      arm.add(claw);
    }
  }

  const head = new THREE.Group();
  head.position.z = 67;
  body.add(head);
  const skull = sphere(7.5, skin, 10);
  skull.scale.set(1.1, 0.86, 1);
  head.add(skull);
  addPart(head, rbox(7, 7, 5, 1.5, skinDark), 5, 0, -2);
  addPart(head, rbox(6, 8, 2, 1, bone), 8, 0, -5);
  addPart(head, sphere(1.6, eye, 8), 7.2, -2.4, 1.5);
  addPart(head, sphere(1.6, eye, 8), 7.2, 2.4, 1.5);
  const eyeGlowL = makeHalo(0xff4a2a, 2.6);
  eyeGlowL.position.set(7.2, -2.4, 1.5);
  head.add(eyeGlowL);
  const eyeGlowR = makeHalo(0xff4a2a, 2.6);
  eyeGlowR.position.set(7.2, 2.4, 1.5);
  head.add(eyeGlowR);
  const hood = cone(10, 16, 8, rag);
  hood.rotation.x = Math.PI / 2;
  hood.position.set(-3, 0, 5);
  head.add(hood);
  for (let i = 0; i < 3; i++) {
    addPart(head, box(1.5, 1.5, 3, bone), 8, -2 + i * 2, -5);
  }

  const flashMesh = addFlash(body, 34, 38);
  root.userData = {
    kind: 'husk',
    body,
    hips,
    legL,
    legR,
    armL,
    armR,
    head,
    weapon: null,
    cape: cloak,
    baseZ: 0,
    hunch: 0.17,
    flashMesh
  };
  return root;
}

function createBruteModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const skin = getMat(0x463e36, { roughness: 0.93, metalness: 0.02 });
  const skinDark = getMat(0x2c2722, { roughness: 0.96, metalness: 0 });
  const armor = getMat(0x2e2e2b, { roughness: 0.56, metalness: 0.4 });
  const armorLight = getMat(0x4b4942, { roughness: 0.46, metalness: 0.5 });
  const leather = getMat(0x241a14, { roughness: 0.98 });
  const wood = getMat(0x46352a, { roughness: 0.9 });
  const iron = getMat(0x232528, { roughness: 0.44, metalness: 0.6 });
  const bone = getMat(0x8f8269, { roughness: 0.8 });
  const eye = getMat(0xffb15e, { emissive: 0xff5a1f, emissiveIntensity: 2.8, roughness: 0.32 });

  root.add(makeShadow(76, 44));

  const hips = new THREE.Group();
  hips.position.z = 40;
  body.add(hips);
  addPart(hips, rbox(24, 34, 16, 4, armor), 0, 0, 0);
  addPart(hips, rbox(20, 30, 5, 2, leather), 0, 0, 8);
  addPart(hips, rbox(4, 14, 20, 1, leather), 10, 0, -9);
  addPart(hips, rbox(4, 8, 6, 1, armorLight), 12, 0, 11);
  const legL = makeLeg(hips, -13, -2, 38, 8.2, skin, armor, [14, 18, 10]);
  const legR = makeLeg(hips, 13, -2, 38, 8.2, skin, armor, [14, 18, 10]);
  for (const leg of [legL, legR]) {
    addPart(leg, sphere(7.4, armorLight, 10), 3, 0, -19);
    addPart(leg, rbox(10, 12, 18, 2, armor), 2, 0, -30);
    addPart(leg, rbox(11, 13, 4, 1.5, iron), 2, 0, -37);
  }

  const torso = new THREE.Group();
  torso.position.z = 68;
  body.add(torso);
  addPart(torso, rbox(30, 48, 42, 5, armor), 0, 0, 0);
  addPart(torso, rbox(24, 40, 20, 4, skin), 2, 0, 3);
  addPart(torso, rbox(28, 44, 8, 3, armorLight), 0, 0, 17);
  addPart(torso, rbox(18, 34, 5, 2, leather), -14, 0, -22);
  addPart(torso, rbox(8, 3, 26, 1, iron), 0, -22, 8);
  addPart(torso, rbox(8, 3, 26, 1, iron), 0, 22, 8);
  const gorget = cyl(11, 13, 6, 14, armorLight);
  gorget.rotation.x = Math.PI / 2;
  gorget.position.z = 23;
  torso.add(gorget);

  for (const side of [-1, 1]) {
    const pauldron = sphere(15, armor, 14);
    pauldron.scale.set(1.05, 0.98, 0.92);
    pauldron.position.set(0, side * 26, 16);
    torso.add(pauldron);
    addPart(torso, sphere(10, armorLight, 12), 0, side * 26, 22);
    addPart(torso, box(18, 5, 4, iron), 0, side * 26, 26);
    const spike = cone(3, 11, 8, iron);
    spike.position.set(0, side * 26, 30);
    torso.add(spike);
  }
  for (let i = 0; i < 4; i++) {
    const tooth = cone(1.4, 5, 7, bone);
    tooth.rotation.x = -Math.PI / 2;
    tooth.position.set(16, -5 + i * 3.2, 8);
    torso.add(tooth);
  }

  const armL = makeArm(body, -26, 84, 40, 8, skin, skinDark);
  const armR = makeArm(body, 26, 84, 40, 8, skin, skinDark);
  for (const arm of [armL, armR]) {
    addPart(arm, sphere(8.4, armor, 12), 0, 0, -20);
    addPart(arm, rbox(11, 11, 14, 2, armorLight), 0, 0, -32);
    addPart(arm, box(12, 3, 4, iron), 0, 0, -38);
  }

  const club = new THREE.Group();
  club.position.z = -46;
  armR.add(club);
  const haft = cyl(3.5, 4.5, 32, 12, wood);
  haft.rotation.x = Math.PI / 2;
  haft.position.z = -16;
  club.add(haft);
  addPart(club, sphere(4.5, iron, 10), 0, 0, 0);
  addPart(club, rbox(26, 19, 22, 3, iron), 0, 0, -34);
  addPart(club, rbox(28, 20, 4, 2, armorLight), 0, 0, -27);
  addPart(club, rbox(28, 20, 4, 2, armorLight), 0, 0, -41);
  const clubSpikeX = cone(2.6, 10, 8, armorLight);
  clubSpikeX.rotation.z = -Math.PI / 2;
  clubSpikeX.position.set(16, 0, -34);
  club.add(clubSpikeX);
  const clubSpikeY = cone(2.6, 10, 8, armorLight);
  clubSpikeY.position.set(0, 13, -34);
  club.add(clubSpikeY);
  const clubSpikeZ = cone(2.6, 10, 8, armorLight);
  clubSpikeZ.rotation.x = -Math.PI / 2;
  clubSpikeZ.position.set(0, 0, -47);
  club.add(clubSpikeZ);

  const head = new THREE.Group();
  head.position.z = 101;
  body.add(head);
  const skull = sphere(10, skin, 14);
  skull.scale.set(1.05, 0.95, 0.9);
  head.add(skull);
  addPart(head, rbox(13, 15, 9, 2, armor), 3, 0, 0);
  addPart(head, rbox(3, 16, 4, 1, iron), 8, 0, 6);
  addPart(head, sphere(2, eye, 8), 9.5, -3, 1.5);
  addPart(head, sphere(2, eye, 8), 9.5, 3, 1.5);
  const eyeGlowL = makeHalo(0xff8a3a, 3);
  eyeGlowL.position.set(9.5, -3, 1.5);
  head.add(eyeGlowL);
  const eyeGlowR = makeHalo(0xff8a3a, 3);
  eyeGlowR.position.set(9.5, 3, 1.5);
  head.add(eyeGlowR);
  const tuskL = cone(2.2, 9, 8, bone);
  tuskL.rotation.z = -Math.PI / 2;
  tuskL.position.set(8, -5, -3);
  head.add(tuskL);
  const tuskR = cone(2.2, 9, 8, bone);
  tuskR.rotation.z = -Math.PI / 2;
  tuskR.position.set(8, 5, -3);
  head.add(tuskR);
  const hornL = cone(2.5, 11, 8, armorLight);
  hornL.rotation.x = Math.PI / 2;
  hornL.position.set(-2, -8, 8);
  head.add(hornL);
  const hornR = cone(2.5, 11, 8, armorLight);
  hornR.rotation.x = Math.PI / 2;
  hornR.position.set(-2, 8, 8);
  head.add(hornR);

  const flashMesh = addFlash(body, 52, 55);
  root.userData = {
    kind: 'brute',
    body,
    hips,
    legL,
    legR,
    armL,
    armR,
    head,
    weapon: club,
    baseZ: 0,
    hunch: 0.07,
    flashMesh
  };
  return root;
}

function createWraithModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const robe = getMat(0x102826, { roughness: 0.86, metalness: 0.08, side: THREE.DoubleSide });
  const robeDark = getMat(0x081817, { roughness: 0.9, metalness: 0.05, side: THREE.DoubleSide });
  const trim = getMat(0x2f675d, { roughness: 0.52, metalness: 0.3 });
  const glow = getMat(0x3fe0c0, { emissive: 0x1fe0b0, emissiveIntensity: 2.4, roughness: 0.26 });
  const eye = getMat(0x8fffe6, { emissive: 0x36e8c4, emissiveIntensity: 2.8, roughness: 0.24 });
  const voidMat = getMat(0x06100f, { roughness: 0.5, metalness: 0.2 });

  const shadow = makeShadow(50, 30);
  shadow.material = world3D.shadowMaterial;
  root.add(shadow);

  const skirt = new THREE.Mesh(makeRobeGeometry(30, 13, 70, 12), robe);
  skirt.rotation.x = Math.PI / 2;
  body.add(skirt);
  const under = new THREE.Mesh(makeRobeGeometry(24, 10, 64, 10), robeDark);
  under.rotation.x = Math.PI / 2;
  under.position.z = 3;
  body.add(under);

  const hem = new THREE.Mesh(new THREE.TorusGeometry(29, 1.5, 7, 24), trim);
  hem.position.z = 2;
  body.add(hem);

  for (let i = 0; i < 7; i++) {
    const tatter = rbox(5, 3, 20 + (i % 3) * 4, 1, robeDark);
    const a = (i / 7) * TAU + 0.35;
    tatter.position.set(Math.cos(a) * 26, Math.sin(a) * 26, 10);
    tatter.rotation.z = a;
    body.add(tatter);
  }

  const cloak = makeCape(56, 36, robeDark, 10);
  cloak.position.set(-12, 0, 40);
  body.add(cloak);

  const core = sphere(8, glow, 14);
  core.position.set(16.5, 0, 58);
  body.add(core);
  const coreHalo = makeHalo(0x4affd4, 8);
  coreHalo.position.set(16.5, 0, 58);
  body.add(coreHalo);
  const coreRing = new THREE.Mesh(new THREE.TorusGeometry(13, 1.6, 8, 24), trim);
  coreRing.rotation.y = Math.PI / 2;
  coreRing.position.set(17, 0, 58);
  body.add(coreRing);
  const coreRing2 = new THREE.Mesh(new THREE.TorusGeometry(17, 0.9, 7, 24), trim);
  coreRing2.rotation.y = Math.PI / 2;
  coreRing2.rotation.x = 0.7;
  coreRing2.position.set(17, 0, 58);
  body.add(coreRing2);

  const wisps = [];
  for (let i = 0; i < 3; i++) {
    const wisp = makeHalo(0x3affd0, 2.2 + i * 0.4);
    body.add(wisp);
    wisps.push(wisp);
  }

  const shoulders = new THREE.Group();
  shoulders.position.z = 69;
  body.add(shoulders);
  addPart(shoulders, sphere(9, robeDark, 12), 0, -13, 0);
  addPart(shoulders, sphere(9, robeDark, 12), 0, 13, 0);
  addPart(shoulders, rbox(5, 10, 8, 2, robe), 0, -13, 5);
  addPart(shoulders, rbox(5, 10, 8, 2, robe), 0, 13, 5);

  const armL = makeArm(body, -14, 67, 36, 3.4, robe, trim);
  const armR = makeArm(body, 14, 67, 36, 3.4, robe, trim);
  for (const arm of [armL, armR]) {
    addPart(arm, sphere(4.2, robeDark, 10), 0, 0, -20);
    addPart(arm, rbox(5, 5, 10, 1.5, robe), 0, 0, -30);
    addPart(arm, sphere(3.4, glow, 10), 0, 0, -40);
    const handGlow = makeHalo(0x4affd4, 4);
    handGlow.position.set(0, 0, -40);
    arm.add(handGlow);
  }

  const head = new THREE.Group();
  head.position.z = 80;
  body.add(head);
  const hood = cone(14, 26, 12, robe);
  hood.rotation.x = Math.PI / 2;
  hood.position.set(-2, 0, 4);
  head.add(hood);
  const hoodTrim = new THREE.Mesh(new THREE.TorusGeometry(11, 1.1, 7, 18), trim);
  hoodTrim.rotation.y = Math.PI / 2;
  hoodTrim.position.set(4, 0, -1);
  head.add(hoodTrim);
  addPart(head, sphere(8, voidMat, 12), 4, 0, -1);
  addPart(head, sphere(1.8, eye, 10), 9.5, -2.8, 0);
  addPart(head, sphere(1.8, eye, 10), 9.5, 2.8, 0);
  const eyeGlowL = makeHalo(0x48ffd8, 2.8);
  eyeGlowL.position.set(9.5, -2.8, 0);
  head.add(eyeGlowL);
  const eyeGlowR = makeHalo(0x48ffd8, 2.8);
  eyeGlowR.position.set(9.5, 2.8, 0);
  head.add(eyeGlowR);

  const flashMesh = addFlash(body, 40, 48);
  root.userData = {
    kind: 'wraith',
    body,
    hips: null,
    legL: null,
    legR: null,
    armL,
    armR,
    head,
    weapon: null,
    baseZ: 27,
    hunch: 0,
    core,
    coreHalo,
    coreRing,
    coreRing2,
    wisps,
    cloak,
    flashMesh
  };
  return root;
}

function createBossModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const armor = getMat(0x2a2d33, { roughness: 0.4, metalness: 0.68 });
  const armorDark = getMat(0x17191d, { roughness: 0.54, metalness: 0.58 });
  const armorLight = getMat(0x4b5158, { roughness: 0.3, metalness: 0.78 });
  const cloth = getMat(0x541619, { roughness: 0.94, metalness: 0, side: THREE.DoubleSide });
  const clothDark = getMat(0x310c0e, { roughness: 0.96, metalness: 0, side: THREE.DoubleSide });
  const gold = getMat(0xa8874f, { roughness: 0.26, metalness: 0.92 });
  const coreMat = getMat(0xff4a24, { emissive: 0xff2408, emissiveIntensity: 4.2, roughness: 0.26 });
  const eye = getMat(0xffc07a, { emissive: 0xff4b1f, emissiveIntensity: 4.2, roughness: 0.26 });

  root.add(makeShadow(120, 68));

  const hips = new THREE.Group();
  hips.position.z = 88;
  body.add(hips);
  addPart(hips, rbox(32, 48, 20, 5, armorDark), 0, 0, 0);
  addPart(hips, rbox(30, 44, 5, 2, gold), 0, 0, 9);
  addPart(hips, rbox(6, 18, 46, 2, cloth), 0, -18, -20);
  addPart(hips, rbox(6, 18, 46, 2, cloth), 0, 18, -20);
  addPart(hips, sphere(5, gold, 10), 16, 0, 12);
  const legL = makeLeg(hips, -17, -3, 83, 10.5, armorDark, armor, [18, 24, 14]);
  const legR = makeLeg(hips, 17, -3, 83, 10.5, armorDark, armor, [18, 24, 14]);
  for (const leg of [legL, legR]) {
    addPart(leg, sphere(9.4, armorLight, 12), 4, 0, -42);
    addPart(leg, rbox(14, 16, 26, 2.5, armor), 3, 0, -64);
    addPart(leg, rbox(4, 16, 8, 1.5, gold), 11, 0, -64);
    addPart(leg, rbox(16, 18, 5, 2, armorLight), 3, 0, -78);
  }

  const torso = new THREE.Group();
  torso.position.z = 132;
  body.add(torso);
  addPart(torso, rbox(36, 58, 62, 6, armor), 0, 0, 0);
  addPart(torso, rbox(40, 50, 30, 5, armorLight), 0, 0, 10);
  addPart(torso, rbox(32, 46, 14, 3, armorDark), -18, 0, 0);
  addPart(torso, rbox(6, 42, 44, 2, gold), 20, 0, 0);
  addPart(torso, rbox(20, 6, 6, 2, gold), 0, -12, 24);
  addPart(torso, rbox(20, 6, 6, 2, gold), 0, 12, 24);
  const gorget = cyl(15, 17, 8, 16, gold);
  gorget.rotation.x = Math.PI / 2;
  gorget.position.z = 33;
  torso.add(gorget);

  const core = sphere(11, coreMat, 16);
  core.position.set(18, 0, 8);
  torso.add(core);
  const coreHalo = makeHalo(0xff3a16, 11);
  coreHalo.position.set(18, 0, 8);
  torso.add(coreHalo);
  const coreRing = new THREE.Mesh(new THREE.TorusGeometry(17, 1.8, 8, 26), gold);
  coreRing.rotation.y = Math.PI / 2;
  coreRing.position.set(19, 0, 8);
  torso.add(coreRing);

  const cape = makeCape(84, 52, cloth, 12);
  cape.position.set(-25, 0, -4);
  torso.add(cape);
  addPart(torso, rbox(2, 10, 44, 1, clothDark), -25, 0, -4);

  for (const side of [-1, 1]) {
    const pauldron = sphere(19, armor, 16);
    pauldron.scale.set(1.05, 0.98, 0.92);
    pauldron.position.set(0, side * 32, 24);
    torso.add(pauldron);
    addPart(torso, sphere(13, armorLight, 14), 0, side * 32, 33);
    addPart(torso, rbox(20, 6, 5, 2, gold), 0, side * 32, 40);
    const spike = cone(5, 18, 10, gold);
    spike.position.set(0, side * 32, 45);
    torso.add(spike);
    const spikeOut = cone(4, 14, 10, armorLight);
    spikeOut.rotation.z = side === 1 ? 0 : Math.PI;
    spikeOut.position.set(0, side * 42, 28);
    torso.add(spikeOut);
  }

  const armL = makeArm(body, -32, 154, 70, 9.5, armorDark, armor);
  const armR = makeArm(body, 32, 154, 70, 9.5, armorDark, armor);
  for (const arm of [armL, armR]) {
    addPart(arm, sphere(10.5, armorLight, 12), 0, 0, -35);
    addPart(arm, rbox(13, 13, 22, 2.5, armorLight), 0, 0, -56);
    addPart(arm, rbox(14, 3, 5, 1, gold), 0, 0, -64);
  }

  const sword = new THREE.Group();
  sword.position.z = -70;
  armR.add(sword);
  const grip = cyl(3, 3.6, 22, 12, armorDark);
  grip.rotation.x = Math.PI / 2;
  grip.position.z = -11;
  sword.add(grip);
  addPart(sword, sphere(4, gold, 10), 0, 0, 0);
  addPart(sword, rbox(36, 9, 7, 2, gold), 0, 0, -21);
  addPart(sword, rbox(8, 20, 58, 2, armorLight), 0, 0, -46);
  addPart(sword, rbox(3, 12, 50, 1, gold), 4.2, 0, -46);
  const swordTip = cone(4, 12, 10, armorLight);
  swordTip.rotation.x = -Math.PI / 2;
  swordTip.position.set(0, 0, -80);
  sword.add(swordTip);
  addPart(sword, sphere(3.6, coreMat, 10), 5.2, 0, -21);

  const head = new THREE.Group();
  head.position.z = 178;
  body.add(head);
  const helm = sphere(18, armor, 16);
  helm.scale.set(1, 0.94, 1.05);
  head.add(helm);
  addPart(head, rbox(5, 24, 10, 2, armorDark), 17, 0, 1);
  addPart(head, rbox(3, 12, 4, 1, eye), 19.2, -5, 1);
  addPart(head, rbox(3, 12, 4, 1, eye), 19.2, 5, 1);
  const eyeGlowL = makeHalo(0xff6a32, 5);
  eyeGlowL.position.set(20, -5, 1);
  head.add(eyeGlowL);
  const eyeGlowR = makeHalo(0xff6a32, 5);
  eyeGlowR.position.set(20, 5, 1);
  head.add(eyeGlowR);
  const crown = new THREE.Mesh(new THREE.TorusGeometry(14, 1.2, 8, 22), gold);
  crown.position.z = 8;
  head.add(crown);
  for (let i = 0; i < 6; i++) {
    const spike = cone(4, 16, 9, gold);
    spike.rotation.x = Math.PI / 2;
    const a = (i / 6) * TAU;
    spike.position.set(Math.cos(a) * 10, Math.sin(a) * 10, 19);
    head.add(spike);
  }

  const flashMesh = addFlash(body, 86, 104);
  root.userData = {
    kind: 'boss',
    body,
    hips,
    legL,
    legR,
    armL,
    armR,
    head,
    weapon: sword,
    baseZ: 0,
    hunch: 0.04,
    core,
    coreHalo,
    coreRing,
    cape,
    flashMesh
  };
  return root;
}

function createModel(type) {
  if (type === 'player') return createPlayerModel();
  if (type === 'husk') return createHuskModel();
  if (type === 'brute') return createBruteModel();
  if (type === 'wraith') return createWraithModel();
  if (type === 'boss') return createBossModel();
  return createHuskModel();
}

function getModel(entity) {
  let model = world3D.models.get(entity);
  if (!model) {
    const type = entity instanceof Player ? 'player' : entity.type;
    model = createModel(type);
    model.userData.modelScale = { player: 1.12, husk: 1.06, brute: 1.08, wraith: 1.04, boss: 1 }[type] || 1;
    model.traverse((o) => {
      o.frustumCulled = false;
      if (o.isMesh && !o.userData.noShadow) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    world3D.scene.add(model);
    world3D.models.set(entity, model);
  }
  return model;
}

function disposeModel(model) {
  model.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.userData.uniqueMaterial && o.material) o.material.dispose();
  });
  if (model.userData.flashMesh) model.userData.flashMesh.material.dispose();
}

function dampAngle(current, target, lambda, dt) {
  return current + angleDiff(target, current) * (1 - Math.exp(-lambda * dt));
}

function animatePlayer(model, p, t) {
  const u = model.userData;
  const walk = p.moving ? Math.sin(p.walkPhase) : Math.sin(t * 1.5) * 0.08;
  const bob = p.moving ? Math.abs(Math.sin(p.walkPhase)) * 2.4 : Math.sin(t * 2.1) * 1.2;
  let armR = walk * 0.42;
  let armL = -walk * 0.42;
  let bodyTwist = 0;
  let bodyLean = 0;
  let crouch = 0;

  if (p.state === 'attack' && p.attack) {
    const a = p.attack;
    const tt = clamp(a.time / a.duration, 0, 1);
    if (a.type === 'light') {
      const pulse = Math.sin(tt * Math.PI);
      armR = -2.1 * pulse;
      armL = 0.55 * pulse;
      bodyTwist = 0.28 * pulse;
      bodyLean = 0.08 * pulse;
    } else if (a.type === 'heavy') {
      const wind = clamp(tt / 0.44, 0, 1);
      const slam = clamp((tt - 0.44) / 0.22, 0, 1);
      armR = -2.35 * wind + 2.35 * slam;
      armL = -0.45 * wind + 0.15 * slam;
      bodyTwist = -0.18 * wind + 0.3 * slam;
      bodyLean = -0.1 * wind + 0.18 * slam;
      crouch = -3 * wind + 5 * slam;
    } else if (a.type === 'ult') {
      const pulse = Math.sin(clamp(tt * 1.35, 0, 1) * Math.PI);
      armR = -2.7 * pulse;
      armL = -2.3 * pulse;
      bodyTwist = Math.sin(tt * TAU * 2) * 0.55 * pulse;
      bodyLean = -0.2 * pulse;
      crouch = 7 * pulse;
    }
  } else if (p.state === 'heavy') {
    const wind = clamp(p.heavyCharge / 1.0, 0, 1);
    armR = -2.3 * wind;
    armL = -0.5 * wind;
    bodyTwist = -0.18 * wind;
    bodyLean = -0.12 * wind;
    crouch = -3 * wind;
  } else if (p.state === 'dodge') {
    armR = 0.8;
    armL = -0.8;
    bodyLean = -0.38;
    crouch = -6;
  } else if (p.guard) {
    armL = -1.3;
    armR = 0.28;
    bodyLean = 0.1;
    crouch = -3;
  }

  if (p.hurtTime > 0 && p.state !== 'dead') {
    bodyLean += Math.sin(p.hurtTime * 42) * 0.08;
  }

  u.legL.rotation.y = walk * 0.6;
  u.legR.rotation.y = -walk * 0.6;
  u.armL.rotation.y = armL;
  u.armR.rotation.y = armR;
  u.armL.rotation.x = p.guard ? -0.45 : 0;
  u.armR.rotation.x = p.state === 'attack' && p.attack && p.attack.type === 'heavy' ? -0.22 : 0;
  u.head.rotation.y = -bodyTwist * 0.4;
  u.body.rotation.y = u.hunch + bodyTwist;
  u.body.rotation.x = bodyLean;
  u.body.position.z = bob + crouch;
  if (u.weapon) u.weapon.rotation.z = Math.sin(t * 1.7) * 0.04;
  if (u.cape) animateCape(u.cape, t, p.moving ? 5.2 : 3.2, p.moving ? 2.8 : 1.5);
}

function animateHusk(model, e, t) {
  const u = model.userData;
  const wind = e.state === 'windup' ? clamp(e.stateTime / e.windup, 0, 1) : 0;
  const strike = e.state === 'recover' ? clamp(1 - e.stateTime / e.recover, 0, 1) : 0;
  const walk = e.state === 'chase' ? Math.sin(e.walkPhase) : Math.sin(t * 1.4 + e.seed) * 0.1;
  const bob = Math.sin(t * 2.2 + e.seed) * 1.4;
  const lunge = wind > 0 ? Math.sin(wind * Math.PI) * 0.22 : strike * 0.16;

  u.legL.rotation.y = walk * 0.55;
  u.legR.rotation.y = -walk * 0.55;
  u.armL.rotation.y = -walk * 0.5 - wind * 1.7 + strike * 1.4;
  u.armR.rotation.y = walk * 0.5 - wind * 1.7 + strike * 1.4;
  u.armL.rotation.x = -0.08 + wind * 0.2;
  u.armR.rotation.x = 0.08 - wind * 0.2;
  u.head.rotation.y = -wind * 0.25;
  u.body.rotation.y = u.hunch + lunge;
  u.body.rotation.x = e.state === 'stagger' ? Math.sin(e.stateTime * 22) * 0.16 : 0;
  u.body.position.z = bob - wind * 2;
  if (u.cape) animateCape(u.cape, t, 3.8, 2.4);
}

function animateBrute(model, e, t) {
  const u = model.userData;
  const wind = e.state === 'windup' ? clamp(e.stateTime / e.windup, 0, 1) : 0;
  const strike = e.state === 'recover' ? clamp(1 - e.stateTime / e.recover, 0, 1) : 0;
  const walk = e.state === 'chase' ? Math.sin(e.walkPhase) : Math.sin(t * 1.2 + e.seed) * 0.08;
  const bob = Math.sin(t * 1.8 + e.seed) * 1.8;

  u.legL.rotation.y = walk * 0.45;
  u.legR.rotation.y = -walk * 0.45;
  u.armL.rotation.y = -walk * 0.3 - wind * 0.7;
  u.armR.rotation.y = walk * 0.3 - wind * 2.1 + strike * 1.9;
  u.armR.rotation.x = -wind * 0.3 + strike * 0.2;
  u.head.rotation.y = -wind * 0.18;
  u.body.rotation.y = u.hunch + wind * 0.08 + strike * 0.18;
  u.body.rotation.x = e.state === 'stagger' ? Math.sin(e.stateTime * 18) * 0.12 : 0;
  u.body.position.z = bob - wind * 3 + strike * 2;
}

function animateWraith(model, e, t) {
  const u = model.userData;
  const wind = e.state === 'windup' ? clamp(e.stateTime / e.windup, 0, 1) : 0;
  const strike = e.state === 'recover' ? clamp(1 - e.stateTime / e.recover, 0, 1) : 0;
  const hover = Math.sin(t * 2.1 + e.seed) * 4;
  const sway = Math.sin(t * 1.3 + e.seed) * 0.08;

  u.armL.rotation.y = -0.18 - wind * 1.5 + strike * 1.2;
  u.armR.rotation.y = 0.18 - wind * 1.5 + strike * 1.2;
  u.armL.rotation.x = -0.12 - wind * 0.25;
  u.armR.rotation.x = 0.12 + wind * 0.25;
  u.head.rotation.y = sway - wind * 0.2;
  u.body.rotation.y = sway * 0.7 + wind * 0.08;
  u.body.rotation.x = Math.sin(t * 1.7 + e.seed) * 0.035;
  u.body.position.z = u.baseZ + hover - wind * 3;
  if (u.core) {
    const pulse = 1 + Math.sin(t * 4 + e.seed) * 0.08 + wind * 0.16;
    u.core.scale.setScalar(pulse);
    if (u.coreRing) {
      u.coreRing.rotation.z = t * 0.9 + e.seed;
      u.coreRing.scale.setScalar(pulse);
    }
    if (u.coreRing2) {
      u.coreRing2.rotation.z = -t * 0.65 + e.seed;
      u.coreRing2.scale.setScalar(pulse * 1.02);
    }
    if (u.coreHalo) u.coreHalo.scale.setScalar(0.92 + pulse * 0.12);
  }
  if (u.cloak) animateCape(u.cloak, t, 2.8, 3.2);
  if (u.wisps) {
    for (let i = 0; i < u.wisps.length; i++) {
      const a = t * (0.8 + i * 0.17) + i * TAU / 3 + e.seed;
      const r = 17 + i * 3;
      u.wisps[i].position.set(16.5 + Math.cos(a) * r, Math.sin(a) * r, 58 + Math.sin(a * 1.7) * 9);
    }
  }
}

function animateBoss(model, e, t) {
  const u = model.userData;
  const wind = e.state === 'windup' ? clamp(e.stateTime / e.windup, 0, 1) : 0;
  const strike = e.state === 'recover' ? clamp(1 - e.stateTime / e.recover, 0, 1) : 0;
  const walk = e.state === 'chase' || e.state === 'charge' ? Math.sin(e.walkPhase) : Math.sin(t * 1.1) * 0.06;
  const bob = Math.sin(t * 1.5 + e.seed) * 1.5;
  const kind = e.attackKind;
  let armR = walk * 0.25;
  let armL = -walk * 0.25;
  let bodyTwist = 0;
  let crouch = 0;

  if (kind === 'cleave') {
    armR = 0.6 - wind * 2.6 + strike * 2.1;
    bodyTwist = -0.28 * wind + 0.38 * strike;
    crouch = -2 * wind + 3 * strike;
  } else if (kind === 'slam') {
    armR = -2.7 * wind + 2.7 * strike;
    bodyTwist = -0.2 * wind + 0.32 * strike;
    crouch = -4 * wind + 6 * strike;
  } else if (kind === 'charge') {
    armR = -0.8 * wind;
    armL = -0.8 * wind;
    bodyTwist = -0.15 * wind;
    crouch = -4 * wind;
  } else if (kind === 'shockwave') {
    armR = -1.5 * wind + 1.2 * strike;
    armL = -1.5 * wind + 1.2 * strike;
    crouch = 7 * wind;
  } else if (e.state === 'intro') {
    armR = -1.2;
    armL = -1.2;
    bodyTwist = Math.sin(t * 2.2) * 0.06;
  }

  u.legL.rotation.y = walk * 0.4;
  u.legR.rotation.y = -walk * 0.4;
  u.armL.rotation.y = armL;
  u.armR.rotation.y = armR;
  u.armR.rotation.x = kind === 'slam' ? -0.18 * wind : 0;
  u.head.rotation.y = -bodyTwist * 0.45;
  u.body.rotation.y = u.hunch + bodyTwist;
  u.body.rotation.x = e.state === 'stagger' ? Math.sin(e.stateTime * 15) * 0.1 : 0;
  u.body.position.z = bob + crouch;
  if (u.core) {
    const rage = e.phase === 2 ? 1.25 : 1;
    u.core.scale.setScalar((1 + Math.sin(t * 3.4) * 0.06) * rage);
    if (u.coreHalo) u.coreHalo.scale.setScalar((0.94 + Math.sin(t * 3.4) * 0.08) * rage);
    if (u.coreRing) u.coreRing.rotation.z = t * 0.7;
  }
  if (u.cape) animateCape(u.cape, t, 2.6, 4.2);
}

function syncModel(entity, model, dt, t) {
  const u = model.userData;
  const root = model;
  const face = entity.face || { x: 1, y: 0 };
  const targetAngle = Math.atan2(face.y, face.x);
  root.rotation.z = dampAngle(root.rotation.z, targetAngle, 12, dt);
  root.position.set(entity.x, entity.y, 0);

  let spawnT = 1;
  if (entity.spawnTime > 0) {
    spawnT = clamp(1 - entity.spawnTime / 0.7, 0, 1);
    spawnT = easeOut(spawnT);
  }
  root.scale.setScalar((0.42 + spawnT * 0.58) * (u.modelScale || 1));

  if (entity.dead) {
    if (!model.userData.deadSince) model.userData.deadSince = G.realTime;
    const fall = clamp((G.realTime - model.userData.deadSince) / 0.55, 0, 1);
    const fallEase = easeIn(fall);
    u.body.rotation.y = u.hunch + fallEase * 1.42;
    u.body.rotation.x = fallEase * 0.18;
    u.body.position.z = (u.kind === 'wraith' ? u.baseZ * (1 - fallEase) : 0) - fallEase * 8;
    if (u.legL) u.legL.rotation.y = fallEase * 0.6;
    if (u.legR) u.legR.rotation.y = -fallEase * 0.5;
    if (u.flashMesh) u.flashMesh.visible = false;
    if (u.core) u.core.scale.setScalar(1 - fallEase * 0.35);
    return;
  }

  model.userData.deadSince = 0;
  if (entity instanceof Player) {
    animatePlayer(model, entity, t);
  } else if (entity.type === 'husk') {
    animateHusk(model, entity, t);
  } else if (entity.type === 'brute') {
    animateBrute(model, entity, t);
  } else if (entity.type === 'wraith') {
    animateWraith(model, entity, t);
  } else if (entity.type === 'boss') {
    animateBoss(model, entity, t);
  }

  if (u.flashMesh) {
    const flash = entity.flash || 0;
    u.flashMesh.visible = flash > 0.01;
    if (u.flashMesh.visible) {
      u.flashMesh.material.opacity = clamp(flash * 4.5, 0, 0.42);
    }
  }
}

function updateProjection() {
  const cam = G.camera;
  const zoom = cam.zoom;
  const sx = cam.sx;
  const sy = cam.sy;
  const m = world3D.proj;
  const xScale = (2 / W) * zoom * ISO_X;
  const yScale = (2 / H) * zoom * ISO_Y;
  const yZ = (2 / H) * zoom;
  const depth = 1 / 2400;
  m.set(
    xScale, -xScale, 0, (2 / W) * (sx - zoom * cam.x),
    -yScale, -yScale, yZ, -(2 / H) * (sy - zoom * cam.y),
    -depth, -depth, -depth, 0,
    0, 0, 0, 1
  );
  const camera = world3D.camera;
  camera.projectionMatrix.copy(m);
  camera.projectionMatrixInverse.copy(m).invert();
}

function renderWorld3D() {
  if (!isWorld3DReady()) return;
  try {
    const now = G.realTime;
    const dt = clamp(now - world3D.lastTime, 0.001, 0.05);
    world3D.lastTime = now;
    const t = G.time;

    const live = new Set(G.enemies);
    if (G.player) live.add(G.player);
    for (const [entity, model] of world3D.models) {
      if (!live.has(entity)) {
        world3D.scene.remove(model);
        disposeModel(model);
        world3D.models.delete(entity);
      }
    }

    if (G.player) {
      const model = getModel(G.player);
      syncModel(G.player, model, dt, t);
    }
    for (const e of G.enemies) {
      const model = getModel(e);
      syncModel(e, model, dt, t);
    }

    updateProjection();
    world3D.renderer.render(world3D.scene, world3D.camera);
  } catch (err) {
    console.warn('3D character renderer failed, falling back to 2D.', err);
    world3D.ready = false;
    const canvas3d = document.getElementById('world3d');
    if (canvas3d) canvas3d.style.display = 'none';
  }
}
