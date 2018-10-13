import React from 'react';
import classes from './Cockpit.module.css'
// import Aux from '../../hoc/Aux';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(assignedClasses.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(assignedClasses.bold);
  }

  return (
    <>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.click}>Toggle Persons!
      </button>
      <button onClick={props.login}>Log In</button>
    </>
  );
};

export default cockpit;