import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'
import { Grid , Paper} from '@material-ui/core'
import politic from './politicScreenshot.png'
import reppit from './reppitScreenshot.png'

class Projects extends Component {



  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/projects');
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper >
          <Typography gutterBottom variant="h3">
          politic
          </Typography>
          <br/>
          <a href="https://politic.penchenski.com" target="blank">
          <img src={politic} className="myImage" alt="Politic Screenshot"/>
          </a>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
          <Typography gutterBottom variant="h3">
          Reppit
          </Typography>
          <br/>
          <a href="https://reppit.penchenski.com" target="blank">
          <img src={reppit} className="myImage" alt="Reppit Screenshot"/>
          </a>
          </Paper>
        </Grid>
        </Grid>
    );
  }
}

export default Projects;
