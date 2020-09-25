// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

// get props from FoodsList.jsx
function FoodsAdd({ getAllFoods, showFoodDetails, foodIndex }) {
    const [food, setFood] = useState({});
    const [inputValue, setInputValue] = useState("");

    const addFood = () => {
        const url = `${process.env.REACT_APP_HOST}/foods`;
        Axios.post(url, food).finally(() => getAllFoods());
    };

    // get inputs values
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const newValue = { ...inputValue, [name]: value };
        console.log(name, value);
        setInputValue(newValue);
    };

    useEffect(() => {
        setFood(inputValue);
    }, [inputValue]);

    // Si foodIndex est undefined => setInputValue(newValue) sinon setInputValue(oldValue)

    // Todos faire un composant form et passer les props
    return (
        <Fragment>
            {/* Todo <Form values={values} legend id name type onChange htmlFor .../> */}
            <form noValidate autoComplete="off">
                <fieldset>
                    <legend>Ajouter un aliment</legend>
                    <label htmlFor="food name">
                        Name:
                        <input
                            id="food name"
                            name="name"
                            type="text"
                            value={inputValue.name}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="proteins">
                        {" "}
                        Protéines:
                        <input
                            id="proteins"
                            name="protein"
                            type="number"
                            value={inputValue.protein}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="lipids">
                        {" "}
                        Lipides:
                        <input
                            id="lipids"
                            name="lipid"
                            type="number"
                            value={inputValue.lipid}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="glucids">
                        {" "}
                        Glucides:
                        <input
                            id="glucids"
                            name="glucid"
                            type="number"
                            value={inputValue.glucid}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="brans">
                        {" "}
                        Fibres:
                        <input
                            id="brans"
                            name="bran"
                            type="number"
                            value={inputValue.bran}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="cals">
                        Calories:
                        <input id="cals" name="calories" type="number" />
                    </label>
                    <label htmlFor="category">
                        Catégorie:
                        <select
                            id="category"
                            name="id_group"
                            value={inputValue.id_group}
                            onChange={(event) => handleChange(event)}
                        >
                            <option value="">
                                --Choisissez une catégorie--
                            </option>
                            <option value={1}>féculent</option>
                            <option value={2}>animale</option>
                            <option value={3}>végétale</option>
                            <option value={4}>céréales</option>
                            <option value={5}>légumineuse</option>
                        </select>
                    </label>
                </fieldset>
            </form>
            <button type="submit" onClick={() => addFood()}>
                Ajouter
            </button>
        </Fragment>
    );
}

export default FoodsAdd;
