import React from "react";
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
                <Button>Mes aliments</Button>
                <Button>Mes recettes</Button>
                <Button>Mes repas</Button>
            </Grid>
        </Container>
    );
}

export default Menu;
