/* eslint-disable indent */
// import core
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// components
import { Button, FieldSet, Input } from '../Form/Form';

// helper
import { tuneClassName } from './helper/menuHelper';

// data
import { menuDatas } from './data/menuConst';

// style
import './menu.scss';

function Menu() {
  return (
    <Fragment>
      <ul className="Menu">
        {menuDatas.map((menu, index) => (
          <li key={index}>
            <Link to={menu.PATH}>
              <Button
                text={menu.LABEL}
                className={` Menu-button-nav ${tuneClassName(index)}`}
              />
            </Link>
          </li>
        ))}
        <FieldSet className="Form-fieldset">
          <Link to="/">
            <Input
              id="logout"
              className="Form-input Form-input--action"
              type={'submit'}
              value={'Déconnection'}
            />
          </Link>
        </FieldSet>
      </ul>
    </Fragment>
  );
}

export default Menu;
