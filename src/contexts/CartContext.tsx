import { createContext, useReducer } from "react";
import { CartType, cartInitialState, cartReducer } from '../reducers/CartReducer'
import { MenuType, menuInitialState, menuReducer } from '../reducers/MenuReducer'
import { ModalType, modalInitialState, modalReducer } from '../reducers/ModalReducer'

import { reducerActionTypes } from "../types/reducerActionTypes";


type initialStateType = {
    cart: CartType,
    menu: MenuType,
    modal: ModalType
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    cart: cartInitialState,
    menu: menuInitialState,
    modal: modalInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: reducerActionTypes) => ({
    cart: cartReducer(state.cart, action),
    menu: menuReducer(state.menu, action),
    modal: modalReducer(state.modal, action)
})

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}