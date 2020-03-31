import React, { Fragment } from 'react';
import './css/App.css';
import stars from './stars.mp4';
import { Route, Switch  } from 'react-router-dom';
import NavBar from './NavBar'
import Main from './Main';
import Projects from './Projects';
import Resume from './Resume';
import resume from './resume.pdf'

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
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path='/dlresume' component={() => window.open(resume)}/>
        </Switch>
      </Fragment>
    )}
    />
    </div>
  );
}

export default App;
