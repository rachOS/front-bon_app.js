// CORE
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENTS
import { Form, Input, FieldSet, Label, Button } from '../Form/Form';

// STYLE
import './style/profile.scss';
function Profile({ getUserDatas }) {
  const { user } = getUserDatas;
  const userKeys = Object.keys(user);
  return user.id ? (
    <Form>
      <div className="Header">
        <h1 className="Title">Mes infos</h1>
      </div>
      <hr />
      <div className="Container">
        {userKeys.map((key, index) => {
          switch (key) {
            case 'id':
              return;
            case 'email':
              return;
            case 'password':
              return;
            default:
              break;
          }
          return (
            <FieldSet
              key={index}
              className={`Form-FieldSet Form-FieldSet-${key}`}
            >
              <Label
                text={key}
                htmlFor={user[key]}
                className={`Form-Label Form-Label-${key}`}
              />
              <Input
                id={user[key]}
                className={`Test Test-${key}`}
                name={user[key]}
                type={typeof user[key]}
                onChange={(e) => {
                  //  handle_form(e.target.name, e.target.value);
                }}
                placeholder={'JoDoehn'}
                value={user[key] || 'non renseigné'}
                required
              />
            </FieldSet>
          );
        })}
      </div>
    </Form>
  ) : (
    <div className="Container">
      <Form>
        <Link to="/login">
          <Button text="Login" />
        </Link>
      </Form>
    </div>
  );
}

Profile.propTypes = {
  getUserDatas: PropTypes.object,
};
export default Profile;
