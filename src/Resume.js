import React, { useEffect } from 'react';
import './css/Resume.css';
import ReactGA from 'react-ga'
import  { Document, Page } from 'react-pdf';
import { Grid } from '@material-ui/core'

function Resume () {
  useEffect(() => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview('/resume');
  }, []);

  const resume = process.env.PUBLIC_URL + 'resume.pdf'

  return (
    <div className='resume'>
      <br />
      <br />
      <Grid container spacing={24}>
       <Grid item xs={12}>
        <a href={resume} target='blank'>
          <Document file={resume}
            className="pdf"
            width= '5%'
            noData={<h4>Try again later</h4>}>
            <Page pageNumber={1} />
          </Document>
        </a>
       </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
