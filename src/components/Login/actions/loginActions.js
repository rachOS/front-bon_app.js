// import core
import Axios from 'axios';

const login = async (form) => {
  return await Axios.post(
    // eslint-disable-next-line no-undef
    `${process.env.REACT_APP_HOST}/auth/login`,
    form
  ).then((response) => {
    const user = response.data;
    return user;
  });
};

export { login };
