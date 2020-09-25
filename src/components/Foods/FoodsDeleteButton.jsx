// import core
import React from 'react';
import Axios from "axios";

function FoodsDeleteButton({getFoodsList, foodID}) {
    const deleteFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.delete(url, foodID).finally(() => getFoodsList());
    };
  return (
    <button onClick={() => deleteFood(foodID)}>X</button>
  );
}

export default FoodsDeleteButton;