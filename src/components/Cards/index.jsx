import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    useDataCards,
    useDataCardsInfor,
    useExibiDataChar,
    useIsFilter
 } from '../../store/index'

import Modal from '../../components/Modal'

import {
    Container,
    Card,
    Paginations,
    ButtonsNextAndBack,
    ButtonHome,
    HomeIcon,
} from './style'

const Cards = () => {

    const [isModal, setIsModal] = useState(false)

    const { exibiDataChar, setExibiDataChar } = useExibiDataChar()
    const {isFilter} = useIsFilter()
    const { dataCard, setDataCard } = useDataCards()
    const { setInforPerson } = useDataCardsInfor()
    const { data } = exibiDataChar

    useEffect(async () => {
        const { data } = await axios.get(`https://api.disneyapi.dev/characters`)
        setDataCard(current => current = data)
        setExibiDataChar(current => current = data)

    }, [setDataCard])

    const handleInforPerson = (id) => {
        const [dataInfor] = data.filter(({ _id }) => {
            return _id === id
        })
        setInforPerson(current => current = dataInfor)
        setIsModal(current => current = true)
    }

    const handlePaginationNext = async () => {
        const { data } = await axios.get(exibiDataChar.nextPage)
        setExibiDataChar(current => current = data)
    }

    const handlePaginationBack = async () => {
        const { data } = await axios.get(exibiDataChar.previousPage)
        setExibiDataChar(current => current = data)
    }

    const handleHome = () => {
        setExibiDataChar(current => current = dataCard)
    }

    return (
        <>
            <Container>
                {isModal && <Modal setIsModal={setIsModal} />}
                {
                    data && data.map((data) => {
                        return (
                            <Card key={data._id} onClick={() => handleInforPerson(data._id)} >
                                <img src={data.imageUrl} alt={`Card Disney, Personagem  ${data.name}`} />
                                <span>{data.name}</span>
                            </Card>
                        )
                    })
                }
                <Paginations isFilter={isFilter} >
                    <ButtonHome onClick={handleHome}  ><HomeIcon /></ButtonHome>
                    <ButtonsNextAndBack countBack={exibiDataChar.nextPage} onClick={handlePaginationBack}>Back</ButtonsNextAndBack>
                    <ButtonsNextAndBack onClick={handlePaginationNext}>Next</ButtonsNextAndBack>
                </Paginations>

            </Container>
        </>
    );
}

export default Cards;