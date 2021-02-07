// import core
import Axios from 'axios';
const login = async (form) => {
  return await Axios({
    method: 'post',
    withCredentials: true,
    data: form,
    // eslint-disable-next-line no-undef
    url: `${process.env.REACT_APP_HOST}/auth/login`,
  }).then((response) => {
    return response.data;
  });
};

export { login };
