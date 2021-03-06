// import core
import Axios from 'axios';

const signup = async (form) => {
  return await Axios({
    method: 'post',
    withCredentials: true,
    data: form,
    // eslint-disable-next-line no-undef
    url: `${process.env.REACT_APP_HOST}/auth/signup`,
  }).then(async (response) => {
    await response.data;
    /**
     * redirect to path when submit
     */
    await location.assign('/accueil');
  });
};

export { signup };
