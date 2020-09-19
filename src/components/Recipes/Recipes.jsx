import React, { useState, useEffect, useContext, Fragment } from "react";
import { TestContext } from "../Users";
import Axios from "axios";

function Recipes() {
    const calories = useContext(TestContext);

    const [allFoods, setAllFoods] = useState([{}]);
    const [food, setFood] = useState([{}]);
    const [foodQuantity, setFoodQuantity] = useState(0);

    const getAllFoods = () => {
        const url = "http://localhost:5000/api/foods";
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllFoods(data));
    };
    useEffect(() => {
        return getAllFoods();
    }, []);

    const getOneFood = (foodId) => {
        const url = `http://localhost:5000/api/foods/u{foodId}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setFood(data));
    };
    useEffect(() => {
        getOneFood();
    }, [allFoods]);

    const getFoodName = allFoods.map((foodDetail) => (
        <button onClick={() => getOneFood(foodDetail.id)}>
            <div>{foodDetail.name}</div>
        </button>
    ));

    const calcFoodQuantity = () => {
        const total = 100 * (calories / food.calories);
        setFoodQuantity(total.toFixed(2));
    };
    /* TODO
    ajouter une liste d'ingrédient à la recette
    et retourner la quantité necessaire en grammes de chaque ingrédient pour atteindre
    la DEJ
    ex:
     pâtes seulement => retourne environ 500g pour 2000cals
     pâtes + gruyère => si 50/50 = 280g de pâtes et 257g de gruyère
    */

    /* TODO 2
    même idée déquilibrage mais sans dépasser la quantité de prot, lip, gluc recommendée

    ex: 500g de pâtes =
    347g de glucides environ ( contre 150 max environ) => c'est beaucoup trop!!!
    8g de lipides environ (contre 89g max environ) => c'est carrément pas assez !!!
    72g de proteines eniron (contre 160g maw environ) => on est qu'à la moitié

    Alors, un peut :
    ajouter un peu d'huile d'olive pour combler le manque de lipides
    ajouter des blanc d'oeuf pour combler le manque de proteines
    baisser la quantité de pâtes pour enlever l'exès de glucides

    */

    /* TODO 3
     à chaque ajout ou retrait d'aliment , les quantité doivent être affichées
     automatiquement le but étant de choisir que ses aliments et de ne rien avoir à calculer.
    */
    // console.log("value", energyConsuption);

    return (
        <Fragment>
            <div container spacing={1}>
                {getFoodName}
            </div>
            <p variant="h2" gutterBottom>
                Calculer une recette pour {calories} calories
            </p>
            <div>
                <p>{food.name}</p>
                <p>{food.calories} cals</p>
            </div>
            <div>
                <button onClick={() => calcFoodQuantity()}>Calculer</button>
                <p>
                    il vous faut {foodQuantity} grammes de {food.name} pour
                    atteindre votre dépense énergétique journalière
                </p>
            </div>
        </Fragment>
    );
}

export default Recipes;
