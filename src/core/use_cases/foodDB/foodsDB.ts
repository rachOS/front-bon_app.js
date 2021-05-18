import { Food, List } from '../../../generic_Objects/genericObjects';

const banana = new Food(0, 'banana', 1, 1, 1, 1, 1, 1, 'unit');
const cottageCheese = new Food(1, 'cottage cheese', 1, 1, 1, 1, 1, 1, 'g');
const genericFood = new Food();

const foodsDB = new List();
foodsDB.add([banana, cottageCheese, genericFood]);

export { banana, cottageCheese, genericFood, foodsDB };
