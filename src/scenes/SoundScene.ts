import { Container } from "pixi.js";
import { Sound } from '@pixi/sound';

class MouseInputScene extends Container {

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

}

export default MouseInputScene;