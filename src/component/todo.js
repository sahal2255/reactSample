import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <h1>Todo component</h1>
        <h2>{this.props.sendingData}</h2>
        
      </div>
    )
  }
}
