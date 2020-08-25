import React, { Component } from 'react';
import CardList from './components/Card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handledChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
