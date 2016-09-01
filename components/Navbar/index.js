import React, { Component, PropTypes } from 'react'
import Login from '../Login'
import Logout from '../Logout'
import { loginUser, logoutUser } from '../../actions'

export default class Navbar extends Component {
  render() {
    const { isAuthenticated, errorMessage } = this.props
    return (
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">App</a>
            <div className="navbar-form">
              {!isAuthenticated &&
                <Login
                  errorMessage={ errorMessage }
                />
              }
              {isAuthenticated &&
                <Logout />
              }
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}