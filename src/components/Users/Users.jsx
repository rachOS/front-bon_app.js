import React, { useState, useEffect } from "react";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

// import components

// import data

// import style
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

/* Femmes :   \mathrm{MB} = 0,963 * Poid^0,48 * Taille^0,50 * Age^-0,13
       Hommes :   \mathrm{MB} = 1,083 * Poid^0,48 * Taille^0,50 * Age^-0,13
       Une fois la formule effectuée, vous la multipliez par 191 et vous obtenez votre métabolisme de base.
       Sédentaire : MB x 1,4
       Actif: MB x 1,6
       Sportif: MB x 1,7*/

function User() {
    const classes = useStyles();

    const [allUsers, setAllUsers] = useState([{}]);
    const [user, setUser] = useState([{}]);
    const [energyConsuption, setEnergyConsuption] = useState({});
    const [PLG, setPLG] = useState({});

    const getAllUsers = () => {
        const url = `http://localhost:5000/api/users`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllUsers(data));
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const getOneUser = (id) => {
        const url = `http://localhost:5000/api/users/${id}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setUser(data));
    };

    useEffect(() => {
        getOneUser(allUsers[0].id);
    }, [allUsers]);

    // caculate colories needed
    const weight = user.weight;
    const height = user.height;
    const age = user.age;
    const activity = 1.4;

    const calcDailyEnergyConsumption = () => {
        // for a male
        const basalMetabolicRate =
            1.083 *
            Math.pow(weight, 0.48) *
            Math.pow(height, 0.5) *
            Math.pow(age, -0.13) *
            191;
        const dailyEnergyConsumption = basalMetabolicRate * activity;

        return setEnergyConsuption({
            mb_rate: basalMetabolicRate.toFixed(2),
            daily_energy: dailyEnergyConsumption.toFixed(2),
        });
    };

    useEffect(() => {
        calcDailyEnergyConsumption();
    }, [user]);

    const calcLipGlucProt = () => {
        // DEC means Daily Energy Consuption
        let DEC = energyConsuption.daily_energy;

        const proteins = user.weight * 1.8;
        DEC = DEC - proteins * 4;

        const lipids = user.weight * 1;
        DEC = DEC - lipids * 9;

        const glucids = DEC * 1;

        return setPLG({
            proteins: proteins.toFixed(2),
            lipids: lipids.toFixed(0),
            glucids: glucids.toFixed(2),
        });
    };

    useEffect(() => {
        calcLipGlucProt();
    }, [energyConsuption]);

    return (
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                    >{`Bonjour ${allUsers[0].firstname} ${allUsers[0].lastname}`}</Typography>
                    <Divider />
                    <Typography className={classes.pos} color="textSecondary">
                        age :{user.age}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        taille : {user.height}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        poid : {user.weight}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        activité : {user.id_activity} (sédentaire)
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        objectif : {user.id_goal}(perdre du poid)
                    </Typography>
                    <Divider />
                    <Typography display="block" paragraph gutterBottom>
                        Votre <u>métabolisme basal</u> est de
                        <strong> {energyConsuption.mb_rate} calories</strong> et
                        votre <u>dépense énergétique journalière</u> est de
                        <strong>
                            {energyConsuption.daily_energy} calories
                        </strong>
                    </Typography>
                    <Typography display="block">
                        Vous devez consommer idéalement {PLG.proteins} grammes
                        de protéines, {PLG.lipids} grammes de lipides et{" "}
                        {PLG.glucids} par jours.
                    </Typography>
                    <Divider />
                    <Typography variant="caption" display="block" gutterBottom>
                        Ces information sont à titre informative et ne remplace
                        en aucun cas l'avis médical d'un expert.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Editer mes infos</Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default User;
