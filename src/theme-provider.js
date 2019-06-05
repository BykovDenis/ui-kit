// src/ThemeProvider.jsx

import React from 'react';
import { MomentUtils, MuiPickersUtilsProvider } from 'material-ui-pickers'  // 'material-ui-pickers/utils/date-fns-utils';
import moment from 'moment-timezone';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import themeCustom from '../packages/themes';

const theme = createMuiTheme(themeCustom);

const ThemeProvider = ({ children }) => (
  <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </MuiPickersUtilsProvider>
);

export default ThemeProvider;
