import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGithubCircle, mdiMedium, mdiEmailOutline, mdiStackOverflow } from '@mdi/js'

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
          Full-Stack Software Engineer | Physics Enthusiast | Lover Of Puzzles
          </Typography>
          <br />
          <br />
          <div className="center">
          <a href="https://www.linkedin.com/in/penchenski/" target="blank">
          <Icon path={mdiLinkedinBox}
            size={3}

            color="white"
            />
          </a>
          <a href="https://github.com/omgitsgod/" target="blank">
          <Icon path={mdiGithubCircle}
            size={3}

            color="white"
            />
          </a>
          <a href="mailto:rpenchenski@gmail.com" target="blank">
          <Icon path={mdiEmailOutline}
            size={3}

            color="white"
            />
          </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Main;
