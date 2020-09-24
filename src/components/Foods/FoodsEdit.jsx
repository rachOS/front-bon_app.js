// import core
import React from "react";
import Axios from "axios";

// get props from FoodsList.jsx
function FoodsEdit({ getAllfoods, allFoods, foodID , index}) {
    /* const editFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.put(url, foodID)
            .then((response) => response.data)
            .then((data) => console.log("DATA", data))
            .finally(() => getAllfoods);
    }; */
    const showFoodDetails = (foodID) => {
        console.log(
            "ID",
            allFoods[index]
        );
    };
    // Todo, update input display when edit button is clicked
    return <button onClick={() => showFoodDetails(foodID)}>O</button>;
}

export default FoodsEdit;
