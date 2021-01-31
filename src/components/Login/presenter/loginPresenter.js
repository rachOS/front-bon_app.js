const getAuthDatas = (form, errors, handleForm, handleSubmit, isAuth) => {
  console.log('', isAuth);
  return {
    form: form,
    handle_form: handleForm,
    errors: errors,
    handle_submit: handleSubmit,
    isAuth,
  };
};

export { getAuthDatas };
