import Axios from 'axios';
const getAllFoods = () => {
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_HOST}/foods`;
  return Axios.get(url)
    .then((response) => response.data)
    .then((data) => data);
};

const getAllRecipes = async () => {
  // eslint-disable-next-line no-undef
  const url = await `${process.env.REACT_APP_HOST}/recipes`;
  return await Axios.get(url)
    .then((response) => response.data)
    .then((data) => data);
};

const getOneRecipe = async (id) => {
  // eslint-disable-next-line no-undef
  const url = `${process.env.REACT_APP_HOST}/recipes/${id}`;
  return await Axios.get(url);
};
const deleteRecipe = async (recipeID) => {
  try {
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_HOST}/recipes/${recipeID}`;
    await Axios.delete(url);
    window.location.reload();
  } catch (error) {
    throw new Error({ error: error });
  }
};
const postNewRecipe = async (repiceData) => {
  repiceData.id_user = 1;
  console.log('repiceData', repiceData);
  // eslint-disable-next-line no-undef
  const url = await `${process.env.REACT_APP_HOST}/recipes`;

  try {
    if (repiceData) {
      await Axios.post(url, repiceData).then((response) => response.data);
    }
    window.location.reload();
  } catch (e) {
    console.log('error', e);

    throw new Error(e);
  }
};

const editRecipe = async (recipe) => {
  const { id } = recipe;
  try {
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_HOST}/recipes/${id}`;
    await Axios.put(url, recipe);
  } catch (error) {
    console.error({ error: error });
  }
};
export {
  getAllFoods,
  postNewRecipe,
  getAllRecipes,
  getOneRecipe,
  deleteRecipe,
  editRecipe,
};

// manage request
