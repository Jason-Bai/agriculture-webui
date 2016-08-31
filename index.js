import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root'
import configureStore from './stores/configureStore'

let store = configureStore()

let history = syncHistoryWithStore(browserHistory, store)

let rootElement = document.getElementById('root')

render(
  <Root store={store} history={history} />,
  rootElement
)