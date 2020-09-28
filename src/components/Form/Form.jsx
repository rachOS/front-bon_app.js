// import core
import React from "react";

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

function Input({ id, name, type, value, placeholder, min, max }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            min={min}
            max={max}
        />
    );
}

function Button({ onClick, text }) {
    return <button onClick={onClick}>{text}</button>;
}

// Todo PropTypes
export { Form, FieldSet, Legend, Label, Input, Button };
