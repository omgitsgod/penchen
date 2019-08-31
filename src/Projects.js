import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'
import { Grid , Paper} from '@material-ui/core'
import politic from './politicScreenshot.png'
import reppit from './reppitScreenshot.png'
import metrognome from './metrognomeScreenshot.png'
import forecast from './forecastScreenshot.png'
import pictopal from './pictopalScreenshot.png'
import fluxunit from './fluxunitScreenshot.png'
import equanimity from './equanimityScreenshot.png'

class Projects extends Component {



  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/projects');
    return (
      <div>
      <br />
      <br />
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Paper >
            <Typography gutterBottom variant="h3">
            PictoPal
            </Typography>
            <br/>
            <a href="https://pictopal.penchenski.com" target="blank">
            <img src={pictopal} className="myImage" alt="PictoPal Screenshot"/>
            </a>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
            <Typography gutterBottom variant="h3">
            fluxunit
            </Typography>
            <br/>
            <a href="https://www.npmjs.com/package/fluxunit" target="blank">
            <img src={fluxunit} className="myImage" alt="fluxunit Screenshot"/>
            </a>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
            <Typography gutterBottom variant="h3">
            Equanimity Yoga
            </Typography>
            <br/>
            <a href="https://equanimityyoganyc.com" target="blank">
            <img src={equanimity} className="myImage" alt="Equanimity Screenshot"/>
            </a>
            </Paper>
          </Grid>
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
          <Grid item xs={6}>
            <Paper>
            <Typography gutterBottom variant="h3">
            Metrognome
            </Typography>
            <br/>
            <a href="https://metrognome.penchenski.com" target="blank">
            <img src={metrognome} className="myImage" alt="Metrognome Screenshot"/>
            </a>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
            <Typography gutterBottom variant="h3">
            Feelslike Forecast
            </Typography>
            <br/>
            <a href="http://forecast.penchenski.com" target="blank">
            <img src={forecast} className="myImage" alt="Forecast Screenshot"/>
            </a>
            </Paper>
          </Grid>
          </Grid>
        </div>
    );
  }
}

export default Projects;
