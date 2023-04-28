import IPalette from './ipalette';

interface ITheme {
  baseFontSize: number;
  fontFamily: string;
  mainBlackColor: string;
  mainGrayColor: string;
  mainWhiteColor: string;
  palette: IPalette;
  mainBackgroundColor: string;
  h1FontSize: number;
  h2FontSize: number;
  h3FontSize: number;
  mainOutlinedColor: string;
  mainOutlinedHoverColor: string;
  inactiveBackgroundColor: string;
  inactiveColor: string;
}

export default ITheme;
