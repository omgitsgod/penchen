import React, { useEffect } from 'react';
import superman from './imgs/Superman-cutout.png';
import './css/Main.css';
import ReactGA from 'react-ga';
import { Typography } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiLinkedinBox, mdiGithubCircle, mdiEmailOutline } from '@mdi/js';

function Main () {
  useEffect(() => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
  }, []);

  return (
    <div className="Main">

      <div className="Main-div">

        <img src={superman} className="superman" alt="Superman" />

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
              className='icon'
              color="white"
              />
          </a>
          <a href="https://github.com/omgitsgod/" target="blank">
            <Icon path={mdiGithubCircle}
              size={3}
              className='icon'
              color="white"
              />
          </a>
          <a href="mailto:rpenchenski@gmail.com" target="blank">
            <Icon path={mdiEmailOutline}
              size={3}
              className='icon'
              color="white"
              />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
