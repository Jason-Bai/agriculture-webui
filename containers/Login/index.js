import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    event.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.pass.value
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: password1) <br />
        <button type="submit">login</button>
        {this.state.error && (
          <p>Bad login information</p>
        ) }
      </form>
    )
  }
}

/*
Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { user } = state.auth
  return {
    user
  }
}

export default connect(mapStateToProps)(Login)
*/

export default Login