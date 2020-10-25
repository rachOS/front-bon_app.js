// import core
import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    Fragment,
} from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";

// import components
import Recipes from "./Recipes/Recipes";
import Menu from "./Menu";

// import style

/*
Femmes :   \mathrm{MB} = 0,963 * Poid^0,48 * Taille^0,50 * Age^-0,13
Hommes :   \mathrm{MB} = 1,083 * Poid^0,48 * Taille^0,50 * Age^-0,13
Une fois la formule effectuée, vous la multipliez par 191 et vous obtenez votre
métabolisme de base.
Sédentaire : MB x 1,4
Actif: MB x 1,6
Sportif: MB x 1,7*/


function User() {

    /* get all users */
    const [allUsers, setAllUsers] = useState([{}]);
    const getAllUsers = () => {
        const url = `${process.env.REACT_APP_HOST}/users`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setAllUsers(data));
    };

    useEffect(() => {
        return getAllUsers();
    }, []);

    /* get one user */
    const [user, setUser] = useState([{}]);
    const getOneUser = (userId) => {
        const url = `${process.env.REACT_APP_HOST}/users/${userId}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setUser(data));
    };

    useEffect(() => {
        getOneUser();
    }, [allUsers]);

    /* init energy */
    const [energyConsuption, setEnergyConsuption] = useState({});
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

    /* init Proteins, Lipids, Glucids state */
    const [PLG, setPLG] = useState({});

    /* init info needed by user */
    const weight = user.weight;
    const height = user.height;
    const age = user.age;
    const activity = 1.4;

    /* calculate proteins / lipids / glucids ratio */
    const calcLipGlucProt = () => {
        // DEC means Daily Energy Consuption
        let DEC = energyConsuption.daily_energy;

        const proteins = user.weight * 1.8;
        DEC = DEC - proteins * 4;

        const lipids = user.weight * 1;
        DEC = DEC - lipids * 9;

        const glucids = DEC / 4;

        return setPLG({
            proteins: proteins.toFixed(2),
            lipids: lipids.toFixed(2),
            glucids: glucids.toFixed(2),
        });
    };

    useEffect(() => {
        calcLipGlucProt();
    }, [energyConsuption]);

    return (
        <Fragment>
                <div>
                    {allUsers.map((userDetail) => (
                        <div>
                            <div>
                                <button
                                    onClick={() => getOneUser(userDetail.id)}
                                >
                                    {userDetail.id} {userDetail.firstname}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <p>{`Bonjour ${user.firstname} ${user.lastname}`}</p>
                    <hr />
                    <p>age : {user.age} ans</p>
                    <p>taille : {user.height} m</p>
                    <p>poid : {user.weight} kg</p>
                    <p>activité : {user.id_activity} (sédentaire)</p>
                    <p>objectif : {user.id_goal}(perdre du poid)</p>
                    <hr />
                    <p>
                        Votre <u>métabolisme basal</u> est de
                        <strong> {energyConsuption.mb_rate} calories</strong> et
                        votre <u>dépense énergétique journalière</u> est de
                        <strong>
                            {energyConsuption.daily_energy} calories
                        </strong>
                    </p>
                    <p>
                        Vous devez consommer idéalement
                        <ul>
                            <li href="#simple-list">
                                - {PLG.proteins} grammes de protéines
                            </li>
                            <li href="#simple-list">
                                - {PLG.lipids} grammes de lipides
                            </li>
                            <li href="#simple-list">
                                - {PLG.glucids} grammes de glucides
                            </li>
                        </ul>
                    </p>
                    <hr />
                    <p variant="caption" display="block" gutterBottom>
                        Ces informations ne remplace en aucun cas l'avis médical
                        d'un expert.
                    </p>
                </div>
                <div>
                    <button size="small">Mettre à jour mes infos</button>
                </div>
                <Menu />
                <Switch>
                    <Route path="/recettes" component={Recipes} />
                </Switch>
        </Fragment>
    );
}

export default User;
