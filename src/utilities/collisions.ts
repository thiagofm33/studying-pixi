import { DisplayObject } from 'pixi.js';

// > https://pixijs.io/examples/#/demos-advanced/collision-detection.js
export function checkCollisions(obj1: DisplayObject, obj2: DisplayObject): boolean {
  const bounds1 = obj1.getBounds();
  const bounds2 = obj2.getBounds();

  return bounds1.left   < bounds2.right
      && bounds1.right  > bounds2.left
      && bounds1.top    < bounds2.bottom
      && bounds1.bottom > bounds2.top;
}
