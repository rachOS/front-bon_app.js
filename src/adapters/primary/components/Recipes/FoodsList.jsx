//* CORE */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function FoodsList({ allFoods, getFood }) {
  return (
    <Fragment>
      <ul>
        {allFoods.map((food, key) => (
          <li key={key}>
            <button onClick={() => getFood(food)}>{food.name}</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
FoodsList.propTypes = {
  allFoods: PropTypes.arrayOf(PropTypes.object),
  getFood: PropTypes.func,
};

export default FoodsList;
