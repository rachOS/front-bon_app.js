/* eslint-disable no-undef */
// import core
import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';

// import components
import Recipes from './Recipes/Recipes';
import Menu from './Menu';

// import module
import { addInfo } from './formula.js';

function User() {
  const [allUsers, setAllUsers] = useState([{}]);
  const [user, setUser] = useState([
    {
      age: 43,
      firstname: 'Grégory',
      height: 1.78,
      id: 1,
      id_activity: 1,
      id_goal: 2,
      lastname: 'Chamekh',
      sex: 'M',
      weight: 89,
      PLG: {
        proteins: '160.20',
        lipids: '89.00',
        glucids: '150.40',
      },
    },
  ]);

  const getAllUsers = () => {
    const url = `${process.env.REACT_APP_HOST}/users`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setAllUsers(data));
  };
  const getUser = async (userId) => {
    const url = `${process.env.REACT_APP_HOST}/users/${userId}`;
    await Axios.get(url)
      .then((response) => response.data)
      .then((data) => setUser(() => addInfo(data)));
  };

  useEffect(() => {
    getAllUsers();
    //getUser(1);
  }, []);

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
      <p>{`Votre métabolisme basal est de ${user.MB} calories par jour`}</p>
      <p>{`Vous devez consommer idéalement ${user.DEC} calories par jour selon votre activité`}</p>
      <p>Soit:</p>
      {user.PLG ? (
        <ul>
          <li href="#simple-list">{user.PLG.proteins} grammes de protéines</li>
          <li href="#simple-list">{user.PLG.lipids} grammes de lipides</li>
          <li href="#simple-list">{user.PLG.glucids} grammes de glucides</li>
        </ul>
      ) : null}
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
