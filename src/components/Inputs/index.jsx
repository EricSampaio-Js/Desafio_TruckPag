import React from 'react';

const Text = ({ name, label, type, register, ...rest }) => {
    return (
        <label>
            <input
                type={type}
                name={name}
                {...register(name)}
                {...rest}
            />
            <span>please type the first words of the name in capital letters , Ex: The Return of Jafar</span>
        </label>
    );
}

const Field = {
    Text
}

export default Field;