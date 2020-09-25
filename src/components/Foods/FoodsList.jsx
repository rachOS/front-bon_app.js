// import core
import React, { Fragment } from "react";

// import components
import FoodsAdd from "./FoodsAdd";
import FoodsDeleteButton from "./FoodsDeleteButton";
import FoodsEditButton from "./FoodsEditButton";

// import style

// get props from Foods.jsx
function FoodsList({ foodsList, getFoodsList }) {
    function SwitchCategories(switcher) {
        switch (switcher) {
            case 1:
                return "féculents";
            case 2:
                return "animales";
            case 3:
                return "végétales";
            case 4:
                return "céréales";
            case 5:
                return "légumineuse";
            default:
                break;
        }
    }

    const foods = foodsList.map((food, index) => (
        <tr key={index}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.glucid}</td>
            <td>{food.lipid}</td>
            <td>{food.protein}</td>
            <td>{food.bran}</td>
            <td>{food.calories}</td>
            <td>{SwitchCategories(food.id_group)}</td>
            <td>
                <FoodsEditButton foodID={food.id} />
            </td>
            <td>
                <FoodsDeleteButton
                    getFoodsList={getFoodsList}
                    foodID={food.id}
                />
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nom</td>
                        <td>Glucides</td>
                        <td>Lipides</td>
                        <td>Protéines</td>
                        <td>Fibres</td>
                        <td>Calories pour 100g</td>
                        <td>Catégorie</td>
                        <td>Editer</td>
                        <td>Effacer</td>
                    </tr>
                </thead>
                <tbody>{foods}</tbody>
            </table>
            {/* TODO si Editer est cliqué on switch sur FoodsUpdate sinon on reste sur FoodAdd */}
            <FoodsAdd getFoodsList={getFoodsList} />
        </Fragment>
    );
}

export default FoodsList;
