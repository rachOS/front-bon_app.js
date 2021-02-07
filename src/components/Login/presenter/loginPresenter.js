const getAuthDatas = (form, errors, handleForm, handleSubmit, isAuth) => {
  return {
    form: form,
    handle_form: handleForm,
    errors: errors,
    handle_submit: handleSubmit,
    isAuth,
  };
};

export { getAuthDatas };
