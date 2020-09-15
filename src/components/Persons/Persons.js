import React from "react";
import Person from './Person/Person';

// Function based component creation
const persons = (props) => props.persons.map((person, index) => {
  return (
    <Person
      name={person.name}
      key={person.id}
      click={() => props.clicked(index)}
      changed={(event) => props.changed(event, person.id)}
    />
  );
});


export default persons;
