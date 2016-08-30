import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Welcome extends Component {

  render() {
    
    return (
      <div>
        Not found!
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

export default connect(mapStateToProps)(Welcome)