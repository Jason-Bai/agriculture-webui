import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.1
        </div>
        <strong>Copyright &copy; 2014-2016 <a href="javascript:void(0)">Agricutlure.Inc</a>.</strong> All rights reserved.
      </footer>
    )
  }
}