// import core
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDatas } from '../presenter/profilePresenter';
import { getUser } from '../actions/profileActions';

// import component
import ProfileContainer from '../Profile';

function LoginManager() {
  const { id } = useParams();
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
    const result = await getUser(id)
      .then((response) => response)
      .catch((error) => setErrors(error.response.data));
    setUser(result);
  }, [id]);

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
