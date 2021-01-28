const setDatas = (form, errors, handleForm, handleSubmit, user) => {
  return {
    form: form,
    handle_form: handleForm,
    errors: errors,
    handle_submit: handleSubmit,
    user: user,
  };
};

export { setDatas };
