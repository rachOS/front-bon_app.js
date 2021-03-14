/* eslint-disable indent */
//* CORE */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

//* COMPONENTS */
import FoodsDeleteButton from './FoodsDeleteButton';

function FoodCard({ key, food, getFoodsList }) {
  const { id, name, protein, lipid, glucid, bran, id_group, calories } = food;
  function SwitchCategories(switcher) {
    switch (switcher) {
      case 1:
        return 'féculents';
      case 2:
        return 'animales';
      case 3:
        return 'végétales';
      case 4:
        return 'céréales';
      case 5:
        return 'légumineuse';
      case 6:
        return 'laitier';
      default:
        break;
    }
  }
  return (
    <NavLink key={key} to={`aliments/${id}`} className="Editable">
      <tr className={`Box-food Box-food-${key}`}>
        <td className="Name">{name}</td>
        <td className="Proteins">{protein}</td>
        <td className="Lipids">{lipid}</td>
        <td className="Glucids">{glucid}</td>
        <td className="Bran">{bran}</td>
        <td className="Calories">{calories}</td>
        <td className="Categories">{SwitchCategories(id_group)}</td>
        <FoodsDeleteButton getFoodsList={getFoodsList} foodID={id} />
      </tr>
    </NavLink>
  );
}
FoodCard.propTypes = {
  key: PropTypes.number,
  food: PropTypes.object,
  getFoodsList: PropTypes.func,
};

export default FoodCard;
