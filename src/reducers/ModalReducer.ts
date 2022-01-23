import { reducerActionTypes } from '../types/reducerActionTypes'

export type ModalType = {
    modalopen: boolean
}

export const modalInitialState: ModalType = {
    modalopen: false
}

export const modalReducer = (state: ModalType, action: reducerActionTypes) => {
    switch(action.type) {
        case 'DECIDE_MODAL':
            return{ ...state, modalopen: action.payload.modalopen }
        break
    }

    return state
}