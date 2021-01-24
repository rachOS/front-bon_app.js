// import core
import Axios from 'axios';

const signup = async (form) => {
  console.log('ACTION', form);
  return await Axios.post(
    // eslint-disable-next-line no-undef
    `${process.env.REACT_APP_HOST}/auth/signup`,
    form
  ).then(async (response) => {
    await response.data;
    /**
     * redirect to path when submit
     */
    await location.assign('/accueil');
  });
};

export { signup };
