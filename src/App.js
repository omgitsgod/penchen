import React, { Component } from 'react';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'

class App extends Component {

  initializeReactGA = () => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
}

  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
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
