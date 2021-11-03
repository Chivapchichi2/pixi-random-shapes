import InfoItem from './infoItem';

export class InfoPanel {
  constructor(name) {
    this.name = name;
    this.fields = [...arguments].slice(1);
  }

  render() {
    const panel = document.createElement('div');
    panel.className = `${this.name}-panel`;
    const list = document.createElement('ul');
    list.className = `${this.name}-panel_list`;
    const fields = this.fields.map(i => {
      const item = document.createElement('li');
      item.className = `${this.name}-panel_item`;
      item.append(i);
      return item;
    });
    list.append(...fields);
    panel.append(list);
    return panel;
  }
}

const infoPanel = new InfoPanel(
  'info',
  new InfoItem('quantity-shapes').render(),
  new InfoItem('surface-area').render(),
);

export default infoPanel.render();
