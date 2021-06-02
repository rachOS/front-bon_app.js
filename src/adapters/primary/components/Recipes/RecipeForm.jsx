//* CORE */
import React, { Fragment } from 'react';
import { Button, FieldSet, Form, Input, Label, Legend } from '../Form/Form';
import PropTypes from 'prop-types';

function RecipeForm({ handleChange, postNewRecipe, recipe }) {
  console.log('recipe', recipe);

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
            placeholder={recipe.name || 'Ex: pizza'}
            type={'text'}
            value={recipe.name}
          />
          <Label text={'Categorie:'} htmlFor={'recipe name'} />
          <Input
            id="recipe category"
            name="category"
            type={'number'}
            onChange={(event) => handleChange(event)}
            placeholder={recipe.category || 'Ex: 1'}
            value={recipe.category}
          />
          <Label text={'Protéines:'} htmlFor={'recipe proteins'} />
          <Input
            id="recipe proteins"
            name="protein"
            type="number"
            value={recipe.protein}
          />
          <Label text={'Lipides:'} htmlFor="recipe lipids" />
          <Input id="recipe lipids" name="lipid" value={recipe.lipid} />
          <Label text={'Glucides:'} htmlFor={'recipe glucids'} />
          <Input id="recipe glucids" name="glucid" value={recipe.glucid} />
          <Label text={'Fibres:'} htmlFor={'recipe bran'} />
          <Input id="recipe bran" name="bran" value={recipe.bran} />
          <Label text={'Calories:'} htmlFor={'recipe calories'} />
          <Input id="recipe calories" name="calories" value={recipe.calories} />
        </FieldSet>
      </Form>
      <Button
        text={'Créer une recette'}
        type={'submit'}
        onClick={() => postNewRecipe(recipe)}
      />
    </Fragment>
  );
}
RecipeForm.propTypes = {
  handleChange: PropTypes.func,
  recipe: PropTypes.object,
  postNewRecipe: PropTypes.func,
};

export default RecipeForm;
