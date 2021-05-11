import { Food } from '../../../generic_Objects/Food';

const genericFood = new Food('banana', 1, 1, 1, 1, 1, 'unit');
genericFood.category = 1;
genericFood.calcFoodCaloriesPerUnit();

export { genericFood };
