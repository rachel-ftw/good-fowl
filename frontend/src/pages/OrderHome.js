import React, { Component } from 'react'
import './OrderHome.css'

import Listener from '../Listener'

export default class OrderHome extends Component {
  
  render() {
    return (
      <div>
        <h1>Get A pizza </h1>
        <p>You Deserve It</p>
        <p>Order Page</p>
        <Listener />
      </div>
  )}
}