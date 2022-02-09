import React from 'react';
import { useForm } from 'react-hook-form'

import { useDataCards } from '../../../store/index'

import Field from '../../Inputs'

import { Form, SearchIcon } from './style'


const FilterSimple = () => {
    const { register, handleSubmit } = useForm()
    const { dataCard, setDataCard } = useDataCards()

    const FilterSimple = (dataForm) => {
        const { data } = dataCard
        const nameListSearch = ['name', 'films', 'tvShows', 'videoGames']

        for (let value of nameListSearch) {
            const dataFilter = data.filter((data) => data[value].includes(dataForm.search))
            if (dataFilter.length !== 0) {
                setDataCard(prev => prev = { data: dataFilter })
                return
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit(FilterSimple)}>
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