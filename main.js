import "./style.css";
import Phaser from "phaser";

const sizes = {
  width: 500,
  height: 500,
};

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor() {
    super("scene-game");
    this.player;
  }
  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image("basket", "./assets/basket.png");
  } // preloading assets
  create() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);
    this.player = this.physics.add
      .image(0, sizes.height - 100, "basket")
      .setOrigin(0, 0);
  } // creating game objects
  update() {} // updating game objects continuously
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  // physics properties
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
