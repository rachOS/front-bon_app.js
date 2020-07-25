import React, { useState, useEffect, useContext } from "react";
import { TestContext } from "../Users/Users";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

// import components

// import data

// import style

function Recipes() {
    const energyConsuption = useContext(TestContext);
    // console.log("Context", TestContext);

    const [allFoods, setAllFoods] = useState([{}]);
    const [food, setFood] = useState([{}]);
    const [foodQuantity, setFoodQuantity] = useState(0);
    const [calories, setCalories] = useState(2000);

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
        const url = `http://localhost:5000/api/foods/${foodId}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setFood(data));
    };
    useEffect(() => {
        getOneFood();
    }, [allFoods]);

    const getFoodName = allFoods.map((foodDetail) => (
        <Button onClick={() => getOneFood(foodDetail.id)}>
            <Paper>{foodDetail.name}</Paper>
        </Button>
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
        <Container>
            <Card>
                <Grid container spacing={1}>
                    {getFoodName}
                </Grid>
                <Typography variant="h2" gutterBottom>
                    Calculer une recette pour {energyConsuption} calories
                </Typography>
                <CardContent>
                    <Typography>{food.name}</Typography>
                    <Typography>{food.calories} cals</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={() => calcFoodQuantity()}
                    >
                        Calculer
                    </Button>
                    <Typography>
                        il vous faut {foodQuantity} grammes de {food.name} pour
                        atteindre votre dépense énergétique journalière
                    </Typography>
                </CardActions>
            </Card>
        </Container>
    );
}

export default Recipes;
