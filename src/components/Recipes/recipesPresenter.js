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
 * @param {Promise} getAllFoods
 */

const getRecipesDatas = (
  allFoods,
  calories,
  food,
  setFood,
  foodQuantity,
  setFoodQuantity,
  ingredients,
  setIngredients
) => {
  return {
    calories: calories, // user DEC
    food: food,
    foods: allFoods,
    food_quantity: foodQuantity,
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
    calc_food_quantity: () => {
      const total = calories / (food.calories / 100);
      setFoodQuantity(total.toFixed(2));
    },
    deselect: (id) => {
      // on garde que les élements qui n'ont pas d'id identique
      setIngredients(ingredients.filter((food) => food.id !== id));
    },
    balanced_calories: (ingredients, caloriesGoal = calories) => {
      const balancedList = ingredients.map((food) => {
        return {
          ...food,
          quantity: (
            caloriesGoal /
            (food.calories / 100) /
            ingredients.length
          ).toFixed(2),
        };
      });
      return [balancedList];
    },
  };
};

export { getRecipesDatas };

// manage funtions and transform data
