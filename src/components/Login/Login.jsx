// import core
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FieldSet, Label } from '../Form/Form';
import { useHistory } from 'react-router-dom';

function Login({ userDatas }) {
  const { form, handle_form, errors, handle_submit, user } = userDatas;
  const history = useHistory();

  console.log('ERR <Login/>', errors);
  return (
    <>
      <h1>Log in</h1>
      <Form
        className="Form"
        onSubmit={(e) => {
          handle_submit(e);
        }}
      >
        <FieldSet className="Form-fieldset">
          {/* <Legend
      text={'Création de votre compte'}
      classNameNames={'TEST test2'}
    /> */}
        </FieldSet>
        <FieldSet className="Form-fieldset">
          {/*  {errors ? <Label htmlFor={'email'} text={errors.message} /> : null} */}
          {errors ? <p>{'ERROR MAIL'} </p> : <p />}
          <Input
            id={'email'}
            className="Form-input"
            name={'email'}
            type={'email'}
            onChange={(e) => {
              handle_form(e.target.name, e.target.value);
            }}
            placeholder={'email'}
            value={form.email}
            required
          />
        </FieldSet>
        <FieldSet className="Form-fieldset">
          {/*  {errors ? <Label htmlFor={'email'} text={errors.message} /> : null} */}
          {errors ? <p>{'ERROR PASSWORD'} </p> : <p />}
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
        {user.id ? history.push('/accueil') : null}
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
