// import core
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";

// import components
import FoodsAdd from "./FoodsAdd";
import FoodsDelete from "./FoodsDelete";
import FoodsEdit from "./FoodsEdit";

// import style

// get props from Foods.jsx
function FoodsList({ allFoods, getAllFoods }) {
    const [foodIndex, setFoodIndex] = useState({})

    const showFoodDetails = (index) => {
        console.log("DETAILS", allFoods[index]);
        setFoodIndex(index)
        return allFoods[index]
    };

    useEffect(()=> {
        showFoodDetails(foodIndex)
    },[foodIndex])

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
                    showFoodDetails={showFoodDetails}
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
            <FoodsAdd
                getAllFoods={getAllFoods}
                showFoodDetails={showFoodDetails}
                foodIndex={foodIndex}
            />
        </Fragment>
    );
}

export default FoodsList;
