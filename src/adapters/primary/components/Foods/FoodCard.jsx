/* eslint-disable indent */
//* CORE */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

//* COMPONENTS */
import FoodsDeleteButton from './FoodsDeleteButton';

function FoodCard({ index, food, getFoodsList }) {
  const { id, name, protein, lipid, glucid, bran, id_group, calories } = food;

  const switchCategories = (switcher) => {
    if (switcher) {
      switch (switcher) {
        case 1:
          return {
            label: 'féculent',
            background: '#eed46e',
          };
        case 2:
          return {
            label: 'animale',
            background: '#ee6e73',
          };
        case 3:
          return {
            label: 'végétale',
            background: '#a4e797',
          };
        case 4:
          return {
            label: 'céréale',
            background: '#af924c',
          };
        case 5:
          return {
            label: 'légumineuse',
            background: 'brown',
          };
        case 6:
          return {
            label: 'laitier',
            background: '#ffffff',
          };
        default:
          break;
      }
    }
    return {
      label: 'none',
      background: 'white',
    };
  };

  const { label, background } = switchCategories(id_group);
  console.log(label);
  return (
    <NavLink key={index} to={`aliments/${id}`} className="Editable">
      <tr key={index} className={`Box-food Box-food-${index}`}>
        <td className="Name" style={{ background: background }}>
          {name}
        </td>
        <td className="Proteins">{protein}</td>
        <td className="Lipids">{lipid}</td>
        <td className="Glucids">{glucid}</td>
        <td className="Bran">{bran}</td>
        <td className="Calories">{calories}</td>
        <td className="Categories">{label}</td>
        <FoodsDeleteButton getFoodsList={getFoodsList} foodID={id} />
      </tr>
    </NavLink>
  );
}
FoodCard.propTypes = {
  index: PropTypes.number,
  food: PropTypes.object,
  getFoodsList: PropTypes.func,
};

export default FoodCard;
