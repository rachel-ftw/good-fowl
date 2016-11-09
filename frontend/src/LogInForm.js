import React, { Component } from 'react'
import './LogInForm.css'

export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.username});
  }

  handlePass(event) {
    this.setState({password: event.target.username});
  }

  handleSubmit(event) {
    //write some stuff here that puts the posts the form stuff

    console.log('Text field username is: ' + this.state.username + 
      ' pass username is: ' + this.state.password);
  }

  render() {
    return (
      <div className="log-in-box">
        <h1>So much pizza.</h1>
        <h3>it drives you crazy.</h3>
        <p>You only have to log in for more pizza than you could possibly handle.</p>
        <div className="email-pass-form">
          <form action="http://localhost:5000/login" method="post">
            <input type="text"
              placeholder="Username"
              username={this.state.username}
              onChange={this.handleUsername} />
            <input type="text"
              placeholder="Pass"
              password={this.state.password}
              onChange={this.handlePass} />
            <button onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
  )}
}