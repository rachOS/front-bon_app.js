// import core
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Fragment>
      <div>
        <Link to="/">
          <button>Accueil</button>
        </Link>
        <Link to="/aliments">
          <button>Mes aliments</button>
        </Link>
        <Link to="/recettes">
          <button>Mes recettes</button>
        </Link>
        <Link to="/repas">
          <button>Mes repas</button>
        </Link>
        <Link to="/planning">
          <button>Mon planning de la semaine</button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Menu;
