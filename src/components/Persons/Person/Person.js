import React, { Component } from 'react';
// import Radium from 'radium';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux'


class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

/*const person = (props) => {
  // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>

  const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong!');
  // }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};*/


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

// export default Person;
export default withClass(Person, classes.Person);

