import React from 'react';

import imageTeste from '../../assets/imageTest.svg'

import { Container,Card } from './style'

const Cards = () => {
    return (
        <Container>
        
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>
            <Card>
                <img src={imageTeste} alt="" />
                <span>Queen Arianna</span>
            </Card>

        </Container>
    );
}

export default Cards;