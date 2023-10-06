import userActionsTypes from "./action-types";

export const loginUser = payload => ({
    type: userActionsTypes.LOGIN,
    payload
  })

  export const logoutUser = () => ({
    type: userActionsTypes.LOGOUT
  })