// import core
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// get props from FoodsList.jsx
function FoodsDeleteButton({ getFoodsList, foodID }) {
  const deleteFood = (foodID) => {
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
    Axios.delete(url, { data: { id: foodID } }).finally(() => getFoodsList());
  };
  return (
    <button onClick={() => deleteFood(foodID)} style={{ border: 'none' }}>
      <FontAwesomeIcon icon={['fas', 'times']} />
    </button>
  );
}

FoodsDeleteButton.propTypes = {
  getFoodsList: PropTypes.func.isRequired,
  foodID: PropTypes.number.isRequired,
};

FoodsDeleteButton.defaultProps = {
  foodID: 1,
};

export default FoodsDeleteButton;
