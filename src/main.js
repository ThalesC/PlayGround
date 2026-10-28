import { Game } from './game.js';

const canvas = document.getElementById('game-canvas');

try {
  window.waykeepers = new Game(canvas);
} catch (error) {
  console.error(error);
  const message = document.createElement('div');
  message.className = 'fatal-error';
  message.innerHTML = `<strong>Waykeepers could not start.</strong><br>${String(error.message || error)}`;
  document.body.appendChild(message);
}
