//* CORE */
import React from 'react';
import PropTypes from 'prop-types';

function SelectedFoods({ recipesDatas }) {
  const { foodsRecipeList, deselect } = recipesDatas;
  return (
    <ul>
      {foodsRecipeList.map((f, key) => {
        if (f.selected) {
          return (
            <li key={key}>
              {`${f.quantity} grammes de ${f.name}`}
              <button onClick={() => deselect(f.id)}>X</button>
            </li>
          );
        }
      })}
    </ul>
  );
}
SelectedFoods.propTypes = {
  recipesDatas: PropTypes.object,
};

export default SelectedFoods;
