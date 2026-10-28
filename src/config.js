// Waykeepers - all gameplay tuning lives here so it can be adjusted without
// touching simulation code. Values are the initial Chapter I tuning pass.

export const SAVE_KEY = 'waykeepers.save.v1';
export const SAVE_VERSION = 1;

export const CONFIG = {
  render: {
    fov: 60,
    near: 0.1,
    far: 220,
    fogNear: 32,
    fogFar: 138,
    clearColor: 0x8ea59a,
    highPixelRatio: 1.5,
    lowPixelRatio: 0.75,
  },

  player: {
    maxHealth: 100,
    maxStamina: 100,
    walkSpeed: 4.0,
    sprintSpeed: 6.0,
    sprintStaminaPerSecond: 15,
    radius: 0.38,
    height: 1.78,
    eyeHeight: 1.45,
    healCharges: 2,
    healAmount: 40,
    healTime: 1.4,
    healMoveSpeed: 1.15,
    staminaRegenPerSecond: 30,
    staminaRegenDelay: 0.75,
    hitReactionTime: 0.25,
    damageInvulnerability: 0.80,
    inputBuffer: 0.15,
    dodge: {
      stamina: 25,
      duration: 0.60,
      distance: 2.6,
      invulnerableFrom: 0.06,
      invulnerableTo: 0.30,
    },
    attacks: {
      light: {
        id: 'light',
        stamina: 20,
        damage: 25,
        windup: 0.22,
        active: 0.10,
        recovery: 0.33,
        reach: 2.8,
        facingWindow: 0.10,
        tipRadius: 0.32,
        forwardStep: 0.0,
      },
      heavy: {
        id: 'heavy',
        stamina: 35,
        damage: 45,
        windup: 0.62,
        active: 0.14,
        recovery: 0.54,
        reach: 3.2,
        facingWindow: 0.30,
        tipRadius: 0.38,
        forwardStep: 0.55,
      },
    },
    workshopUpgrade: {
      light: 30,
      heavy: 54,
    },
    camera: {
      distance: 5.0,
      minDistance: 0.9,
      targetHeight: 1.35,
      heightOffset: 0.12,
      pitch: 0.20,
      minPitch: -0.30,
      maxPitch: 0.85,
      mouseSensitivity: 0.0024,
      collisionRadius: 0.22,
      restoreSpeed: 7.5,
    },
    lockOn: {
      acquireRange: 10,
      releaseRange: 14,
      maxScreenDistance: 0.62,
      facingTurnRate: 12,
    },
  },

  ordinaryEnemies: {
    briarling: {
      type: 'briarling',
      name: 'Briarling',
      health: 60,
      speed: 2.25,
      radius: 0.5,
      height: 1.05,
      aggroRange: 8.5,
      attackRange: 2.5,
      stopRange: 1.85,
      leash: 11,
      facingLock: 0.25,
      staggerResistance: 2.0,
      staggerDuration: 0.35,
      attack: {
        id: 'briar-lunge',
        tell: 0.80,
        active: 0.12,
        recovery: 0.90,
        damage: 18,
        reach: 2.4,
        halfArc: 0.62,
      },
    },
    mossguard: {
      type: 'mossguard',
      name: 'Mossguard',
      health: 90,
      speed: 1.55,
      radius: 0.72,
      height: 2.15,
      aggroRange: 9.5,
      attackRange: 3.2,
      stopRange: 2.5,
      leash: 13,
      facingLock: 0.25,
      staggerResistance: 2.0,
      staggerDuration: 0.35,
      attack: {
        id: 'moss-sweep',
        tell: 1.20,
        active: 0.18,
        recovery: 1.50,
        damage: 26,
        reach: 3.0,
        halfArc: 1.05,
      },
    },
  },

  boss: {
    name: 'Gate Warden',
    health: 420,
    radius: 1.15,
    height: 3.9,
    speed: 4.0,
    stopRange: 3.8,
    attackRange: 4.4,
    facingLock: 0.30,
    transitionTime: 1.0,
    attacks: {
      sweep: {
        id: 'warden-sweep',
        tell: 1.10,
        active: 0.20,
        recovery: 1.70,
        damage: 24,
        reach: 4.2,
        halfArc: (150 * Math.PI) / 360,
      },
      overhead: {
        id: 'warden-overhead',
        tell: 1.35,
        active: 0.16,
        recovery: 2.00,
        damage: 32,
        radius: 1.3,
        impactDistance: 2.9,
      },
      doubleSweep: {
        first: {
          id: 'warden-double-sweep-a',
          tell: 1.10,
          active: 0.20,
          damage: 24,
          reach: 4.2,
          halfArc: (150 * Math.PI) / 360,
        },
        gap: 0.85,
        second: {
          id: 'warden-double-sweep-b',
          tell: 0.85,
          active: 0.20,
          damage: 24,
          reach: 4.2,
          halfArc: (150 * Math.PI) / 360,
        },
        recovery: 2.00,
      },
    },
  },

  world: {
    campRadius: 18,
    bounds: { minX: -34, maxX: 34, minZ: -138, maxZ: 32 },
    safeGroundMargin: 0.08,
    interactionRange: 2.7,
    enemyEngagedRange: 22,
    combatQuietTime: 5.0,
    bossTriggerZ: -104.2,
    bossArena: { x: 0, z: -117, radius: 13.5, groundY: 1.5 },
  },

  economy: {
    cacheSalvage: 2,
    bossSalvage: 4,
    workshopCost: 4,
    beaconCost: 8,
  },

  progression: {
    chapterTitle: 'Light the Road',
    chapterNumber: 'I',
  },
};

export const CHECKPOINTS = {
  camp: {
    id: 'camp',
    name: 'Alder Hollow Hearth',
    short: 'Camp',
    position: { x: 0, z: 14.5, y: 0 },
    spawn: { x: 0, z: 12.8, yaw: Math.PI },
  },
  brazier: {
    id: 'brazier',
    name: 'Field Brazier',
    short: 'Brazier',
    position: { x: 0, z: -96.0, y: 1.5 },
    spawn: { x: 0, z: -93.4, yaw: Math.PI },
  },
};

export const CACHES = [
  { id: 'cache-a', name: 'Mossroad Supply Cache', x: 4.2, z: -21.5, y: 0 },
  { id: 'cache-b', name: 'Cart Yard Supply Cache', x: -7.4, z: -43.0, y: 0 },
  { id: 'cache-c', name: 'Wayhouse Supply Cache', x: -8.8, z: -72.0, y: 1.5 },
  { id: 'cache-d', name: 'Upper Store Supply Cache', x: 8.4, z: -83.0, y: 1.5 },
];

export const ENCOUNTERS = {
  briarling: {
    id: 'briarling',
    trigger: { x: 0, z: -13.5, radius: 6.5 },
    enemies: [
      { type: 'briarling', x: -1.4, z: -17.2, homeRadius: 7.5 },
    ],
  },
  mossguard: {
    id: 'mossguard',
    trigger: { x: 0, z: -39.0, radius: 8.5 },
    enemies: [
      { type: 'mossguard', x: 3.2, z: -41.5, homeRadius: 9.5 },
    ],
  },
  mixed: {
    id: 'mixed',
    trigger: { x: 0, z: -77.0, radius: 9.5 },
    enemies: [
      { type: 'briarling', x: -4.2, z: -80.0, homeRadius: 9.0 },
      { type: 'mossguard', x: 4.8, z: -80.8, homeRadius: 9.5 },
    ],
  },
};

export const OBJECTIVES = {
  initial: 'Cross the Mossroad, defeat the Gate Warden and recover the Beacon Lens.',
  brazier: 'The field brazier is lit. Rest there before entering the Warden courtyard.',
  boss: 'Defeat the Gate Warden and recover the Beacon Lens.',
  lens: 'Return to Alder Hollow and restore the bridge beacon.',
  lensNoSalvage: 'Gather Salvage for the bridge beacon, then return to Alder Hollow.',
  complete: 'Chapter complete: the road is lit. Explore Alder Hollow at your leisure.',
};

export const DIALOGUE = {
  arrival: {
    title: 'Mara, Caretaker of Alder Hollow',
    body: "You came back. The road has swallowed better travelers than us.\n\nThe Mossroad climbs to the old wayhouse, then the Warden's courtyard. The Gate Warden keeps the Beacon Lens. Bring it home and we can light the bridge again.\n\nThere are supply caches along the way. Rest at the field brazier before you challenge the gate. The Warden is slow, but every blow is meant to end a fight.",
  },
  lens: {
    title: 'Mara, Caretaker of Alder Hollow',
    body: "The Lens. I had begun to think the Warden's gate would stay dark forever.\n\nBring eight Salvage and the Lens to the broken beacon by the bridge. I will fit the lens and wake the road lamps. The workshop can wait; the beacon cannot.",
  },
  lensPoor: {
    title: 'Mara, Caretaker of Alder Hollow',
    body: "The Lens is safe in your pack. The beacon needs eight Salvage besides. Search the caches you passed; the road is generous to those who look.",
  },
  complete: {
    title: 'Mara, Caretaker of Alder Hollow',
    body: "Look at it. The bridge lamps, the beacon, the whole road waking one stone at a time.\n\nYou have done what the Warden could not. Rest now, Waykeeper. The next road will wait until you are ready.",
  },
  beaconInspected: {
    title: 'The Broken Beacon',
    body: "The lens cradle is empty, its brass teeth furred with moss. A plaque reads: LIGHT THE ROAD.\n\nMara at the hearth knows what the beacon needs. The Gate Warden on the Mossroad carries its Beacon Lens.",
  },
  beaconRestored: {
    title: 'The Bridge Beacon',
    body: "Warm light pours through the lens. Across the bridge, old lamps answer one by one. For the first time in years, Alder Hollow has a road worth walking.",
  },
  workshopBuilt: {
    title: 'The Restored Workshop',
    body: "The bench is true, the roof is whole, and the grindstone turns. Your spear tip has been reinforced. Light and heavy thrusts now strike harder.",
  },
  shortcutLocked: {
    title: 'Shortcut Gate',
    body: "The latch is on the far side. This gate was built to be opened from the cart yard, not from camp.",
  },
  shortcutOpened: {
    title: 'Shortcut Opened',
    body: "The old latch gives way. A narrow path now runs from the cart yard back toward Alder Hollow.",
  },
  keepsake: {
    title: 'Carved Keepsake',
    body: "A small carved warden's knot, worn smooth by a thumb. It belongs on the hearth shelf, where someone can remember it.",
  },
};

export const REST_POINT_NAMES = {
  camp: 'Alder Hollow Hearth',
  brazier: 'Field Brazier',
};
