import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Max2', age: 3}
    ]});

//we can use multiple useState when using hooks
  const switchNameHandler = () => {
    //this.state.persons[0].name = "asdfasd"; wont work
    setPersonsState({
      persons: [
        {name: 'Max33', age: 28},
        {name: 'Max2', age: 3}
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <p>we</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Tennis</Person>
    </div>
  );
}

export default app;
