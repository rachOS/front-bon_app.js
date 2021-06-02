import React, { useState, useEffect } from 'react';
import RecipesUI from './RecipesUI';
import { getRecipesDatas } from './recipesPresenter';
import { getAllFoods } from './recipesActions';

function RecipesManager() {
  const calories = 2043.41; // import user's DEJ here !
  const [allFoods, setAllFoods] = useState([{}]);
  const [food, setFood] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState({});

  const getFood = (food) => {
    setFood(food);
  };

  const deselect = (id) => {
    setIngredients(ingredients.filter((food) => food.id !== id));
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  useEffect(() => {
    getAllFoods().then((datas) =>
      setAllFoods(
        datas.map((food) => {
          return { ...food, selected: false };
        })
      )
    );

    food.id && setIngredients([...ingredients, { ...food, selected: true }]);

    setRecipe({ ...recipe, ...recipesDatas.calcTotalOfMacroNutrimentRecipe() });
  }, [food]);

  const recipesDatas = getRecipesDatas(
    allFoods,
    calories,
    deselect,
    food,
    getFood,
    handleChange,
    ingredients,
    recipe
  );

  return <RecipesUI recipesDatas={recipesDatas} />;
}
export default RecipesManager;
