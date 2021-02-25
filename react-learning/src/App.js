import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Max2', age: 3}
    ]
  };
//when state changes, component is re-rendered

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = persons;

    this.setState({ persons: persons});
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons; this will make persons point to the original state
    //const persons = this.state.persons.slice(); this creates a copy of the state
    const persons = [...this.state.persons]; // equivalente to slice approach
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                click = {() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div>
        );
    };

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is working</p>
        <button
          style = {style}
          onClick={ this.togglePersonHandler}>Toogle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app'))
  }
}

export default App;
