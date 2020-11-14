/* eslint-disable no-undef */
import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function Recipes() {
  const calories = 2043.41; // import user's DEJ here !
  const [allFoods, setAllFoods] = useState([{}]);
  const [food, setFood] = useState({});
  const [foodQuantity, setFoodQuantity] = useState(0);
  const [foodList, setFoodList] = useState([{}]);

  const getAllFoods = () => {
    const url = `${process.env.REACT_APP_HOST}/foods`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) =>
        setAllFoods(
          data.map((obj) => {
            return { ...obj, selected: false };
          })
        )
      );
  };

  const getFood = (foodId) => {
    const url = `${process.env.REACT_APP_HOST}/foods/${foodId}`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setFood({ ...data, selected: true }));
  };
  // selectFood et ne pas utiliser le getFood => au click on modifie la clé selected dans l'objet correspondant de allFoods
  // console.log('value', foodList);

  useEffect(() => {
    getAllFoods();

    const calcFoodQuantity = () => {
      const total = calories / (food.calories / 100);
      setFoodQuantity(total.toFixed(2));
    };
    calcFoodQuantity();
    const createFoodList = (obj) => {
      let list = [];
      list.push(obj);
      console.log(list, foodList);
      setFoodList(list);
    };
    createFoodList(food);
  }, [food]);

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

  return (
    <Fragment>
      {allFoods.map((foodDetail) => (
        <ul key={foodDetail.id}>
          <li>
            <button onClick={() => getFood(foodDetail.id)}>
              {' '}
              {/* au click il faudra modifier allFoods et pas appeler getFood */}
              {foodDetail.name}
            </button>
          </li>
        </ul>
      ))}
      <p variant="h2" gutterBottom>
        Calculer une recette pour {calories} calories
      </p>
      <div>
        <p>{food.name}</p>
        <p>{food.calories} cals</p>
      </div>
      <div>
        <p>
          il vous faut {foodQuantity} grammes de {food.name} pour atteindre
          votre dépense énergétique journalière
        </p>
        <div>{/* <p>{foodList.map((f) => f.name)}</p> */}</div>
      </div>
    </Fragment>
  );
}

export default Recipes;
