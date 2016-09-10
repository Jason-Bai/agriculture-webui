import React, { Component, PropTypes } from 'react'

export default class Navbar extends Component {
  render() {
    
    return (
      <a href="#">
        <i className="fa fa-dashboard"></i><span>Dashboard</span><i className="fa fa-angle-left pull-right"></i>
      </a>
    )
  }
}

