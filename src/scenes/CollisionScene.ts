import {
  Container,
  Sprite
} from "pixi.js";

import { checkCollisions } from '../utilities/collisions';

class Scene extends Container {
  private mySprite: Sprite;
  private mySprite2: Sprite;

  constructor() {
    super();

    this.mySprite = Sprite.from('clampy.png');
    this.mySprite.anchor.set(0.5);
    this.mySprite.x = 400;
    this.mySprite.y = 300;
    this.addChild(this.mySprite);

    this.mySprite2 = Sprite.from('clampy.png');
    this.mySprite2.anchor.set(0.5);
    this.mySprite2.x = 860;
    this.mySprite2.y = 400;
    this.addChild(this.mySprite2);

    document.addEventListener('keydown', this.CheckCollision.bind(this));
  }

  public CheckCollision(e: KeyboardEvent): void {
    if(e.code == 'Space')
      console.log(checkCollisions(this.mySprite2, this.mySprite));
  }

}

export default Scene;