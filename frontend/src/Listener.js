import React, { Component } from 'react'
// import Request from 'superagent'
import BeverageRow from './BeverageRow'

export default class Listener extends Component {
  constructor() {
    super()
    this.state = {
      beverages: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    console.log('component mounted')
    const url = 'http://localhost:5000/beverage'

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    fetch( url, fetchIsHappenning )
    .then( data => data.json())
    .then( data => {
      const beverages = []
      data.data.forEach( drink => beverages.push(drink))
      this.setState({
        beverages: beverages
      })
    })
  }

  componentDidMount(){
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  handleSubmit(event) {
    //write some stuff here that puts the posts the form stuff

    console.log('Text field username is: ' + this.state.username + 
      ' pass username is: ' + this.state.password);
  }

  
  render() {
    return(
      <div>
        <form action="http://localhost:5000/login" method="post">
          <BeverageRow beverages={this.state.beverages} />
          <button onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

