export default class InfoItem {
  constructor(name) {
    this.name = name;
  }

  render = () => {
    const item = document.createElement('span');
    item.setAttribute('name', this.name);
    item.textContent = 0;
    return item;
  };
}
