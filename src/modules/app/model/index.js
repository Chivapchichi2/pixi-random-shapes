import {
  Rectangle,
  Circle,
  Ellipse,
  Triangle,
  Polygon,
  ConvexHexagon,
  RandomShape,
} from '../../pixiGraphic';
import { getRandom } from '../../../core/helpers';

//model class
export default class Model {
  //initial start-up settings and adding Pixi Graphics figures
  constructor() {
    this.figures = []; //figures state, figures.length= Number of current shapes
    this.gravity = 1; //gravity value state
    this.quantityPerSecond = 1; //Number of shapes per second, state
    this.surfaceArea = 0; //Surface area occupied by shapes
    this.shapeTypes = [
      Rectangle,
      Circle,
      Ellipse,
      Triangle,
      Polygon,
      ConvexHexagon,
      RandomShape,
    ]; //Pixi Graphics Figures, classes
  }

  //method adding random figure, I used arrow function to bind this
  addRandomFigure = () => {
    const figure = new this.shapeTypes[getRandom(this.shapeTypes.length - 1)]()
      .graphics;

    this.figures.push(figure);

    return figure;
  };

  //method to delete figure by id, I used arrow function to bind this
  deleteFigure = id => {
    const [figure] = this.figures.splice(
      this.figures.findIndex(el => el.id === id),
      1,
    );

    this.surfaceArea -= figure.area;
    figure.destroy();
  };

  //method to change state gravity value, or shapes per second. I used arrow function to bind this
  handleChangeGravityOrShapesPerSecond = e => {
    if (!e.target.classList.contains('btn')) return;

    const attribute = e.target.getAttribute('name');

    switch (attribute) {
      case 'shapes-per-second-increment':
        this.quantityPerSecond += 1;
        break;

      case 'shapes-per-second-decrement':
        this.quantityPerSecond -= 1;
        break;

      case 'gravity-increment':
        this.gravity += 1;
        break;

      case 'gravity-decrement':
        this.gravity -= 1;
        break;
    }
  };
}
