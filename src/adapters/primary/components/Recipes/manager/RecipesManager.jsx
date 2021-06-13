import React, { useState, useEffect } from 'react';
import RecipesUI from '../ui/RecipesUI';
import { useParams } from 'react-router-dom';

import { getRecipesDatas } from '../presenter/recipesPresenter';
import {
  getAllFoods,
  getAllRecipes,
  getOneRecipe,
  deleteRecipe,
  editRecipe,
} from '../actions/recipesActions';

function RecipesManager(props) {
  const calories = 2043.41; // import user's DEJ here !
  const [allFoods, setAllFoods] = useState([{}]);
  const [allRecipes, setAllRecipes] = useState([{}]);
  const [food, setFood] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState({});
  const { recipeID } = useParams();

  console.log('recipe', recipe);
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
  }, [food]);

  useEffect(() => {
    getAllRecipes().then((datas) =>
      setAllRecipes(
        datas.map((recipes) => {
          return { ...recipes, selected: false };
        })
      )
    );
    setRecipe({ ...recipe, ...recipesDatas.calcTotalOfMacroNutrimentRecipe() });
    recipeID
      ? getOneRecipe(recipeID).then((response) => setRecipe(response.data))
      : setRecipe({});
  }, [ingredients, recipeID]);

  const recipesDatas = getRecipesDatas(
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
  );

  return <RecipesUI recipesDatas={recipesDatas} />;
}
export default RecipesManager;
