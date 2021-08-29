import { Container } from "pixi.js";
import { Sound } from '@pixi/sound';
import { IScene } from '../Manager';

class MouseInputScene extends Container implements IScene {

  private starSound: Sound;

  constructor() {
    super();

    // this.starSound = Sound.from('audio/star.ogg');
    this.starSound = Sound.from('audio/shot.wav');
    this.starSound.volume = 0.5;
    this.starSound.play();

    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  private onKeyDown(e: KeyboardEvent): void {
    this.starSound.play();
  }

  public update(_: number) { }
}

export default MouseInputScene;