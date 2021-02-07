// import core
import React, { useEffect, useState } from 'react';
import { getUserDatas } from '../presenter/profilePresenter';
import { getUserProfile } from '../actions/profileActions';

// import component
import ProfileContainer from '../Profile';

function LoginManager() {
  const [form, setForm] = useState({
    age: 42,
    firstname: 'John',
    height: 1.8,
    id: 1,
    id_activity: 1,
    id_goal: 2,
    lastname: 'Doe',
    sex: 'M',
    weight: 80,
    PLG: {
      proteins: '160',
      lipids: '89.00',
      glucids: '150',
    },
  });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  useEffect(async () => {
    getUserProfile()
      .then((response) => setUser(response))
      .catch((error) => setErrors(error.response.data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*  await getUser(1)
      .then((result) => setUser(result))
      .catch((error) => setErrors(error.response.data)); */
  };

  const handleForm = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  return (
    <ProfileContainer
      getUserDatas={getUserDatas(form, errors, handleForm, handleSubmit, user)}
    />
  );
}

export default LoginManager;
