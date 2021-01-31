// import core
import React, { useState } from 'react';
import { getAuthDatas } from '../presenter/loginPresenter';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(form)
      .then((result) => setIsAuth(result))
      .catch((error) => setErrors(error.response.data));
  };

  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const authDatas = getAuthDatas(
    form,
    errors,
    handleForm,
    handleSubmit,
    isAuth
  );

  return <Login authDatas={authDatas} />;
}

export default LoginManager;
