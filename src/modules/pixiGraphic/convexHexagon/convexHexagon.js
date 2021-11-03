import Graphic from '../graphic';
import {
  getRandomColor,
  getRandom,
  calculateAreaBySumOfTriangle,
} from '../../../core/helpers';

export default class ConvexHexagon extends Graphic {
  constructor() {
    super('convexHexagon');
    const minX = this.graphics.x;
    const minY = this.graphics.y;
    const maxX = this.graphics.x + this.graphics.w * 2;
    const maxY = this.graphics.y + this.graphics.h * 2;
    const path = [
      this.graphics.x,
      this.graphics.y,
      this.graphics.x,
      getRandom((2 * maxY) / 3, minY),
      getRandom((2 * maxX) / 3, minX),
      getRandom(maxY, (2 * maxY) / 3),
      getRandom(maxX, (2 * maxX) / 3),
      getRandom((2 * maxY) / 3, maxY / 2),
      getRandom(maxX, (2 * maxX) / 3),
      getRandom(maxY / 2, maxY / 3),
      getRandom((2 * maxX) / 3, maxX / 3),
      getRandom(maxY / 3, minY),
    ];
    this.graphics.beginFill(getRandomColor(), getRandom(1, 0.5));
    this.graphics.drawPolygon(path);
    this.graphics.endFill();
    this.graphics.diagonal *= 2;
    this.graphics.area = calculateAreaBySumOfTriangle(path);
  }
}
