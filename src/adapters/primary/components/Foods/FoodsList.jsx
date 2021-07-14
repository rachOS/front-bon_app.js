/* eslint-disable indent */
//* CORE */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FoodCard from './FoodCard';

//* COMPONENTS*/
import FoodsAdd from './FoodsAdd';

//* STYLE */
import './style/foods.scss';
function FoodsList({ foodsList, getFoodsList }) {
  console.log('foodsList', foodsList);

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
            <td className="Categories">cat</td>
          </tr>
        </thead>
        <tbody className="Container Container-body">
          {foodsList.map((food, index) => (
            <FoodCard
              key={index}
              index={index}
              food={food}
              getFoodsList={getFoodsList}
            />
          ))}
        </tbody>
      </table>
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
