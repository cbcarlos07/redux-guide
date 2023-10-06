import userActionsTypes from "./action-types"

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionsTypes.LOGIN:
            return { ...state, currentUser: action.payload}
        case action.type == userActionsTypes.LOGOUT:
            return { ...state, currentUser: null}
        default:
            return state
    }
    

   
}

export default userReducer