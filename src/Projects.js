import React, { useEffect } from 'react';
import './css/Projects.css';
import WOW from 'wowjs'
import ReactGA from 'react-ga'
import { Grid } from '@material-ui/core'
import MediaCard from './MediaCard'
import Card from './Card'
import politic from './imgs/politicScreenshot.png'
import reppit from './imgs/reppitScreenshot.png'
import metrognome from './imgs/metrognomeScreenshot.png'
import forecast from './imgs/forecastScreenshot.png'
import pictopal from './imgs/pictopalScreenshot.png'
import fluxunit from './imgs/fluxunitScreenshot.png'
import equanimity from './imgs/equanimityScreenshot.png'
import vinyasa from './imgs/vinyasaScreenshot.png'

function Projects() {

  useEffect(() => {
  //  new WOW.WOW().init()
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/projects');
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="gridy">
        <Grid container spacing={24} alignItems="center"
  justify="center">
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1s">
            <Card className="project" name="Vinyasa Flow" img={vinyasa} tech='#React.js #Node.js #MongoDB' link="https://vinyasa.penchenski.com" text="Plan out your yoga classes" git="https://github.com/omgitsgod/vinyasa-front"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.25s">
            <Card className="project" name="PictoPal" img={pictopal} tech='#React.js #Node.js #MongoDB' link="https://pictopal.penchenski.com" text="Drawing app" git="https://github.com/omgitsgod/pictopal-front"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.5s">
            <Card className="project" name="fluxunit" img={fluxunit} tech='#Node.js' link="https://www.npmjs.com/package/fluxunit" text="A simple way to convert units of measurement" git="https://github.com/omgitsgod/fluxunit"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.75s">
            <Card className="project" name="Equanimity Yoga" img={equanimity} tech='#Bootstrap' link="https://equanimityyoganyc.com" text="Homepage for Equanimity Yoga" git="https://github.com/omgitsgod/yoga_2019"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1s">
            <Card className="project" name="politic" img={politic} tech='#React.js #Rails #Postgres' link="https://politic.penchenski.com" text="Find out whats going on in politics" git="https://github.com/omgitsgod/politic-heroku"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.25s">
            <Card className="project" name="Reppit" img={reppit} tech='#React.js #Rails #Postgres' link="https://reppit.penchenski.com" text="Track workouts" git="https://github.com/omgitsgod/reppit-frontend"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.5s">
            <Card className="project" name="Metrognome" img={metrognome} tech='#React.js' link="https://metrognome.penchenski.com" text="Simple React metronome with custom timer" git="https://github.com/omgitsgod/metrognome"/>
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <div data-wow-delay="1.75s">
            <Card className="project" name="Feelslike Forecast" img={forecast} tech='#React.js #Node.js' link="https://forecast.penchenski.com" text="Simple weather app with forecast support by day" git="https://github.com/omgitsgod/feelslike-forecast"/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
