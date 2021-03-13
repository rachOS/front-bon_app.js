/* eslint-disable indent */
// import core
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import components
import { Form, Input, FieldSet } from '../../Form/Form';

// import style
import './style/authField.scss';

function AuthField({ userDatas }) {
  const { handle_form, errors, handle_submit } = userDatas;
  console.log('Error', errors ? errors : 'ok');
  const form = {
    email: 'john@doe.com',
    password: '12345678',
    age: '42',
    sex: 'M',
    height: '142',
    weigth: '42',
  };

  return (
    <Form className="Form" onSubmit={(e) => handle_submit(e)}>
      <FieldSet className="Form-fieldset">
        <Link to="/profil">
          <Input
            className="Form-input Form-input--action"
            type={'submit'}
            value={'Création'}
          />
        </Link>
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Input
          id={'email'}
          className="Form-input"
          name={'email'}
          type={'email'}
          onChange={(e) => {
            handle_form(e.target.name, e.target.value);
            e.preventDefault();
          }}
          placeholder={'email'}
          value={form.email}
          required
        />
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Input
          id={'password'}
          className="Form-input"
          name={'password'}
          type={'password'}
          onChange={(e) => {
            handle_form(e.target.name, e.target.value);
            e.preventDefault();
          }}
          value={form.password}
          placeholder={'mot de passe'}
          min={8}
          required
        />
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Link to="/login">
          <Input
            className="Form-input Form-input--action"
            type={'submit'}
            value={'Connection'}
          />
        </Link>
      </FieldSet>
      <FieldSet className="Form-fieldset"></FieldSet>
    </Form>
  );
}
AuthField.propTypes = {
  userDatas: PropTypes.object,
};
AuthField.defaultProps = {
  userDatas: {
    email: 'john@doe.com',
    password: '12345678',
    age: '42',
    sex: 'M',
    height: '142',
    weigth: '42',
  },
};
export default AuthField;
