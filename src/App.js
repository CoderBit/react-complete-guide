import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max'},
      {name: 'Lily'},
      {name: 'Jack'},
    ],
    otherState: 'some other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName},
        {name: 'Lily'},
        {name: 'Jack'},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max'},
        {name: event.target.value},
        {name: 'Jack'},
      ]
    })
  }

  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello World!!!</h1>
        <button style={style} onClick={() => this.switchNameHandler('Superman')}>Switch Name</button>
        <Person name={this.state.persons[0].name} />
        <Person 
          name={this.state.persons[1].name} 
          click={this.switchNameHandler.bind(this, 'Batman')}
          change={this.nameChangedHandler}>Alan Walker</Person>
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
