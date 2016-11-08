import React, { Component } from 'react'
import './App.css'

import LogInForm from './LogInForm'

class App extends Component {
  render() {
    return (
      <div className="splash-background">
        <LogInForm />
      </div>
    );
  }
}

export default App;