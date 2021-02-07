/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FieldSet, Label, Button } from '../Form/Form';
import { Link } from 'react-router-dom';

function Profile({ getUserDatas }) {
  const { user } = getUserDatas;
  const userKeys = Object.keys(user);
  return user.id ? (
    <Form>
      <h1>Mes infos</h1>
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
          <FieldSet key={index}>
            <Label text={key} htmlFor={user[key]} />
            <Input
              id={user[key]}
              className="Form-input"
              name={user[key]}
              type={typeof user[key]}
              onChange={(e) => {
                //  handle_form(e.target.name, e.target.value);
              }}
              placeholder={'JoDoehn'}
              value={user[key]}
              required
            />
          </FieldSet>
        );
      })}
    </Form>
  ) : (
    <Form>
      <Link to="/login">
        <Button text="Login" />
      </Link>
    </Form>
  );
}

Profile.propTypes = {
  getUserDatas: PropTypes.object,
};
export default Profile;
