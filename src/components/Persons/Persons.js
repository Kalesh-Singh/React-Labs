import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {


  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps( nextProps ) {
    console.log('[UPDATE Persons.js Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate( nextProps, nextState ) {
    console.log('[UPDATE Persons.js Inside shouldComponentUpdate');
    return nextProps.persons !== this.props.persons
      || nextProps.changed !== this.props.changed
      || nextProps.click !== this.props.click;
    // return true;
  }


  componentWillUpdate( nextProps, nextState ) {
    console.log('[UPDATE Persons.js Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js Inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] inside render');
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        ref={this.lastPersonRef}
        position={index}
        click={() => this.props.click(index)}
        changed={(event) => this.props.changed(event, person.id)}
        authenticated={this.props.isAuthenticated}
      />;
    });
  }
}


/*const persons = (props) => (
    props.persons.map((person, index) => {
      return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => props.click(index)}
          changed={(event) => props.changed(event, person.id)}/>;
    })
);*/

// export default persons;
export default Persons;
