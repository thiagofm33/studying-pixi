import { Container, AnimatedSprite, Texture } from "pixi.js";

class AnimatedSpriteScene extends Container {

  constructor() {
    super();

    const clampyFrames: Array<string> = [
      "images/animated_clampy/clampy2.png",
      "images/animated_clampy/clampy3.png",
      "images/animated_clampy/clampy4.png",
      "images/animated_clampy/clampy1.png"
    ];

    const animatedSprite: AnimatedSprite = new AnimatedSprite(clampyFrames.map(f => Texture.from(f)));
    animatedSprite.loop = true;
    animatedSprite.play();

    this.addChild(animatedSprite);

    animatedSprite.onFrameChange = this.onClampyFrameChange.bind(this);
  }

  private onClampyFrameChange(currentFrame): void {
    // console.log("Clampy's current frame is", currentFrame);
  }

}

export default AnimatedSpriteScene;