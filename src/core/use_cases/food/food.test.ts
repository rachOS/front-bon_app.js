import { genericFood } from './food';

describe('New food', () => {
  describe('define a food', () => {
    it('cant create a food with an empty name', () => {
      expect(genericFood.name).toBe('banana');
      expect(genericFood.name).not.toBeFalsy();
    });
    it('create a food with an specific category', () => {
      expect(genericFood.category).toBeGreaterThan(0);
    });
    it('create a food with macro-nutrients informations', () => {
      expect(
        genericFood.proteins &&
          genericFood.lipids &&
          genericFood.glucids &&
          genericFood.fibers
      ).toBeGreaterThan(0);
    });
  });
  describe('calculate calories', () => {
    it('verify if the unit of measure and the quantity are given', () => {
      expect(genericFood.unitOfMeasure && genericFood.unit).not.toBeFalsy();
      const matchers = [1, 100];
      expect(matchers).toContain(genericFood.unit);
    });

    it('calc the calories value of the food', () => {
      expect(genericFood.calcFoodCaloriesPerUnit()).toBeGreaterThan(0);
      expect(genericFood.calcFoodCaloriesPerUnit()).toEqual(
        (genericFood.proteins as any) * 4 +
          (genericFood.lipids as any) * 9 +
          (genericFood.glucids as any) * 4 +
          (genericFood.fibers as any) * 4
      );
    });
  });
});
