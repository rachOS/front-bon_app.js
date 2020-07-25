// import library
import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

// import components
import Foods from "./components/Foods/Foods";
import Meals from "./components/Meals/Meals";
import Menu from "./components/Menu";
import Planning from "./components/Planning/Planning";
import Recipes from "./components/Recipes/Recipes";
import Users from "./components/Users";

// import style
export const TestContext2 = React.createContext(5000);

function App() {
    return (
        <Container>
            <TestContext2.Provider value="TEST">
                <Users />
                <Menu />
                <Switch>
                    <Route exact path="/" />
                    <Route path="/aliments" component={Foods} />
                    <Route path="/recettes" component={Recipes} />
                    <Route path="/repas" component={Meals} />
                    <Route path="/planning" component={Planning} />
                </Switch>
            </TestContext2.Provider>
        </Container>
    );
}

export default App;
