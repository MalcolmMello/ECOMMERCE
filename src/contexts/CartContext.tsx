import { createContext, useReducer } from "react";
import { CartType, cartInitialState, cartReducer } from '../reducers/CartReducer'
import { reducerActionTypes } from "../types/reducerActionTypes";


type initialStateType = {
    cart: CartType,
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    cart: cartInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionTypes) => ({
    cart: cartReducer(state.cart, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}