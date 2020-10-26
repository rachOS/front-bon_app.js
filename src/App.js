// import core
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Foods from './components/Foods/Foods';
import Meals from './components/Meals/Meals';
import Planning from './components/Planning/Planning';
import Users from './components/Users';
import FoodsUpdate from './components/Foods/FoodsUpdate';

function App() {
  return (
    <Fragment>
      <Users />
      <Switch>
        <Route exact path="/aliments" component={Foods} />
        <Route path="/aliments/:foodID" component={FoodsUpdate} />
        <Route path="/repas" component={Meals} />
        <Route path="/planning" component={Planning} />
      </Switch>
    </Fragment>
  );
}
test */
export default App;
