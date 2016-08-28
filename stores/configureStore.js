import { createStore, applyMiddleware, compose } from 'redux';

import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import createLogger from 'redux-logger';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const logger = createLogger();
const history = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(history, logger),
  DevTools.instrument()
)

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
