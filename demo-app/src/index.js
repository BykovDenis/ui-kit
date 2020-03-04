import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './themes';

const init = () => (
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(init(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
