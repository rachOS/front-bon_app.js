import Axios from 'axios';

const getAllFoods = () => {
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_HOST}/foods`;
  return Axios.get(url)
    .then((response) => response.data)
    .then((data) => data);
};

const postNewRecipe = async (repiceData) => {
  repiceData.id_user = 1;
  console.log('repiceData', repiceData);
  // eslint-disable-next-line no-undef
  const url = await `${process.env.REACT_APP_HOST}/recipes`;

  try {
    if (repiceData) {
      return await Axios.post(url, repiceData).then(
        (response) => response.data
      );
    }
  } catch (e) {
    console.log('error', e);

    throw new Error(e);
  }
};

export { getAllFoods, postNewRecipe };

// manage request
