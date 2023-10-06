import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsPresent = state.products.some(p => p.id === action.payload.id)
            if( productIsPresent ){
                state.products = state.products.map(p => p.id === action.payload.id ? {... p, quantity: p.quantity + 1} : p)
                return
            }
            state.products = [...state.products, {...action.payload, quantity: 1}]
        },
        increaseProductQuantity: (state, action) => {
            
        }
    }
})

export const { addProduct } = cartSlice