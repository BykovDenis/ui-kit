import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import black from '@material-ui/core/colors/common';
import grey from '@material-ui/core/colors/grey';
import riskiCommonUITheme from 'riski-react-ui/themes';

const darkPrimaryColor = black[300];
const darkSecondaryColor = red['A700'];
const disabledBackgroundColor = grey[400];
const primaryColor = blue[400];
const lighterPrimaryColor = blue[100];
const mostLighterPrimaryColor = blue[50];
const lightPrimaryColor = blue[300];
const lightSecondaryColor = red['A200'];
const primaryFontColor = '#ffffff';
const secondaryColor = red['A400'];

const riskiCommonUIThemeStyles = riskiCommonUITheme(
  primaryColor,
  lightPrimaryColor,
  lighterPrimaryColor,
  mostLighterPrimaryColor,
  darkPrimaryColor,
  secondaryColor,
  lightSecondaryColor,
  darkSecondaryColor,
  primaryFontColor,
  disabledBackgroundColor
);

const muiTheme = createMuiTheme({
  ...riskiCommonUIThemeStyles,
});

export default muiTheme;
