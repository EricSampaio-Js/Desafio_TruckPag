import React from 'react';

const Text = ({ name, label, type, register, ...rest }) => {
    return (
        <label>
            <span>{label}</span>
            <input
                type={type}
                name={name}
                {...register(name)}
                {...rest}
            />
        </label>
    );
}

const Field = {
    Text
}

export default Field;