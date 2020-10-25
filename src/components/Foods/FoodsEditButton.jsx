// import core
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// get props from FoodsList.jsx
function FoodsEditButton({ foodID }) {
  return (
    <Link to={`aliments/${foodID}`}>
      <button>O</button>
    </Link>
  );
}

FoodsEditButton.propTypes = {
  foodID: PropTypes.number.isRequired,
};

FoodsEditButton.defaultProps = {
  foodID: 1,
};

export default FoodsEditButton;
