// import core
import React from 'react';
import { Form, Input, Button } from './Form/Form';

function Login() {
  return (
    <Form>
      <Input type={'email'} placeholder={'john@doe.com'} min={8} />
      <Input type={'password'} placeholder={'********'} min={8} />
      <Button text={'login'} />
    </Form>
  );
}

export default Login;
