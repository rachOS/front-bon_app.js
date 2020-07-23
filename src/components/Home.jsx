import React from "react";
import Container from "@material-ui/core/Container";

// import components
import Menu from "./Menu";
import User from "./Users/Users";
// import data

// import style

function Home() {
    return (
        <Container>
            <User />
            <Menu />
        </Container>
    );
}

export default Home;
