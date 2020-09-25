// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

function FoodsUpdate() {
    const { foodID } = useParams(null);
    const [food, setFood] = useState({});

    const getFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setFood(data));
    };

    const updateFood = (foodID) => {
        const url = `${process.env.REACT_APP_HOST}/foods/${foodID}`;
        Axios.put(url, food)
            .then((response) => response.data)
            .then((data) => data);
        return alert(`l' aliment "${food.name}" est bien mis à jour`);
    };

    useEffect(() => {
        getFood(foodID);
    }, [foodID]);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const updatedFoodInfos = { ...food, [name]: value };
        return setFood(updatedFoodInfos);
    };

    return (
        <Fragment>
            <form method="PUT" onSubmit={() => updateFood(foodID)}>
                <fieldset>
                    <legend>Editer un aliment</legend>
                    <label htmlFor="food name">
                        Name:
                        <input
                            id="food name"
                            name="name"
                            type="text"
                            value={food.name}
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
                            value={food.protein}
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
                            value={food.lipid}
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
                            value={food.glucid}
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
                            value={food.bran}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="cals">
                        Calories:
                        <input
                            id="cals"
                            name="calories"
                            type="number"
                            value={food.calories}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <label htmlFor="category">
                        Catégorie:
                        <select
                            id="category"
                            name="id_group"
                            value={food.id_group}
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
            <button onClick={() => updateFood(foodID)}>mettre à jour</button>
            <Link to="/aliments">
                <button>retour</button>
            </Link>
        </Fragment>
    );
}

export default FoodsUpdate;
