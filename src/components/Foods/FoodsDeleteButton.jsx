// import core
import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

// get props from FoodsList.jsx
function FoodsDeleteButton({ getFoodsList, foodID }) {
  const deleteFood = (foodID) => {
    const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
    Axios.delete(url, foodID).finally(() => getFoodsList());
  };
  return <button onClick={() => deleteFood(foodID)}>X</button>;
}

FoodsDeleteButton.propTypes = {
  getFoodsList: PropTypes.func.isRequired,
  foodID: PropTypes.number.isRequired,
};

FoodsDeleteButton.defaultProps = {
  foodID: 1,
};

export default FoodsDeleteButton;
