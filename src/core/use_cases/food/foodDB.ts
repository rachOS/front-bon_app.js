import { Food } from '../../../generic_Objects/Food';
import { List } from '../../../generic_Objects/List';

const foodDB = new List();
const banana = new Food(3, 'banana', 12, 3, 25, 3);
const cumcumber = new Food(4, 'cumcumber', 12, 3, 25, 3);
banana.quantities = 1;
banana.unitOfMeasure = 'unit';
cumcumber.quantities = 25;
cumcumber.unitOfMeasure = 'g';
foodDB.add([banana, cumcumber]);
export { foodDB };
