describe('Name of the group', () => {
  it('should ', () => {});
});
/*const foods = [banana, cottageCheese];
describe('food list', () => {
  beforeEach(() => {
    foodsDB.clearStore();
    expect(foodsDB.dataStore).toHaveLength(0);
    expect(foodsDB.listSize).toEqual(0);
    foodsDB.add(foods);
  });
  afterEach(() => {
    expect(foodsDB.dataStore).toHaveLength(2);
    expect(foodsDB.listSize).toEqual(2);
  });

  describe('add ingredient', () => {
    it('must be possible to add an foods to the list', () => {
      expect(foodsDB.dataStore).toEqual(expect.any(Array));
      expect(foodsDB.dataStore).toEqual(
        expect.arrayContaining(
          [banana] || [cottageCheese] || [banana, cottageCheese]
        )
      );
    });

    it('must be possible to add some of foods to the existing list', () => {
      expect(foodsDB.dataStore).toHaveLength(2);
      expect(foodsDB.listSize).toBe(2);
    });
  });

  describe('show details', () => {
    it('show food details for the given word ', () => {
      expect(foodsDB.find('banana')).toEqual([banana]);
      expect(foodsDB.find('ban')).not.toEqual([banana]);
      expect(foodsDB.find('cota')).not.toEqual([cottageCheese]);
      expect(foodsDB.find('eziuryiz')).toEqual([]);
    });

    it('show food detail for the  given id', () => {
      expect(foodsDB.find(0)).toEqual(expect.arrayContaining([banana]));
      cottageCheese;
      expect(foodsDB.find(1)).toEqual(expect.arrayContaining([cottageCheese]));
    });
  });

  describe('remove ingredient', () => {
    it('remove the exact ingredient for the the given  word', () => {
      expect(foodsDB.remove('banana')).toEqual([cottageCheese]);
      expect(foodsDB.remove('app')).toEqual(foodsDB.dataStore);
      expect(foodsDB.remove('azeazqr')).toEqual(foodsDB.dataStore);
    });

    it('remove the ingredient for the given  id', () => {
      expect(foodsDB.remove(1)).toEqual([banana]);
      expect(foodsDB.listSize).toEqual(1);
      expect(foodsDB.remove(3)).toEqual(foodsDB.dataStore);
      expect(foodsDB.listSize).toEqual(2);
    });
  });
});
 */
