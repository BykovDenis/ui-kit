import React from 'react';

import IThemes from '../types/ithemes';

export const themes: IThemes = {
  light: {
    palette: {
      primary: {
        main: '#42a5f5',
      },
      secondary: {
        main: '#ff1744',
      },
      baseButtonFontColor: '#ffffff',
      baseFontColor: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: '14px',
  },
  dark: {
    palette: {
      primary: {
        main: '#42a5f5',
      },
      secondary: {
        main: '#ff1744',
      },
      baseButtonFontColor: '#333333',
      baseFontColor: '#ffffff',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: '14px',
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
