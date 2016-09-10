import React, { Component, PropTypes } from 'react'

import Logo from '../Logo'
import Navbar from '../Navbar'
import Logout from '../Logout'

import { logoutUser } from '../../actions'

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Logo />
        <Navbar />
      </header>
    )
  }
}