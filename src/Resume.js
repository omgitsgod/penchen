import React, { useEffect } from 'react';
import './css/Resume.css';
import ReactGA from 'react-ga'
import  { Document, Page } from 'react-pdf';
import resume from './resume.pdf'
import { Grid } from '@material-ui/core'

function Resume () {
  useEffect(() => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/resume');
  }, []);

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={24}>
       <Grid item xs={12}>
         <Document file={resume}
          className="pdf"
          noData={<h4>Try again later</h4>}>
           <Page pageNumber={1} />
         </Document>
       </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
