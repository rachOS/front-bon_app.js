// import core
import { useState } from 'react';
import { setNewUserDatas } from '../presenter/signupPresenter';
import { signup } from '../actions/signupActions';

// import component
import { CreateNewUser } from '../../../../../core/use_cases/user/CreateNewUser/CreateNewUser';

function SignupManager() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = new CreateNewUser(form.email, form.password);
    console.log('new user', newUser.submit());
    //signup(form).then((result) => result);
  };

  const handleForm = (event) => {
    const {
      target: { name, value },
    } = event;
    setForm({ ...form, [name]: value });
  };

  const userDatas = setNewUserDatas(form, handleForm, handleSubmit);

  return userDatas;
}

export default SignupManager;
