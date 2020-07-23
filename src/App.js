// import library
import React from "react";
import { Switch, Route } from "react-router-dom";

// import components
import Home from "./components/Home";
import Foods from "./components/Foods/Foods";

// import style

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aliments" component={Foods} />
        </Switch>
    );
}

export default App;
