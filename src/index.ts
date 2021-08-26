import { Application } from 'pixi.js'
// import MainScene from './scenes/MainScene';
import AnimatedSpriteScene from './scenes/AnimatedSpriteScene';

// Application

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


// // Basics
// const mainScene: MainScene = new MainScene(app.screen.width, app.screen.height);
// app.stage.addChild(mainScene);

// Animated Sprites
const animatedSpriteScene: AnimatedSpriteScene = new AnimatedSpriteScene();
app.stage.addChild(animatedSpriteScene);