import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Users from './containers/Users'
import Categories from './containers/Categories'
import Articles from './containers/Articles'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Logout from './components/Logout'

function requireAuth(nextState, replace) {
  const token = localStorage.getItem('id_token')
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
    <Route onEnter={requireAuth} >
     <Route path="users" component={Users} />
     <Route path="categories" component={Categories} />
     <Route path="articles" component={Articles} />
    </Route>
    <Route path="*" component={NotFound} status={404} />
  </Route>
)