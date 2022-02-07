import React from 'react';

import FilterSimples from '../../components/Filters/FilterSimples'

import Cards from '../../components/Cards'
import Modal from '../../components/Modal'



const Home = () => {

    return (
        <>
            <FilterSimples />
            <Cards/>
            <Modal />
        </>


    );
}

export default Home;