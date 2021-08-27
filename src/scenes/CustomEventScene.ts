import {
  Container,
  Sprite
} from "pixi.js";

class CustomEventScene extends Container {

  constructor() {
    super();

    const mySprite: Sprite = Sprite.from('clampy.png');
    mySprite.anchor.set(0.5);
    mySprite.x = 400;
    mySprite.y = 300;
    mySprite.interactive = true;

    this.addChild(mySprite);

    mySprite.on('mycustomevent', this.onMyCustomEvent);

    mySprite.emit('mycustomevent');

    // mySprite.once("mycustomevent", this.onMyCustomEvent, this);
    // mySprite.off("mycustomevent", this.onMyCustomEvent);
  }

  private onMyCustomEvent(): void {
    console.log('-------------------------');
    console.log('-------------------------');
    console.log('-------------------------');
  }

}

export default CustomEventScene;