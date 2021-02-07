// import core
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FieldSet } from '../Form/Form';
import { Redirect } from 'react-router-dom';
function Login({ authDatas }) {
  const { form, handle_form, errors, handle_submit, isAuth } = authDatas;
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
          {errors.Error ? <p>{errors.Error.USER.AUTH.MESSAGE} </p> : <p />}
          {errors.Error ? (
            <p>{errors.Error.USER.AUTH.EMAIL['string.empty']} </p>
          ) : (
            <p />
          )}
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
          {errors.Error ? (
            <p>{errors.Error.USER.AUTH.PASSWORD['string.empty']} </p>
          ) : (
            <p />
          )}
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
        {isAuth && <Redirect to="/profil" />}
        <span className="Form-span">mot de passe oublié</span>
      </Form>
    </>
  );
}

Login.propTypes = {
  authDatas: PropTypes.object,
  history: PropTypes.node,
};

export default Login;
