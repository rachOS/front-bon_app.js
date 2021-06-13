/* eslint-disable no-undef */
import FoodsList from './FoodsList';
import PropTypes from 'prop-types';
import React from 'react';
import RecipesList from './RecipesList';
import SelectedFoods from './SelectedFoods';

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

  const { calories } = recipesDatas;
  return (
    <>
      <RecipesList recipesDatas={recipesDatas} />
      <FoodsList recipesDatas={recipesDatas} />
      <p>Calculer une recette pour {calories} calories</p>
      <SelectedFoods recipesDatas={recipesDatas} />
    </>
  );
}

RecipesUI.propTypes = {
  recipesDatas: PropTypes.object,
  calories: PropTypes.number,
};
