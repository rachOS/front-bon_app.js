// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

// import components
import FoodsDelete from "./FoodsDelete";

// import style

function FoodsList({ allFoods, getAllFoods }) {
    // TODO => refactor delete and edit to components <EditFood/> <DeleteFood/>
    const editFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.put(url, foodID)
            .then((response) => response.data)
            .then((data) => console.log("DATA", data));
    };

    const foodsList = allFoods.map((food) => (
        <tr key={food.id}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.glucid}</td>
            <td>{food.lipid}</td>
            <td>{food.protein}</td>
            <td>{food.bran}</td>
            <td>{food.calories}</td>
            <td>
                <button onClick={() => editFood(food.id)}>O</button>
            </td>
            <td>
                <FoodsDelete getAllFoods={getAllFoods} foodID={food.id}/>
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
