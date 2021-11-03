import Model from './model';
import View from './view';
import Controller from './controller';

//creating app
const app = () => new Controller(new Model(), new View());

export default app;
