import {ITheme} from '@dbykov-ui-kit/core/styles';

const theme: ITheme = {
  palette: {
    primary: {
      main: 'rgb(139, 88, 203)',
      light: 'rgba(139, 88, 203, 0.6)',
      lighter: 'rgba(139, 88, 203, 0.3)',
      moreLighter: 'rgba(139, 88, 203, 0.15)',
      bestLighter: 'rgba(139, 88, 203, 0.05)',
    },
    secondary: {
      main: 'rgb(229, 72, 77)',
      light: 'rgba(229, 72, 77, 0.6)',
      lighter: 'rgba(229, 72, 77, 0.3)',
      moreLighter: 'rgba(229, 72, 77, 0.15)',
      bestLighter: 'rgba(229, 72, 77, 0.05)',
    },
    baseButtonFontColor: '#ffffff',
    baseFontColor: '#333333',
    baseFontColorOpacity05: 'rgba(51, 51, 51, 0.5)',
    baseFontColorInverted: '#333333',
  },
  fontFamily: 'Roboto, Arial, sans-serif',
  baseFontSize: 14,
  baseFontWeight: 400,
  mainBlackColor: 'rgba(0,0,0,0.85)',
  mainGrayColor: '#e3e3e3',
  mainWhiteColor: '#ffffff',
  mainBackgroundColor: '#ffffff',
  inactiveBackgroundColor: '#e3e3e3',
  inactiveColor: '#b3b3b3',
  mainOutlinedColor: 'rgba(0, 0, 0, 0.6)',
  mainOutlinedHoverColor: 'rgba(0, 0, 0, 0.4)',
  h1FontSize: 28,
  h2FontSize: 24,
  h3FontSize: 20,
  h4FontSize: 18,
  h5FontSize: 16,
  h6FontSize: 14,
  components: {
    Select: {
      textAlign: 'center',
    },
    Datepicker: {
      isIconCanBeTodaySelected: false,
    },
    Input: {
      delayDebounce: 5000,
    },
  },
};

export default theme;
