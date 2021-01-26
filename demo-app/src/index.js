import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import muiTheme from './themes';

const init = () => (
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(init(), document.getElementById('root'));

