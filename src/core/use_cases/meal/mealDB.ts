import { Meal } from '../../../generic_Objects/genericObjects';
import { bananaWithCottageCheese } from '../recipe/recipesDB';

const breakfast = new Meal('breakfast');
breakfast.add(bananaWithCottageCheese);
console.log('', breakfast);

export { breakfast };
