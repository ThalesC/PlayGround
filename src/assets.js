import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const NATURE_BASE = '/assets/quaternius/ultimate-stylized-nature/';
const RUINS_BASE = '/assets/quaternius/ultimate-modular-ruins/';

const NATURE_MODELS = [
  'BirchTree_2',
  'MapleTree_3',
  'DeadTree_2',
  'Bush_Large',
  'Bush_Small',
  'Bush_Flowers',
  'Flower_1_Clump',
  'Flower_2_Clump',
  'Grass_Large',
];

const RUINS_MODELS = [
  'Wall',
  'Wall_ArchRound',
  'Wall_Broken',
  'Wall_Half',
  'Wall_Overgrown',
  'Arch_Round',
  'Column_Round',
  'Column_Round_Short',
  'Support_Left',
  'Support_Right',
  'Support_Center',
  'Barrel',
  'Crate',
  'Cart',
  'Pot1',
  'Pot1_Broken',
  'Pot2',
  'Pot3',
  'Torch',
  'Stairs',
  'Floor_Standard',
];

export async function loadAssets() {
  const gltfLoader = new GLTFLoader();
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  const assets = { nature: {}, ruins: {} };

  await Promise.all(NATURE_MODELS.map(async (name) => {
    const gltf = await gltfLoader.loadAsync(`${NATURE_BASE}glTF/${name}.gltf`);
    assets.nature[name] = gltf.scene;
  }));

  await Promise.all(RUINS_MODELS.map(async (name) => {
    const materials = await mtlLoader.loadAsync(`${RUINS_BASE}OBJ/${name}.mtl`);
    materials.preload();
    objLoader.setMaterials(materials);
    const object = await objLoader.loadAsync(`${RUINS_BASE}OBJ/${name}.obj`);
    assets.ruins[name] = object;
  }));

  return assets;
}
