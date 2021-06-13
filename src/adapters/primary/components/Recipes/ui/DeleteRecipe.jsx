//* CORE */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeleteRecipe({ recipesDatas, id }) {
  const { deleteRecipe } = recipesDatas;
  return (
    <button onClick={() => deleteRecipe(id)} className="Delete-food ">
      <FontAwesomeIcon icon={['fas', 'times']} />
      {name}
    </button>
  );
}
DeleteRecipe.propTypes = {
  recipesDatas: PropTypes.object,
  id: PropTypes.number,
};

export default DeleteRecipe;
