// import core
import React from "react";
import { Link } from "react-router-dom";

// get props from FoodsList.jsx
function FoodsEditButton({foodID}) {
    return (
        <Link to={`aliments/${foodID}`}>
            <button>O</button>
        </Link>
    );
}

export default FoodsEditButton;
