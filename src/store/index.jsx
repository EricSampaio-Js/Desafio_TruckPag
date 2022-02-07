import React, { createContext, useState, useContext } from 'react';

const StateProvider = createContext()

const Provider = ({ children }) => {

    const [dataCard, setDataCard] = useState({})
    const [inforPerson, setInforPerson] = useState({})

    return (
        <StateProvider.Provider value={{
            dataCard,
            setDataCard,
            inforPerson,
            setInforPerson
        }

        }>
            {children}
        </StateProvider.Provider>
    );
}

export const useDataCards = () => {
    const { dataCard, setDataCard } = useContext(StateProvider);
    return { dataCard, setDataCard }
}
export const useDataCardsInfor = () => {
    const { inforPerson, setInforPerson } = useContext(StateProvider);
    return { inforPerson, setInforPerson }
}





export default Provider;