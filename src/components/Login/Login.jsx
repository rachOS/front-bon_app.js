// import core
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, FieldSet } from '../Form/Form';

function Login({ userDatas }) {
  const { form, handle_form, errors, handle_submit } = userDatas;
  console.log('Error', errors ? errors : 'ok');
  return (
    <>
      <h1>Log in</h1>
      <Form className="Form" onSubmit={(e) => handle_submit(e)}>
        <FieldSet className="Form-fieldset">
          {/* <Legend
      text={'Création de votre compte'}
      classNameNames={'TEST test2'}
    /> */}
        </FieldSet>
        <FieldSet className="Form-fieldset">
          {/* <Label htmlFor={'email'} text={'email'} /> */}
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
          {/* <Label htmlFor="password" text={'mot de passe'} /> */}
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
          {/* <Legend
      text={'Création de votre compte'}
      classNameNames={'TEST test2'}
    /> */}
          <Input className="Form-input" type={'submit'} value={'Connection'} />
        </FieldSet>
        <span className="Form-span">mot de passe oublié</span>
      </Form>
    </>
  );
}

Login.propTypes = {
  userDatas: PropTypes.object,
};
Login.defaultProps = {
  userDatas: {
    email: 'john@doe.com',
    password: '12345678',
    age: '42',
    sex: 'M',
    height: '142',
    weigth: '42',
  },
};
export default Login;
