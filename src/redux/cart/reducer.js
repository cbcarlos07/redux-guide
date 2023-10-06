import cartActionTypes from "./action-types"

const initialState = {
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_PRODUCT:
            const productIsPresent = state.products.some(p => p.id === action.payload.id)
            if( productIsPresent ){
                return {
                    ...state, 
                    products: state.products.map(p => p.id === action.payload.id ? {... p, quantity: p.quantity + 1} : p)}
            }
            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}]
            }
        case cartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload)
            }
        case cartActionTypes.INCREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map(p => p.id === action.payload ? {...p, quantity: p.quantity + 1 } : p)
            }
        case cartActionTypes.DECREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map(p => p.id === action.payload ? {...p, quantity: p.quantity - 1} : p).filter(p => p.quantity > 0)
            }
        default:
            return state
            
    }
}

export default cartReducer