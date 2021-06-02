import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { FieldSet, Form, Legend, Label, Input, Button } from '../Form/Form';
function FoodsAdd({ getFoodsList }) {
  const [food, setFood] = useState({});
  const [inputValue, setInputValue] = useState('');

  const addFood = () => {
    // eslint-disable-next-line no-undef
    const url = `${process.env.REACT_APP_HOST}/foods`;
    Axios.post(url, food).finally(() => getFoodsList());
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newValue = { ...inputValue, [name]: value };
    console.log(name, value);
    setInputValue(newValue);
  };

  useEffect(() => {
    setFood(inputValue);
  }, [inputValue]);

  return (
    <Fragment>
      <Form noValidate autoComplete="off">
        <FieldSet>
          <Legend text={'Ajouter un aliment'} />
          <Label htmlFor={'food name'} text={'Nom'} />
          <Input
            id="food name"
            name="name"
            type="text"
            value={inputValue.name}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="proteins" text={'Protéines'} />
          <Input
            id="proteins"
            name="protein"
            type="number"
            value={inputValue.protein}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="lipids" text={'Lipides'} />
          <Input
            id="lipids"
            name="lipid"
            type="number"
            value={inputValue.lipid}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="glucids" text={'Glucides'} />
          <Input
            id="glucids"
            name="glucid"
            type="number"
            value={inputValue.glucid}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="brans" text={'Fibres'} />
          <Input
            id="brans"
            name="bran"
            type="number"
            value={inputValue.bran}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="cals" text={'Calories'} />
          <Input
            id="cals"
            name="calories"
            type="number"
            value={inputValue.calories}
            onChange={(event) => handleChange(event)}
          />
          <Label htmlFor="category" text={'Catégorie'} />
          <select
            id="category"
            name="id_group"
            value={inputValue.id_group}
            onChange={(event) => handleChange(event)}
          >
            <option value="">--Choisissez une catégorie--</option>
            <option value={1}>féculent</option>
            <option value={2}>animale</option>
            <option value={3}>végétale</option>
            <option value={4}>céréales</option>
            <option value={5}>légumineuse</option>
          </select>
        </FieldSet>
      </Form>
      <Button
        type="submit"
        text={'Ajouter un aliment'}
        onClick={() => addFood()}
      />
    </Fragment>
  );
}

FoodsAdd.propTypes = {
  getFoodsList: PropTypes.func.isRequired,
};
FoodsAdd.defaultProps = {
  getFoodsList: PropTypes.func,
};

export default FoodsAdd;
