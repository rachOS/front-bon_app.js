// import core
import React, { useEffect, useState } from 'react';
import { setDatas } from './SignupPresenter';
import { createUser } from './SignupActions';

// import component
import Signup from './Signup';

function SignupManager() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    age: '',
    sex: '',
    height: '',
    weigth: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(form)
      .then((result) => result)
      .catch((error) => setErrors(error.response.data));
  };
  /*
Checker l'erreur email / mdp, l'un ne se met pas à jour quand on renseigne l'autre en premier. Besoin d'un useeffect() ?
*/
  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const userDatas = setDatas(form, errors, handleForm, handleSubmit);

  return <Signup userDatas={userDatas} />;
}

export default SignupManager;
