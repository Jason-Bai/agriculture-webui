import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Logout from '../Logout'

import { logoutUser } from '../../actions'

import { AdminLTE } from '../../config'

class Navbar extends Component {

  componentDidMount() {

    this.tree('.sidebar')

    if (AdminLTE.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
      this.slimscroll()
    }
    if (AdminLTE.sidebarPushMenu) {
      this.pushMenu()
    }

  }

  tree(menu) {
    var _this = this;

    var animationSpeed = AdminLTE.animationSpeed

    $(document).on('click', menu + ' li a', function (e) {
      var $this = $(this);
      var checkElement = $this.next();

      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {

        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        ul.removeClass('menu-open');
        var parent_li = $this.parent("li");
        checkElement.slideDown(animationSpeed, function () {
          checkElement.addClass('menu-open');
          parent.find('li.active').removeClass('active');
          parent_li.addClass('active');
          _this.fix();
        });
      }
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault();
      }
    });
  }

  fix() {
    var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
    var window_height = $(window).height();
    var sidebar_height = $(".sidebar").height();
    if ($("body").hasClass("fixed")) {
      $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
    } else {
      var postSetWidth;
      if (window_height >= sidebar_height) {
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);
        postSetWidth = window_height - neg;
      } else {
        $(".content-wrapper, .right-side").css('min-height', sidebar_height);
        postSetWidth = sidebar_height;
      }
    }
  }

  slimscroll() {
    $(".navbar .menu").slimscroll({
      height: AdminLTE.navbarMenuHeight,
      alwaysVisible: false,
      size: AdminLTE.navbarMenuSlimscrollWidth
    }).css("width", "100%")
  }

  pushMenu() {

    $("[data-toggle='offcanvas']").on('click', function (e) {

      e.preventDefault();

      let screenSizes = AdminLTE.screenSizes

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
    const { dispatch } = this.props
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
                <span className="label label-success">1</span>
              </a>
              <ul className="dropdown-menu">
                <li className="header">You have 1 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                          <div className="pull-left">
                            <img src={ require('../../styles/img/user2-160x160.jpg') } className="img-circle" alt="User Image" />
                          </div>
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                    </li>
                  </ul>
                </li>
                <li className="footer"><a href="#">See All Messages</a></li>
              </ul>
            </li>
            <li className="dropdown notifications-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-bell-o"></i>
                <span className="label label-warning">1</span>
              </a>
              <ul className="dropdown-menu">
                  <li className="header">You have 1 notifications</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer"><a href="#">View all</a></li>
              </ul>
            </li>
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={ require('../../styles/img/user2-160x160.jpg') } className="user-image" alt="User Image" />
                <span className="hidden-xs">白宇</span>
              </a>
              <ul className="dropdown-menu">
                <li className="user-header">
                  <img src={ require('../../styles/img/user2-160x160.jpg') } className="img-circle" alt="User Image" />
                  <p>
                    白宇
                    <small>网站维护人员</small>
                  </p>
                </li>
                <li className="user-body">
                  空着
                </li>
                <li className="user-footer">
                  <div className="pull-left">
                    <a href="#" className="btn btn-default btn-flat">个人信息</a>
                  </div>
                  <div className="pull-right">
                    <Logout onLogoutClick={ () => dispatch(logoutUser()) }/>
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

function mapStateToProps(state) {
  return {
    dispatch: PropTypes.func.isRequired
  }
}

export default connect(mapStateToProps)(Navbar)