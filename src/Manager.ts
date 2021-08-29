import { Application } from "@pixi/app";
import { DisplayObject } from "@pixi/display";
import { Ticker } from "@pixi/ticker";

export class Manager {
  private constructor() {}

  private static app: Application;
  private static currentScene: IScene;
  private static _width: number;
  private static _height: number;

  public static get width(): number {
    return Manager._width;
  }

  public static get height(): number {
    return Manager._height;
  }

  public static initialize(width: number, height: number, background: number): void {
    Manager._width = width;
    Manager._height = height;

    Manager.app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resolution: window.devicePixelRatio || 1,
      backgroundColor: background,
      width: width,
      height: height
    });

    Ticker.shared.add(Manager.update);

    window.addEventListener("resize", Manager.resize);

    Manager.resize();
  }

  public static changeScene(newScene: IScene): void {
    if (Manager.currentScene) {
      Manager.app.stage.removeChild(Manager.currentScene);
      Manager.currentScene.destroy();
    }

    Manager.currentScene = newScene;
    Manager.app.stage.addChild(Manager.currentScene);
  }

  public static resize(): void {
    // current screen size
    const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // uniform scale for our game
    const scale = Math.min(screenWidth / Manager.width, screenHeight / Manager.height);

    // the "uniformly englarged" size for our game
    const enlargedWidth = Math.floor(scale * Manager.width);
    const enlargedHeight = Math.floor(scale * Manager.height);

    // margins for centering our game
    const horizontalMargin = (screenWidth - enlargedWidth) / 2;
    const verticalMargin = (screenHeight - enlargedHeight) / 2;

    // now we use css trickery to set the sizes and margins
    Manager.app.view.style.width = `${enlargedWidth}px`;
    Manager.app.view.style.height = `${enlargedHeight}px`;
    Manager.app.view.style.marginLeft = Manager.app.view.style.marginRight = `${horizontalMargin}px`;
    Manager.app.view.style.marginTop = Manager.app.view.style.marginBottom = `${verticalMargin}px`;
  }

  private static update(framesPassed): void {
    if (Manager.currentScene)
      Manager.currentScene.update(framesPassed);
  }
}

export interface IScene extends DisplayObject {
  update(framesPassed: number): void;
}
