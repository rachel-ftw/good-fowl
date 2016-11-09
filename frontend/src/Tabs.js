import React, { Component } from 'react'
import './Tabs.css'

// Link for creating tabs tutorial.
// got half way through, search _renderTitles, got to just before that 
// https://toddmotto.com/creating-a-tabs-component-with-react/

export default class Tabs extends Component {
  
  displayName: 'Tabs',
  
  getDefaultProps() {
    return {
      selected: 0
    }
  },

  getInitialState() {
    return {
      selected: this.props.selected
    }
  },

  _renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    )
  },

  render() {
    return (
    <div className="tabs">
      {this._renderContent()}
    </div>
  )}
}