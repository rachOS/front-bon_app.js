//* CORE */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeleteRecipe from './DeleteRecipe';

function RecipesCard({ recipe, recipesDatas }) {
  const { id } = recipe;

  return (
    <>
      <span
        onClick={() => {
          recipesDatas.goToEditionPage(id);
        }}
      >
        <tr key={id} className={`Box-food Box-food-${id}`}>
          <td className="Name" style={{ background: '#f0f0f0' }}>
            {name}
          </td>
          <td className="Proteins">{recipe.protein}</td>
          <td className="Lipids">{recipe.lipid}</td>
          <td className="Glucids">{recipe.glucid}</td>
          <td className="Bran">{recipe.bran}</td>
          <td className="Calories">{recipe.calories}</td>
          <td className="Categories">{recipe.name}</td>
        </tr>
      </span>
      <DeleteRecipe recipesDatas={recipesDatas} id={id} />
    </>
  );
}
RecipesCard.propTypes = {
  recipe: PropTypes.object,
  recipesDatas: PropTypes.object,
};

export default RecipesCard;
