import React, {useState,createContext} from 'react';

export const MasterContext = createContext();

export const MasterProvider = props => {
    const[currentMovie, setCurrentMovie] = useState(null);
    return(
        <MasterContext.Provider value={[currentMovie, setCurrentMovie]}>
            {props.children}
        </MasterContext.Provider>
    )
}