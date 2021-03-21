import React from 'react';
import ReactDOM from 'react-dom';

//Components 
import App from './App';

// Theme
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'


const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  root
);

