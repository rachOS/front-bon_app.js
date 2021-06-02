//* CORE */
import React from 'react';
import PropTypes from 'prop-types';

function SelectedFoods({ balancedList, deselect }) {
  return (
    <ul>
      {balancedList.map((f, key) => {
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
  balancedList: PropTypes.func,
  deselect: PropTypes.func,
};

export default SelectedFoods;
