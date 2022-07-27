import React from 'react';

//Prepares the datalayer

export const StateContext = React.createContext();

//Wrapping the app and provide the Data layer 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={React.useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull information from the data layer
export const useStateValue = () => React.useContext(StateContext)