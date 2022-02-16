import React from 'react';

import IThemes from '../types/ithemes';

export const themes: IThemes = {
  loanPricing: {
    palette: {
      primary: {
        main: 'rgb(8, 166, 82)',
        light: 'rgba(8, 166, 82, 0.6)',
        lighter: 'rgba(8, 166, 82, 0.3)',
        moreLighter: 'rgba(8, 166, 82, 0.15)',
        bestLighter: 'rgba(8, 166, 82, 0.05)',
      },
      secondary: {
        main: 'rgb(246, 101, 10)',
        light: 'rgba(246 ,101, 10, 0.6)',
        lighter: 'rgba(246, 101, 10, 0.3)',
        moreLighter: 'rgba(246, 101, 10, 0.15)',
        bestLighter: 'rgba(246, 101, 10, 0.05)',
      },
      baseButtonFontColor: '#ffffff',
      baseFontColor: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#bdbdbd',
    mainWhiteColor: '#ffffff',
  },
  light: {
    palette: {
      primary: {
        main: 'rgb(66, 165, 245)',
        light: 'rgba(66, 165, 245, 0.6)',
        lighter: 'rgba(66, 165, 245, 0.3)',
        moreLighter: 'rgba(66, 165, 245, 0.15)',
        bestLighter: 'rgba(66, 165, 245, 0.05)',
      },
      secondary: {
        main: 'rgb(255, 23, 68)',
        light: 'rgba(255, 23, 68, 0.6)',
        lighter: 'rgba(255, 23, 68, 0.3)',
        moreLighter: 'rgba(255, 23, 68, 0.15)',
        bestLighter: 'rgba(255, 23, 68, 0.05)',
      },
      baseButtonFontColor: '#ffffff',
      baseFontColor: '#333333',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#bdbdbd',
    mainWhiteColor: '#ffffff',
  },
  dark: {
    palette: {
      primary: {
        main: '#42a5f5',
        light: '',
        lighter: '',
        moreLighter: '',
        bestLighter: '',
      },
      secondary: {
        main: '#ff1744',
        light: '',
        lighter: '',
        moreLighter: '',
        bestLighter: '',
      },
      baseButtonFontColor: '#333333',
      baseFontColor: '#ffffff',
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    baseFontSize: 14,
    mainBlackColor: 'rgba(0,0,0,0.85)',
    mainGrayColor: '#bdbdbd',
    mainWhiteColor: '#ffffff',
  },
};

const ThemeContext = React.createContext(themes.loanPricing);

export default ThemeContext;
