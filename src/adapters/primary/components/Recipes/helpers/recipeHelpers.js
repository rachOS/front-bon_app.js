import { getAllFoods } from '../actions/recipesActions';
export const actions = async () => {
  return await getAllFoods();
};
