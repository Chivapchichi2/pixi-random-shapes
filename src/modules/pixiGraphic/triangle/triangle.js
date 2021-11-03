import Graphic from '../graphic';
import { getRandomColor, getRandom } from '../../../core/helpers';

export default class Triangle extends Graphic {
  constructor() {
    super('triangle');
    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.moveTo(this.graphics.x, this.graphics.y);
    this.graphics.lineTo(this.graphics.x, this.graphics.x + this.graphics.w);
    this.graphics.lineTo(
      getRandom(this.graphics.x + this.graphics.w, this.graphics.x),
      this.graphics.y + this.graphics.h,
    );
    this.graphics.lineTo(this.graphics.x, this.graphics.y);
    this.graphics.endFill();
    this.graphics.diagonal =
      this.graphics.w > this.graphics.h ? this.graphics.w : this.graphics.h;
    this.graphics.area = Math.round((this.graphics.w * this.graphics.h) / 2);
  }
}
