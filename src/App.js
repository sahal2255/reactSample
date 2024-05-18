import './App.css';
import Todo from './component/todo'; // Correct filename and import statement capitalization

import React, { Component } from 'react';

class App extends Component {
  state = {
    myString: 'Hello',
    message: 'Are You Ready',
    success:'how you do'
  }

  handleChange=()=>{
    this.setState({
      myString:'welcome'
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <h1>{this.state.myString}</h1>
        <h2>{this.state.message}</h2>
        <Todo sendingData={this.state.myString} />
        <button onClick={this.handleChange}>change</button>
      </div>
    );
  }
}

export default App;
