import React, { Component } from 'react';
import { noop } from 'node-noop';

import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar onSearch={noop} />
      </div>
    );
  }
}

export default App;
