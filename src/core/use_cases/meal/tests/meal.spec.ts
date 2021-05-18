import { breakfast } from '../mealDB';
import { Meal, Recipe } from '../../../../generic_Objects/genericObjects';

describe('how to create a meal', () => {
  describe('initialize a meal', () => {
    it('must be a meal list', () => {
      expect(breakfast).toBeInstanceOf(Meal);
    });
    it('must have at least one recipe', () => {
      expect(breakfast.dataStore.length).toBeGreaterThanOrEqual(1);
    });
    it('must display the content of the meal meal', () => {
      breakfast.dataStore.map((recipe) =>
        expect(recipe).toBeInstanceOf(Recipe)
      );
    });
    it('must have a label', () => {
      expect(breakfast.label.length).toBeGreaterThanOrEqual(1);
      expect(breakfast.label).toBe('breakfast');
    });
  });
});
