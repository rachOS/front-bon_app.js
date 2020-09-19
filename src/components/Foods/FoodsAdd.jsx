// import core
import React, { useState, useEffect, Fragment } from "react";

function FoodsAdd() {
    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <fieldset>
                    <legend>Nom de l' aliment</legend>
                    <input id="food" name="name" type="text" />
                    <label for="food"></label>
                </fieldset>
                <fieldset>
                    <legend>Glucides</legend>
                    <input id="glucids" name="name" type="number" />
                    <label for="glucids"></label>
                </fieldset>
                <fieldset>
                    <legend>Lipides</legend>
                    <input id="lipids" name="name" type="number" />
                    <label for="lipids"></label>
                </fieldset>
                <fieldset>
                    <legend>Protéines</legend>
                    <input id="proteins" name="name" type="number" />
                    <label for="proteins"></label>
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
