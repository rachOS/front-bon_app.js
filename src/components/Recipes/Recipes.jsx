/* eslint-disable no-undef */
// manage UI
import React, { Fragment, useCallback } from 'react';
import PropTypes from 'prop-types';
function Recipes({ recipesDatas }) {
  /* TODO
    ajouter une liste d'ingrédient à la recette
    et retourner la quantité necessaire en grammes de chaque ingrédient pour atteindre
    la DEJ
    ex:
     pâtes seulement => retourne environ 500g pour 2000cals
     pâtes + gruyère => si 50/50 = 280g de pâtes et 257g de gruyère
    */

  /* TODO 2
    même idée déquilibrage mais sans dépasser la quantité de prot, lip, gluc recommendée

    ex: 500g de pâtes =
    347g de glucides environ ( contre 150 max environ) => c'est beaucoup trop!!!
    8g de lipides environ (contre 89g max environ) => c'est carrément pas assez !!!
    72g de proteines eniron (contre 160g maw environ) => on est qu'à la moitié

    Alors, un peut :
    ajouter un peu d'huile d'olive pour combler le manque de lipides
    ajouter des blanc d'oeuf pour combler le manque de proteines
    baisser la quantité de pâtes pour enlever l'exès de glucides

    */

  /* TODO 3
     à chaque ajout ou retrait d'aliment , les quantité doivent être affichées
     automatiquement le but étant de choisir que ses aliments et de ne rien avoir à calculer.
    */
  const {
    ingredients,
    foods,
    calories,
    delete_duplicate,
    deselect,
    setIngredients,
    balanced_calories,
  } = useCallback(recipesDatas);

  const [ingredientsList] = useCallback(delete_duplicate()); // read useCallback doc ! To know if i keep it
  const [balancedList] = useCallback(balanced_calories(ingredientsList));

  return (
    <Fragment>
      <ul>
        {foods.map((food, key) => (
          <li key={key}>
            <button onClick={() => recipesDatas.get_food(food)}>
              {food.name}
            </button>
          </li>
        ))}
      </ul>
      <p>Calculer une recette pour {calories} calories</p>
      <div>
        <div>
          <h1>Ma liste d aliments pour ma recette</h1>
          <ul>
            {balancedList.map((f, key) => {
              if (f.selected) {
                return (
                  <li key={key}>
                    {`${f.quantity} grammes de ${f.name}`}
                    <button
                      onClick={() =>
                        deselect(f.id, ingredients, setIngredients)
                      }
                    >
                      X
                    </button>
                  </li>
                );
              }
              null;
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

Recipes.propTypes = {
  recipesDatas: PropTypes.exact({
    food: PropTypes.object,
    foods: PropTypes.arrayOf(PropTypes.object),
    ingredients: PropTypes.arrayOf(PropTypes.object),
    calories: PropTypes.number,
    delete_duplicate: PropTypes.func,
    deselect: PropTypes.func,
    setIngredients: PropTypes.func,
    balanced_calories: PropTypes.func,
    get_food: PropTypes.func,
  }),
};
export default Recipes;
