// import core
import Axios from 'axios';

const login = async (form) => {
  console.log('ACTION', form);
  return await Axios.post(
    // eslint-disable-next-line no-undef
    `${process.env.REACT_APP_HOST}/auth/login`,
    form
  ).then(async (response) => {
    console.log('RESP', response.data);
    await response.data;
  });
};

export { login };
