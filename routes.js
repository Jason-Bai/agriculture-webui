import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import Login from './containers/Login'
import Welcome from './containers/Welcome'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route onEnter={requireLogin}>
      <Route path="/welcome" component={Welcome} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
)