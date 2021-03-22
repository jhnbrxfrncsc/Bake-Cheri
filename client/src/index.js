import React from 'react';
import ReactDOM from 'react-dom';

//Components 
import App from './App';

// Theme
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'

// Redux
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  root
);

