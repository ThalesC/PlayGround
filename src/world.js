import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CONFIG, CACHES, CHECKPOINTS } from './config.js';
import { clamp, rand, smoothstep, yawTo } from './util.js';

const PALETTE = {
  grass: 0x4e6a50,
  grassDark: 0x354b3c,
  path: 0x81745a,
  pathLight: 0x958467,
  stone: 0x747c74,
  stoneDark: 0x525d58,
  stoneLight: 0x8d9186,
  timber: 0x5d4632,
  timberLight: 0x7e6144,
  roof: 0x46544a,
  leaf: 0x3f6449,
  leafDark: 0x2c4c3a,
  leafLight: 0x5d7b50,
  amber: 0xffb45d,
  moss: 0x6f8550,
  cloth: 0x6b5d4d,
  cloak: 0x8b6f54,
  dark: 0x252c29,
};

function groundHeight(x, z) {
  if (z > -56) {
    const campDistance = Math.hypot(x, z - 14.5);
    let y = Math.max(0, 0.52 - campDistance * 0.032);
    y += Math.sin(x * 0.23) * 0.11 + Math.cos(z * 0.19) * 0.08;
    if (z < 2) y -= Math.max(0, (2 - z) * 0.018);
    return clamp(y, -0.35, 0.55);
  }
  if (z > -64) return smoothstep((-z - 56) / 8) * 1.5 + Math.sin(x * 0.21) * 0.08;
  return 1.5 + Math.sin(x * 0.17) * 0.12;
}

function distToSegment(px, pz, ax, az, bx, bz) {
  const abx = bx - ax;
  const abz = bz - az;
  const len2 = abx * abx + abz * abz;
  let t = len2 > 0.0001 ? ((px - ax) * abx + (pz - az) * abz) / len2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}

function routeDistance(x, z) {
  let d = 99;
  if (z > 4 && z < 28) d = Math.min(d, Math.abs(x) < 10 ? 0 : Math.abs(x) - 10 + 8);
  if (z <= 6 && z > -30) d = Math.min(d, Math.abs(x));
  if (z <= -28 && z > -54) d = Math.min(d, Math.max(0, Math.abs(x) - 9));
  if (z <= -62 && z > -88) d = Math.min(d, Math.max(0, Math.abs(x) - 8));
  if (z <= -86 && z > -104) d = Math.min(d, Math.max(0, Math.abs(x) - 4));
  d = Math.min(d, distToSegment(x, z, 20, -37, 20, 6));
  d = Math.min(d, distToSegment(x, z, 20, 6, 9, 6));
  d = Math.min(d, distToSegment(x, z, 20, -32, 27, -27));
  const arenaD = Math.hypot(x - 0, z + 117);
  if (arenaD < 15) d = Math.min(d, Math.max(0, arenaD - 12.2));
  const noisy = d + Math.sin(x * 0.37 + z * 0.71) * 0.75 + Math.cos(x * 0.19 - z * 0.33) * 0.45;
  return Math.max(0, noisy);
}

const matCache = new Map();

function makeMat(color, options = {}) {
  const optKey = Object.keys(options)
    .sort()
    .map((key) => `${key}:${String(options[key])}`)
    .join('|');
  const key = `${color}|${optKey}`;
  let mat = matCache.get(key);
  if (!mat) {
    mat = new THREE.MeshLambertMaterial({ color, flatShading: true, ...options });
    matCache.set(key, mat);
  }
  return mat;
}

function addBox(scene, w, h, d, color, x, y, z, ry = 0, parent = scene) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), makeMat(color));
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addCylinder(scene, rt, rb, h, segments, color, x, y, z, ry = 0, parent = scene) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), makeMat(color));
  mesh.position.set(x, y, z);
  mesh.rotation.y = ry;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addCone(scene, r, h, segments, color, x, y, z, parent = scene) {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(r, h, segments), makeMat(color));
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function addRock(scene, x, z, scale = 1, color = PALETTE.stone) {
  const geo = new THREE.DodecahedronGeometry(1, 0);
  const mesh = new THREE.Mesh(geo, makeMat(color));
  mesh.position.set(x, groundHeight(x, z) + 0.35 * scale, z);
  mesh.scale.set(scale * rand(0.8, 1.4), scale * rand(0.5, 0.95), scale * rand(0.8, 1.4));
  mesh.rotation.set(rand(-0.3, 0.3), rand(0, Math.PI), rand(-0.3, 0.3));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);
  return mesh;
}

function addBeam(scene, a, b, radius, color, parent = scene) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 5), makeMat(color));
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function flameTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(32, 36, 2, 32, 36, 30);
  grad.addColorStop(0, 'rgba(255,247,196,1)');
  grad.addColorStop(0.25, 'rgba(255,181,70,0.9)');
  grad.addColorStop(0.65, 'rgba(225,93,26,0.35)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class World {
  constructor(scene, renderer, assets = {}) {
    this.scene = scene;
    this.assets = assets;
    this.renderer = renderer;
    this.colliders = [];
    this.cameraOccluders = [];
    this.interactables = [];
    this.cacheMeshes = new Map();
    this.animated = [];
    this.time = 0;
    this.quality = 'high';
    this.groundHeight = groundHeight;
    this.flameTex = flameTexture();
    this._buildLights();
    this._buildGround();
    this._buildForest();
    this._buildCamp();
    this._buildImportedCampDetails();
    this._buildMossroad();
    this._buildCartYard();
    this._buildShortcut();
    this._buildWayhouse();
    this._buildBrazier();
    this._buildCourtyard();
    this._buildBoundaries();
    this._initLightFlags();
    this._mergeStaticGeometry();
  }

  _initLightFlags() {
    this.scene.traverse((obj) => {
      if (!obj.isPointLight) return;
      if (obj.userData.lightEnabled === undefined) obj.userData.lightEnabled = obj.visible;
      if (obj.userData.lowLight === undefined) obj.userData.lowLight = false;
    });
    this.hearthLight.userData.lowLight = true;
    this.brazierLight.userData.lowLight = true;
    this.beaconLight.userData.lowLight = true;
  }

  _setPointLight(light, enabled) {
    light.userData.lightEnabled = enabled;
    light.visible = enabled && (this.quality !== 'low' || light.userData.lowLight === true);
  }

  _mergeStaticGeometry() {
    const dynamic = [
      this.hearthFire,
      this.workshopRoof,
      this.workshopTools,
      this.workshopBench,
      this.beaconLens,
      this.brokenLens,
      this.campKeepsake,
      this.bridgeGateBar,
      this.shortcutDoor,
      this.keepsake,
      this.keepsakeShelf,
      this.bossDoor,
      ...this.bridgeLamps.map((lamp) => lamp.group),
      ...Array.from(this.cacheMeshes.values(), (cache) => cache.group),
    ];
    const protectedObjects = new Set(this.cameraOccluders);
    for (const root of dynamic) {
      if (!root) continue;
      root.traverse((obj) => protectedObjects.add(obj));
    }
    this.scene.updateMatrixWorld(true);
    const buckets = new Map();
    this.scene.traverse((obj) => {
      if (!obj.isMesh || obj.isInstancedMesh || obj.isSkinnedMesh) return;
      if (obj.children.length > 0) return;
      if (protectedObjects.has(obj)) return;
      const material = obj.material;
      if (!material || Array.isArray(material)) return;
      if (material.transparent || material.opacity < 1 || material.vertexColors) return;
      if (!obj.geometry || obj.geometry.getAttribute('color')) return;
      const key = `${material.uuid}|${obj.castShadow ? 1 : 0}|${obj.receiveShadow ? 1 : 0}`;
      let bucket = buckets.get(key);
      if (!bucket) {
        bucket = {
          material,
          castShadow: obj.castShadow,
          receiveShadow: obj.receiveShadow,
          meshes: [],
          geometries: [],
        };
        buckets.set(key, bucket);
      }
      const source = obj.geometry.index ? obj.geometry.toNonIndexed() : obj.geometry.clone();
      source.applyMatrix4(obj.matrixWorld);
      for (const name of Object.keys(source.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') source.deleteAttribute(name);
      }
      if (!source.getAttribute('normal')) source.computeVertexNormals();
      if (!source.getAttribute('uv')) {
        const count = source.getAttribute('position').count;
        source.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(count * 2), 2));
      }
      bucket.meshes.push(obj);
      bucket.geometries.push(source);
    });
    for (const bucket of buckets.values()) {
      if (bucket.meshes.length < 2) {
        for (const geo of bucket.geometries) geo.dispose();
        continue;
      }
      const merged = mergeGeometries(bucket.geometries, false);
      if (!merged) {
        for (const geo of bucket.geometries) geo.dispose();
        continue;
      }
      const mesh = new THREE.Mesh(merged, bucket.material);
      mesh.name = 'MergedStatic';
      mesh.castShadow = bucket.castShadow;
      mesh.receiveShadow = bucket.receiveShadow;
      this.scene.add(mesh);
      for (const obj of bucket.meshes) obj.parent?.remove(obj);
      for (const geo of bucket.geometries) geo.dispose();
    }
  }

  _buildLights() {
    this.scene.background = new THREE.Color(CONFIG.render.clearColor);
    this.scene.fog = new THREE.Fog(0x82998b, CONFIG.render.fogNear, CONFIG.render.fogFar);
    const hemi = new THREE.HemisphereLight(0xcfe0d2, 0x2b3b32, 1.55);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff2d4, 2.0);
    sun.position.set(-28, 42, 18);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -42;
    sun.shadow.camera.right = 42;
    sun.shadow.camera.top = 42;
    sun.shadow.camera.bottom = -42;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 110;
    sun.shadow.bias = -0.0008;
    this.sun = sun;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0x9db7ad, 0.4);
    fill.position.set(20, 12, -35);
    this.scene.add(fill);
  }

  _buildGround() {
    const minX = -42;
    const maxX = 42;
    const minZ = -144;
    const maxZ = 34;
    const nx = 84;
    const nz = 178;
    const geo = new THREE.PlaneGeometry(maxX - minX, maxZ - minZ, nx, nz);
    geo.rotateX(-Math.PI / 2);
    geo.translate((minX + maxX) / 2, 0, (minZ + maxZ) / 2);
    const pos = geo.attributes.position;
    const colors = [];
    const cGrass = new THREE.Color(PALETTE.grass);
    const cGrassDark = new THREE.Color(PALETTE.grassDark);
    const cPath = new THREE.Color(PALETTE.path);
    const cPathLight = new THREE.Color(PALETTE.pathLight);
    const cStone = new THREE.Color(PALETTE.stone);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = groundHeight(x, z);
      pos.setY(i, y);
      const n = (Math.sin(x * 0.73 + z * 1.31) + Math.sin(x * 1.91 - z * 0.51) + Math.sin(z * 0.29)) * 0.12;
      const d = routeDistance(x, z);
      const arena = Math.hypot(x, z + 117) < 13.2;
      let col;
      if (arena) col = cStone.clone().lerp(cGrassDark, clamp((Math.hypot(x, z + 117) - 10.5) / 3, 0, 1));
      else if (d < 3.2) col = cPath.clone().lerp(cPathLight, 0.35 + n * 0.5);
      else if (d < 6.5) col = cPath.clone().lerp(cGrassDark, 0.55 + n * 0.4);
      else col = cGrass.clone().lerp(cGrassDark, 0.45 + n * 0.8);
      col.offsetHSL(0, 0, n * 0.05);
      colors.push(col.r, col.g, col.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    this.ground = new THREE.Mesh(geo, mat);
    this.ground.receiveShadow = true;
    this.ground.name = 'terrain';
    this.scene.add(this.ground);
    this.cameraOccluders.push(this.ground);

    const under = new THREE.Mesh(new THREE.CircleGeometry(180, 24), makeMat(0x2b3a33));
    under.rotation.x = -Math.PI / 2;
    under.position.y = -2.2;
    this.scene.add(under);
  }

  _buildForest() {
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.34, 3.6, 5);
    const canopyGeo = new THREE.ConeGeometry(1.7, 4.2, 6);
    const canopy2Geo = new THREE.ConeGeometry(1.15, 2.8, 5);
    const trunkMat = makeMat(0x51402f);
    const leafMat = makeMat(PALETTE.leaf);
    const leafMat2 = makeMat(PALETTE.leafDark);
    const treeCount = 230;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeCount);
    const canopies = new THREE.InstancedMesh(canopyGeo, leafMat, treeCount);
    const canopies2 = new THREE.InstancedMesh(canopy2Geo, leafMat2, treeCount);
    trunks.castShadow = false;
    canopies.castShadow = false;
    canopies2.castShadow = false;
    trunks.receiveShadow = true;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    let i = 0;
    let tries = 0;
    while (i < treeCount && tries < 4000) {
      tries++;
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = side * rand(10.5, 39);
      const z = rand(-142, 32);
      if (routeDistance(x, z) < 7.4) continue;
      if (x > 12 && x < 31 && z > -39 && z < 10) continue;
      if (Math.abs(x) < 15 && z > -105) continue;
      if (Math.hypot(x, z + 117) < 17.5) continue;
      const s = rand(0.72, 1.5);
      const y = groundHeight(x, z);
      dummy.position.set(x, y + 1.8 * s, z);
      dummy.rotation.set(0, rand(0, Math.PI * 2), 0);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      dummy.position.y = y + 4.3 * s;
      dummy.scale.set(s * rand(0.8, 1.2), s * rand(0.9, 1.35), s * rand(0.8, 1.2));
      dummy.updateMatrix();
      canopies.setMatrixAt(i, dummy.matrix);
      dummy.position.y = y + 6.2 * s;
      dummy.scale.set(s * rand(0.7, 1.1), s * rand(0.7, 1.2), s * rand(0.7, 1.1));
      dummy.updateMatrix();
      canopies2.setMatrixAt(i, dummy.matrix);
      color.setHSL(rand(0.27, 0.36), rand(0.18, 0.34), rand(0.24, 0.38));
      canopies.setColorAt(i, color);
      color.setHSL(rand(0.27, 0.34), rand(0.16, 0.3), rand(0.19, 0.29));
      canopies2.setColorAt(i, color);
      i++;
    }
    trunks.count = i;
    canopies.count = i;
    canopies2.count = i;
    this.scene.add(trunks, canopies, canopies2);
    this.treeMeshes = [trunks, canopies, canopies2];

    const bushGeo = new THREE.IcosahedronGeometry(0.62, 0);
    const bushMat = makeMat(0x46664a);
    const bushes = new THREE.InstancedMesh(bushGeo, bushMat, 260);
    let b = 0;
    let bt = 0;
    while (b < 260 && bt < 3000) {
      bt++;
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = side * rand(6.5, 37);
      const z = rand(-142, 32);
      if (routeDistance(x, z) < 3.6) continue;
      if (x > 12 && x < 31 && z > -39 && z < 10 && routeDistance(x, z) < 4.2) continue;
      if (Math.hypot(x, z + 117) < 15.5) continue;
      dummy.position.set(x, groundHeight(x, z) + 0.28, z);
      dummy.rotation.set(rand(-0.2, 0.2), rand(0, Math.PI * 2), rand(-0.2, 0.2));
      const s = rand(0.55, 1.35);
      dummy.scale.set(s * rand(0.8, 1.4), s * rand(0.5, 0.9), s * rand(0.8, 1.4));
      dummy.updateMatrix();
      bushes.setMatrixAt(b, dummy.matrix);
      color.setHSL(rand(0.25, 0.35), rand(0.2, 0.35), rand(0.24, 0.36));
      bushes.setColorAt(b, color);
      b++;
    }
    bushes.count = b;
    bushes.castShadow = false;
    bushes.receiveShadow = true;
    this.scene.add(bushes);

    const grassGeo = new THREE.ConeGeometry(0.09, 0.6, 3);
    const grassMat = makeMat(0x78905c);
    const grass = new THREE.InstancedMesh(grassGeo, grassMat, 600);
    for (let g = 0; g < 600; g++) {
      const x = rand(-32, 32);
      const z = rand(-138, 30);
      if (routeDistance(x, z) < 2.1) {
        g--;
        continue;
      }
      dummy.position.set(x, groundHeight(x, z) + 0.25, z);
      dummy.rotation.set(rand(-0.15, 0.15), rand(0, Math.PI * 2), rand(-0.15, 0.15));
      const s = rand(0.5, 1.5);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      grass.setMatrixAt(g, dummy.matrix);
    }
    grass.castShadow = false;
    this.scene.add(grass);
  }

  _buildCamp() {
    const g = new THREE.Group();
    g.name = 'Alder Hollow';
    this.scene.add(g);
    this.campGroup = g;

    const hearthStone = addCylinder(g, 1.65, 1.85, 0.42, 9, PALETTE.stoneDark, 0, 0.22, 16);
    hearthStone.receiveShadow = true;
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      addRock(g, Math.cos(a) * 1.75, 16 + Math.sin(a) * 1.75, 0.42, PALETTE.stone);
    }
    this.hearthFire = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.flameTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.hearthFire.position.set(0, 0.95, 16);
    this.hearthFire.scale.set(1.4, 1.8, 1);
    g.add(this.hearthFire);
    this.hearthLight = new THREE.PointLight(PALETTE.amber, 2.4, 16, 1.7);
    this.hearthLight.position.set(0, 2.0, 16);
    this.hearthLight.castShadow = false;
    g.add(this.hearthLight);
    const log1 = addBeam(g, new THREE.Vector3(-0.65, 0.45, 15.7), new THREE.Vector3(0.65, 0.45, 16.3), 0.16, PALETTE.timber);
    const log2 = addBeam(g, new THREE.Vector3(-0.65, 0.45, 16.3), new THREE.Vector3(0.65, 0.45, 15.7), 0.16, PALETTE.timberLight);
    log1.rotation.z = 0;
    log2.rotation.z = 0;
    this.colliders.push({ type: 'circle', x: 0, z: 16, r: 1.75, tag: 'hearth' });

    const mara = new THREE.Group();
    mara.position.set(-4.2, 0, 17.8);
    mara.rotation.y = Math.PI * 0.85;
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 1.25, 6), makeMat(0x65594c));
    body.position.y = 0.68;
    mara.add(body);
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), makeMat(0xc9a37d));
    head.position.y = 1.48;
    mara.add(head);
    const hood = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.5, 6), makeMat(0x6b5c4c));
    hood.position.y = 1.64;
    mara.add(hood);
    const staff = addCylinder(mara, 0.035, 0.045, 1.7, 5, PALETTE.timber, 0.44, 0.85, 0);
    staff.rotation.z = -0.12;
    this.scene.add(mara);
    this.mara = mara;
    this.colliders.push({ type: 'circle', x: -4.2, z: 17.8, r: 0.5, tag: 'mara' });

    const shelter = new THREE.Group();
    shelter.position.set(-8.6, 0, 9.5);
    shelter.rotation.y = 0.16;
    const floor = addBox(shelter, 6.2, 0.22, 5.0, PALETTE.stoneDark, 0, 0.11, 0);
    floor.receiveShadow = true;
    const postL = addCylinder(shelter, 0.13, 0.16, 2.5, 5, PALETTE.timber, -2.7, 1.25, -2.1);
    const postR = addCylinder(shelter, 0.13, 0.16, 2.5, 5, PALETTE.timber, 2.7, 1.25, -2.1);
    const postL2 = addCylinder(shelter, 0.13, 0.16, 2.5, 5, PALETTE.timber, -2.7, 1.25, 2.1);
    const postR2 = addCylinder(shelter, 0.13, 0.16, 2.5, 5, PALETTE.timber, 2.7, 1.25, 2.1);
    const backWall = addBox(shelter, 5.7, 1.8, 0.22, PALETTE.timber, 0, 1.05, -2.25);
    backWall.castShadow = true;
    const bench = addBox(shelter, 2.8, 0.18, 0.75, PALETTE.timberLight, 0.4, 0.78, 0.5);
    bench.castShadow = true;
    this.workshopBench = bench;
    this.workshopGroup = shelter;
    this.scene.add(shelter);
    this.colliders.push({ type: 'box', minX: -11.8, maxX: -5.4, minZ: 6.6, maxZ: 12.4, tag: 'workshop' });
    this.cameraOccluders.push(floor, backWall);

    this.workshopRoof = new THREE.Group();
    const roofL = addBox(this.workshopRoof, 3.4, 0.18, 5.4, PALETTE.roof, -1.55, 2.72, 0, 0);
    roofL.rotation.z = 0.34;
    const roofR = addBox(this.workshopRoof, 3.4, 0.18, 5.4, PALETTE.roof, 1.55, 2.72, 0, 0);
    roofR.rotation.z = -0.34;
    this.workshopRoof.position.set(-8.6, 0, 9.5);
    this.workshopRoof.rotation.y = 0.16;
    this.workshopRoof.visible = false;
    this.scene.add(this.workshopRoof);
    this.workshopLight = new THREE.PointLight(0xffb15a, 0, 7, 2);
    this.workshopLight.position.set(-8.6, 1.8, 9.5);
    this.workshopLight.visible = false;
    this.workshopLight.userData.lightEnabled = false;
    this.scene.add(this.workshopLight);
    this.workshopTools = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const tool = addCylinder(this.workshopTools, 0.035, 0.035, 1.1, 4, PALETTE.timberLight, -0.8 + i * 0.5, 1.65, -2.05);
      tool.rotation.z = 0.3 + i * 0.2;
    }
    this.workshopTools.position.set(-8.6, 0, 9.5);
    this.workshopTools.visible = false;
    this.scene.add(this.workshopTools);

    const beaconBase = new THREE.Group();
    beaconBase.position.set(8.2, 0, 22.5);
    addCylinder(beaconBase, 0.9, 1.25, 0.7, 8, PALETTE.stoneDark, 0, 0.35, 0);
    addCylinder(beaconBase, 0.42, 0.62, 3.4, 8, PALETTE.stone, 0, 2.0, 0);
    const cradle = addCylinder(beaconBase, 0.68, 0.5, 0.4, 8, PALETTE.timber, 0, 3.7, 0);
    cradle.castShadow = true;
    const brokenLens = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.34, 0.3, 8), makeMat(0x3a4b46, { transparent: true, opacity: 0.75 }));
    brokenLens.position.set(0, 3.95, 0);
    brokenLens.rotation.z = 0.35;
    beaconBase.add(brokenLens);
    this.brokenLens = brokenLens;
    this.beaconGroup = beaconBase;
    this.scene.add(beaconBase);
    this.colliders.push({ type: 'circle', x: 8.2, z: 22.5, r: 1.0, tag: 'beacon' });
    this.cameraOccluders.push(beaconBase.children[0], beaconBase.children[1]);

    this.beaconLens = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.43, 0.22, 10), new THREE.MeshBasicMaterial({ color: 0xffd98a, transparent: true, opacity: 0.9 }));
    this.beaconLens.position.set(8.2, 3.97, 22.5);
    this.beaconLens.visible = false;
    this.scene.add(this.beaconLens);
    this.beaconLight = new THREE.PointLight(0xffc46d, 0, 24, 1.4);
    this.beaconLight.position.set(8.2, 4.6, 22.5);
    this.beaconLight.visible = false;
    this.beaconLight.userData.lightEnabled = false;
    this.scene.add(this.beaconLight);

    const shelf = addBox(g, 2.4, 0.16, 0.55, PALETTE.timberLight, 2.7, 0.9, 17.8);
    shelf.castShadow = true;
    addCylinder(g, 0.06, 0.07, 0.9, 4, PALETTE.timber, 1.6, 0.45, 17.8);
    addCylinder(g, 0.06, 0.07, 0.9, 4, PALETTE.timber, 3.8, 0.45, 17.8);
    this.campKeepsake = new THREE.Group();
    this.campKeepsake.position.set(2.9, 1.02, 17.7);
    const campKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.13, 0.045, 32, 5, 2, 3), makeMat(0xc4a36e, { emissive: 0x3a2408, emissiveIntensity: 0.4 }));
    campKnot.rotation.x = 0.5;
    this.campKeepsake.add(campKnot);
    this.campKeepsake.visible = false;
    this.scene.add(this.campKeepsake);
    this.colliders.push({ type: 'circle', x: 2.9, z: 17.8, r: 0.55, tag: 'hearth-shelf' });

    this.bridgeGroup = new THREE.Group();
    this.bridgeGroup.position.set(13.2, 0, 22.5);
    for (let i = 0; i < 6; i++) {
      addBox(this.bridgeGroup, 1.25, 0.18, 2.2, PALETTE.timber, i * 1.2 - 3.0, 0.16, 0);
    }
    addBox(this.bridgeGroup, 7.3, 0.22, 0.16, PALETTE.timberLight, 0, 0.82, 1.02);
    addBox(this.bridgeGroup, 7.3, 0.22, 0.16, PALETTE.timberLight, 0, 0.82, -1.02);
    for (let i = 0; i < 4; i++) {
      addCylinder(this.bridgeGroup, 0.06, 0.07, 0.85, 5, PALETTE.timber, -3.2 + i * 2.15, 0.48, 1.02);
    }
    this.scene.add(this.bridgeGroup);
    this.bridgeLamps = [];
    for (let i = 0; i < 4; i++) {
      const lamp = new THREE.Group();
      lamp.position.set(10.4 + i * 2.0, 0.85, 21.4);
      addCylinder(lamp, 0.025, 0.03, 1.5, 4, PALETTE.timber, 0, 0.75, 0);
      const bulb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.13, 0), new THREE.MeshBasicMaterial({ color: 0xffd88a }));
      bulb.position.y = 1.55;
      lamp.add(bulb);
      const light = new THREE.PointLight(0xffbb63, 0, 7, 1.7);
      light.position.y = 1.6;
      lamp.add(light);
      lamp.visible = true;
      bulb.visible = false;
      light.visible = false;
      this.scene.add(lamp);
      this.bridgeLamps.push({ group: lamp, bulb, light });
    }
    this.bridgeGate = new THREE.Group();
    this.bridgeGate.position.set(18.2, 0, 22.5);
    addCylinder(this.bridgeGate, 0.16, 0.2, 3.2, 5, PALETTE.timber, -2.1, 1.6, 0);
    addCylinder(this.bridgeGate, 0.16, 0.2, 3.2, 5, PALETTE.timber, 2.1, 1.6, 0);
    addBox(this.bridgeGate, 4.5, 0.25, 0.3, PALETTE.timberLight, 0, 3.1, 0);
    const gateBar = addBox(this.bridgeGate, 3.7, 1.8, 0.15, PALETTE.timber, 0, 1.6, 0);
    gateBar.rotation.z = 0.02;
    this.bridgeGateBar = gateBar;
    this.scene.add(this.bridgeGate);
    this.colliders.push({ type: 'box', minX: 16.0, maxX: 20.4, minZ: 21.3, maxZ: 23.7, tag: 'bridge-gate', enabled: true });

    const sign = new THREE.Group();
    sign.position.set(3.3, 0, 6.2);
    addCylinder(sign, 0.07, 0.09, 1.7, 5, PALETTE.timber, 0, 0.85, 0);
    addBox(sign, 1.7, 0.65, 0.1, PALETTE.timberLight, 0, 1.55, 0);
    this.scene.add(sign);
    this.campSign = sign;
  }

  _cloneAsset(pack, name) {
    const asset = this.assets?.[pack]?.[name];
    if (!asset) return null;
    const clone = asset.clone(true);
    clone.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    return clone;
  }

  _addAsset(pack, name, x, y, z, ry = 0, scale = 1, occlude = true) {
    const clone = this._cloneAsset(pack, name);
    if (!clone) return null;
    clone.position.set(x, y, z);
    clone.rotation.y = ry;
    clone.scale.setScalar(scale);
    this.scene.add(clone);
    if (occlude) {
      clone.traverse((obj) => {
        if (obj.isMesh) this.cameraOccluders.push(obj);
      });
    }
    return clone;
  }

  _buildImportedCampDetails() {
    // Trees around the gathering space and the Mossroad approach.
    this._addAsset('nature', 'BirchTree_2', -13.5, 0, 24.5, 0.35, 1.0);
    this._addAsset('nature', 'BirchTree_2', 12.8, 0, 25.2, -0.2, 0.9);
    this._addAsset('nature', 'MapleTree_3', -15.2, 0, 12.0, 0.8, 0.95);
    this._addAsset('nature', 'MapleTree_3', 14.2, 0, 13.5, -0.55, 1.0);
    this._addAsset('nature', 'DeadTree_2', 16.5, 0, -3.5, 0.25, 1.05);
    this._addAsset('nature', 'DeadTree_2', -17.0, 0, -1.5, -0.35, 0.9);

    // Vegetation clusters around foundations and banks.
    this._addAsset('nature', 'Bush_Large', -10.5, 0, 12.5, 0.4, 1.0);
    this._addAsset('nature', 'Bush_Large', 9.5, 0, 19.5, -0.3, 0.95);
    this._addAsset('nature', 'Bush_Small', -3.0, 0, 13.0, 0.6, 1.0);
    this._addAsset('nature', 'Bush_Small', 4.5, 0, 13.5, -0.8, 0.9);
    this._addAsset('nature', 'Bush_Flowers', -6.8, 0, 16.5, 0.2, 0.9);
    this._addAsset('nature', 'Bush_Flowers', 6.2, 0, 17.2, -0.4, 0.85);
    this._addAsset('nature', 'Flower_1_Clump', -4.0, 0, 15.5, 0.5, 1.0);
    this._addAsset('nature', 'Flower_2_Clump', 3.5, 0, 15.0, -0.2, 0.95);
    this._addAsset('nature', 'Grass_Large', -1.0, 0, 11.5, 0.1, 1.0, false);
    this._addAsset('nature', 'Grass_Large', 2.5, 0, 12.5, -0.6, 0.9, false);

    // Damaged workshop composition.
    this.workshopDamagedGroup = new THREE.Group();
    this.workshopDamagedGroup.name = 'workshop-damaged';
    this.scene.add(this.workshopDamagedGroup);
    const damaged = (name, x, y, z, ry = 0, scale = 1) => {
      const clone = this._cloneAsset('ruins', name);
      if (!clone) return null;
      clone.position.set(x, y, z);
      clone.rotation.y = ry;
      clone.scale.setScalar(scale);
      this.workshopDamagedGroup.add(clone);
      clone.traverse((obj) => {
        if (obj.isMesh) this.cameraOccluders.push(obj);
      });
      return clone;
    };
    damaged('Wall_Broken', -9.8, 0, 8.6, 0.15, 1.0);
    damaged('Wall_Half', -7.4, 0, 11.2, -0.25, 1.0);
    damaged('Wall_Overgrown', -10.0, 0, 10.8, 1.35, 0.95);
    damaged('Support_Left', -9.2, 0, 9.8, 0.2, 1.0);
    damaged('Support_Right', -7.8, 0, 9.2, -0.1, 1.0);
    damaged('Arch_Round', -8.6, 0, 9.5, 0.0, 0.85);
    damaged('Column_Round', -9.6, 0, 9.0, 0.0, 0.9);
    damaged('Column_Round_Short', -7.6, 0, 10.2, 0.0, 0.9);
    damaged('Barrel', -6.8, 0, 8.9, 0.4, 0.9);
    damaged('Crate', -7.1, 0, 10.8, -0.3, 0.85);
    damaged('Cart', -10.8, 0, 10.0, 0.7, 0.9);
    damaged('Pot1', -6.4, 0, 9.8, 0.2, 0.9);
    damaged('Pot1_Broken', -8.0, 0, 8.4, -0.5, 0.85);
    damaged('Pot2', -9.0, 0, 11.4, 0.3, 0.85);
    damaged('Torch', -7.2, 0, 9.0, 0.0, 0.85);
    damaged('Stairs', -8.6, 0, 7.8, 0.0, 0.75);
    damaged('Floor_Standard', -8.6, 0, 9.5, 0.0, 0.9);

    // Restored workshop additions.
    this.workshopRestoredGroup = new THREE.Group();
    this.workshopRestoredGroup.name = 'workshop-restored';
    this.workshopRestoredGroup.visible = false;
    this.scene.add(this.workshopRestoredGroup);
    const restored = (name, x, y, z, ry = 0, scale = 1) => {
      const clone = this._cloneAsset('ruins', name);
      if (!clone) return null;
      clone.position.set(x, y, z);
      clone.rotation.y = ry;
      clone.scale.setScalar(scale);
      this.workshopRestoredGroup.add(clone);
      clone.traverse((obj) => {
        if (obj.isMesh) this.cameraOccluders.push(obj);
      });
      return clone;
    };
    restored('Wall', -9.8, 0, 8.6, 0.15, 1.0);
    restored('Wall_ArchRound', -8.6, 0, 9.5, 0.0, 0.95);
    restored('Wall', -7.4, 0, 11.2, -0.25, 1.0);
    restored('Support_Center', -8.6, 0, 9.5, 0.0, 1.0);
    restored('Support_Left', -9.2, 0, 9.8, 0.2, 1.0);
    restored('Support_Right', -7.8, 0, 9.2, -0.1, 1.0);
    restored('Column_Round', -9.6, 0, 9.0, 0.0, 0.9);
    restored('Column_Round_Short', -7.6, 0, 10.2, 0.0, 0.9);
    restored('Barrel', -6.8, 0, 8.9, 0.4, 0.9);
    restored('Crate', -7.1, 0, 10.8, -0.3, 0.85);
    restored('Cart', -10.8, 0, 10.0, 0.7, 0.9);
    restored('Pot1', -6.4, 0, 9.8, 0.2, 0.9);
    restored('Pot2', -9.0, 0, 11.4, 0.3, 0.85);
    restored('Torch', -7.2, 0, 9.0, 0.0, 0.85);
    restored('Floor_Standard', -8.6, 0, 9.5, 0.0, 0.95);

    // Extra rocks around banks and foundations.
    this._addAsset('nature', 'DeadTree_2', 18.0, 0, -8.0, 0.5, 0.75);
  }

  _buildMossroad() {
    const g = new THREE.Group();
    g.name = 'Mossroad';
    this.scene.add(g);

    const arch = new THREE.Group();
    arch.position.set(0, 0, 3.2);
    addCylinder(arch, 0.25, 0.33, 4.3, 6, PALETTE.timber, -4.1, 2.15, 0);
    addCylinder(arch, 0.25, 0.33, 4.3, 6, PALETTE.timber, 4.1, 2.15, 0);
    addBox(arch, 8.9, 0.4, 0.5, PALETTE.timberLight, 0, 4.25, 0);
    addBox(arch, 3.6, 0.7, 0.12, PALETTE.timber, 0, 3.55, 0);
    this.scene.add(arch);
    this.colliders.push({ type: 'circle', x: -4.1, z: 3.2, r: 0.55, tag: 'camp-arch' });
    this.colliders.push({ type: 'circle', x: 4.1, z: 3.2, r: 0.55, tag: 'camp-arch' });

    const sign1 = new THREE.Group();
    sign1.position.set(-3.6, 0, -2.3);
    sign1.rotation.y = -0.2;
    addCylinder(sign1, 0.06, 0.08, 1.5, 4, PALETTE.timber, 0, 0.75, 0);
    addBox(sign1, 1.45, 0.55, 0.08, PALETTE.timberLight, 0, 1.35, 0);
    this.scene.add(sign1);

    const sign2 = new THREE.Group();
    sign2.position.set(3.7, 0, -8.3);
    sign2.rotation.y = 0.18;
    addCylinder(sign2, 0.06, 0.08, 1.5, 4, PALETTE.timber, 0, 0.75, 0);
    addBox(sign2, 1.45, 0.55, 0.08, PALETTE.timberLight, 0, 1.35, 0);
    this.scene.add(sign2);

    for (let i = 0; i < 7; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      addRock(this.scene, side * rand(4.2, 7.5), -5 - i * 5.3, rand(0.45, 1.15), i % 3 === 0 ? PALETTE.stoneLight : PALETTE.stone);
    }
    for (let i = 0; i < 8; i++) {
      const x = rand(-12, 12);
      const z = rand(-28, 2);
      if (Math.abs(x) < 3.5) continue;
      this.colliders.push({ type: 'circle', x, z, r: 0.65, tag: 'road-rock' });
    }

    this._buildCache('cache-a', 4.2, 0, -21.5, 0.2);

    const shrine = new THREE.Group();
    shrine.position.set(-5.8, 0, -24.5);
    addRock(this.scene, -5.8, -24.5, 0.85, PALETTE.stoneDark);
    addBox(shrine, 0.8, 0.25, 0.55, PALETTE.stoneLight, 0, 1.1, 0);
    this.scene.add(shrine);
  }

  _buildCartYard() {
    const g = new THREE.Group();
    g.name = 'Cart Yard';
    this.scene.add(g);

    const cart = new THREE.Group();
    cart.position.set(-4.6, 0, -35.0);
    cart.rotation.y = 0.25;
    addBox(cart, 2.6, 0.55, 1.5, PALETTE.timber, 0, 0.78, 0);
    addBox(cart, 2.4, 0.18, 1.3, PALETTE.timberLight, 0, 1.05, 0);
    for (const [x, z] of [[-1.0, -0.75], [1.0, -0.75], [-1.0, 0.75], [1.0, 0.75]]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.1, 5, 8), makeMat(PALETTE.timberLight));
      wheel.position.set(x, 0.52, z);
      wheel.rotation.y = Math.PI / 2;
      cart.add(wheel);
    }
    this.scene.add(cart);
    this.colliders.push({ type: 'box', minX: -6.2, maxX: -3.0, minZ: -36.2, maxZ: -33.8, tag: 'cart' });
    this.cameraOccluders.push(cart);

    const cart2 = new THREE.Group();
    cart2.position.set(7.0, 0, -49.0);
    cart2.rotation.y = -0.55;
    addBox(cart2, 2.2, 0.5, 1.3, PALETTE.timber, 0, 0.62, 0);
    this.scene.add(cart2);
    this.colliders.push({ type: 'box', minX: 5.7, maxX: 8.3, minZ: -50.0, maxZ: -48.0, tag: 'cart2' });

    for (let i = 0; i < 8; i++) {
      const log = addCylinder(g, 0.24, 0.26, 2.7, 6, i % 2 ? PALETTE.timber : PALETTE.timberLight, -9.5 + (i % 2) * 0.5, 0.26 + Math.floor(i / 2) * 0.46, -40.5 + Math.floor(i / 2) * 0.55);
      log.rotation.z = Math.PI / 2;
    }
    this.colliders.push({ type: 'box', minX: -11.2, maxX: -8.1, minZ: -41.4, maxZ: -37.7, tag: 'logs' });

    for (let i = 0; i < 10; i++) {
      const x = rand(-14, 14);
      const z = rand(-51, -31);
      if (Math.abs(x) < 4 && z > -43) continue;
      addRock(this.scene, x, z, rand(0.4, 1.3));
    }
    this._buildCache('cache-b', -7.4, 0, -43.0, -0.35);

    const post = new THREE.Group();
    post.position.set(9.5, 0, -34.5);
    addCylinder(post, 0.13, 0.18, 2.4, 5, PALETTE.timber, 0, 1.2, 0);
    addBox(post, 1.1, 0.7, 0.1, PALETTE.timberLight, 0, 2.0, 0);
    this.scene.add(post);
  }

  _buildShortcut() {
    const g = new THREE.Group();
    g.name = 'Shortcut';
    this.scene.add(g);

    this.shortcutGate = new THREE.Group();
    this.shortcutGate.position.set(20, 0, -20);
    addCylinder(this.shortcutGate, 0.2, 0.26, 3.4, 5, PALETTE.timber, -2.35, 1.7, 0);
    addCylinder(this.shortcutGate, 0.2, 0.26, 3.4, 5, PALETTE.timber, 2.35, 1.7, 0);
    addBox(this.shortcutGate, 5.0, 0.35, 0.32, PALETTE.timberLight, 0, 3.3, 0);
    const door = new THREE.Group();
    door.position.set(-2.2, 0, 0);
    for (let i = 0; i < 4; i++) addBox(door, 1.0, 2.7, 0.13, i % 2 ? PALETTE.timber : PALETTE.timberLight, 0.55 + i * 1.05, 1.5, 0);
    addBox(door, 4.25, 0.18, 0.2, PALETTE.stoneDark, 2.15, 2.5, 0.09);
    const shortcutOccluder = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 3.2, 0.5),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    shortcutOccluder.position.set(2.15, 1.5, 0);
    door.add(shortcutOccluder);
    this.cameraOccluders.push(shortcutOccluder);
    this.shortcutGate.add(door);
    this.shortcutDoor = door;
    this.scene.add(this.shortcutGate);
    this.shortcutCollider = { type: 'box', minX: 17.4, maxX: 22.6, minZ: -20.8, maxZ: -19.2, tag: 'shortcut-gate', enabled: true };
    this.colliders.push(this.shortcutCollider);
    this.cameraOccluders.push(door);

    const shelter = new THREE.Group();
    shelter.position.set(27.2, 0, -26.8);
    shelter.rotation.y = -0.35;
    addBox(shelter, 4.6, 0.18, 3.8, PALETTE.stoneDark, 0, 0.09, 0);
    addCylinder(shelter, 0.12, 0.15, 2.2, 5, PALETTE.timber, -1.9, 1.1, -1.5);
    addCylinder(shelter, 0.12, 0.15, 2.2, 5, PALETTE.timber, 1.9, 1.1, -1.5);
    const roof = addBox(shelter, 4.4, 0.15, 3.7, PALETTE.roof, 0, 2.35, 0);
    roof.rotation.z = 0.06;
    addBox(shelter, 3.6, 1.4, 0.18, PALETTE.timber, 0, 0.8, -1.85);
    const shelf = addBox(shelter, 2.2, 0.16, 0.45, PALETTE.timberLight, 0.4, 0.9, 1.4);
    this.scene.add(shelter);
    this.colliders.push({ type: 'box', minX: 25.1, maxX: 29.3, minZ: -28.6, maxZ: -24.9, tag: 'shelter' });
    this.cameraOccluders.push(roof, shelter.children[4]);

    this.keepsake = new THREE.Group();
    this.keepsake.position.set(27.5, 1.02, -25.4);
    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.16, 0.055, 36, 5, 2, 3), makeMat(0xc4a36e, { emissive: 0x2a1b08, emissiveIntensity: 0.4 }));
    knot.rotation.x = 0.6;
    this.keepsake.add(knot);
    const glow = new THREE.PointLight(0xffd58a, 0.55, 3, 2);
    glow.position.y = 0.2;
    this.keepsake.add(glow);
    this.scene.add(this.keepsake);
    this.keepsakeShelf = shelf;
  }

  _buildWayhouse() {
    const g = new THREE.Group();
    g.name = 'Upper Wayhouse';
    this.scene.add(g);

    const baseY = 1.5;
    const house = new THREE.Group();
    house.position.set(-7.5, baseY, -74.0);
    house.rotation.y = 0.08;
    const floor = addBox(house, 9.5, 0.28, 7.5, PALETTE.stoneDark, 0, 0.14, 0);
    floor.receiveShadow = true;
    const wallL = addBox(house, 0.3, 3.0, 7.3, PALETTE.timber, -4.6, 1.7, 0);
    const wallR = addBox(house, 0.3, 3.0, 7.3, PALETTE.timber, 4.6, 1.7, 0);
    const wallB = addBox(house, 9.2, 3.0, 0.3, PALETTE.timber, 0, 1.7, -3.5);
    const roofL = addBox(house, 5.6, 0.22, 7.9, PALETTE.roof, -2.35, 3.7, 0);
    roofL.rotation.z = 0.42;
    const roofR = addBox(house, 5.6, 0.22, 7.9, PALETTE.roof, 2.35, 3.7, 0);
    roofR.rotation.z = -0.42;
    addBox(house, 2.3, 2.6, 0.22, PALETTE.timberLight, 1.4, 1.35, 3.45);
    addBox(house, 1.2, 1.2, 0.12, 0x2b342f, -2.6, 1.9, 3.48);
    this.scene.add(house);
    this.colliders.push({ type: 'box', minX: -12.2, maxX: -2.8, minZ: -77.8, maxZ: -70.2, tag: 'wayhouse' });
    this.cameraOccluders.push(wallL, wallR, wallB, roofL, roofR);
    this.wayhouse = house;

    const well = new THREE.Group();
    well.position.set(6.5, baseY, -71.0);
    addCylinder(well, 0.85, 0.95, 0.8, 8, PALETTE.stone, 0, 0.4, 0);
    addCylinder(well, 0.6, 0.6, 0.1, 8, 0x253c3a, 0, 0.82, 0);
    addCylinder(well, 0.09, 0.11, 2.5, 5, PALETTE.timber, -0.9, 1.4, 0);
    addCylinder(well, 0.09, 0.11, 2.5, 5, PALETTE.timber, 0.9, 1.4, 0);
    addBox(well, 2.1, 0.2, 1.4, PALETTE.roof, 0, 2.7, 0);
    this.scene.add(well);
    this.colliders.push({ type: 'circle', x: 6.5, z: -71.0, r: 1.1, tag: 'well' });

    this._buildCache('cache-c', -8.8, 1.5, -72.0, 0.12);
    this._buildCache('cache-d', 8.4, 1.5, -83.0, -0.2);

    for (let i = 0; i < 12; i++) {
      const x = rand(-15, 15);
      const z = rand(-88, -66);
      if (Math.abs(x) < 6 && z > -80) continue;
      addRock(this.scene, x, z, rand(0.35, 1.0));
    }

    const lampPost = new THREE.Group();
    lampPost.position.set(2.2, baseY, -67.5);
    addCylinder(lampPost, 0.07, 0.1, 2.3, 5, PALETTE.timber, 0, 1.15, 0);
    addBox(lampPost, 0.5, 0.45, 0.5, PALETTE.stoneDark, 0, 2.25, 0);
    this.scene.add(lampPost);
  }

  _buildBrazier() {
    const baseY = 1.5;
    const g = new THREE.Group();
    g.name = 'Field Brazier';
    g.position.set(0, baseY, -96.0);
    addCylinder(g, 1.25, 1.55, 0.35, 9, PALETTE.stoneDark, 0, 0.18, 0);
    addCylinder(g, 0.36, 0.5, 1.2, 7, PALETTE.stone, 0, 0.9, 0);
    addCylinder(g, 0.72, 0.42, 0.5, 8, PALETTE.stoneLight, 0, 1.7, 0);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.5, 0.35, 8, 1, true), makeMat(PALETTE.stoneDark, { side: THREE.DoubleSide }));
    bowl.position.y = 1.95;
    g.add(bowl);
    this.scene.add(g);
    this.colliders.push({ type: 'circle', x: 0, z: -96.0, r: 1.15, tag: 'brazier' });
    this.brazierGroup = g;
    this.brazierFire = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.flameTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.brazierFire.position.set(0, 2.3, 0);
    this.brazierFire.scale.set(1.0, 1.4, 1);
    this.brazierFire.visible = false;
    g.add(this.brazierFire);
    this.brazierLight = new THREE.PointLight(0xffb45d, 0, 14, 1.6);
    this.brazierLight.visible = false;
    this.brazierLight.userData.lightEnabled = false;
    this.brazierLight.position.set(0, 2.7, 0);
    g.add(this.brazierLight);

    const posts = new THREE.Group();
    posts.position.set(0, baseY, -100.0);
    addCylinder(posts, 0.1, 0.13, 2.2, 5, PALETTE.timber, -3.3, 1.1, 0);
    addCylinder(posts, 0.1, 0.13, 2.2, 5, PALETTE.timber, 3.3, 1.1, 0);
    this.scene.add(posts);

    this.bossGate = new THREE.Group();
    this.bossGate.position.set(0, baseY, -103.4);
    addCylinder(this.bossGate, 0.32, 0.42, 4.8, 6, PALETTE.stoneDark, -3.9, 2.4, 0);
    addCylinder(this.bossGate, 0.32, 0.42, 4.8, 6, PALETTE.stoneDark, 3.9, 2.4, 0);
    addBox(this.bossGate, 8.6, 0.55, 0.65, PALETTE.stone, 0, 4.9, 0);
    const door = new THREE.Group();
    door.position.set(0, 0, 0);
    for (let i = 0; i < 4; i++) {
      addBox(door, 1.55, 3.8, 0.25, i % 2 ? PALETTE.stoneDark : PALETTE.stone, -2.45 + i * 1.63, 2.0, 0);
    }
    for (let i = 0; i < 4; i++) {
      addBox(door, 0.18, 3.9, 0.32, PALETTE.stoneLight, -3.1 + i * 2.06, 2.0, 0.1);
    }
    const bossOccluder = new THREE.Mesh(
      new THREE.BoxGeometry(8.6, 4.0, 0.5),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    bossOccluder.position.set(0, 2.0, 0);
    door.add(bossOccluder);
    this.cameraOccluders.push(bossOccluder);
    this.bossGate.add(door);
    this.bossDoor = door;
    this.scene.add(this.bossGate);
    this.bossGateCollider = { type: 'box', minX: -4.2, maxX: 4.2, minZ: -104.0, maxZ: -102.8, tag: 'boss-gate', enabled: true };
    this.colliders.push(this.bossGateCollider);
    this.cameraOccluders.push(door);
    this.bossGateOpen = false;
  }

  _buildCourtyard() {
    const center = CONFIG.world.bossArena;
    const ring = new THREE.Group();
    ring.position.set(center.x, center.groundY, center.z);
    const ringGeo = new THREE.RingGeometry(12.4, 14.4, 40, 1);
    const ringMesh = new THREE.Mesh(ringGeo, makeMat(PALETTE.stoneDark, { side: THREE.DoubleSide }));
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.035;
    ringMesh.receiveShadow = true;
    ring.add(ringMesh);
    const floorGeo = new THREE.CircleGeometry(12.6, 36);
    const floor = new THREE.Mesh(floorGeo, makeMat(PALETTE.stone, { side: THREE.DoubleSide }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.02;
    floor.receiveShadow = true;
    ring.add(floor);
    this.scene.add(ring);

    const wallMat = makeMat(PALETTE.stoneDark);
    const segGeo = new THREE.BoxGeometry(3.0, 3.6, 1.2);
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2;
      if (Math.abs(((a + Math.PI) % (Math.PI * 2)) - Math.PI) < 0.19) continue;
      const x = center.x + Math.sin(a) * 14.0;
      const z = center.z + Math.cos(a) * 14.0;
      const mesh = new THREE.Mesh(segGeo, wallMat);
      mesh.position.set(x, center.groundY + 1.2, z);
      mesh.rotation.y = a;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.colliders.push({ type: 'circle', x, z, r: 1.25, tag: 'arena-wall' });
      this.cameraOccluders.push(mesh);
      if (i % 2 === 0) {
        addRock(this.scene, x + Math.sin(a) * 0.8, z + Math.cos(a) * 0.8, 0.8, PALETTE.stoneLight);
      }
    }

    for (let i = 0; i < 8; i++) {
      const a = 0.4 + i * 0.75;
      const x = center.x + Math.sin(a) * 10.2;
      const z = center.z + Math.cos(a) * 10.2;
      if (Math.abs(x) < 2.5 && z > center.z + 8) continue;
      const rubble = addRock(this.scene, x, z, rand(0.35, 0.75), PALETTE.stone);
      rubble.position.y = center.groundY + 0.3;
    }

    const dais = new THREE.Group();
    dais.position.set(center.x, center.groundY, center.z - 3.0);
    addCylinder(dais, 2.0, 2.5, 0.35, 8, PALETTE.stoneDark, 0, 0.18, 0);
    addCylinder(dais, 1.25, 1.6, 0.55, 8, PALETTE.stone, 0, 0.55, 0);
    this.scene.add(dais);
    this.bossDais = dais;

    const gateBack = new THREE.Group();
    gateBack.position.set(0, center.groundY, center.z + 13.8);
    addCylinder(gateBack, 0.4, 0.5, 5.2, 6, PALETTE.stoneDark, -4.5, 2.6, 0);
    addCylinder(gateBack, 0.4, 0.5, 5.2, 6, PALETTE.stoneDark, 4.5, 2.6, 0);
    addBox(gateBack, 10.0, 0.6, 0.7, PALETTE.stone, 0, 5.2, 0);
    this.scene.add(gateBack);
    this.courtyardCenter = center;
  }

  _buildCache(id, x, y, z, ry) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.rotation.y = ry;
    const base = addBox(group, 1.05, 0.7, 0.72, PALETTE.timber, 0, 0.38, 0);
    const lid = addBox(group, 1.1, 0.2, 0.78, PALETTE.timberLight, 0, 0.8, 0);
    lid.name = 'lid';
    addBox(group, 0.18, 0.5, 0.05, PALETTE.stoneLight, 0, 0.48, 0.38);
    const glow = new THREE.PointLight(0xffc96f, 0.65, 3.5, 2);
    glow.position.set(0, 1.1, 0);
    group.add(glow);
    const marker = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), new THREE.MeshBasicMaterial({ color: 0xffd485 }));
    marker.position.y = 1.25;
    group.add(marker);
    this.scene.add(group);
    this.cacheMeshes.set(id, { group, lid, glow, marker, base });
    this.colliders.push({ type: 'circle', x, z, r: 0.65, tag: id });
    return group;
  }

  _buildBoundaries() {
    const b = CONFIG.world.bounds;
    const thickness = 2;
    this.colliders.push({ type: 'box', minX: b.minX - thickness, maxX: b.minX, minZ: b.minZ - 4, maxZ: b.maxZ + 4, tag: 'boundary' });
    this.colliders.push({ type: 'box', minX: b.maxX, maxX: b.maxX + thickness, minZ: b.minZ - 4, maxZ: b.maxZ + 4, tag: 'boundary' });
    this.colliders.push({ type: 'box', minX: b.minX - 4, maxX: b.maxX + 4, minZ: b.minZ - thickness, maxZ: b.minZ, tag: 'boundary' });
    this.colliders.push({ type: 'box', minX: b.minX - 4, maxX: b.maxX + 4, minZ: b.maxZ, maxZ: b.maxZ + thickness, tag: 'boundary' });
    this.boundaryRocks = [];
    for (let i = 0; i < 26; i++) {
      const x = b.minX + (i / 25) * (b.maxX - b.minX);
      this.boundaryRocks.push(addRock(this.scene, x, b.minZ + 0.8, rand(0.9, 1.8), PALETTE.stoneDark));
    }
  }

  addCollider(collider) {
    this.colliders.push(collider);
    return collider;
  }

  resolveMovement(x, z, radius, previous) {
    const b = CONFIG.world.bounds;
    let px = clamp(x, b.minX + radius, b.maxX - radius);
    let pz = clamp(z, b.minZ + radius, b.maxZ - radius);
    for (let iter = 0; iter < 4; iter++) {
      let moved = false;
      for (const c of this.colliders) {
        if (c.enabled === false) continue;
        if (c.type === 'circle') {
          const dx = px - c.x;
          const dz = pz - c.z;
          const min = radius + c.r;
          const d = Math.hypot(dx, dz);
          if (d < min) {
            moved = true;
            if (d < 0.0001) {
              px = c.x + min;
            } else {
              px = c.x + (dx / d) * min;
              pz = c.z + (dz / d) * min;
            }
          }
        } else if (c.type === 'box') {
          const cx = clamp(px, c.minX, c.maxX);
          const cz = clamp(pz, c.minZ, c.maxZ);
          const dx = px - cx;
          const dz = pz - cz;
          const d = Math.hypot(dx, dz);
          if (d < radius) {
            moved = true;
            if (d > 0.0001) {
              px = cx + (dx / d) * radius;
              pz = cz + (dz / d) * radius;
            } else {
              const left = px - c.minX;
              const right = c.maxX - px;
              const top = pz - c.minZ;
              const bottom = c.maxZ - pz;
              const m = Math.min(left, right, top, bottom);
              if (m === left) px = c.minX - radius;
              else if (m === right) px = c.maxX + radius;
              else if (m === top) pz = c.minZ - radius;
              else pz = c.maxZ + radius;
            }
          }
        }
      }
      if (!moved) break;
    }
    if (!Number.isFinite(px) || !Number.isFinite(pz)) {
      return { x: previous.x, z: previous.z };
    }
    return { x: px, z: pz };
  }

  isPositionValid(x, z, radius = 0.38) {
    const b = CONFIG.world.bounds;
    if (x < b.minX + radius || x > b.maxX - radius || z < b.minZ + radius || z > b.maxZ - radius) return false;
    if (!Number.isFinite(groundHeight(x, z))) return false;
    for (const c of this.colliders) {
      if (c.enabled === false) continue;
      if (c.type === 'circle') {
        if (Math.hypot(x - c.x, z - c.z) < c.r + radius - 0.02) return false;
      } else if (c.type === 'box') {
        const cx = clamp(x, c.minX, c.maxX);
        const cz = clamp(z, c.minZ, c.maxZ);
        if (Math.hypot(x - cx, z - cz) < radius - 0.02) return false;
      }
    }
    return true;
  }

  setCacheClaimed(id, claimed = true) {
    const c = this.cacheMeshes.get(id);
    if (!c) return;
    if (claimed) {
      c.lid.rotation.x = -1.15;
      c.lid.position.z = -0.28;
      c.lid.position.y = 0.7;
      c.glow.intensity = 0;
      this._setPointLight(c.glow, false);
      c.marker.visible = false;
      c.base.material = makeMat(0x4c4032);
    } else {
      c.lid.rotation.x = 0;
      c.lid.position.z = 0;
      c.lid.position.y = 0.8;
      c.glow.intensity = 0.65;
      this._setPointLight(c.glow, true);
      c.marker.visible = true;
      c.base.material = makeMat(PALETTE.timber);
    }
  }

  setKeepsakeCollected(collected) {
    this.keepsake.visible = !collected;
    this.campKeepsake.visible = collected;
    if (collected) {
      this.keepsakeShelf.material = makeMat(0x8d6f47);
    }
  }

  setWorkshopBuilt(built) {
    this.workshopRoof.visible = built;
    this.workshopTools.visible = built;
    this.workshopLight.intensity = built ? 1.7 : 0;
    this._setPointLight(this.workshopLight, built);
    this.workshopBench.material = makeMat(built ? 0x9a784d : PALETTE.timberLight);
    if (this.workshopDamagedGroup) this.workshopDamagedGroup.visible = !built;
    if (this.workshopRestoredGroup) this.workshopRestoredGroup.visible = built;
  }

  setBrazierActive(active) {
    this.brazierFire.visible = active;
    this.brazierLight.intensity = active ? 2.2 : 0;
    this._setPointLight(this.brazierLight, active);
  }

  setShortcutOpen(open) {
    this.shortcutCollider.enabled = !open;
    this.shortcutDoor.rotation.y = open ? -1.65 : 0;
  }

  setBossGate(open) {
    this.bossGateOpen = open;
    this.bossGateCollider.enabled = !open;
    this.bossDoor.rotation.y = open ? 1.35 : 0;
    this.bossDoor.position.x = open ? 1.8 : 0;
  }

  setBeaconBuilt(built) {
    this.brokenLens.visible = !built;
    this.beaconLens.visible = built;
    this.beaconLight.intensity = built ? 3.2 : 0;
    this._setPointLight(this.beaconLight, built);
    for (const lamp of this.bridgeLamps) {
      lamp.bulb.visible = built;
      this._setPointLight(lamp.light, built);
      lamp.light.intensity = built ? 1.4 : 0;
    }
    const gate = this.colliders.find((c) => c.tag === 'bridge-gate');
    if (gate) gate.enabled = !built;
    if (this.bridgeGateBar) this.bridgeGateBar.visible = !built;
  }

  setBridgeLights(on) {
    for (const lamp of this.bridgeLamps) {
      lamp.bulb.visible = on;
      this._setPointLight(lamp.light, on);
      lamp.light.intensity = on ? 1.4 : 0;
    }
    this.beaconLight.intensity = on ? 3.2 : 0;
    this._setPointLight(this.beaconLight, on);
    this.beaconLens.visible = on;
  }

  setQuality(quality) {
    this.quality = quality;
    const low = quality === 'low';
    this.sun.castShadow = !low;
    this.renderer.shadowMap.enabled = !low;
    this.scene.traverse((obj) => {
      if (obj.isPointLight) {
        obj.visible = obj.userData.lightEnabled !== false && (!low || obj.userData.lowLight === true);
        return;
      }
      if (!obj.isMesh) return;
      if (obj.userData.baseCastShadow === undefined) obj.userData.baseCastShadow = obj.castShadow;
      obj.castShadow = !low && obj.userData.baseCastShadow;
    });
    for (const mesh of this.treeMeshes) mesh.castShadow = false;
  }

  update(dt, time, game) {
    this.time = time;
    if (this.hearthFire) {
      const flick = 0.92 + Math.sin(time * 12.3) * 0.08 + Math.sin(time * 20.1) * 0.04;
      this.hearthFire.scale.set(1.4 * flick, 1.8 * flick, 1);
      this.hearthLight.intensity = 2.2 + Math.sin(time * 9.7) * 0.18;
    }
    if (this.brazierFire.visible) {
      const flick = 0.9 + Math.sin(time * 10.4) * 0.1 + Math.sin(time * 17.2) * 0.05;
      this.brazierFire.scale.set(1.0 * flick, 1.4 * flick, 1);
      this.brazierLight.intensity = 2.0 + Math.sin(time * 8.1) * 0.25;
    }
    if (this.beaconLens.visible) {
      this.beaconLens.rotation.y += dt * 0.6;
    }
    const markerY = 1.25 + Math.sin(time * 2.2) * 0.1;
    for (const [, c] of this.cacheMeshes) {
      if (c.marker.visible) {
        c.marker.position.y = markerY;
        c.marker.rotation.y += dt * 1.4;
      }
    }
    if (this.keepsake.visible) {
      this.keepsake.rotation.y += dt * 0.7;
      this.keepsake.position.y = 1.02 + Math.sin(time * 2.5) * 0.05;
    }
    if (this.campKeepsake.visible) {
      this.campKeepsake.rotation.y += dt * 0.4;
    }
  }
}

export { groundHeight };
