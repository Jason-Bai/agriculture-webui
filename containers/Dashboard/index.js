import { Component } from 'react'

export default class About extends Component {
  render() {

    const { token }  = this.props

    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    )
  }
}