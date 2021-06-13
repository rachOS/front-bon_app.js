//* CORE */
import React from 'react';
import PropTypes from 'prop-types';

function FoodsList({ recipesDatas }) {
  const { allFoods, getFood } = recipesDatas;
  return (
    <>
      <h1>Ma liste d&apos; aliments</h1>
      <ul>
        {allFoods.map((food, key) => (
          <li key={key}>
            <button onClick={() => getFood(food)}>{food.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
FoodsList.propTypes = {
  recipesDatas: PropTypes.object,
};

export default FoodsList;
