/* eslint-disable no-undef */
import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function Recipes() {
  const calories = 2043.41; // import user's DEJ here !
  const [allFoods, setAllFoods] = useState([{}]);
  const [food, setFood] = useState({});
  const [foodQuantity, setFoodQuantity] = useState(0);
  const [foodList, setFoodList] = useState([]);

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
  // utiliser seulement la liste allfoods
  // si un element a la clé selected: true alors on le mets dans food list
  const getFood = (foodId) => {
    const list = [...foodList];
    const url = `${process.env.REACT_APP_HOST}/foods/${foodId}`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => {
        setFood(data);
        list.push({ ...data, selected: true }); // si data est déjà dans foodList on ne doit pas l'ajouter <= delete ça et changer la valeur selected : false / true dans allFoods
        setFoodList(list);
      });
  };

  useEffect(() => {
    getAllFoods();
    calcFoodQuantity();
  }, [food]);

  const calcFoodQuantity = () => {
    const total = calories / (food.calories / 100);
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
  const deselect = (id) => {
    const newList = [...foodList];
    const updatedList = newList.filter((f) => f.id !== id);
    setFoodList(updatedList);
  };
  console.log(foodList);
  return (
    <Fragment>
      {allFoods.map((food, key) => (
        <ul key={key}>
          <li>
            <button onClick={() => getFood(food.id)}> {food.name}</button>
          </li>
        </ul>
      ))}
      <p>Calculer une recette pour {calories} calories</p>
      <div>
        <p>
          il vous faut {foodQuantity} grammes de {food.name} pour atteindre
          votre dépense énergétique journalière
        </p>
        <div>
          <h1>Ma liste d aliments pour ma recette</h1>
          <ul>
            {foodList.map((f, key) => {
              if (f.selected) {
                return (
                  <li key={key}>
                    {f.name}
                    <button onClick={() => deselect(f.id)}>X</button>
                  </li>
                );
              }
              null;
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Recipes;
