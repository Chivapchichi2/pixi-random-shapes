import * as PIXI from 'pixi.js';

import { getRandom, getRandomColor } from '../../../core/helpers';
import infoPanel from '../../infoPanel';
import controlPanel from '../../controlPanel';

//View class
export default class View {
  constructor(width = 1280, height = 640) {
    this.color = getRandomColor(); //random color for our app bg-color

    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: this.color,
      antialias: true,
    }); //initial Pixi app

    this.gravityRef = null; // initial gravityRef state
    this.shapesPerSecondRef = null; // initial shapesPerSecondRef state
    this.surfaceRef = null; // initial surfaceRef state
    this.quantityRef = null; // initial quantityRef state
  }

  ////method to start display our app, I used arrow function to bind this
  displayApp = () => {
    this.app.stage.interactive = true;

    document
      .getElementById('app')
      .append(infoPanel, this.app.view, controlPanel);

    this.gravityRef = document.querySelector('[name=gravity]');
    this.shapesPerSecondRef = document.querySelector(
      '[name=shapes-per-second]',
    );
    this.surfaceRef = document.querySelector('[name=surface-area]');
    this.quantityRef = document.querySelector('[name=quantity-shapes]');

    this.quantityRef.parentNode.prepend('Number of current shapes:');
    this.surfaceRef.parentNode.prepend('Surface area occupied by shapes:');
    this.quantityRef.parentNode.parentNode.style.backgroundColor =
      this.color.replace('0x', '#');

    this.shapesPerSecondRef.parentNode.prepend('Number of shapes per sec:');
    this.gravityRef.parentNode.prepend('Gravity Value:');
    this.gravityRef.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
      this.color.replace('0x', '#');
  };

  //method to draw figure, I used arrow function to bind this
  drawFigure = (figure, x, y) => {
    figure.x = x
      ? x
      : getRandom(
          this.app.screen.width - figure.diagonal / 2,
          figure.diagonal / 2,
        );

    figure.y = y ? y : 0 - figure.diagonal;

    this.app.stage.addChild(figure);
  };

  //method to delete figure from Pixi app state, I used arrow function to bind this
  removeFigure = figure => this.app.stage.removeChild(figure);

  //method to draw changes into info or control panels, I used arrow function to bind this
  drawInfoChanges = (quantity, surface, gravity, quantityPerSecond) => {
    if (quantity) {
      this.quantityRef.textContent = quantity;
    }

    if (surface) {
      this.surfaceRef.textContent = surface;
    }

    if (gravity) {
      const decrementBtnRef = document.querySelector(
        '[name=gravity-decrement]',
      );
      decrementBtnRef.removeAttribute('disabled');
      this.gravityRef.textContent = gravity;
      if (gravity === '0') {
        decrementBtnRef.setAttribute('disabled', true);
      }
    }

    if (quantityPerSecond) {
      const decrementBtnRef = document.querySelector(
        '[name=shapes-per-second-decrement]',
      );
      decrementBtnRef.removeAttribute('disabled');
      this.shapesPerSecondRef.textContent = quantityPerSecond;
      if (quantityPerSecond === '0') {
        decrementBtnRef.setAttribute('disabled', true);
      }
    }
  };

  //method to change and display colors for all same type figures
  changeSameFiguresColor(figuresArray, name) {
    figuresArray.forEach(figure => {
      if (figure.name === name) {
        figure.geometry.graphicsData[0].fillStyle.color = getRandomColor();
        figure.geometry.graphicsData[0].fillStyle.alpha = getRandom(1, 0.5);
        figure.geometry.invalidate();
      }
    });
  }
}
