import React from 'react';

import { useForm } from 'react-hook-form'

import Field from '../../Inputs'

import { Form } from './style'


const FilterSimple = () => {
    const { register, handleSubmit } = useForm()


    const teste = () => {
        console.log('apenas um teste')
    }

    return (

        <Form onSubmit={handleSubmit(teste)}>
            <Field.Text
                type={'text'}
                name={'search'}
                register={register}
            />
        </Form>

    );
}

export default FilterSimple;