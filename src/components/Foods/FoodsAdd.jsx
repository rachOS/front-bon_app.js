// import library
import React, { useState, useEffect } from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// import components

// import data

// import style

function FoodsAdd() {
    return (
        <Container>
            <form  noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Nom" variant="outlined" />
                <TextField
                    id="outlined-basic"
                    label="Glucides"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Lipides"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Proteines"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Fibres"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Calories pour 100g"
                    variant="outlined"
                />
            </form>
            <Button>Ajouter</Button>
        </Container>
    );
}

export default FoodsAdd;
