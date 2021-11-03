import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';

gsap.registerPlugin(PixiPlugin);

//class Controller
export default class Controller {
  constructor(model, view) {
    this.model = model; //initializing  Model class
    this.view = view; //initializing  View class

    this.view.displayApp(); //pushing View to draw app

    //pushing View to draw  changes into control panels
    this.view.drawInfoChanges(
      null,
      null,
      this.model.gravity,
      this.model.quantityPerSecond,
    );

    //adding listener on app
    this.view.app.renderer.plugins.interaction.on(
      'pointerdown',
      this.handleOnAppPointerdown,
    );

    //adding listener on control panel
    document
      .querySelector('.control-panel')
      .addEventListener('click', this.handleChangeGravityOrShapesPerSecond);

    //adding ticker on app
    this.view.app.ticker.add(this.handleTicker);

    // start to draw random figure per interval
    this.func = gsap.delayedCall(1, this.addRandomFigurePerSecond);
  }

  //method  push View and Model to delete figure
  handleRemoveFigure(figure) {
    this.model.deleteFigure(figure.id);
    this.view.removeFigure(figure);
    this.view.drawInfoChanges(
      this.model.figures.filter(el => el.visible).length || '0',
      this.model.surfaceArea || '0',
    );
  }

  //method  push Model to change surface area and View to display info panel changes
  handleDisplayInfoFigureAdd(figure) {
    figure.visible = true;
    this.model.surfaceArea += figure.area;
    this.view.drawInfoChanges(
      this.model.figures.filter(el => el.visible).length,
      this.model.surfaceArea,
    );
  }

  //method to change figures position each ticker. I used arrow function to bind this
  handleTicker = () => {
    if (this.model.figures.length === 0) return;

    for (let i = 0; i < this.model.figures.length; i++) {
      const figure = this.model.figures[i];
      const { y, height } = figure.getBounds();

      if (this.model.gravity > 0) {
        figure.y += this.model.gravity;
      }

      if (y + height > 0 && !figure.visible) {
        this.handleDisplayInfoFigureAdd(figure);
      }

      if (y > this.view.app.screen.height && figure.visible) {
        this.handleRemoveFigure(figure);
      }
    }
  };

  //method to handle on App pointerdown. I used arrow function to bind this
  handleOnAppPointerdown = e => {
    if (e.target) {
      this.handleRemoveFigure(e.target);
      return this.view.changeSameFiguresColor(
        this.model.figures,
        e.target.name,
      );
    }

    const figure = this.model.addRandomFigure();
    this.view.drawFigure(figure, e.data.global.x, e.data.global.y);
    this.handleDisplayInfoFigureAdd(figure);
  };

  //method adding random figure per interval, I used arrow function to bind this
  addRandomFigurePerSecond = () => {
    if (this.func) {
      this.func.kill();
    }

    if (!this.model.quantityPerSecond) return;

    const figure = this.model.addRandomFigure();
    this.view.drawFigure(figure);

    const delay = 1 / this.model.quantityPerSecond;

    this.func = gsap.delayedCall(delay, this.addRandomFigurePerSecond);
  };

  //method to handle change  gravity value, or shapes per second. I used arrow function to bind this
  handleChangeGravityOrShapesPerSecond = e => {
    this.model.handleChangeGravityOrShapesPerSecond(e);
    this.view.drawInfoChanges(
      null,
      null,
      this.model.gravity || '0',
      this.model.quantityPerSecond || '0',
    );
    this.addRandomFigurePerSecond();
  };
}
