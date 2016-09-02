/*
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { session } = this.props
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
                <Link to="/login">Sign in</Link>
              ) }
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated) </li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { session } = state
  return {
    session
  }
}


export default connect(mapStateToProps)(App)
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'


import Login from '../../components/Login'
import Navbar from '../../components/Navbar'
import Quotes from '../../components/Quotes'

class App extends Component {
  render() {
    const { isAuthenticated, errorMessage } = this.props

    return (
      <div>
         <header className="main-header">
          header
         </header>
         <aside className="main-sidebar">
          aside
         </aside>
        <div className="content-wrapper">
        content
        </div>
        <footer className="main-footer">
        footer
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { isAuthenticated, errorMessage } = state.auth

  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)