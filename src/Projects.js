import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'
import { Grid , Paper} from '@material-ui/core'
import MediaCard from './MediaCard'
import politic from './imgs/politicScreenshot.png'
import reppit from './imgs/reppitScreenshot.png'
import metrognome from './imgs/metrognomeScreenshot.png'
import forecast from './imgs/forecastScreenshot.png'
import pictopal from './imgs/pictopalScreenshot.png'
import fluxunit from './imgs/fluxunitScreenshot.png'
import equanimity from './imgs/equanimityScreenshot.png'

class Projects extends Component {



  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/projects');
    return (
      <div>
      <br />
      <br />
      <br />
        <div className="gridy">
          <Grid container spacing={24} alignItems="center"
    justify="center">
            <Grid item md={6}>
              <MediaCard name="PictoPal" img={pictopal} link="https://pictopal.penchenski.com" text="Drawing app" git="https://github.com/omgitsgod/pictopal-front"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="fluxunit" img={fluxunit} link="https://www.npmjs.com/package/fluxunit" text="A simple way to convert units of measurement" git="https://github.com/omgitsgod/fluxunit"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="Equanimity Yoga" img={equanimity} link="https://equanimityyoganyc.com" text="" git="https://github.com/omgitsgod/yoga_2019"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="politic" img={politic} link="http://politic.penchenski.com" text="Find out whats going on in politics" git="https://github.com/omgitsgod/politic-heroku"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="Reppit" img={reppit} link="http://reppit.penchenski.com" text="Track workouts" git="https://github.com/omgitsgod/reppit-frontend"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="Metrognome" img={metrognome} link="http://metrognome.penchenski.com" text="Simple React metronome with custom timer" git="https://github.com/omgitsgod/metrognome"/>
            </Grid>
            <Grid item md={6}>
              <MediaCard name="Feelslike Forecast" img={forecast} link="http://forecast.penchenski.com" text="Simple weather app with forecast support by day" git="https://github.com/omgitsgod/feelslike-forecast"/>
            </Grid>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Projects;
