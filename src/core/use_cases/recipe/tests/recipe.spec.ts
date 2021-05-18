import { bananaWithCottageCheese } from '../recipesDB';
import { Food, Recipe } from '../../../../generic_Objects/genericObjects';

describe('how to create a recipe', () => {
  expect(bananaWithCottageCheese).toBeInstanceOf(Recipe);
  describe('consider that is a recipe', () => {
    it('must not be an empty list', () => {
      expect(bananaWithCottageCheese.dataStore.length).toBeGreaterThan(0);
    });
    it('must contain at least one food', () => {
      bananaWithCottageCheese.dataStore.every((food) =>
        expect(food).toBeInstanceOf(Food)
      );
    });
    it('must contain the quantity of each  foods', () => {
      expect(
        bananaWithCottageCheese.dataStore.every(
          (food) => (food as any).quantities
        )
      ).toBeTruthy();
    });
    it('must have an unit of measurement for each food', () => {
      expect(
        bananaWithCottageCheese.dataStore.every(
          (food) => (food as Food).unitOfMeasure
        )
      ).toBeTruthy();
    });
    /* TODO
    it('must convert the calories with the given quantity', () => {
        bananaWithCottageCheese.dataStore.map((food) =>
        expect((food as any).calories).toBe(42)
      );
    })
    */
  });
});
