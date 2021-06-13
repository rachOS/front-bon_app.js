import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthField from './adapters/primary/components/Auth/AuthField/AuthField';
import Foods from './adapters/primary/components/Foods/Foods';
import FoodsUpdate from './adapters/primary/components/Foods/FoodsUpdate';
import Home from './adapters/primary/components/Home';
import Meals from './adapters/primary/components/Meals/Meals';
import Menu from './adapters/primary/components/Menu/Menu';
import Planning from './adapters/primary/components/Planning/Planning';
import PrivateRoute from './adapters/primary/components/private/PrivateRoute';
import ProfileManager from './adapters/primary/components/Profile/manager/ProfileManager';
import RecipesManager from './adapters/primary/components/Recipes/manager/RecipesManager';

import './app.scss';

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
        <Route exact path="/recettes" component={RecipesManager} />
        <Route path="/recettes/:recipeID" component={RecipesManager} />
        <PrivateRoute path="/profil" component={ProfileManager} />
      </Switch>
    </main>
  );
}

export default App;
