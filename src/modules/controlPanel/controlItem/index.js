export default class ControlItem {
  constructor(name) {
    this.name = name;
  }

  render = () => {
    const item = document.createElement('div');
    item.className = this.name;

    const btn1 = document.createElement('button');
    btn1.setAttribute('name', `${this.name}-decrement`);
    btn1.textContent = '-';
    btn1.className = `btn ${this.name}-btn`;

    const btn2 = document.createElement('button');
    btn2.setAttribute('name', `${this.name}-increment`);
    btn2.textContent = '+';
    btn2.className = `btn ${this.name}-btn`;

    const span = document.createElement('span');
    span.setAttribute('name', this.name);
    span.textContent = 0;

    const spanWrapper = document.createElement('p');
    spanWrapper.className = 'span-wrapper';

    spanWrapper.appendChild(span);

    item.append(btn1, btn2, spanWrapper);

    return item;
  };
}
