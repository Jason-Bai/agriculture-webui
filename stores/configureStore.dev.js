import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
//import api from '../middleware/api'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
import api from '../middleware/api'

//applyMiddleware(thunk, createLogger())

//const logger = createLogger()

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware, api),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}