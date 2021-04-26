// import core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Foods from './adapters/primary/components/Foods/Foods';
import Meals from './adapters/primary/components/Meals/Meals';
import Planning from './adapters/primary/components/Planning/Planning';
import FoodsUpdate from './adapters/primary/components/Foods/FoodsUpdate';
import Home from './adapters/primary/components/Home';
import RecipesManager from './adapters/primary/components/Recipes/RecipesManager';
import ProfileManager from './adapters/primary/components/Profile/manager/ProfileManager';
import PrivateRoute from './adapters/primary/components/private/PrivateRoute';
import AuthField from './adapters/primary/components/Auth/AuthField/AuthField';
import Menu from './adapters/primary/components/Menu/Menu';

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
