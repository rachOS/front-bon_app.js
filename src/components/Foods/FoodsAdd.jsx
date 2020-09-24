// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

// get props from FoodsList.jsx
function FoodsAdd({ getAllFoods, showFoodDetails, foodIndex }) {
    const [food, setFood] = useState("");
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

    const handletest = () => {
        console.log("TEST", `${showFoodDetails(foodIndex).name}, ${foodIndex}`);
    };

    return (
        <Fragment>
            <button onClick={() => handletest()}> test</button>
            <form noValidate autoComplete="off">
                <fieldset>
                    <legend>Nom de l' aliment</legend>
                    <input
                        id="food name"
                        name="name"
                        type="text"
                        value={inputValue.name}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="food name"></label>
                </fieldset>
                <fieldset>
                    <legend>Protéines</legend>
                    <input
                        id="proteins"
                        name="protein"
                        type="number"
                        value={inputValue.proteins}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="proteins"></label>
                </fieldset>
                <fieldset>
                    <legend>Lipides</legend>
                    <input
                        id="lipids"
                        name="lipid"
                        type="number"
                        value={inputValue.lipids}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="lipids"></label>
                </fieldset>
                <fieldset>
                    <legend>Glucides</legend>
                    <input
                        id="glucids"
                        name="glucid"
                        type="number"
                        value={inputValue.glucids}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="glucids"></label>
                </fieldset>
                <fieldset>
                    <legend>Fibres</legend>
                    <input
                        id="brans"
                        name="bran"
                        type="number"
                        value={inputValue.bran}
                        onChange={(event) => handleChange(event)}
                    />
                    <label htmlFor="brans"></label>
                </fieldset>
                <fieldset>
                    <legend>Calories pour 100g</legend>
                    <input id="cals" name="calories" type="number" />
                    <label htmlFor="cals"></label>
                </fieldset>
                <fieldset>
                    <legend>Catégory</legend>
                    <input
                        id="cat"
                        name="id_group"
                        type="number"
                        value={inputValue.id_group}
                        onChange={(event) => handleChange(event)}
                        min="1"
                        max="5"
                        placeholder="1 à 5"
                    />
                    <label htmlFor="cat"></label>
                </fieldset>
            </form>
            <button type="submit" onClick={() => addFood()}>
                Ajouter
            </button>
        </Fragment>
    );
}

export default FoodsAdd;
