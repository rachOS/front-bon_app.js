import { Food } from '../../../generic_Objects/genericObjects';

const genericFood = new Food();
const banana = new Food('banana', 5, 1, 15, 0.5, 'unit', 'fruits', 1);
const cottageCheese = new Food('cottage cheese');

export { banana, cottageCheese, genericFood };
