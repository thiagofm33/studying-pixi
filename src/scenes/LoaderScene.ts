import { Container, Graphics, Loader } from "pixi.js";
import { assets } from "../assets";
import { Manager, IScene } from "../Manager";
import TickerScene from './TickerScene';

export class LoaderScene extends Container implements IScene {
  private loaderBar: Container;
  private loaderBarBorder: Graphics;
  private loaderBarFill: Graphics;
  constructor() {
    super();

    const loaderBarWidth = Manager.width * 0.8;

    this.loaderBarFill = new Graphics();
    this.loaderBarFill.beginFill(0x008800, 1)
    this.loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
    this.loaderBarFill.endFill();
    this.loaderBarFill.scale.x = 0;

    this.loaderBarBorder = new Graphics();
    this.loaderBarBorder.lineStyle(10, 0x0, 1);
    this.loaderBarBorder.drawRect(0, 0, loaderBarWidth, 50);

    this.loaderBar = new Container();
    this.loaderBar.addChild(this.loaderBarFill);
    this.loaderBar.addChild(this.loaderBarBorder);
    this.loaderBar.position.x = (Manager.width - this.loaderBar.width) / 2; 
    this.loaderBar.position.y = (Manager.height - this.loaderBar.height) / 2;
    this.addChild(this.loaderBar);

    Loader.shared.add(assets);
    Loader.shared.onProgress.add(this.downloadProgress, this);
    Loader.shared.onComplete.once(this.gameLoaded, this);
    Loader.shared.load();
  }

  private downloadProgress(loader: Loader): void {
    const progressRatio = loader.progress / 100;
    this.loaderBarFill.scale.x = progressRatio;
  }

  private gameLoaded(): void {
    Manager.changeScene(new TickerScene());
  }

  public update(_: number) { }
}
