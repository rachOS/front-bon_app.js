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

  const getChildrenIDS = (recipe) => {
    const [{ children }] = recipe;
    const ingredients = allFoods
      .filter((food) => (children ? children.indexOf(food.id) !== -1 : []))
      .map((food) => {
        console.log(food);
        return { ...food, selected: true };
      });

    return ingredients;
  };

  const [foodsRecipeList] = balancedCalories([
    ...new Set([...ingredientsList, ...getChildrenIDS(recipe)]),
  ]);
  /* const searchedKeyValues = (key) =>
    balancedList.map((element) => {
      return element[key];
    }); */

  /* const calcTotalOfMacroNutrimentRecipe = () => {
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
  }; */

  const goToEditionPage = async (id) => {
    return await props.history.push(`/recettes/${id}/foods`);
  };

  const deleteDuplicateRecipe = async (arr) => {
    const foodsIds = await arr.map((recipe) => recipe.id_food);

    const setFoodsIdsAsChildren = await arr.map((recipe) => {
      delete recipe.id_food;
      return { ...recipe, children: foodsIds };
    });

    return await setFoodsIdsAsChildren.filter(
      (el, index, self) => self.indexOf(el) !== 1
    );
  };

  return {
    allFoods,
    allRecipes,
    balancedCalories,
    calories, // user DEC
    deleteDuplicate,
    deleteDuplicateRecipe,
    deleteRecipe,
    deselect,
    editRecipe,
    food,
    foodsRecipeList,
    getChildrenIDS,
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
