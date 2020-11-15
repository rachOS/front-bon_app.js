/**
 * take a list of food object and return the right quantity for each food to match with calories goal
 * @param {*} foodList
 * @param {*} caloriesGoal
 */
const balancedCalories = (foodList, caloriesGoal) => {
  const balancedList = foodList.map((f) => {
    return {
      ...f,
      quantity: (caloriesGoal / (f.calories / 100) / foodList.length).toFixed(
        2
      ),
    };
  });
  return [balancedList];
};

export { balancedCalories };
