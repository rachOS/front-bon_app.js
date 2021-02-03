/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FieldSet, Label } from '../Form/Form';

function Profile({ getUserDatas }) {
  const { user } = getUserDatas;
  const userKey = Object.keys(user);
  return (
    <Form>
      <h1>Créez votre compte</h1>
      {userKey.map((key, index) => {
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
  );
}

Profile.propTypes = {
  getUserDatas: PropTypes.func,
};
export default Profile;
