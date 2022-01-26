import React from 'react';

import IThemes from '../types/ithemes';

export const themes: IThemes = {
  light: {
    palette: {
      primary: {
        main: 'rgb(66, 165, 245)',
        light: 'rgba(66, 165, 245, 0.6)',
        lighter: 'rgba(66, 165, 245, 0.6)',
      },
      secondary: {
        main: 'rgb(255, 23, 68)',
        light: 'rgba(255, 23, 68, 0.6)',
        lighter: 'rgba(255, 23, 68, 0.3)',
      },
      baseButtonFontColor: '#ffffff',
      baseFontColor: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#bdbdbd',
  },
  dark: {
    palette: {
      primary: {
        main: '#42a5f5',
        light: '',
        lighter: '',
      },
      secondary: {
        main: '#ff1744',
        light: '',
        lighter: '',
      },
      baseButtonFontColor: '#333333',
      baseFontColor: '#ffffff',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#bdbdbd',
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
