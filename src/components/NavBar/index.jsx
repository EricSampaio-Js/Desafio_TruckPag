import React from 'react';

import Logo from '../../assets/logo.svg'

import {
    Container,
    Nav
} from './style'

const NavBar = () => {
    return ( 
        <Container>
            <Nav>
                <img src={Logo} alt="Logo Disney" />
            </Nav>
        </Container>
     );
}
 
export default NavBar;