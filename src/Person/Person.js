import React from "react";
import './Person.css';

// Function based component creation
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};


// Class based component creation
/*
class person extends Component {
  render() {
    return <p>I'm {this.props.name} from class based component.</p>;
  }
}
*/

export default person;
