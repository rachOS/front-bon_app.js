import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

// import components

// import data

// import style

function FoodsList() {
    const [allFoods, setAllFoods] = useState([{}]);

    const getAllFoods = () => {
        const url = "http://localhost:5000/api/foods";
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllFoods(data));
    };

    const editFood = (id) => {
        /* const url = `http://localhost:5000/api/foods/${id}`;
        Axios.delete(url, id).then((response) => console.log("test")); */
        console.log(id);
    };
    const deleteFood = (id) => {
        /* const url = `http://localhost:5000/api/foods/${id}`;
        Axios.delete(url, id).then((response) => console.log("test")); */
        console.log(id);
    };
    useEffect(() => {
        getAllFoods();
    }, []);

    const foodsList = allFoods.map((food) => (
        <TableRow>
            <TableCell>{food.id}</TableCell>
            <TableCell>{food.name}</TableCell>
            <TableCell>{food.glucid}</TableCell>
            <TableCell>{food.lipid}</TableCell>
            <TableCell>{food.protein}</TableCell>
            <TableCell>{food.bran}</TableCell>
            <TableCell>{food.calories}</TableCell>
            <TableCell>
                <button onClick={() => editFood(food.id)}>O</button>
            </TableCell>
            <TableCell>
                <button onClick={() => deleteFood(food.id)}>X</button>
            </TableCell>
        </TableRow>
    ));

    return (
        <Container>
            <Table>
                <TableHead>
                    <tr>
                        <TableCell>id</TableCell>
                        <TableCell>Nom</TableCell>
                        <TableCell>Glucides</TableCell>
                        <TableCell>Lipides</TableCell>
                        <TableCell>Protéines</TableCell>
                        <TableCell>Fibres</TableCell>
                        <TableCell>Calories pour 100g</TableCell>
                        <TableCell>Editer</TableCell>
                        <TableCell>Effacer</TableCell>
                    </tr>
                </TableHead>
                <TableBody>{foodsList}</TableBody>
            </Table>
        </Container>
    );
}

export default FoodsList;
