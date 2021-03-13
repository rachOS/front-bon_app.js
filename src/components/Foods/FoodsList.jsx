/* eslint-disable indent */
// import core
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import components
import FoodsAdd from './FoodsAdd';
import FoodsDeleteButton from './FoodsDeleteButton';
import FoodsEditButton from './FoodsEditButton';

// import style
import './style/foods.scss';

// get props from Foods.jsx
function FoodsList({ foodsList, getFoodsList }) {
  /*  function SwitchCategories(switcher) {
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
  } */
  //const keys = Object.keys(foodsList[0]);
  const foods = foodsList.map((food, index) => (
    <tr key={index} className={`Box-food Box-food-${index}`}>
      <td className="Name">{food.name}</td>
      <td className="Proteins">{food.protein}</td>
      <td className="Lipids">{food.lipid}</td>
      <td className="Glucids">{food.glucid}</td>
      <td className="Bran">{food.bran}</td>
      <td className="Calories">{food.calories}</td>
      {/* <td className="Categories">{SwitchCategories(food.id_group)}</td> */}
      <td className="Edit-food">
        <FoodsEditButton foodID={food.id} />
      </td>
      <td className="Delete-food">
        <FoodsDeleteButton getFoodsList={getFoodsList} foodID={food.id} />
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <FoodsAdd getFoodsList={getFoodsList} />
      <div>
        <h1>Ma liste</h1>
        <input type="text" placeholder="rechercher" />
      </div>
      <table className="Container Container-table">
        <thead>
          <tr className="Box-food Box-food-header">
            <td className="Name">Nom</td>
            <td className="Proteins">P</td>
            <td className="Lipids">L</td>
            <td className="Glucids">G</td>
            <td className="Bran">F</td>
            <td className="Calories">K/100 unités</td>
          </tr>
        </thead>
        <tbody className="Container Container-body">{foods}</tbody>
      </table>
      {/* TODO si Editer est cliqué on switch sur FoodsUpdate sinon on reste sur FoodAdd */}
    </Fragment>
  );
}

FoodsList.propTypes = {
  foodsList: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        protein: PropTypes.number,
        lipid: PropTypes.number,
        glucid: PropTypes.number,
        bran: PropTypes.number,
        calories: PropTypes.number,
        id_group: PropTypes.number,
      })
    )
  ),
  getFoodsList: PropTypes.func.isRequired,
};

FoodsList.defaultProps = {
  foodsList: [
    {
      id: 1,
      name: 'camembert',
      protein: 30,
      lipid: 50,
      glucid: 5,
      bran: 0,
      calories: 590,
      id_group: 2,
    },
  ],
};
export default FoodsList;
