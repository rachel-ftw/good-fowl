import React, { Component } from 'react'
import Request from 'superagent'

export default class Listener extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentWillMount() {
    const beverageURL = `http://localhost:5000/beverage`

    Request.get(beverageURL).then( response => {
      this.setState({
        beverages: response
      })
    })
    // ( `http://localhost:5000/beverage`, (err, res, body) => {
    //   let result = JSON.parse(body)
    //   console.log("oh hai it's your body",body)

    //   if( this.isMounted() ) {
    //     this.setState(result.data)
    //   }
    // }
    // .bind( this ) )
      // .then(result => {
      //   console.log('hai')
      //   this.setState({beverage:result.json()})
      // })
  }
  
  render() {
    return(
      <div>
        <h3>Beverage:</h3>
        <p>this is your beverages: {this.state.beverage}</p>
        
        )}
      </div>  
    )
  }
}