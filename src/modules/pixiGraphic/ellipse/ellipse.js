import Graphic from '../graphic';
import { getRandomColor, getRandom } from '../../../core/helpers';

export default class Ellipse extends Graphic {
  constructor() {
    super('ellipse');
    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.drawEllipse(
      this.graphics.x,
      this.graphics.y,
      this.graphics.w / 2,
      this.graphics.h / 2,
    );
    this.graphics.endFill();
    this.graphics.diagonal =
      this.graphics.w > this.graphics.h ? this.graphics.w : this.graphics.h;
    this.graphics.area = Math.round(
      (Math.PI * this.graphics.w * this.graphics.h) / 4,
    );
  }
}
