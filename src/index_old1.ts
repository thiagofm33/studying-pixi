import {
  Application,
  Sprite,
  Container,
  Graphics,
  Text,
  TextStyle,
  filters
} from 'pixi.js'

// Application

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

// Container

const conty: Container = new Container();
conty.x = 100;
conty.y = 100;
app.stage.addChild(conty);

// Sprites

const clampy: Sprite = Sprite.from("images/clampy.png");
clampy.anchor.set(0.5);
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

const clampy2: Sprite = Sprite.from("images/clampy.png");
clampy2.anchor.set(0);
clampy2.tint = 0x00FF00;

conty.addChild(clampy);
clampy.addChild(clampy2);

conty.scale.set(0.33,0.33);

clampy.rotation = 45;


// Text

const textStyle: TextStyle = new TextStyle({
  align: "center",
  fill: "#00FF00",
  fontSize: 72
});

const myText: Text = new Text("Arroz", textStyle);
myText.x = 100;
myText.y = 100;

conty.addChild(myText);

// Graphics

const myCircle: Graphics = new Graphics();

myCircle.beginFill(0x000000);
myCircle.lineStyle(21, 0xFFFF00);
myCircle.drawCircle(0, 0, 60); // See how I set the drawing at 0,0? NOT AT 100, 100!
myCircle.endFill();

conty.addChild(myCircle);

const myBlurFilter = new filters.BlurFilter();
myBlurFilter.blurX = 10;
myBlurFilter.blurY = 10;

clampy2.filters = [myBlurFilter];



