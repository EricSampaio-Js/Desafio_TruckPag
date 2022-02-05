import React, { createContext, useState } from 'react';

const StateProvider = createContext()

const Provider = ({ children }) => {

    const [dataCard, setDataCard] = useState('')

    return (
        <StateProvider.Provider value={
            dataCard,
            setDataCard
        }>
            {children}
        </StateProvider.Provider>
    );
}

export default Provider;