import React from 'react';

import imageTeste from '../../assets/imageTest.svg'

import {
    Container,
    Wrapper,
    Content,
    Title,
    DataInfor,
    SubTitle,
    Text,
    Button,
    CloserIcon
} from './style'

const Modal = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Name: Queen Arianna</Title>
                <Content>
                    <img src={imageTeste} alt="" />
                    <CloserIcon />
                    <DataInfor>
                        <div>
                            <SubTitle>Films</SubTitle>
                            <Text>
                                <li>Tangled</li>
                                <li> Tangled: Before Ever After</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>Short Films</SubTitle>
                            <Text>
                                <li>Tangled Ever After</li>
                                <li> Hare Peacer</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>Tv Shows</SubTitle>
                            <Text>
                                <li>  Once Upon a Time</li>
                                <li> Tangled: The Series</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>Video Games:III</SubTitle>
                            <Text>
                                <li>Disney Princess Enchanting Storybooks</li>
                                <li>Hidden Worlds</li>
                                <li> Disney Crossy Road</li>
                                <li> Kingdom Hearts </li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                <li>Celebrate the Magic</li>
                                <li>Jingle Bell</li>
                                <li>Jingle BAM!</li>
                            </Text>
                        </div>

                    </DataInfor>
                    <Button>Saiba Mais</Button>
                </Content>
            </Container>
        </Wrapper>

    );
}

export default Modal;