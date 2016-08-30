import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    <div>
      <h1>home page</h1>
      <ul>
        <li><Link to="/login">login</Link></li>
      </ul>
    </div>
  }
}