import React, { Component, Fragment } from 'react';
import './css/App.css';
import ReactGA from 'react-ga';
import stars from './stars.mp4';
import { Route, Link, Switch  } from 'react-router-dom';
import { Tab, Tabs, Typography} from '@material-ui/core';
import NavBar from './NavBar'
import Main from './Main';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <div>
    <Route path="/" render={({location}) => (
    <Fragment>
    <video className="myVideo" loop autoPlay muted>
     <source src={stars} type='video/mp4' />
     <source src={stars} type='video/ogg' />
     Your browser does not support the video tag.
   </video>
    <div>
    <NavBar />
    </div>
    <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    </Switch>
    </Fragment>
    )}
    />
    </div>
  );
}

export default App;
