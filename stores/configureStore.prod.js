import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import api from '../middleware/api'
import rootReducer from '../reducers'


//applyMiddleware(thunk, api)

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}