import IPalette from './ipalette';

interface ITheme {
  baseFontSize: number;
  fontFamily: string;
  mainBlackColor: string;
  mainGrayColor: string;
  mainWhiteColor: string;
  palette: IPalette;
  mainBackgroundColor: string;
}

export default ITheme;
