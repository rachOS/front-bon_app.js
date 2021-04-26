// import core
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// get props from FoodsList.jsx
function FoodsEditButton({ foodID }) {
  return (
    <Link to={`aliments/${foodID}`}>
      <button style={{ border: 'none' }}>
        <FontAwesomeIcon icon={['fas', 'pen-alt']} />
      </button>
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
