// import core
import React from 'react';
import PropTypes from 'prop-types';

function Form({ children }) {
  return <form>{children}</form>;
}

function FieldSet({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Legend({ text }) {
  return <legend>{text}</legend>;
}

function Label({ htmlFor, text }) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

function Input({ id, name, type, value, onChange, placeholder, min, max }) {
  return (
    <input
      id={id}
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
function Select({ id, name, value, onChange, children }) {
  return (
    <select id={id} name={name} value={value} onChange={onChange}>
      {children}
    </select>
  );
}

function Options({ value, text }) {
  return <option value={value}>{text}</option>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

// PropTypes
Form.propTypes = {
  children: PropTypes.node,
};
Form.defaultProps = {
  children: PropTypes.node,
};
FieldSet.propTypes = {
  children: PropTypes.node,
};
FieldSet.defaultProps = {
  children: PropTypes.node,
};

Legend.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
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
  name: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  type: PropTypes.oneOf(['text', 'number', 'search']),
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
  type: 'text',
  value: null,
  placeholder: 'ex: 06 50 51 52 53 ',
  min: 0,
  max: 300,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'clic me!',
};
Select.propTypes = {
  id: PropTypes.number.isRequired,
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
