import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import ReactGA from 'react-ga'
import stars from './stars.mp4'
import { Route  } from 'react-router-dom'
import { Tab, Tabs} from '@material-ui/core'
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
      <video className="myVideo" loop autoPlay muted>
       <source src={stars} type='video/mp4' />
       <source src={stars} type='video/ogg' />
       Your browser does not support the video tag.
     </video>
     <Tabs
      value={this.state.tab}
     onChange={this.handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab value={"Projects"} label="Projects" />
      <Tab value={"Home"} label="Home" />
      <Tab value={"Resume"} label="Resume" />

    </Tabs>
       {view}

      </div>
    );
  }
}

export default App;
