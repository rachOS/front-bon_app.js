// import core
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import components
import FoodsList from "./FoodsList";
import FoodsAdd from "./FoodsAdd";

// import style

function Foods() {
    const [allFoods, setAllFoods] = useState([{}]);

    const getAllFoods = () => {
        const url = `${process.env.REACT_APP_HOST}/foods`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllFoods(data));
    };

    useEffect(() => {
        getAllFoods();
    }, []);

    return (
        <>
            <FoodsList allFoods={allFoods} getAllFoods={getAllFoods} />
            {/* TODO , move FoodsAdd in FoodsList */}
            <FoodsAdd getAllFoods={getAllFoods} />
        </>
    );
}

export default Foods;
