import React, { Fragment } from 'react';
import RecipesCard from './RecipesCard';
import PropTypes from 'prop-types';
import RecipeForm from './RecipeForm';

function RecipesList({ recipesDatas }) {
  const {
    allRecipes,
    recipe: { name },
  } = recipesDatas;
  return (
    <>
      <h1>Ma liste de recettes</h1>
      {allRecipes.map((recipe, index) => {
        return (
          <div key={index}>
            <RecipesCard recipe={recipe} recipesDatas={recipesDatas} />
          </div>
        );
      })}
      <h1>Ma recette : {name || '...'}</h1>
      <RecipeForm recipesDatas={recipesDatas} />
    </>
  );
}
RecipesList.propTypes = {
  recipesDatas: PropTypes.object,
};

export default RecipesList;
