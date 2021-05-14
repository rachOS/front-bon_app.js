import { banana } from '../../foodDB/foodsDB';

describe('New food', () => {
  describe('define a food', () => {
    it('cant create a food with an empty name', () => {
      expect(banana.label).toBe('banana');
      expect(banana.label).not.toBeFalsy();
    });
    it('create a food with an specific category', () => {
      expect(banana.category).toBeGreaterThan(0);
    });
    it('create a food with macro-nutrients informations', () => {
      expect(
        banana.proteins && banana.lipids && banana.glucids && banana.fibers
      ).toBeGreaterThan(0);
    });
  });
  describe('calculate calories', () => {
    it('verify if the unit of measure and the quantity are given', () => {
      expect(banana.unitOfMeasure).not.toBeFalsy();
      expect(banana.quantities).toBeGreaterThan(0);
      const matchers = [1, 100];
      expect(matchers).toContain(banana.quantities);
    });

    it(' the calories value must be greater than zero', () => {
      expect(banana.calories).toBeGreaterThan(0);
    });
  });
});
