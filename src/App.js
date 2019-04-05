import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ReactGA from 'react-ga'
import stars from './stars.mp4'
import { Route  } from 'react-router-dom'
import Main from './Main'

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
      <video className="myVideo" loop autoPlay muted>
       <source src={stars} type='video/mp4' />
       <source src={stars} type='video/ogg' />
       Your browser does not support the video tag.
     </video>
       <Route exact path="/" component={Main} />

      </div>
    );
  }
}

export default App;
