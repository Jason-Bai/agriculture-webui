import React, { Component, PropTypes } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            <li className="active treeview">
              <a href="/dashboard">
                <i className="fa fa-dashboard"></i><span>Dashboard</span><i className="fa fa-angle-left pull-right"></i>
              </a>
            </li>
            <li className="treeview">
              <a href="/users">
                <i className="fa fa-user"></i>
                <span>用户管理</span>
              </a>
            </li>
            <li className="treeview">
              <a href="/categories">
                <i className="fa fa-files-o"></i>
                <span>分类管理</span>
              </a>
            </li>
            <li className="treeview">
              <a href="/articles">
                <i className="fa fa-file-text-o"></i>
                <span>文章管理</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    )
  }
}