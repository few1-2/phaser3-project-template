/* eslint-disable no-undef */
import Phaser from 'phaser'
import GameScene from './gameScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: GameScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    },
  },
};

export { config };
