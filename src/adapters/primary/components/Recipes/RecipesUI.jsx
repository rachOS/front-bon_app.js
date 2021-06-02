/* eslint-disable no-undef */
// manage UI
import React, { Fragment, useCallback } from 'react';
import FoodsList from './FoodsList';
import RecipeForm from './RecipeForm';
import SelectedFoods from './SelectedFoods';
import PropTypes from 'prop-types';
export default function RecipesUI({ recipesDatas }) {
  //TODO même idée déquilibrage mais sans dépasser la quantité de prot, lip, gluc recommendée

  /* ex: 500g de pâtes =
  347g de glucides environ ( contre 150 max environ) => c'est beaucoup trop!!!
  8g de lipides environ (contre 89g max environ) => c'est carrément pas assez !!!
  72g de proteines eniron (contre 160g maw environ) => on est qu'à la moitié

  Alors, un peut :
  ajouter un peu d'huile d'olive pour combler le manque de lipides
  ajouter des blanc d'oeuf pour combler le manque de proteines
  baisser la quantité de pâtes pour enlever l'exès de glucides */

  //TODO à chaque ajout ou retrait d'aliment , les quantités doivent être affichées automatiquement le but étant de choisir que ses aliments et de ne rien avoir à calculer.

  const {
    allFoods,
    balancedList,
    calcTotalOfMacroNutrimentRecipe,
    calories,
    deselect,
    handleChange,
    postNewRecipe,
    recipe,
    getFood,
  } = useCallback(recipesDatas);

  return (
    <Fragment>
      <FoodsList allFoods={allFoods} getFood={getFood} />
      <p>Calculer une recette pour {calories} calories</p>
      <h1>Ma liste d aliments pour ma recette</h1>
      <SelectedFoods balancedList={balancedList} deselect={deselect} />
      <RecipeForm
        handleChange={handleChange}
        macroNutriments={calcTotalOfMacroNutrimentRecipe()}
        postNewRecipe={postNewRecipe}
        recipe={recipe}
      />
    </Fragment>
  );
}

RecipesUI.propTypes = {
  recipesDatas: PropTypes.object,
  allFoods: PropTypes.arrayOf(PropTypes.object),
  balancedList: PropTypes.func,
  calories: PropTypes.number,
  calcTotalOfMacroNutrimentRecipe: PropTypes.func,
  deleteDuplicate: PropTypes.func,
  deselect: PropTypes.func,
  getFood: PropTypes.func,
  handleChange: PropTypes.func,
  ingredients: PropTypes.arrayOf(PropTypes.object),
  postNewRecipe: PropTypes.func,
};
