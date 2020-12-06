/* eslint-disable indent */
/**
 * take a list of food object and return the right quantity for each food to match with calories goal
 * @param {number} calories
 * @param {number} caloriesGoal
 * @param {number} id
 * @param {array} ingredients
 * @param {object} food
 * @param {number} foodId
 * @param {array} foodList
 * @param {hook} setFood
 * @param {hook} setFoodQuantity
 * @param {hook} setIngredients
 */

const getRecipesDatas = (
  allFoods,
  calories,
  food,
  setFood,
  ingredients,
  setIngredients
) => {
  return {
    calories: calories, // user DEC
    food: food,
    foods: allFoods,
    get_food: setFood,
    ingredients: ingredients,
    delete_duplicate: () => {
      const foodHashMap = {};
      const ingredientsList = ingredients.filter((food) => {
        const alreadyExist = Object.prototype.hasOwnProperty.call(
          foodHashMap,
          food.id
        );
        return alreadyExist ? false : (foodHashMap[food.id] = true);
      });
      return [ingredientsList];
    },
    deselect: (id) => {
      setIngredients(ingredients.filter((food) => food.id !== id));
    },
    balanced_calories: (ingredientsList, caloriesGoal = calories) => {
      const balancedList = ingredientsList.map((food) => {
        return {
          ...food,
          quantity: parseInt(
            (
              caloriesGoal /
              (food.calories / 100) /
              ingredientsList.length
            ).toFixed(2)
          ),
        };
      });
      return [balancedList];
    },
  };
};

export { getRecipesDatas };

// manage funtions and transform data
