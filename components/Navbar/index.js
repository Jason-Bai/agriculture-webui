import React, { Component, PropTypes } from 'react'

import { logoutUser } from '../../actions'

import { screenSizes } from '../../config'

export default class Navbar extends Component {

  componentDidMount() {
    this.pushMenu()
  }

  pushMenu() {

    $("[data-toggle='offcanvas']").on('click', function (e) {
      e.preventDefault();

      //Enable sidebar push menu
      if ($(window).width() > (screenSizes.sm - 1)) {
        if ($("body").hasClass('sidebar-collapse')) {
          $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu')
        } else {
          $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu')
        }
      }
      //Handle sidebar push menu for small screens
      else {
        if ($("body").hasClass('sidebar-open')) {
          $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu')
        } else {
          $("body").addClass('sidebar-open').trigger('expanded.pushMenu')
        }
      }

    })
  }

  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
              </a>
            </li>
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-warning">10</span>
              </a>
            </li>
            <li className="dropdown tasks-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-flag-o"></i>
                <span className="label label-danger">9</span>
              </a>
            </li>
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={require('../../styles/img/user2-160x160.jpg')} className="user-image" alt="User Image" />
                <span className="hidden-xs">白宇</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-footer">
                  <div className="pull-left">
                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                  </div>
                  <div className="pull-right">
                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}