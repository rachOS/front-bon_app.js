//* CORE */
import React, { Fragment } from 'react';
import { Button, FieldSet, Form, Input, Label, Legend } from '../../Form/Form';
import PropTypes from 'prop-types';

function RecipeForm({ recipesDatas }) {
  const { handleChange, postNewRecipe, recipe } = recipesDatas;

  const [{ name, protein, lipid, category, calories, glucid, bran }] = recipe;

  return (
    <Fragment>
      <Form noValidate autoComplete="off">
        <FieldSet>
          <Legend text={'Ajouter une recette'} />
          <Label text={'Nom:'} htmlFor={'recipe name'} />
          <Input
            id={'recipe name'}
            name={'name'}
            onChange={(event) => handleChange(event)}
            placeholder={name || 'Ex: pizza'}
            type={'text'}
            value={name}
          />
          <Label text={'Categorie:'} htmlFor={'recipe name'} />
          <Input
            id="recipe category"
            name="category"
            type={'number'}
            onChange={(event) => handleChange(event)}
            placeholder={category || 'Ex: 1'}
            value={category}
          />
          <Label text={'Protéines:'} htmlFor={'recipe proteins'} />
          <Input
            id="recipe proteins"
            name="protein"
            type="number"
            value={protein}
          />
          <Label text={'Lipides:'} htmlFor="recipe lipids" />
          <Input id="recipe lipids" name="lipid" value={lipid} />
          <Label text={'Glucides:'} htmlFor={'recipe glucids'} />
          <Input id="recipe glucids" name="glucid" value={glucid} />
          <Label text={'Fibres:'} htmlFor={'recipe bran'} />
          <Input id="recipe bran" name="bran" value={bran} />
          <Label text={'Calories:'} htmlFor={'recipe calories'} />
          <Input id="recipe calories" name="calories" value={calories} />
        </FieldSet>
      </Form>
      <Button
        text={'Créer une recette'}
        type={'submit'}
        //recipe.id ? => PUT else POST
        onClick={() => postNewRecipe(recipe)}
      />
    </Fragment>
  );
}
RecipeForm.propTypes = {
  recipesDatas: PropTypes.object,
};

export default RecipeForm;
