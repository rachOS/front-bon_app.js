import { Food, List } from '../../../generic_Objects/genericObjects';

const genericFood = new Food();
const banana = new Food('banana', 'fruits', 5, 1, 15, 0.5, 42);
/*const cottageCheese = new Food(1, 'cottage cheese', 1, 1, 1, 1, 1, 1, 'g');

const foodsDB = new List();
foodsDB.add([banana, cottageCheese, genericFood]);
*/
export { banana, genericFood };
