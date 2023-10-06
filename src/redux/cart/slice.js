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
            state.products = state.products.map(p => p.id === action.payload ? {...p, quantity: p.quantity + 1 } : p)
        },
        decreaseProductQuantity: (state, action) => {
            state.products = state.products.map(p => p.id === action.payload ? {...p, quantity: p.quantity - 1} : p).filter(p => p.quantity > 0)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(p => p.id !== action.payload)
        }
    }
})

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } = cartSlice

export default cartSlice.reducer