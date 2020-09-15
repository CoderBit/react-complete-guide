import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max" },
      { id: "2", name: "Lily" },
      { id: "3", name: "Jack" },
    ],
    otherState: "changed",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
          {persons}
        </div>
    );
  }
}

export default App;
