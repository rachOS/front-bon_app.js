import React, { useState, useEffect } from 'react';
import Recipes from './Recipes';
import { getRecipesDatas } from './recipesPresenter';
import { getAllFoods } from './recipesActions';

function RecipesManager() {
  const [calories, setCalories] = useState(0); // import user's DEJ here !
  const [allFoods, setAllFoods] = useState([{}]);
  const [food, setFood] = useState({});
  const [foodQuantity, setFoodQuantity] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getAllFoods().then((datas) =>
      setAllFoods(
        datas.map((food) => {
          return { ...food, selected: false };
        })
      )
    );
    setCalories(2043.41);
    food.id && setIngredients([...ingredients, { ...food, selected: true }]);
  }, [food]);

  const recipesDatas = getRecipesDatas(
    allFoods,
    calories,
    food,
    setFood,
    foodQuantity,
    setFoodQuantity,
    ingredients,
    setIngredients
  );
  return <Recipes recipesDatas={recipesDatas} />;
}

export default RecipesManager;
// manage states
// call UI and Presenter
