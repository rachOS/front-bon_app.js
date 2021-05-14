import { instanceOf } from 'prop-types';
import { Food } from '../../../generic_Objects/Food';
import { Recipe } from '../../../generic_Objects/Recipe';
import { genericRecipe } from './recipe';

describe('how to create a recipe', () => {
  expect(genericRecipe).toBeInstanceOf(Recipe);
  describe('consider that is a recipe', () => {
    it('must not be an empty list', () => {
      expect(genericRecipe.dataStore.length).toBeGreaterThan(0);
    });
    it('must contain at least one food', () => {
      genericRecipe.dataStore.every((food) =>
        expect(food).toBeInstanceOf(Food)
      );
    });
    it('must contain the quantity of each  foods', () => {
      expect(
        genericRecipe.dataStore.every((food) => (food as any).quantities)
      ).toBeTruthy();
    });
    it('each  foods must have an unit of measurement ', () => {
      expect(
        genericRecipe.dataStore.every((food) => (food as any).unitOfMeasure)
      ).toBeTruthy();
    });
    it('must convert the calories with the given quantity', () => {});
  });
});
