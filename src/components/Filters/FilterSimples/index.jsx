import React from 'react';
import { useForm } from 'react-hook-form'

import {
    useDataCards,
    useExibiDataChar,
    useIsFilter,
} from '../../../store/index'

import Field from '../../Inputs'
import { Form, SearchIcon, ButtonFilter } from './style'


const FilterSimples = () => {
    const { register, handleSubmit } = useForm()
    const { isFilter, setIsFilter } = useIsFilter()
    const { dataCard } = useDataCards()
    const { setExibiDataChar } = useExibiDataChar()

    const FilterSimple = (dataForm) => {
        const { data } = dataCard
        const nameListSearch = ['name', 'films', 'tvShows', 'videoGames']

        
        if (dataForm.search !== '') {
            for (let value of nameListSearch) {

                const dataFilter = data.filter((data) => data[value].includes(dataForm.search))

                if (dataFilter.length !== 0) {
                    setExibiDataChar(current => current = { data: dataFilter })
                    setIsFilter(current => current = true)
                    return
                }
            }
        }
    }

    const handleResetFilter = () => {
        setExibiDataChar(current => current = dataCard)
        setIsFilter(current => current = false)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(FilterSimple)}>
                <div>
                    <Field.Text
                        type={'text'}
                        name={'search'}
                        placeholder='Search.. press enter after typing'
                        register={register}
                    />
                    <SearchIcon />
                </div>
            </Form>
            {isFilter && <ButtonFilter onClick={handleResetFilter} >Reset Filter</ButtonFilter>}
        </>
    );
}

export default FilterSimples;