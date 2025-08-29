import { createContext, useReducer } from "react";

const initialState = {
    token: '',
    authenticate: false,
}

function reducer (state, action) {
    switch (action.type) {
        case 'colocar': {
            const newState = {
            token: action.token,
            authenticate: true
            };
            return newState;
        };
        
        default:
            throw new Error();
    }
}

export let ContextAuth = createContext(null);

function AuthMemory ({ children }) {
    const value = useReducer(reducer, initialState);
    return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>
}

export default AuthMemory;