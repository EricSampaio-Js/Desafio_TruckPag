import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'


const RouterAll = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    );
}

export default RouterAll;