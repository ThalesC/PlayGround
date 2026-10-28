import { CACHES, SAVE_KEY, SAVE_VERSION } from './config.js';

export const DEFAULT_SETTINGS = {
  mouseSensitivity: 1.0,
  invertY: false,
  cameraShake: true,
  motionBlur: false,
  textScale: 1.0,
  musicVolume: 0.45,
  effectsVolume: 0.75,
  lowQuality: false,
};

export function createDefaultProgress() {
  return {
    version: SAVE_VERSION,
    salvage: 0,
    claimedCaches: [],
    keepsake: false,
    lens: false,
    lensConsumed: false,
    workshopBuilt: false,
    beaconBuilt: false,
    shortcutOpen: false,
    bossDefeated: false,
    activatedCheckpoints: ['camp'],
    activeCheckpoint: 'camp',
    dialogue: {
      arrivalSeen: false,
      lensSeen: false,
      completeSeen: false,
      beaconInspected: false,
    },
    chapterComplete: false,
    settings: { ...DEFAULT_SETTINGS },
    savedAt: 0,
  };
}

const isNum = (n) => typeof n === 'number' && Number.isFinite(n);
const isBool = (b) => typeof b === 'boolean';
const isString = (s) => typeof s === 'string';

export function validateProgress(data) {
  if (!data || typeof data !== 'object') return { ok: false, reason: 'not an object' };
  if (data.version !== SAVE_VERSION) return { ok: false, reason: 'unsupported version' };
  if (!isNum(data.salvage) || data.salvage < 0 || data.salvage > 999) return { ok: false, reason: 'salvage' };
  if (!Array.isArray(data.claimedCaches) || !data.claimedCaches.every(isString)) return { ok: false, reason: 'caches' };
  const cacheIds = new Set(CACHES.map((cache) => cache.id));
  if (new Set(data.claimedCaches).size !== data.claimedCaches.length) return { ok: false, reason: 'duplicate cache' };
  if (!data.claimedCaches.every((id) => cacheIds.has(id))) return { ok: false, reason: 'unknown cache' };
  if (!Array.isArray(data.activatedCheckpoints) || !data.activatedCheckpoints.every(isString)) return { ok: false, reason: 'checkpoints' };
  if (new Set(data.activatedCheckpoints).size !== data.activatedCheckpoints.length) return { ok: false, reason: 'duplicate checkpoint' };
  if (!data.activatedCheckpoints.every((id) => ['camp', 'brazier'].includes(id))) return { ok: false, reason: 'unknown checkpoint' };
  if (!['camp', 'brazier'].includes(data.activeCheckpoint)) return { ok: false, reason: 'active checkpoint' };
  if (!data.activatedCheckpoints.includes(data.activeCheckpoint)) return { ok: false, reason: 'inactive checkpoint' };
  for (const key of ['keepsake', 'lens', 'lensConsumed', 'workshopBuilt', 'beaconBuilt', 'shortcutOpen', 'bossDefeated', 'chapterComplete']) {
    if (!isBool(data[key])) return { ok: false, reason: key };
  }
  if (!data.dialogue || typeof data.dialogue !== 'object') return { ok: false, reason: 'dialogue' };
  for (const key of ['arrivalSeen', 'lensSeen', 'completeSeen', 'beaconInspected']) {
    if (!isBool(data.dialogue[key])) return { ok: false, reason: `dialogue.${key}` };
  }
  if (!data.settings || typeof data.settings !== 'object') return { ok: false, reason: 'settings' };
  const s = data.settings;
  if (!isNum(s.mouseSensitivity) || s.mouseSensitivity < 0.2 || s.mouseSensitivity > 3) return { ok: false, reason: 'sensitivity' };
  if (!isBool(s.invertY) || !isBool(s.cameraShake) || !isBool(s.motionBlur) || !isBool(s.lowQuality)) return { ok: false, reason: 'settings flags' };
  if (!isNum(s.textScale) || s.textScale < 0.8 || s.textScale > 1.6) return { ok: false, reason: 'text scale' };
  if (!isNum(s.musicVolume) || s.musicVolume < 0 || s.musicVolume > 1) return { ok: false, reason: 'music volume' };
  if (!isNum(s.effectsVolume) || s.effectsVolume < 0 || s.effectsVolume > 1) return { ok: false, reason: 'effects volume' };
  if (!data.lensConsumed && data.beaconBuilt) return { ok: false, reason: 'beacon without lens' };
  if (!data.bossDefeated && data.lens) return { ok: false, reason: 'lens without boss' };
  if (data.beaconBuilt && !data.chapterComplete) return { ok: false, reason: 'beacon chapter flag' };
  return { ok: true };
}

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export class SaveManager {
  constructor(onStatus) {
    this.onStatus = onStatus || (() => {});
    this.available = true;
    this.lastStatus = 'idle';
    this.storage = null;
    try {
      const testKey = '__waykeepers_probe__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      this.storage = window.localStorage;
    } catch {
      this.available = false;
      this.onStatus('unavailable', 'Save unavailable');
    }
  }

  _backupKey() {
    return `${SAVE_KEY}.backup`;
  }

  load() {
    if (!this.storage) return { ok: false, reason: 'unavailable' };
    let primaryRaw = null;
    try {
      primaryRaw = this.storage.getItem(SAVE_KEY);
    } catch {
      this.available = false;
      return { ok: false, reason: 'unavailable' };
    }
    if (primaryRaw) {
      const parsed = safeParse(primaryRaw);
      const valid = validateProgress(parsed);
      if (valid.ok) return { ok: true, progress: parsed, source: 'primary' };
      const backupRaw = this.storage.getItem(this._backupKey());
      if (backupRaw) {
        const backup = safeParse(backupRaw);
        const backupValid = validateProgress(backup);
        if (backupValid.ok) return { ok: true, progress: backup, source: 'backup' };
      }
      return { ok: false, reason: valid.reason || 'invalid' };
    }
    return { ok: false, reason: 'empty' };
  }

  save(progress) {
    if (!this.storage) {
      this.available = false;
      this.onStatus('unavailable', 'Save unavailable');
      return false;
    }
    const data = JSON.parse(JSON.stringify(progress));
    data.version = SAVE_VERSION;
    data.savedAt = Date.now();
    const valid = validateProgress(data);
    if (!valid.ok) {
      this.onStatus('unavailable', 'Save unavailable');
      return false;
    }
    try {
      const previous = this.storage.getItem(SAVE_KEY);
      if (previous) {
        const parsed = safeParse(previous);
        if (validateProgress(parsed).ok) this.storage.setItem(this._backupKey(), previous);
      }
      this.storage.setItem(SAVE_KEY, JSON.stringify(data));
      progress.savedAt = data.savedAt;
      this.available = true;
      this.onStatus('saved', 'Saved');
      return true;
    } catch {
      this.available = false;
      this.onStatus('unavailable', 'Save unavailable');
      return false;
    }
  }

  clear() {
    if (!this.storage) return false;
    try {
      this.storage.removeItem(SAVE_KEY);
      this.storage.removeItem(this._backupKey());
      return true;
    } catch {
      return false;
    }
  }

  hasSave() {
    return this.load().ok;
  }
}
