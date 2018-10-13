import React from 'react';
// import Radium from 'radium';
import './Person.css';

const person = (props) => {
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
    /*const style = {
      '@media (min-width: 500px)': {
        width: '450px'
      }
    };*/

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};


export default person;

