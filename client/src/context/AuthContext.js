import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    sessid: null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider 
            value={{
                sessid: state.sessid, 
                isFetching: state.isFetching, 
                error: state.error,
                dispatch
            }} 
        >{children}</AuthContext.Provider>
    )
}