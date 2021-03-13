// import core
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

// import components
import FoodsList from './FoodsList';

// import style
import './style/foods.scss';

function Foods() {
  const [foodsList, setFoodsList] = useState([{}]);

  const getFoodsList = () => {
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_HOST}/foods`;
    Axios.get(url)
      .then((response) => response.data)
      .then((data) => setFoodsList(data));
  };

  useEffect(() => {
    getFoodsList();
  }, []);

  return <FoodsList foodsList={foodsList} getFoodsList={getFoodsList} />;
}

export default Foods;
