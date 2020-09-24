// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

// import components
import FoodsDelete from "./FoodsDelete";
import FoodsEdit from "./FoodsEdit";

// import style

// get props from Foods.jsx
function FoodsList({ allFoods, getAllFoods }) {
    const foodsList = allFoods.map((food, index) => (
        <tr key={index}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.glucid}</td>
            <td>{food.lipid}</td>
            <td>{food.protein}</td>
            <td>{food.bran}</td>
            <td>{food.calories}</td>
            <td>
                <FoodsEdit
                    getAllFoods={getAllFoods}
                    allFoods={allFoods}
                    foodID={food.id}
                    index={index}
                />
            </td>
            <td>
                <FoodsDelete getAllFoods={getAllFoods} foodID={food.id} />
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
                        <td>Editer</td>
                        <td>Effacer</td>
                    </tr>
                </thead>
                <tbody>{foodsList}</tbody>
            </table>
        </Fragment>
    );
}

export default FoodsList;
