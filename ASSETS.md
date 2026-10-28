# Assets

Waykeepers Chapter I uses a focused subset of two CC0 Quaternius packs for the Alder Hollow and Mossroad entrance art pass. Runtime loading is handled by `src/assets.js` with Three.js `GLTFLoader`, `OBJLoader`, and `MTLLoader`; no format conversion was required.

## Sources

- Ultimate Stylized Nature Pack — Quaternius
  - Page: https://quaternius.com/packs/ultimatestylizednature.html
  - Download folder: https://drive.google.com/drive/folders/1IV3bXHzkNvuNWFHPi4KPx-G4ghuxIuT-?usp=sharing
  - License: CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)
- Ultimate Modular Ruins Pack — Quaternius
  - Page: https://quaternius.com/packs/ultimatemodularruins.html
  - Download folder: https://drive.google.com/drive/folders/1ETp2ldaHaP0BkS4FBmkT-g9Yf88T_cIX?usp=sharing
  - License: CC0 1.0 Universal (https://creativecommons.org/publicdomain/zero/1.0/)

## Runtime Paths

- Nature glTF assets: `public/assets/quaternius/ultimate-stylized-nature/glTF/`
- Ruins OBJ/MTL assets: `public/assets/quaternius/ultimate-modular-ruins/OBJ/`
- Pack texture files: alongside the model files in the same pack directories.

## Imported Nature Assets

- BirchTree_2
- MapleTree_3
- DeadTree_2
- Bush_Large
- Bush_Small
- Bush_Flowers
- Flower_1_Clump
- Flower_2_Clump
- Grass_Large

Supporting files include each model's `.gltf` and `.bin`, plus the shared texture files required by the selected models: `BirchTree_Bark.jpg`, `BirchTree_Bark_Normal.png`, `BirchTree_Leaves.png`, `Bush_Leaves.png`, `Flowers.png`, `Grass.png`, `MapleTree_Bark.jpg`, `MapleTree_Bark_Normal.png`, `MapleTree_Leaves.png`, `NormalTree_Bark.jpg`, and `NormalTree_Bark_Normal.png`.

## Imported Ruins Assets

- Arch_Round
- Barrel
- Cart
- Column_Round
- Column_Round_Short
- Crate
- Floor_Standard
- Pot1
- Pot1_Broken
- Pot2
- Pot3
- Stairs
- Support_Center
- Support_Left
- Support_Right
- Torch
- Wall
- Wall_ArchRound
- Wall_Broken
- Wall_Half
- Wall_Overgrown

Each imported ruins asset includes its `.obj` and `.mtl` files. The pack's `Bark_Texture.jpg` and `Leaf_Texture.png` are included for optional material use.

## Notes

- Assets are loaded asynchronously during game initialization; if a required file is missing, game startup fails with the browser console error identifying the file path.
- The selected subset was chosen for scale compatibility with the existing low-poly scene, warm/cool palette, and readable collision spaces.
- No blocking conversion step was needed. If future assets require Draco compression, glTF conversion, or texture resizing, record the exact source file and conversion command here before importing them.
