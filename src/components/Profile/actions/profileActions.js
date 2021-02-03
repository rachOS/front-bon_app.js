import Axios from 'axios';

const getUser = async (userId) => {
  // eslint-disable-next-line no-undef
  const url = await `${process.env.REACT_APP_HOST}/users/${userId}`;
  return await Axios.get(url)
    .then((response) => response.data)
    .then((data) => data);
};
export { getUser };
