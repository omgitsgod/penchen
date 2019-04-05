import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { grey, blue, red, green} from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core'
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv'

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: blue,
    error: red,
    success: green,
    type: 'dark'
  },


})

dotenv.config()

ReactDOM.render(
  <Router>
  <MuiThemeProvider theme={theme}>
  <CssBaseline />
  <App />
  </MuiThemeProvider>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
