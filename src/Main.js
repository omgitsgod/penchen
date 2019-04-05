import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'

class Main extends Component {



  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
    return (
      <div className="App">

        <header className="App-header">

          <img src={superman} className="App-logo" alt="logo" />
          <br/>
          <Typography variant='display3' align='center' gutterBottom>
          Hello there, I'm Ryan!
          </Typography>
          <br/>
          <Typography variant='p' align='center' gutterBottom>
          Full-Stack Software Engineer | Giant | Physics Enthusiest
          </Typography>

        </header>
      </div>
    );
  }
}

export default Main;
