import { foodList } from './foodList';

describe('food list', () => {
  const ingredient = { id: '', label: '' };
  const ingredient1 = { id: 0, label: 'apple' };
  const ingredient2 = { id: 1, label: 'green apple' };
  const ingredients = [ingredient1, ingredient2];

  beforeEach(() => {
    foodList.clearStore();
    expect(foodList.dataStore).toHaveLength(0);
    expect(foodList.listSize).toEqual(0);
  });

  describe('add ingredient', () => {
    it('add an ingredient to my list', () => {
      expect(foodList.dataStore).toEqual(expect.any(Array));
      expect(foodList.add(ingredient)).toEqual(
        expect.arrayContaining([ingredient])
      );
      expect(foodList.dataStore).toEqual(expect.arrayContaining([ingredient]));
    });

    it('add a list of ingredients to my existing list', () => {
      expect(foodList.add(ingredient1)).toEqual(
        expect.arrayContaining([ingredient1])
      );
      expect(foodList.add(ingredients)).toEqual(
        expect.arrayContaining(ingredients)
      );
      expect(foodList.dataStore).toHaveLength(3);
      expect(foodList.listSize).toBe(3);
    });
  });

  describe('show details', () => {
    it('show ingredient detail when given word', () => {
      foodList.add([ingredient1, ingredient2]);
      expect(foodList.find('apple')).toEqual([ingredient1]);
      expect(foodList.find('app')).not.toEqual([ingredient1]);
      expect(foodList.find('app')).not.toEqual([ingredient2]);
      expect(foodList.find('eziuryiz')).not.toEqual(foodList.dataStore);
    });

    it('show ingredient detail when given id', () => {
      foodList.add([ingredient1, ingredient2]);
      expect(foodList.find(0)).toEqual(expect.arrayContaining([ingredient1]));
      expect(foodList.find(1)).toEqual(expect.arrayContaining([ingredient2]));
    });
  });

  describe('remove ingredient', () => {
    it(' delete the exact ingredient with the given  word', () => {
      foodList.add([ingredient1, ingredient2]);
      expect(foodList.remove('apple')).toEqual([ingredient2]);
      expect(foodList.remove('app')).toEqual(foodList.dataStore);
      expect(foodList.remove('azeazqr')).toEqual(foodList.dataStore);
    });
    it(' delete the ingredient with the given  id', () => {
      foodList.add([ingredient1, ingredient2]);
      expect(foodList.listSize).toEqual(2);
      expect(foodList.remove(1)).toEqual([ingredient1]);
      expect(foodList.listSize).toEqual(1);
      expect(foodList.remove(3)).toEqual(foodList.dataStore);
      expect(foodList.listSize).toEqual(2);
    });
  });
});
