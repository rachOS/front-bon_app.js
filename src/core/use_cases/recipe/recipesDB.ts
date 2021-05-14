import { Recipe, List } from '../../../generic_Objects/genericObjects';
import { foodsDB } from '../foodDB/foodsDB';

const bananaWithCottageCheese = new Recipe();
bananaWithCottageCheese.add(foodsDB.find('banana'));

const recipesDB = new List();
recipesDB.add(bananaWithCottageCheese);

export { bananaWithCottageCheese, recipesDB };
