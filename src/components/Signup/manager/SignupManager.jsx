// import core
import React, { useState } from 'react';
import { setDatas } from '../presenter/signupPresenter';
import { signup } from '../actions/signupActions';

// import component
import Signup from '../Signup';

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
    signup(form)
      .then((result) => result)
      //.catch((error) => setErrors(error.response.data));
  };

  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const userDatas = setDatas(form, errors, handleForm, handleSubmit);

  return <Signup userDatas={userDatas} />;
}

export default SignupManager;
