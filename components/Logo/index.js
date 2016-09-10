import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render() {
    return (
      <a href="javascript:void(0)" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
      </a>
    )
  }
}