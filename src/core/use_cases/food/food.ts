import { Food } from '../../../generic_Objects/Food';

const genericFood = new Food(3, 'banana', 1, 1, 1, 1);
genericFood.category = 1;
genericFood.quantities = 1;
genericFood.unitOfMeasure = 'g';
genericFood.calcFoodCaloriesPerQuantities();

export { genericFood };
