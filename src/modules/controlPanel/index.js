import { InfoPanel } from '../infoPanel';
import ControlItem from './controlItem';

class ControlPanel extends InfoPanel {
  constructor(name) {
    super(name);
    this.fields = [...arguments].slice(1);
  }
}

const controlPanel = new ControlPanel(
  'control',
  new ControlItem('shapes-per-second').render(),
  new ControlItem('gravity').render(),
);

export default controlPanel.render();
