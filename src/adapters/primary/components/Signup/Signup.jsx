/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FieldSet, Label, Legend } from '../Form/Form';

import './style/signup.scss';
import SignupManager from './manager/SignupManager';

function Signup() {
  const {
    form: { email, password },
    handleForm,
    handleSubmit,
  } = SignupManager();

  return (
    <Form className="Form" onSubmit={(event) => handleSubmit(event)}>
      <FieldSet className="Form-fieldset">
        <Legend
          text={'Création de votre compte'}
          classNameNames={'TEST test2'}
        />
        <Input
          className="Form-input Form-input--action"
          type={'submit'}
          value={'Création'}
        />
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Label htmlFor={'email'} text={'email'} />
        <Input
          id={'email'}
          className="Form-input"
          name={'email'}
          type={'email'}
          onChange={(event) => {
            handleForm(event);
          }}
          placeholder={'email'}
          value={email}
          required
        />
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Label htmlFor="password" text={'mot de passe'} />
        <Input
          id={'password'}
          className="Form-input"
          name={'password'}
          type={'password'}
          onChange={(event) => {
            handleForm(event);
          }}
          value={password}
          placeholder={'mot de passe'}
          min={8}
          required
        />
      </FieldSet>
      <FieldSet className="Form-fieldset">
        <Legend
          text={'Création de votre compte'}
          classNameNames={'TEST test2'}
        />
      </FieldSet>
    </Form>
  );
}
Signup.propTypes = {
  userDatas: PropTypes.object,
};

export default Signup;
