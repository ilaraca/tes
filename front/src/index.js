import React from 'react';
import { render } from 'react-dom';
//import axios from 'axios';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5F99B8',
      light: '#7FADC6',
      dark: '#426B80',
      contrastText: '#F2F6FA'
    },
    secondary: {
      main: '#24B4A9',
      light: '#4FC3BA',
      dark: '#197D76',
      contrastText: '#666666'
    }
  }
});

render(
  <MuiThemeProvider theme = {theme}>
        <App />
    </MuiThemeProvider>,
  document.getElementById('app')
);
