/* eslint-disable indent */
// import core
import React from 'react';
import PropTypes from 'prop-types';

// import components
import { Form, Input, FieldSet, Label, Legend } from '../Form/Form';

// import style
import './style/signup.scss';

function Signup({ userDatas }) {
  const { form, handle_form, errors, handle_submit } = userDatas;
  console.log('Error', errors ? errors : 'ok');

  return (
    <Form className="Form" onSubmit={(e) => handle_submit(e)}>
      {/* <Label
          htmlFor="repeat_password"
          text={'vérification du mot de passe'}
        />
        <Input
          id={'repeat_password'}
          name={'repeat_password'}
          type={'password'}
          onChange={(e) => handle_form(e.target.name, e.target.value)}
          value={form.repeat_password}
          placeholder={'********'}
          min={8}
        />
        <Label htmlFor="age" text={'âge'} />
        <Input
          id={'age'}
          name={'age'}
          type={'number'}
          onChange={(e) => handle_form(e.target.name, e.target.value)}
          placeholder={18}
          min={18}
        />
        <Label htmlFor="height" text={'taille en cm'} />
        <Input
          id={'height'}
          name={'height'}
          type={'number '}
          onChange={(e) => handle_form(e.target.name, e.target.value)}
          placeholder={180}
        />
        <Label htmlFor="weight" text={'poid en kg'} />
        <Input
          id={'weight'}
          name={'weight'}
          type={'number'}
          onChange={(e) => handle_form(e.target.name, e.target.value)}
          placeholder={80}
        />
        <Label htmlFor="sex" text={'sexe'} />
        <Input
          id={'sex'}
          name={'sex'}
          type={'text'}
          onChange={(e) => handle_form(e.target.name, e.target.value)}
          placeholder={'M/F'}
        /> */}

      <FieldSet className="Form-fieldset">
        {/* <Legend
          text={'Création de votre compte'}
          classNameNames={'TEST test2'}
        /> */}
        <Input className="Form-input" type={'submit'} value={'Création'} />
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
  );
}
Signup.propTypes = {
  userDatas: PropTypes.object,
};
Signup.defaultProps = {
  userDatas: {
    email: 'john@doe.com',
    password: '12345678',
    age: '42',
    sex: 'M',
    height: '142',
    weigth: '42',
  },
};
export default Signup;
