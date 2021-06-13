/* eslint-disable indent */
import { postNewRecipe } from '../actions/recipesActions';

const getRecipesDatas = (
  allFoods,
  allRecipes,
  calories,
  deleteRecipe,
  deselect,
  editRecipe,
  food,
  getFood,
  getOneRecipe,
  handleChange,
  ingredients,
  props,
  recipe
) => {
  const deleteDuplicate = () => {
    const foodHashMap = {};
    const ingredientsList = ingredients.filter((food) => {
      const alreadyExist = Object.prototype.hasOwnProperty.call(
        foodHashMap,
        food.id
      );
      return alreadyExist ? false : (foodHashMap[food.id] = true);
    });
    return [ingredientsList];
  };

  const balancedCalories = (ingredientsList, caloriesGoal = calories) => {
    const balancedList = ingredientsList.map((food) => {
      const totalQuantities = parseInt(
        caloriesGoal / (food.calories / 100) / ingredientsList.length
      );
      return {
        ...food,
        protein: parseInt((totalQuantities / 100) * food.protein),
        glucid: parseInt((totalQuantities / 100) * food.glucid),
        lipid: parseInt((totalQuantities / 100) * food.protein),
        bran: parseInt((totalQuantities / 100) * food.protein),
        calories: parseInt((totalQuantities / 100) * food.calories),
        quantity: totalQuantities,
      };
    });
    return [balancedList];
  };

  const [ingredientsList] = deleteDuplicate();
  const [balancedList] = balancedCalories(ingredientsList);

  const searchedKeyValues = (key) =>
    balancedList.map((element) => {
      return element[key];
    });

  const calcTotalOfMacroNutrimentRecipe = () => {
    const filterKeys = ['protein', 'lipid', 'glucid', 'bran', 'calories'];
    const recipesProperties = [];
    for (const key of filterKeys) {
      recipesProperties.push({
        [key]: searchedKeyValues(key).reduce((acc, el) => {
          acc += el;
          return acc;
        }, 0),
      });
    }
    return Object.assign({}, ...recipesProperties);
  };

  const goToEditionPage = (id) => {
    return props.history.push(`/recettes/${id}`);
  };

  return {
    allFoods,
    allRecipes,
    balancedCalories,
    balancedList,
    calcTotalOfMacroNutrimentRecipe,
    calories, // user DEC
    deleteDuplicate,
    deleteRecipe,
    deselect,
    editRecipe,
    food,
    getFood,
    getOneRecipe,
    goToEditionPage,
    handleChange,
    ingredients,
    postNewRecipe,
    props,
    recipe,
  };
};

export { getRecipesDatas };

// manage funtions and transform data
