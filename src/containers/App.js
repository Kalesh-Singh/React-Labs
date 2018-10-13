import React, {PureComponent} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);

    this.state = {
      persons: [
        {id: 'asfa1', name: "Max", age: 28},
        {id: 'dhfa2', name: "Manu", age: 26},
        {id: 'eags3', name: "Sarah", age: 27}
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate( nextProps, nextState ) {
  //   console.log('[UPDATE App.js Inside shouldComponentUpdate');
  //   return nextState.persons !== this.state.persons
  //     || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js Inside componentDidUpdate');
  }

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
    // Don't access old state inside setState like this
    // because setState is asynchronous
    /*this.setState({showPersons: !doesShow,
      toggleClicked: this.state.toggleClicked + 1});*/

    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {

    console.log('[App.js] Inside render()')

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated}
      />;

    }

    return (
      <>
        <button onClick={() => {
          this.setState({showPersons: true})
        }}>Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.showPersons}
          login={this.loginHandler}
          click={this.togglePersonsHandler}
        />
        {persons}
      </>
    );

    /*return React.createElement('div', {className: 'App'},
        React.createElement('h1', null, 'Does this work now?'));*/
  }
}

export default withClass(App, classes.App);
