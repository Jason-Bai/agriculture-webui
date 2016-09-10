import React, { Component, PropTypes } from 'react'

export default class Logout extends Component {
  render() {
    const { onLogoutClick } = this.props
    return (
      <a href="javascript:void(0)" onClick={() => onLogoutClick()} className="btn btn-default btn-flat">
        登出
      </a>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}