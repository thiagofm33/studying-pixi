import { Container, InteractionEvent, Loader, Sprite, Ticker } from "pixi.js";
import { Sound } from "@pixi/sound";
import { IScene, Manager } from "../Manager";

class TickerScene extends Container implements IScene {
  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private clampy: Sprite;
  private clampyVelocity: number = 30;
  private sound: Sound;

  constructor() {
    super();

    this.screenWidth = Manager.width;
    this.screenHeight = Manager.height;

    this.sound = Sound.from(Loader.shared.resources['the_sound']);
    this.sound.volume = 0.7;

    this.clampy = Sprite.from('the_clampy');

    this.clampy.anchor.set(0, 0.5);
    this.clampy.x = 0;
    this.clampy.y = this.screenHeight / 2;
    this.clampy.on('pointertap', this.onMySpriteClick, this);
    this.clampy.interactive = true;
    this.addChild(this.clampy);
  }

  private onMySpriteClick(e: InteractionEvent): void {
    this.sound.play();
  }

  public update(deltaTime: number): void {
    this.clampy.x = this.clampy.x + (this.clampyVelocity * deltaTime);

    if (this.clampy.x > this.screenWidth)
      this.clampy.x = this.clampy.width * -1;
  }
}

export default TickerScene;