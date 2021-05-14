import { Food } from '../../../generic_Objects/Food';
import { foodDB } from './foodDB';

describe('food list', () => {
  const ingredient = { id: '', label: '' };
  const apple = new Food(0, 'apple', 5, 10, 10, 5);
  const greenApple = new Food(1, 'green apple', 5, 10, 10, 5);
  const ingredients = [apple, greenApple];

  beforeEach(() => {
    foodDB.clearStore();
    expect(foodDB.dataStore).toHaveLength(0);
    expect(foodDB.listSize).toEqual(0);
  });

  describe('add ingredient', () => {
    it('add an ingredient to my list', () => {
      expect(foodDB.dataStore).toEqual(expect.any(Array));
      expect(foodDB.add(ingredient)).toEqual(
        expect.arrayContaining([ingredient])
      );
      expect(foodDB.dataStore).toEqual(expect.arrayContaining([ingredient]));
    });

    it('add a list of ingredients to my existing list', () => {
      expect(foodDB.add(apple)).toEqual(expect.arrayContaining([apple]));
      expect(foodDB.add(ingredients)).toEqual(
        expect.arrayContaining(ingredients)
      );
      expect(foodDB.dataStore).toHaveLength(3);
      expect(foodDB.listSize).toBe(3);
    });
  });

  describe('show details', () => {
    it('show ingredient detail when given word', () => {
      foodDB.add([apple, greenApple]);
      expect(foodDB.find('apple')).toEqual([apple]);
      expect(foodDB.find('app')).not.toEqual([apple]);
      expect(foodDB.find('app')).not.toEqual([greenApple]);
      expect(foodDB.find('eziuryiz')).not.toEqual(foodDB.dataStore);
    });

    it('show ingredient detail when given id', () => {
      foodDB.add([apple, greenApple]);
      expect(foodDB.find(0)).toEqual(expect.arrayContaining([apple]));
      expect(foodDB.find(1)).toEqual(expect.arrayContaining([greenApple]));
    });
  });

  describe('remove ingredient', () => {
    it(' delete the exact ingredient with the given  word', () => {
      foodDB.add([apple, greenApple]);
      expect(foodDB.remove('apple')).toEqual([greenApple]);
      expect(foodDB.remove('app')).toEqual(foodDB.dataStore);
      expect(foodDB.remove('azeazqr')).toEqual(foodDB.dataStore);
    });
    it(' delete the ingredient with the given  id', () => {
      foodDB.add([apple, greenApple]);
      expect(foodDB.listSize).toEqual(2);
      expect(foodDB.remove(1)).toEqual([apple]);
      expect(foodDB.listSize).toEqual(1);
      expect(foodDB.remove(3)).toEqual(foodDB.dataStore);
      expect(foodDB.listSize).toEqual(2);
    });
  });
});
