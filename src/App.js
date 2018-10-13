import React, {Component} from 'react';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: 'asfa1', name: "Max", age: 28},
      {id: 'dhfa2', name: "Manu", age: 26},
      {id: 'eags3', name: "Sarah", age: 27}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };


  render() {
    const style = {
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }*/
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };*/
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App Now</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons!
        </button>
        {persons}
      </div>
    );

    /*return React.createElement('div', {className: 'App'},
        React.createElement('h1', null, 'Does this work now?'));*/
  }
}

export default App;
