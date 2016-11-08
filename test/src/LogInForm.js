import React, { Component } from 'react'
import './LogInForm.css'

export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', password: ''};
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({value: event.target.value});
  }

  handlePass(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log('Text field value is: ' + this.state.value + ' pass value is ' + this.state.password);
  }

  render() {
    return (
      <div className="log-in-box">
        <h1>So much pizza.</h1>
        <h3>it drives you crazy.</h3>
        <p>You only have to log in for more pizza than you could possibly handle.</p>
        <div className="email-pass-form">
          <input type="text"
            placeholder="Email"
            value={this.state.value}
            onChange={this.handleEmail} />
          <input type="text"
            placeholder="Pass"
            password={this.state.password}
            onChange={this.handlePass} />
          <button onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
  )}
}