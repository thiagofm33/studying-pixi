import {
  Container,
  Sprite,
  Text,
  TextStyle,
  Graphics,
  filters
} from "pixi.js";

class MainScene extends Container {

  private readonly screenWidth: number;
  private readonly screenHeight: number;
  private clampy: Sprite;
  private myText: Text;
  private myCircle: Graphics;

  constructor(screenWidth: number, screenHeight: number) {
    super();

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    /* The Sprite */

    this.clampy = Sprite.from("images/clampy.png");
    this.clampy.anchor.set(0.5);
    this.clampy.x = this.screenWidth * 0.5;
    this.clampy.y = this.screenHeight * 0.5;
    this.addChild(this.clampy);

    /* The Text */

    const textStyle: TextStyle = new TextStyle({
      align: 'center',
      fill: '#FFF000',
      fontSize: 72
    });

    this.myText = new Text("Arroz!", textStyle);
    this.myText.x = 100;
    this.myText.y = 100;
    this.addChild(this.myText);

    /* The Graphic */

    this.myCircle = new Graphics();
    this.myCircle.beginFill(0xFF00FF);
    this.myCircle.lineStyle(21, 0xFFF000);
    this.myCircle.drawCircle(0, 0, 60);
    this.myCircle.endFill();
    this.addChild(this.myCircle);

    const myBlurFilter = new filters.BlurFilter();
    myBlurFilter.blurX = 1;
    myBlurFilter.blurY = 1;

    this.myCircle.filters = [myBlurFilter];
  }

}

export default MainScene;
