import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'

class Projects extends Component {



  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/projects');
    return (
      <p>Projects</p>
    );
  }
}

export default Projects;
