import React from "react";
import { Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import components

// import data

// import style

function Menu() {
    return (
        <Container>
            <Grid >
                <Link to="/aliments">
                    <Button>Mes aliments</Button>
                </Link>
                <Button>Mes recettes</Button>
                <Button>Mes repas</Button>
                <Button>Mon planning de la semaine</Button>
            </Grid>
        </Container>
    );
}

export default Menu;
