import React, { Component } from 'react';
import CardList from './components/Card-list/card-list';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Yihua">
          {this.state.monster.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
