import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Login extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    const { user, logout } = this.props
    return (
      {!user &&
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="username" placeholder="Enter a username" />
            <button className="btn btn-success" onClick={this.handleSubmit}>Log In</button>
          </form>
        </div>
      }
      {user && 
        <div>
          <p>You are currently logged in as {user.name}.</p>
           <button onClick={logout}>Log Out</button>
        </div>

      }
    )
  }
}


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