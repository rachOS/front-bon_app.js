import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import components

// import data

// import style

function Menu() {
    return (
        <Container>
            <Grid>
                <Link to="/aliments">
                    <Button>Mes aliments</Button>
                </Link>
                <Link to="/recettes">
                    <Button>Mes recettes</Button>
                </Link>
                <Link to="/repas">
                    <Button>Mes repas</Button>
                </Link>
                <Link to="/planning">
                    <Button>Mon planning de la semaine</Button>
                </Link>
            </Grid>
        </Container>
    );
}

export default Menu;
