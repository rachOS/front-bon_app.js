// import core
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// import components
import Foods from "./components/Foods/Foods";
import Meals from "./components/Meals/Meals";
import Planning from "./components/Planning/Planning";
import Menu from "./components/Menu";
import Users from "./components/Users";

function App() {
    return (
        <Fragment>
            <Users />
            <Switch>
                <Route path="/aliments" component={Foods} />
                <Route path="/repas" component={Meals} />
                <Route path="/planning" component={Planning} />
            </Switch>
        </Fragment>
    );
}

export default App;
