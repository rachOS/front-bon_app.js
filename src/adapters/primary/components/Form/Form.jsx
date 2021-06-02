/* eslint-disable indent */
// import core
import React from 'react';
import PropTypes from 'prop-types';

import './style/style.scss';
function Form({ children, method, action, className, onSubmit }) {
  return (
    <form
      method={method}
      className={`Form ${className}`}
      action={action}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

function FieldSet({ children, className }) {
  return <fieldset className={`${className}`}>{children}</fieldset>;
}

function Legend({ text, className }) {
  return <legend className={`${className}`}>{text}</legend>;
}

function Label({ htmlFor, text, className }) {
  switch (text) {
    case 'firstname':
      return (
        <label className={className} htmlFor={htmlFor}>
          prénom
        </label>
      );
    case 'lastname':
      return (
        <label className={className} htmlFor={htmlFor}>
          nom
        </label>
      );
    case 'age':
      return (
        <label className={className} htmlFor={htmlFor}>
          âge
        </label>
      );
    case 'sex':
      return (
        <label className={className} htmlFor={htmlFor}>
          sexe
        </label>
      );
    case 'height':
      return (
        <label className={className} htmlFor={htmlFor}>
          taille
        </label>
      );
    case 'weight':
      return (
        <label className={className} htmlFor={htmlFor}>
          poid
        </label>
      );
    case 'id_activity':
      return (
        <label className={className} htmlFor={htmlFor}>
          activité
        </label>
      );
    case 'id_goal':
      return (
        <label className={className} htmlFor={htmlFor}>
          objectif
        </label>
      );
    case 'password':
      return (
        <label className={className} htmlFor={htmlFor}>
          mot de passe
        </label>
      );
    default:
      return (
        <label className={className} htmlFor={htmlFor}>
          {text}
        </label>
      );
  }
}

function Input({
  id,
  className,
  name,
  type,
  value,
  onChange,
  placeholder,
  min,
  max,
}) {
  return (
    <input
      id={id}
      className={` Form-input ${className}`}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
}
function Select({ id, className, name, value, onChange, children }) {
  return (
    <select
      id={id}
      className={`${className}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

function Options({ value, text }) {
  return <option value={value}>{text}</option>;
}

function Button({ onClick, text, className, type }) {
  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

// PropTypes
Form.propTypes = {
  children: PropTypes.node,
  method: PropTypes.string,
  action: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};
Form.defaultProps = {
  children: PropTypes.func,
  action: '',
  className: '',
};
FieldSet.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
};
FieldSet.defaultProps = {
  children: PropTypes.func,
};

Legend.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  className: PropTypes.string,
};
Legend.defaultProps = {
  text: 'ma légende',
};

Label.propTypes = {
  htmlFor: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  className: PropTypes.string,
};
Label.defaultProps = {
  htmlFor: 'name',
  text: 'mon label',
};

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  className: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  type: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: 'name',
  name: 'name',
  type: PropTypes.oneOf([
    'text',
    'number',
    'search',
    'password',
    'email',
    'submit',
  ]),
  value: '',
  placeholder: 'this is a placeholder',
  min: 0,
  max: 300,
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: 'clic me!',
};
Select.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Select.defaultProps = {
  id: 'category',
  name: 'id_group',
  value: '',
  onChange: PropTypes.func,
  children: PropTypes.node,
};
Options.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};

Options.defaultProps = {
  value: '',
  text: '--Choisissez une catégorie--',
};
export { Form, FieldSet, Legend, Label, Input, Button, Select, Options };
