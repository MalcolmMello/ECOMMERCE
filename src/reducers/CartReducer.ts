import { reducerActionTypes } from '../types/reducerActionTypes'

export type CartType = {
    img: string,
    name: string,
    price: number,
    qt: number,
    total: number
}

export const cartInitialState: CartType = {
    img:'',
    name: '',
    qt: 0,
    price: 0,
    total: 0
}

export const cartReducer = (state: CartType, action: reducerActionTypes) => {
    switch(action.type) {
        case 'CREATE_CART':
            return {
                img: action.payload.img,
                name: action.payload.name,
                price: action.payload.price,
                qt: action.payload.qt,
                total: action.payload.total
            }
        break
        case 'UPDATE_CART':
            return{...state, qt: action.payload.qt, total: action.payload.total }
        break
    }

    return state
}