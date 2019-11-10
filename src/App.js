import React, { Component, Fragment } from 'react';
import './App.css';
import ReactGA from 'react-ga'
import stars from './stars.mp4'
import { Route, Link, Switch  } from 'react-router-dom'
import { Tab, Tabs, Typography} from '@material-ui/core'
import Main from './Main'
import Projects from './Projects'
import Resume from './Resume'

class App extends Component {

  state = {
    tab: "Home"
  }

  handleChange = (event, change) => {
    this.setState({tab: change})
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
}

  render() {
    let view
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/homepage');
    switch(this.state.tab){
      case "Home":
      view = <Main />
      break
      case "Projects":
      view = <Projects />
      break
      case "Resume":
      view = <Resume />
      break
      default:
      view = <Main />
      break
    }
    return (
      <div className="App">
      <Route path="/" render={({location}) => (
      <Fragment>
      <video className="myVideo" loop autoPlay muted>
       <source src={stars} type='video/mp4' />
       <source src={stars} type='video/ogg' />
       Your browser does not support the video tag.
     </video>
     <Tabs
      value={location.pathname}
      onChange={this.handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab value={"/projects"} label=<Typography gutterBottom variant="h6">Projects</Typography> component={Link} to="/projects" />
      <Tab value={"/"} label=<Typography gutterBottom variant="h6">Home</Typography> component={Link} to="/"  />
      <Tab value={"/resume"} label=<Typography gutterBottom variant="h6">Resume</Typography> component={Link} to="/resume" />

    </Tabs>
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
}

export default App;
