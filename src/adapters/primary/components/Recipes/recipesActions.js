import Axios from 'axios';

const getAllFoods = () => {
  // eslint-disable-next-line no-undef
  return Axios.get(`${process.env.REACT_APP_HOST}/foods`)
    .then((response) => response.data)
    .then((data) => data);
};

export { getAllFoods };

// manage request
