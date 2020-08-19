import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: 'Frankenstein',
          id: 'q1w2'
        },
        {
          name: 'Dracula',
          id: 'q3q4',
        },
        {
          name: 'Zombie',
          id: 'q5q6'
        },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monster.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default App;
