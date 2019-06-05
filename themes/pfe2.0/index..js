import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import black from '@material-ui/core/colors/common';
import grey from '@material-ui/core/colors/grey';
import riskiCommonUITheme from '../../packages/themes/riski-common-ui-theme';

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
  directoryFormInput: {
    ...riskiCommonUIThemeStyles.directoryFormInput,
    justifyContent: 'space-between',
  },
  inputItem: {
    ...riskiCommonUIThemeStyles.inputItem,
    marginTop: '25px',
  },
  list: {
    ...riskiCommonUIThemeStyles.list,
    fontSize: '12px',
  },
  paper: {
    ...riskiCommonUIThemeStyles.paper,
    bottom: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    left: '10px',
    right: '10px',
    top: '10px',
    overflowX: 'auto',
  },
  pageTitle: {
    ...riskiCommonUIThemeStyles.inputItem.pageTitle,
    margin: '10px 20px 10px',
  },
  pagePartTitleH1: {
    ...riskiCommonUIThemeStyles.pagePartTitleH1,
    fontSize: '28px',
    marginLeft: 0,
  },
  paperTradeDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    top: '10px',
    bottom: '10px',
    right: '10px',
    left: '10px',
    marginTop: 0,
    minHeight: '85vh',
    minWidth: '1120px',
    borderRadius: 0,
    boxSizing: 'border-box',
    padding: '5px 0 5px',
  },
  paperTradeVersionDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    top: '10px',
    bottom: '10px',
    right: '10px',
    left: '10px',
    minHeight: '85vh',
    minWidth: '1120px',
    borderRadius: 0,
    boxSizing: 'border-box',
    padding: '5px 0 5px',
    marginTop: 0,
  },
  table: {
    ...riskiCommonUIThemeStyles.table,
    fontSize: '12px',
    minWidth: '1120px',
  },
  tableCell: {
    ...riskiCommonUIThemeStyles.tableCell,
    color: '#333333',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  tableCellHeader: {
    ...riskiCommonUIThemeStyles.tableCellHeader,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  tableCellFooter: {
    ...riskiCommonUIThemeStyles.tableCellFooter,
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  tradeVersionEditRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    maxWidth: '1150px',
    padding: '15px',
    paddingBottom: '30px',
    minWidth: '550px',
    marginBottom: '30px',
  },
});

export default muiTheme;
