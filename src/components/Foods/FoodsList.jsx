// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

// import style

function FoodsList() {
    const [allFoods, setAllFoods] = useState([{}]);

    const getAllFoods = () => {
        const url = `${process.env.REACT_APP_HOST}/foods`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllFoods(data));
    };

    const editFood = (id) => {
        /* const url = `http://localhost:5000/api/foods/${id}`;
        Axios.delete(url, id).then((response) => console.log("test")); */
        console.log(id);
    };
    const deleteFood = (id) => {
        /* const url = `http://localhost:5000/api/foods/${id}`;
        Axios.delete(url, id).then((response) => console.log("test")); */
        console.log(id);
    };
    useEffect(() => {
        getAllFoods();
    }, []);

    const foodsList = allFoods.map((food) => (
        <tr>
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
                <button onClick={() => deleteFood(food.id)}>X</button>
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
