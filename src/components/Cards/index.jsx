import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useDataCards,useDataCardsInfor } from '../../store/index'

import Modal from '../../components/Modal'
import { Container, Card } from './style'

const Cards = () => {
  
    const [isModal, setIsModal] = useState(false)
    const { dataCard, setDataCard } = useDataCards()
    const { inforPerson, setInforPerson } = useDataCardsInfor()
    const { data } = dataCard


    useEffect(async () => {
        const { data } = await axios.get(`https://api.disneyapi.dev/characters`)
        setDataCard(current => current = data)
    }, [])

 

    const handleInforPerson = (id) => {
        const [dataInfor] = data.filter(({ _id }) => {
            return _id === id
        })
        setInforPerson(current => current = dataInfor)
        setIsModal(current => current = true)
    }

    return (
        <Container>
            {isModal && <Modal setIsModal={setIsModal} />}
            {
                data && data.map((data) => {
                    return (
                        <Card key={data._id} onClick={() => handleInforPerson(data._id)} >
                            <img src={data.imageUrl} alt="" />
                            <span>{data.name}</span>
                        </Card>
                    )
                })
            }

        </Container>
    );
}

export default Cards;