import React, { createContext, useState, useContext } from 'react';

const StateProvider = createContext()

const Provider = ({ children }) => {

    const [dataCard, setDataCard] = useState({})
    const [inforPerson, setInforPerson] = useState()
    const [exibiDataChar, setExibiDataChar] = useState({})
    const [isFilter, setIsFilter] = useState(false)


    return (
        <StateProvider.Provider value={{
            dataCard,
            setDataCard,
            inforPerson,
            setInforPerson,
            exibiDataChar,
            setExibiDataChar,
            isFilter,
            setIsFilter
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

export const useExibiDataChar = () => {
    const { exibiDataChar, setExibiDataChar } = useContext(StateProvider);
    return { exibiDataChar, setExibiDataChar }
}
export const useIsFilter = () => {
    const { isFilter, setIsFilter } = useContext(StateProvider);
    return { isFilter, setIsFilter }
}


export default Provider;