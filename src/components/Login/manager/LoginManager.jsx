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
  });
  const [errors, setErrors] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form)
      .then((result) => {
        setIsAuth(result.isAuthenticated);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };

  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const userDatas = setDatas(form, errors, handleForm, handleSubmit, isAuth);

  return <Login userDatas={userDatas} />;
}

export default LoginManager;
