import { Application } from 'pixi.js'
// import MainScene from './scenes/MainScene';
// import AnimatedSpriteScene from './scenes/AnimatedSpriteScene';
import TickerScene from './scenes/TickerScene';
// import TweenScene from './scenes/TweenScene';
// import MouseInputScene from './scenes/MouseInputScene';
// import KeyboardInputScene from './scenes/KeyboardInputScene';
// import CustomEventScene from './scenes/CustomEventScene';
// import CollisionScene from './scenes/CollisionScene';
// import SoundScene from './scenes/SoundScene';
import { Manager } from './Manager';
import { LoaderScene } from './scenes/LoaderScene';

// Application

// const app = new Application({
// 	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
// 	resolution: window.devicePixelRatio || 1,
// 	backgroundColor: 0xCC9933,
// 	width: 800,
// 	height: 600
// });

Manager.initialize(800,600,0xCC9933);

// // Basics
// const mainScene: MainScene = new MainScene(app.screen.width, app.screen.height);
// app.stage.addChild(mainScene);

// // Animated Sprites
// const animatedSpriteScene: AnimatedSpriteScene = new AnimatedSpriteScene();
// app.stage.addChild(animatedSpriteScene);

// // Ticker
// const tickerScene: TickerScene = new TickerScene();
// Manager.changeScene(tickerScene);


// // Tween
// const tweenScene: TweenScene = new TweenScene(app.screen.width, app.screen.height);
// app.stage.addChild(tweenScene);

// // Mouse Input
// const scene: MouseInputScene = new MouseInputScene();
// app.stage.addChild(scene);

// // Keyboard Input
// const scene: KeyboardInputScene = new KeyboardInputScene();
// app.stage.addChild(scene);

// // Custom Event
// const scene: CustomEventScene = new CustomEventScene();
// app.stage.addChild(scene);

// // Collision
// const scene: SoundScene = new SoundScene();
// Manager.changeScene(scene);


// LoaderScene
const loaderScene: LoaderScene = new LoaderScene();
Manager.changeScene(loaderScene);