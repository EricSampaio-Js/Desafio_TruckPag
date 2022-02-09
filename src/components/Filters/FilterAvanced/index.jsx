import React from 'react';
import { useForm } from 'react-hook-form'
import { useDataCards } from '../../../store/index'



import Field from '../../Inputs'

import { Form } from './style'


const FilterSimple = () => {
    const { register, handleSubmit } = useForm()

    const teste = (data) => {
        console.log(data)
    }

    return (

        <Form onSubmit={handleSubmit(teste)}>
            <Field.Text
                type={'text'}
                name={'name'}
                register={register}
            />
        </Form>

    );
}

export default FilterSimple;