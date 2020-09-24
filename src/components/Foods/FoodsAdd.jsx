// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";

function FoodsAdd() {
    const [food, setFood] = useState("");
    const [inputValue, setInputValue] = useState("");

    const addFood = () => {
        const url = "";
        Axios.post(url, food);
    };

    // get inputs values
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const newValue = { ...inputValue, [name]: value };
        console.log(name, value);
        setInputValue(newFood);
    };

    useEffect(() => {
        setFood(inputValue);
        console.log(food.foodName);
    }, [inputValue]);

    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <fieldset>
                    <legend>Nom de l' aliment</legend>
                    <input
                        id="food name"
                        name="foodName"
                        type="text"
                        value={inputValue.test}
                        onChange={(event) => handleChange(event)}
                    />
                    <label for="food name"></label>
                </fieldset>
                <fieldset>
                    <legend>TEST</legend>
                    <input
                        id="test"
                        name="test"
                        type="text"
                        placeholder={food.foodName}
                        value={inputValue.test}
                        onChange={(event) => handleChange(event)}
                    />
                    <label for="food name"></label>
                </fieldset>
                <fieldset>
                    <legend>Protéines</legend>
                    <input
                        id="proteins"
                        name="proteins"
                        type="number"
                        value={inputValue.proteins}
                        onChange={(event) => handleChange(event)}
                    />
                    <label for="proteins"></label>
                </fieldset>
                <fieldset>
                    <legend>Lipides</legend>
                    <input id="lipids" name="name" type="number" />
                    <label for="lipids"></label>
                </fieldset>
                <fieldset>
                    <legend>Glucides</legend>
                    <input id="glucids" name="name" type="number" />
                    <label for="glucids"></label>
                </fieldset>
                <fieldset>
                    <legend>Fibres</legend>
                    <input id="bran" name="name" type="number" />
                    <label for="bran"></label>
                </fieldset>
                <fieldset>
                    <legend>Calories pour 100g</legend>
                    <input id="cals" name="name" type="number" />
                    <label for="cals"></label>
                </fieldset>
                <fieldset>
                    <legend>Marque</legend>
                    <input id="brand" name="name" type="text" />
                    <label for="brand"></label>
                </fieldset>
            </form>
            <button>Ajouter</button>
        </Fragment>
    );
}

export default FoodsAdd;
