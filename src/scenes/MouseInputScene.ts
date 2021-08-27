import { Container, InteractionEvent, Sprite } from "pixi.js";

class MouseInputScene extends Container {

  constructor() {
    super();

    const mySprite: Sprite = Sprite.from('clampy.png');
    mySprite.anchor.set(0.5);
    mySprite.x = 400;
    mySprite.y = 300;
    mySprite.interactive = true;

    this.addChild(mySprite);

    mySprite.on('pointertap', this.onMySpriteClick, this);
  }

  private onMySpriteClick(e: InteractionEvent): void {
    console.log('-------------------------');
    console.log(e);
    console.log('-------------------------');
  }

}

export default MouseInputScene;