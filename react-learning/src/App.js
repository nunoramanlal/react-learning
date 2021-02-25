import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Max2', age: 3}
    ]
  };
//when state changes, component is re-rendered

  switchNameHandler = (newName) => {
    //this.state.persons[0].name = "asdfasd"; wont work
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Max2', age: 3}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 3}
      ]
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>we</p>
        <button
          style = {style}
          onClick={() => this.switchNameHandler('NewName')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'NewName2')}
          changed = {this.nameChangedHandler}>My Hobbies: Tennis</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app'))
  }
}

export default App;
