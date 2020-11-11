/* eslint-disable no-undef */
// import core
import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';

// import components
import Recipes from './Recipes/Recipes';
import Menu from './Menu';

// import module
import {
  basalMetabolicRate,
  dailyEnergyConsuption,
  bodyGoal,
  calcMacronutrients,
} from './formula.js';

function User() {
  const [allUsers, setAllUsers] = useState([{}]);
  const [user, setUser] = useState([{}]);

  useEffect(() => {
    const getAllUsers = () => {
      const url = `${process.env.REACT_APP_HOST}/users`;
      Axios.get(url)
        .then((response) => response.data)
        .then((data) => setAllUsers(data));
    };
    getAllUsers();
    getUser(1);
  }, []);

  const getUser = (userId) => {
    const url = `${process.env.REACT_APP_HOST}/users/${userId}`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) =>
        setUser({
          ...data,
          MB: basalMetabolicRate(data),
          DEC: dailyEnergyConsuption(data),
          GOAL: bodyGoal(data),
          PLG: calcMacronutrients(data),
        })
      );
  };

  console.log(user);
  const returnUser = (event) => {
    getUser(event.target.value);
  };
  return (
    <Fragment>
      <select onChange={(event) => returnUser(event)}>
        {allUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.firstname}
          </option>
        ))}
      </select>
      <h1>
        {user.firstname} {user.lastname}
      </h1>
      <p>
        {`Votre métabolisme basal est de ${user.MB.toFixed(
          2
        )} calories par jour`}
      </p>
      <p>{`Vous devez consommer idéalement ${user.DEC.toFixed(
        2
      )} calories par jour selon votre activité`}</p>
      <p>Soit:</p>
      <ul>
        <li href="#simple-list">
          {user.PLG.prot.toFixed(2)} grammes de protéines
        </li>
        <li href="#simple-list">
          {user.PLG.lip.toFixed(2)} grammes de lipides
        </li>
        <li href="#simple-list">
          {user.PLG.gluc.toFixed(2)} grammes de glucides
        </li>
      </ul>
      <hr />
      <p variant="caption" display="block" gutterBottom>
        Ces informations ne remplacent en aucun cas l&apos avis médical d&apos
        un expert.
      </p>
      <div>
        <button size="small">Mettre à jour mes infos</button>
      </div>
      <Menu />
      <Switch>
        <Route path="/recettes" component={Recipes} />
      </Switch>
    </Fragment>
  );
}
export default User;
