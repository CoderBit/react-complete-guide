import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max'},
      {name: 'Lily'},
      {name: 'Jack'},
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Maximiliam'},
        {name: 'Lily'},
        {name: 'Jack'},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name}>Alan Walker</Person>
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
