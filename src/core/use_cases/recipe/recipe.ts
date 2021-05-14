import { Recipe } from '../../../generic_Objects/Recipe';
import { foodDB } from '../food/foodDB';

const genericRecipe = new Recipe();
const groceryList = foodDB.find('banana');
genericRecipe.add(groceryList);

export { genericRecipe };
