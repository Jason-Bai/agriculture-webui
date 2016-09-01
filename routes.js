import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Login from './components/Login'
import Logout from './components/Logout'

/*
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
*/

function requireAuth(nextState, replace) {
  token ='token'
  if (!token) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

module.exports = (
  <Route path="/" component={App}>
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
  </Route>
)