import Graphic from '../graphic';
import { getRandomColor, getRandom } from '../../../core/helpers';

export default class Rectangle extends Graphic {
  constructor() {
    super('rectangle');
    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.drawRect(
      this.graphics.x,
      this.graphics.y,
      this.graphics.w,
      this.graphics.h,
    );
    this.graphics.endFill();
    this.graphics.area = this.graphics.w * this.graphics.h;
  }
}
