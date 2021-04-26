/* eslint-disable indent */
//* CORE */
import React from 'react';
import { Link } from 'react-router-dom';

//* COMPONENTS */
import { Button, FieldSet, Input } from '../Form/Form';

//* HELPER */
import { tuneClassName } from './helper/menuHelper';

//* DATA */
import { menuDatas } from './data/menuConst';

//* STYLE */
import './menu.scss';

function Menu() {
  return (
    <nav>
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
    </nav>
  );
}

export default Menu;
