import React, { Component } from 'react';
import superman from './Superman-cutout.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={superman} className="App-logo" alt="logo" />
          <p>
            for all things penchenski
          </p>
        </header>
      </div>
    );
  }
}

export default App;
