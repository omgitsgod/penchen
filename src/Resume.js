import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import superman from './Superman-cutout.png';
import './App.css';
import ReactGA from 'react-ga'
import { Typography } from '@material-ui/core'
import  { Document, Page } from 'react-pdf';
import resume from './resume.pdf'
import { Grid , Paper} from '@material-ui/core'

class Resume extends Component {

  state = {
    numPages: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/resume');
    return (
      <Grid container spacing={24}>
       <Grid item xs={12}>
       <Document file={resume}

                 noData={<h4>Please select a file</h4>}>
         <Page pageNumber={1} />
       </Document>
       </Grid>
       </Grid>
    );
  }
}

export default Resume;
