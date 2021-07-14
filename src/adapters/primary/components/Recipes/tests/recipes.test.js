/* eslint-disable no-undef */
import { getAllFoods } from '../actions/recipesActions';

describe('how to create a recipe', () => {
  it('should provide a foods list', async () => {
    const response = await getAllFoods();
    expect(response.data).toEqual(
      expect.arrayContaining([
        {
          bran: 2.9,
          calories: 356,
          glucid: 69.5,
          id: 1,
          id_group: 1,
          lipid: 1.6,
          name: 'fake recipe',
          protein: 14.5,
        },
      ])
    );
  });
});
