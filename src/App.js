// import core
import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// import components
import { Button } from './components/Form/Form';
import Foods from './components/Foods/Foods';
import Meals from './components/Meals/Meals';
import Planning from './components/Planning/Planning';
import FoodsUpdate from './components/Foods/FoodsUpdate';
import Home from './components/Home';
import RecipesManager from './components/Recipes/RecipesManager';
import LoginManager from './components/Login/manager/LoginManager';
import SignupManager from './components/Signup/manager/SignupManager';
import ProfileManager from './components/Profile/manager/ProfileManager';

// import CSS
import './App.css';
function App() {
  return (
    <Fragment>
      <Link to={'/signup'}>
        <Button text={'Signup'} />
      </Link>
      <Link to={'/login'}>
        <Button text={'Login'} />
      </Link>
      <Switch>
        <Route exact path="/" />
        <Route path="/accueil" component={Home} />
        <Route path="/signup" component={SignupManager} />
        <Route path="/login" component={LoginManager} />
        <Route exact path="/aliments" component={Foods} />
        <Route path="/aliments/:foodID" component={FoodsUpdate} />
        <Route path="/repas" component={Meals} />
        <Route path="/planning" component={Planning} />
        <Route path="/recettes" component={RecipesManager} />
        <Route path="/profil/:id" component={ProfileManager} />
      </Switch>
    </Fragment>
  );
}

export default App;
