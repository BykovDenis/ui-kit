import React from 'react';

export const themes = {
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
  },
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
