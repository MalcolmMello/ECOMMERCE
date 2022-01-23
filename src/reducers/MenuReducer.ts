import { reducerActionTypes } from '../types/reducerActionTypes'

export type MenuType = {
    open: boolean
}

export const menuInitialState: MenuType = {
    open: false
}

export const menuReducer = (state: MenuType, action: reducerActionTypes) => {
    switch(action.type) {
        case 'UPDATE_MENU':
            return{...state, open: action.payload.open }
        break
    }

    return state
}