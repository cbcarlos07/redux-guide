

import rootReducer from './root-reducer'
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'



const store = configureStore({
    reducer: rootReducer,
    middleware: [logger]
})

//const store = createStore(rootReducer, applyMiddleware(logger))

export default store