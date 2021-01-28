// import core
import React, { useState } from 'react';
import { setDatas } from '../presenter/loginPresenter';
import { login } from '../actions/loginActions';

// import component
import Login from '../Login';

function LoginManager() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    age: '',
    sex: '',
    height: '',
    weigth: '',
  });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form)
      .then((result) => {
        setUser(result.user);
        return user;
      })
      .catch((error) => setErrors(error.response.data));
  };

  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const userDatas = setDatas(form, errors, handleForm, handleSubmit, user);

  return <Login userDatas={userDatas} />;
}

export default LoginManager;
