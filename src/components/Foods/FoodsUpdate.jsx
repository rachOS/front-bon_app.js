// import core
import React, { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

// import component
import {
    Form,
    FieldSet,
    Legend,
    Label,
    Input,
    Button,
    Select,
    Options,
} from "../Form/Form";

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
            <Form method="PUT" onSubmit={() => updateFood(foodID)}>
                <FieldSet>
                    <Legend text="Editer un aliment" />
                    <Label htmlFor="food name" text="Name:" />
                    <Input
                        id="food name"
                        value={food.name}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="proteins" text="Protéines:" />
                    <Input
                        id="proteins"
                        name="protein"
                        type="number"
                        value={food.protein}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="lipids" text="Lipides:" />
                    <Input
                        id="lipids"
                        name="lipid"
                        type="number"
                        value={food.lipid}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="glucids" text="Glucides" />
                    <Input
                        id="glucids"
                        name="glucid"
                        type="number"
                        value={food.glucid}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="brans" text="Fibres:" />
                    <Input
                        id="brans"
                        name="bran"
                        type="number"
                        value={food.bran}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="cals" text="Calories:" />
                    <Input
                        id="cals"
                        name="calories"
                        type="number"
                        value={food.calories}
                        onChange={(event) => handleChange(event)}
                    />
                    <Label htmlFor="category" text="Catégorie:" />
                    <Select
                        value={food.id_group}
                        onChange={(event) => handleChange(event)}
                    >
                        <Options />
                        <Options value={1} text="féculent" />
                        <Options value={2} text="animale" />
                        <Options value={3} text="végétale" />
                        <Options value={4} text="céréales" />
                        <Options value={5} text="légumineuse" />
                        <Options value={6} text="laitier" />
                    </Select>
                </FieldSet>
            </Form>
            <Button onClick={() => updateFood(foodID)} text="mettre à jour" />
            <Link to="/aliments">
                <Button text="retour" />
            </Link>
        </Fragment>
    );
}

export default FoodsUpdate;
