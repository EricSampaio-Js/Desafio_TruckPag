import React, { useEffect } from 'react';
import { useDataCardsInfor } from '../../store/index'

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

const Modal = ({ setIsModal }) => {
    const { inforPerson, setInforPerson } = useDataCardsInfor()
    const {
        name,
        films,
        shortFilms,
        tvShows,
        videoGames,
        parkAttractions,
        imageUrl,
    } = inforPerson

    useEffect(() => { console.log(inforPerson) }, [])

    const handleCloserModal = () => {
        setIsModal(current => current = false)
    }

    return (
        <Wrapper>
            <Container>
                <Title>Name: {name}</Title>
                <Content>
                    <img src={imageUrl} alt="" />
                    <CloserIcon onClick={handleCloserModal} />
                    <DataInfor>
                        <div>
                            <SubTitle>Films</SubTitle>
                            <Text>

                                {films[0] ? films.map((value, key) => (
                                    <li key={key}>{value}</li>
                                )) : <li>Não existe informações</li>}

                            </Text>
                        </div>

                        <div>
                            <SubTitle>Short Films</SubTitle>
                            <Text>
                                {shortFilms[0] ? shortFilms.map((value, key) => (
                                    <li key={key}>{value}</li>
                                )) : <li>Não existe informações</li>}
                            </Text>
                        </div>

                        <div>
                            <SubTitle>Tv Shows</SubTitle>
                            <Text>
                                {tvShows[0] ? tvShows.map((value, key) => (
                                    <li key={key}>{value}</li>
                                )) : <li>Não existe informações</li>}
                            </Text>
                        </div>

                        <div>
                            <SubTitle>Video Games:III</SubTitle>
                            <Text>
                                {videoGames[0] ? videoGames.map((value, key) => (
                                    <li key={key}>{value}</li>
                                )) : <li>Não existe informações</li>}
                            </Text>
                        </div>

                        <div>
                            <SubTitle>ParkAttractions</SubTitle>
                            <Text>
                                {parkAttractions[0] ? parkAttractions.map((value, key) => (
                                    <li key={key}>{value}</li>
                                )) : <li>Não existe informações</li>}
                            </Text>
                        </div>
                    </DataInfor>
                    <a href={`https://disney.fandom.com/wiki/${name}`}>
                        <Button  >Saiba Mais</Button>
                    </a>

                </Content>
            </Container>
        </Wrapper>

    );
}

export default Modal;