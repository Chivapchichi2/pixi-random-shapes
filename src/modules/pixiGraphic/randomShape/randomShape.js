import Graphic from '../graphic';
import {
  getRandomColor,
  getRandom,
  calculateAreaBySumOfTriangle,
} from '../../../core/helpers';

export default class RandomShape extends Graphic {
  constructor() {
    super('randomShape');
    const minX = this.graphics.x;
    const minY = this.graphics.y;
    const maxX = this.graphics.x + this.graphics.w * 2;
    const maxY = this.graphics.y + this.graphics.h * 2;
    const path = [
      this.graphics.x,
      this.graphics.y,
      getRandom(maxX, minX),
      getRandom(maxY, minY),
      getRandom(maxX, minX),
      getRandom(maxY, minY),
      getRandom(maxX, minX),
      getRandom(maxY, minY),
    ];

    let x = Math.random;
    while (x > 0.49) {
      path.push(getRandom(maxX, minX), getRandom(maxY, minY));
      x = Math.random;
    }

    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.drawPolygon(path);
    this.graphics.endFill();
    this.graphics.diagonal *= 2;
    this.graphics.area = calculateAreaBySumOfTriangle(path);
  }
}
