import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import black from '@material-ui/core/colors/common';
import grey from '@material-ui/core/colors/grey';
import { getLuminance } from '@material-ui/core/styles/colorManipulator';

const primaryColor = blue[400];
const lightPrimaryColor = blue[300];
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
  /* Стили для справочников */
  directoryContainer: {
    marginLeft: '24px',
    marginRight: '24px',
    overflow: 'auto',
  },
  directoryPageTitle: {
    fontSize: '24px',
    padding: 0,
    marginBottom: '20px',
    marginTop: '20px',
    marginRight: '20px',
  },
  /* */
  errorMessage: {
    color: secondaryColor,
    fontWeight: '900',
    fontSize: '12px',
    lineHeight: 1.33,
    minHeight: '60px',
  },
  inputItem: {
    marginBottom: 0,
    paddingTop: '5px',
    marginTop: '25px',
    '&:focus label': {
      color: primaryColor,
    },
    '&:active label': {
      color: primaryColor,
    },
    '&:hover label': {
      color: primaryColor,
    },
    '& div::after': {
      backgroundColor: primaryColor,
    },
    '& p': {
      position: 'absolute',
      top: '50px',
    },
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
      main: primaryColor,
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
    margin: '10px 20px 10px',
  },
  pagePartTitleH1: {
    margin: '20px',
    marginLeft: 0,
    marginTop: '10px',
    fontSize: '28px',
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
    display: 'flex',
    top: '10px',
    bottom: '10px',
    right: '10px',
    left: '10px',
    minHeight: '85vh',
    minWidth: '1120px',
    borderRadius: 0,
    boxSizing: 'border-box',
    padding: '5px 0 5px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowX: 'auto',
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
  tableContainer: {
    overflow: 'auto',
    position: 'absolute',
    top: '145px',
    bottom: '20px',
  },
  table: {
    minWidth: '1120px',
    backgroundColor: '#ffffff',
    borderCollapse: 'collapse',
    fontSize: '12px',
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
      backgroundColor: blue[50],
    },
    '&:nth-of-type(even)': {
      backgroundColor: blue[100],
    },
  },
  tableRowHeader: {
    backgroundColor: lightPrimaryColor,
  },
  tableCellHeader: {
    '& span': {
      color: '#ffffff',
    },
    position: 'sticky',
    top: 0,
    backgroundColor: lightPrimaryColor,
    textAlign: 'center',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontWeight: '900',
    color: '#ffffff',
    wordBreak: 'initial',
    wordWrap: 'break-word',
  },
  tableCellFooter: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: 'white',
    textAlign: 'left',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontWeight: '900',
    whiteSpace: 'nowrap',
  },
  tableCell: {
    color: '#333333',
    fontSize: 'inherit',
    paddingLeft: '10px',
    paddingRight: '10px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  tableCellNoStyled: {
    border: 'none',
    padding: 0,
    margin: 0,
    '&:last-child': {
      padding: 0,
      margin: 0,
    },
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
    '& input': {
      textAlign: 'right',
    },
  },
  directoryFormItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  directoryFormSelect: {
    textAlign: 'right',
    marginTop: '20px',
  },
  directoryFormDate: {
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
  noDataContainer: {
    display: 'block',
    textAlign: 'center',
    fontWeight: 900,
  },
  typography: {
    useNextVariants: true,
  },
  list: {
    fontSize: '12px',
  },
});

export default muiTheme;
