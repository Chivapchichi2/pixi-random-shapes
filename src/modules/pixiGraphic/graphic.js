import * as PIXI from 'pixi.js';
import { uid } from '@pixi/utils';

import { getRandom } from '../../core/helpers';

//main Pixi Graphic Class
export default class Graphic {
  constructor(name) {
    this.graphics = new PIXI.Graphics();
    this.graphics.name = name;
    this.graphics.id = uid();
    this.graphics.interactive = true;
    this.graphics.buttonMode = true;
    this.graphics.w = getRandom(300, 50);
    this.graphics.h = getRandom(300, 50);
    this.graphics.diagonal = Math.sqrt(
      Math.pow(this.graphics.w, 2) + Math.pow(this.graphics.h, 2),
    );
    this.graphics.pivot.set(0.5, 0.5);
    this.graphics.rotation = getRandom(2 * Math.PI);
    this.graphics.visible = false;
  }
}
