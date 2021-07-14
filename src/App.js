import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import Signup from './adapters/primary/components/Signup/Signup';

library.add(faPenAlt, faTimes);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
