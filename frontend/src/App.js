import React, { Component } from 'react'
import './App.css'
import { Link } from "react-router"

// import LogInForm from './LogInForm'

class App extends Component {
  render() {
    return (
      <div>
        <Link to="OrderHome">Order  |</Link> 
        <Link to="ProfileHome">  Profile</Link>

        {this.props.children}
      </div>
    );
  }
}

export default App;