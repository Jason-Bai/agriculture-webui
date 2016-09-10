import React, { Component, PropTypes } from 'react'

export default class NotFound extends Component {
  componentDidMount() {
    setTimeout(function() {
      console.log('redirect to /')
    }, 2000);
  }
  render() {
    return (
      <div>
        Not found!
      </div>
    )
  }
}