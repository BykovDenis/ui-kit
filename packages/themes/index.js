import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import black from '@material-ui/core/colors/common';
import grey from '@material-ui/core/colors/grey';
import { getLuminance } from '@material-ui/core/styles/colorManipulator';
import hexToRGB from '../helpers/hex-to-rgb';

const primaryColor = '#569627';
const lightPrimaryColor = '#63ad2d'; // blue[300];
const lighterPrimaryColor = '#ccff99';
const mostLighterPrimaryColor = '#7bd938';
const darkPrimaryColor = black[300];
const secondaryColor = red['A400'];
const lightSecondaryColor = red['A200'];
const darkSecondaryColor = red['A700'];
const primaryFontColor = '#ffffff';
const disabledBackgroundColor = grey[400];

function getContrastText(color, dark, light) {
  return getLuminance(color) <= 0.5 ? dark : light;
}

const muiTheme = createMuiTheme({
  blockTitle: {
    marginTop: '20px',
    marginBottom: '20px',
    marginRight: '20px',
  },
  button: {
    color: primaryFontColor,
    backgroundColor: primaryColor,
    '&:hover': {
      backgroundColor: lightPrimaryColor,
    },
    '&:active': {
      backgroundColor: darkPrimaryColor,
    },
    '&:disabled': {
      color: primaryFontColor,
      backgroundColor: disabledBackgroundColor,
    },
  },
  containerCenter: {
    display: 'flex',
    width: '100%',
    height: '50vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputCheckbox: {
    color: primaryColor,
  },
  directoryContainer: {
    marginLeft: '24px',
    marginRight: '24px',
  },
  directoryPageTitle: {
    fontSize: '24px',
    padding: 0,
    marginBottom: '20px',
    marginTop: '20px',
    marginRight: '20px',
  },
  directorySearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexGrow: 1,
    marginLeft: '40px',
  },
  directorySearchInput: {
    width: '70%',
    marginLeft: '20px',
    marginTop: '0 !important',
  },
  errorMessage: {
    color: secondaryColor,
    fontWeight: '900',
    fontSize: '12px',
  },

  inputItem: {
    marginBottom: 0,
    paddingTop: '5px',
    paddingBottom: '5px',
    '& label': {
      fontWeight: 900,
    },
    '&:focus label': {
      color: primaryColor,
    },
    '&:active label': {
      color: primaryColor,
    },
    '&:hover label': {
      color: primaryColor,
    },
    '& div:after': {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
    },
    '& div:hover:after': {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
    },
    '& div:active:after': {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
    },
    '&:hover div::before': {
      borderColor: primaryColor,
    },
    '& div:hover:before': {
      borderColor: `${primaryColor} !important`,
    },
    '& p': {
      position: 'absolute',
      top: '50px',
    },
    '& input:hover': {
      borderBottom: primaryColor,
    },
  },
  formContainer: {
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '15px 30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },
  formControl: {
    paddingRight: '15px',
    width: '100%',
    '@media (min-width: 768px) and (max-width: 992px)': {
      width: '50%',
    },
    '@media (min-width: 992px)': {
      width: '30%',
    },
  },
  formLabel: {
    color: darkPrimaryColor,
    fontWeight: 900,
  },
  headerButton: {
    color: 'white',
  },
  headerRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '20px',
    minHeight: '56px',
  },
  palette: {
    toolTip: {
      fontSize: '12px',
    },
    link: {
      display: 'block',
      color: 'rgba(0, 0, 0, 0.87)',
      lineHeight: '1.4em',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      borderRadius: '4px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    primary: {
      light: lightPrimaryColor,
      lighter: lighterPrimaryColor,
      main: primaryColor,
      mostLighter: mostLighterPrimaryColor,
      dark: darkPrimaryColor,
      contrastText: 'rgba(0, 0, 0, .87)',
    },
    secondary: {
      light: lightSecondaryColor,
      main: secondaryColor,
      dark: darkSecondaryColor,
      contrastText: getContrastText(secondaryColor, lightSecondaryColor, darkSecondaryColor),
    },
  },
  pageTitle: {
    fontSize: '24px',
    margin: '20px 20px 0',
  },
  pagePartTitleH1: {
    margin: '20px',
    marginTop: '10px',
    fontSize: '32px',
    fontWeight: 700,
  },
  pagePartTitleH2: {
    margin: '20px 20px 0',
    fontSize: '24px',
    fontWeight: 700,
  },
  pagePartTitleH3: {
    margin: '0',
    fontSize: '20px',
    fontWeight: 700,
  },
  paper: {
    backgroundColor: '#eeeeee',
    borderRadius: 0,
    bottom: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    left: '10px',
    minHeight: '85vh',
    padding: '5px 0 5px',
    right: '10px',
    top: '10px',
    overflowX: 'auto',
  },
  paperTradeDetails: {
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
  },
  tableContainer: {
    overflow: 'auto',
    position: 'absolute',
    top: '145px',
    bottom: '20px',
  },
  table: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  tableHead: {
    height: 'auto',
  },
  tableBody: {
    overflow: 'auto',
    fontSize: 'inherit',
  },
  tableRow: {
    cursor: 'pointer',
    fontSize: 'inherit',
    '&:hover > td': {
      transition: 'background-color 0.2s ease-in-out',
      backgroundColor: hexToRGB(mostLighterPrimaryColor, 0.3),
    },
    '&:nth-of-type(even)': {
      backgroundColor: hexToRGB(lighterPrimaryColor, 0.5),
    },
  },
  tableRowHeader: {
    backgroundColor: lightPrimaryColor,
  },
  tableRowFooter: {
    backgroundColor: lightPrimaryColor,
  },
  tableCellHeader: {
    '& span': {
      color: '#ffffff',
    },
    position: 'sticky',
    top: 0,
    backgroundColor: lightPrimaryColor,
    fontSize: 'inherit',
    textAlign: 'center',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontWeight: '900',
    color: '#ffffff',
    wordBreak: 'initial',
    wordWrap: 'break-word',
    zIndex: '10000',
  },
  tableCellFooter: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontWeight: '900',
    whiteSpace: 'nowrap',
  },
  tableCell: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: '#333333',
    fontSize: 'inherit',
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  tabsContainer: {
    /* TODO как будет доступ из API поменять доступ к контейнеру через него */
    /*
    '& > div > div > div': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    }
    */
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: '1.3125rem',
    fontWeight: '500',
    lineHeight: '1.16667em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    marginTop: 0,
    marginBottom: 0,
  },
  tabContainer: {
    padding: 0,
  },
  tradeEditRow: {
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
  usersCreateButton: {
    color: 'white',
  },
  /* directories */
  directoryFormBody: {
    marginBottom: '20px',
  },
  directoryFormLabel: {
    marginRight: '20px',
    minWidth: '150px',
  },
  directoryFormFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  directoryFormInput: {
    textAlign: 'right',
  },
  directoryFormItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  directoryFormSelect: {
    textAlign: 'right',
    marginTop: '20px',
  },
  directoryFormTitle: {
    '& h1': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    '& h2': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    '& h3': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
    },
  },
  link: {
    color: primaryColor,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  typography: {
    useNextVariants: true,
  },
  formSelect: {
    '& input': {
      textAlign: 'right',
    },
    '& div': {
      textAlign: 'right',
    },
  },
});

export default muiTheme;
