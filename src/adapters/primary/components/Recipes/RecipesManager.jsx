import React, { useState, useEffect } from 'react';
import RecipesUI from './RecipesUI';
import { getRecipesDatas } from './recipesPresenter';
import { getAllFoods } from './recipesActions';

function RecipesManager() {
  const [calories, setCalories] = useState(0); // import user's DEJ here !
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
    const newValue = { ...recipe, [name]: value };
    console.log(name, value);
    setRecipe(newValue);
  };

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
    deselect,
    food,
    getFood,
    handleChange,
    ingredients,
    recipe
  );
  console.log('recipesDatas', recipesDatas);

  return <RecipesUI recipesDatas={recipesDatas} />;
}

export default RecipesManager;
// manage states
// call UI and Presenter
