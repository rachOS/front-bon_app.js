// import core
import Axios from 'axios';

const createUser = async (form) => {
  console.log('ACTION', form);
  return await Axios.post(
    // eslint-disable-next-line no-undef
    `${process.env.REACT_APP_HOST}/auth/signup`,
    form
  ).then(async (response) => {
    await response.data;
  });
};

export { createUser };
