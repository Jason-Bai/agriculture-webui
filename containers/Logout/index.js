import { Component } from 'react'

const auth = require('../../utils/auth')

export default class Logout extends Component {
  componentDidMount() {
    auth.logout()
  }
  
  render() {
    return (
      <p>You are now logged out</p>
    )
  }
}