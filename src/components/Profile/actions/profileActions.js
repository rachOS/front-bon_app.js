import Axios from 'axios';

const getUserProfile = async () => {
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_HOST}/auth/profile`;
  return await Axios.get(url, { withCredentials: true }).then(
    (response) => response.data.user
  );
};
export { getUserProfile };
