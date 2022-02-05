import React from 'react';
import Router from './routers';

import NavBar from './components/NavBar'

import { GLobalStyled } from './GlobalStyles'


const App = () => {

  return (
    <>
      <GLobalStyled />
      <NavBar />
      <Router />
    </>
  );
}

export default App;