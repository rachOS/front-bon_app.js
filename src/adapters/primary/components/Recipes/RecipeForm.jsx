//* CORE */
import React, { Fragment } from 'react';
import { Form, Label, Input, Legend, FieldSet, Button } from '../Form/Form';
import PropTypes from 'prop-types';

function RecipeForm({ handleChange, macroNutriments, postNewRecipe, recipe }) {
  console.log('macroNutriments', macroNutriments);
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
            type={'text'}
            value={recipe.name}
            onChange={(event) => handleChange(event)}
            placeholder={recipe.name || 'Ex: pizza'}
          />
          <Label text={'Categorie:'} htmlFor={'recipe name'} />
          <Input
            id="recipe category"
            name="category"
            value={recipe.category}
            onChange={(event) => handleChange(event)}
            placeholder={recipe.category || 'Ex: 1'}
          />
          <Label text={'Protéines:'} htmlFor={'recipe proteins'} />
          <Input
            id="recipe proteins"
            name="protein"
            type="number"
            value={macroNutriments.protein}
          />
          <Label text={'Lipides:'} htmlFor="recipe lipids" />
          <Input
            id="recipe lipids"
            name="lipid"
            value={macroNutriments.lipid}
          />
          <Label text={'Glucides:'} htmlFor={'recipe glucids'} />
          <Input
            id="recipe glucids"
            name="glucid"
            value={macroNutriments.glucid}
          />
          <Label text={'Fibres:'} htmlFor={'recipe bran'} />
          <Input id="recipe bran" name="bran" value={macroNutriments.bran} />
          <Label text={'Calories:'} htmlFor={'recipe calories'} />
          <Input
            id="recipe calories"
            name="calories"
            value={macroNutriments.calories}
          />
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
  macroNutriments: PropTypes.object,
  recipe: PropTypes.object,
  postNewRecipe: PropTypes.func,
};

export default RecipeForm;
