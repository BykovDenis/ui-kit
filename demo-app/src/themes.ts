import ITheme from '@sber-risks-ui/styles/types/itheme';

const theme: ITheme = {
  palette: {
    primary: {
      main: 'rgb(58,132,166)',
      light: 'rgba(58,132,166, 0.6)',
      lighter: 'rgba(58,132,166, 0.3)',
      moreLighter: 'rgba(58,132,166, 0.15)',
      bestLighter: 'rgba(58,132,166, 0.05)',
    },
    secondary: {
      main: 'rgb(246, 10, 10)',
      light: 'rgba(246 ,10, 10, 0.6)',
      lighter: 'rgba(246, 10, 10, 0.3)',
      moreLighter: 'rgba(246, 10, 10, 0.15)',
      bestLighter: 'rgba(246, 10, 10, 0.05)',
    },
    baseButtonFontColor: '#ffffff',
    baseFontColor: '#333333',
  },
  fontFamily: 'Roboto, Arial, sans-serif',
  baseFontSize: 14,
  mainBlackColor: 'rgba(0,0,0,0.85)',
  mainGrayColor: '#e3e3e3',
  mainWhiteColor: '#ffffff',
  mainBackgroundColor: '#ffffff',
};

export default theme;
