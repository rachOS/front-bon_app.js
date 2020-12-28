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
  console.log('Error', errors ? errors.Errors : 'ok');

  return (
    <Form onSubmit={(e) => handle_submit(e)}>
      <FieldSet>
        <Legend text={'Création de votre compte'} classNames={'TEST test2'} />
        <Label htmlFor={'email'} text={'email'} />
        <Input
          id={'email'}
          name={'email'}
          type={'email'}
          onChange={(e) => {
            handle_form(e.target.name, e.target.value);
            e.preventDefault();
          }}
          placeholder={'john@doe.com'}
          value={form.email}
          required
        />
        <Label htmlFor="password" text={'mot de passe'} />
        <Input
          id={'password'}
          name={'password'}
          type={'password'}
          onChange={(e) => {
            handle_form(e.target.name, e.target.value);
            e.preventDefault();
          }}
          value={form.password}
          placeholder={'********'}
          min={8}
          required
        />
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
      </FieldSet>
      <Input type={'submit'} value={'submit'} />
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
