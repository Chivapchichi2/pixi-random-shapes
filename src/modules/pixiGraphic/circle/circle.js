import Graphic from '../graphic';
import { getRandomColor, getRandom } from '../../../core/helpers';

export default class Circle extends Graphic {
  constructor() {
    super('circle');
    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.drawCircle(
      this.graphics.x,
      this.graphics.y,
      this.graphics.w / 2,
    );
    this.graphics.endFill();
    this.graphics.h = this.graphics.w;
    this.graphics.diagonal = this.graphics.w;
    this.graphics.area = Math.round(
      (Math.PI * Math.pow(this.graphics.w, 2)) / 4,
    );
  }
}
