import React from 'react';
import { useForm } from 'react-hook-form'
import { useDataCards } from '../../../store/index'

import Field from '../../Inputs'


const input = {
    width: '200px',
    height: '30px',
    marginLeft: '32px',
    marginTop: '40px'
}

const FilterAvanced = () => {
    const { register, handleSubmit } = useForm()
    const { dataCard } = useDataCards()



    const handleFilterAvanced = (dataForm) => {
        const { data } = dataCard
        const transformInArray = Object.entries(dataForm)
        const excludingNullValues = transformInArray.filter((value) => {
            return value[1] !== ''
        })
        let creat = '';

        for (let [keys, value] of excludingNullValues) {
            data.forEach((data) => {

                if(data[keys] === value){
                    creat += ` ${data[keys]} === ${value} `
                    console.log(creat)
                }
            
            })

        }

        // 'name', 'films', 'tvShows', 'videoGames'
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleFilterAvanced)} >
                <Field.Text style={input}
                    type={'text'}
                    name={'name'}
                    placeholder='name'
                    register={register}
                />
                <Field.Text style={input}
                    type={'text'}
                    name={'films'}
                    placeholder='Films'
                    register={register}
                />
                <Field.Text style={input}
                    type={'text'}
                    name={'tvShows'}
                    placeholder='TvShows'
                    register={register}
                />
                <Field.Text style={input}
                    type={'text'}
                    name={'videoGames'}
                    placeholder='VideoGames'
                    register={register}
                />

                <button style={input}>Enviar</button>
            </form>



        </>
    );
}

export default FilterAvanced;




