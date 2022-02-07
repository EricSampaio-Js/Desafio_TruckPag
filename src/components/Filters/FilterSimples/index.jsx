import React from 'react';

import { useForm } from 'react-hook-form'

import Field from '../../Inputs'

import { Form, SearchIcon } from './style'


const FilterSimple = () => {
    const { register, handleSubmit } = useForm()


    const teste = () => {
        console.log('apenas um teste')
    }

    return (

        <Form onSubmit={handleSubmit(teste)}>
            <div>
                <Field.Text
                    type={'text'}
                    name={'search'}
                    placeholder='Search'
                    register={register}
                />
                <SearchIcon />
            </div>
        </Form>

    );
}

export default FilterSimple;