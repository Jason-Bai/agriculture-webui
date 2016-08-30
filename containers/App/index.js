import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { session } = this.props
    return (
      <div>
        <h1>Hello world!</h1>
        { session.logged && 
          <span>logged</span>  
        }
        {!session.logged &&
          <span>you should log in!</span>
        }
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