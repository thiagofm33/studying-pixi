import { Container, InteractionEvent, Sprite, Texture } from "pixi.js";

class MouseInputScene extends Container {

  constructor() {
    super();
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  private onKeyDown(e: KeyboardEvent): void {
    console.log(e.code);
  }

}

export default MouseInputScene;