import { Food, List } from '../../../generic_Objects/genericObjects';

const foodsDB = new List();
const banana = new Food(0, 'banana', 1, 1, 1, 1, 1, 1, 'unit');
const cottageCheese = new Food(1, 'cottage cheese', 1, 1, 1, 1, 1, 1, 'g');

foodsDB.add([banana, cottageCheese]);
export { banana, cottageCheese, foodsDB };
