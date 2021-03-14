// import core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Foods from './components/Foods/Foods';
import Meals from './components/Meals/Meals';
import Planning from './components/Planning/Planning';
import FoodsUpdate from './components/Foods/FoodsUpdate';
import Home from './components/Home';
import RecipesManager from './components/Recipes/RecipesManager';
import ProfileManager from './components/Profile/manager/ProfileManager';
import PrivateRoute from './components/private/PrivateRoute';
import AuthField from './components/Auth/AuthField/AuthField';
import Menu from './components/Menu/Menu';

// import CSS
import './app.scss';

// import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faPenAlt, faTimes);

function App() {
  return (
    <main className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}>
          <AuthField />
        </Route>
        <Route exact path="/aliments" component={Foods} />
        <Route path="/aliments/:foodID" component={FoodsUpdate} />
        <Route path="/repas" component={Meals} />
        <Route path="/planning" component={Planning} />
        <Route path="/recettes" component={RecipesManager} />
        <PrivateRoute path="/profil" component={ProfileManager} />
      </Switch>
    </main>
  );
}

export default App;
