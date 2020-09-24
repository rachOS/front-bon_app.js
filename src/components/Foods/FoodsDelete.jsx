// import core
import React from 'react';
import Axios from "axios";

function FoodsDelete({getAllFoods, foodID}) {
    const deleteFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.delete(url, foodID).finally(() => getAllFoods());
    };
  return (
    <button onClick={() => deleteFood(foodID)}>X</button>
  );
}

export default FoodsDelete;