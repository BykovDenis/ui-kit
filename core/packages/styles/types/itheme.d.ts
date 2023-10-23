import IPalette from './ipalette';
import { TEXT_ALIGN_CENTER, TEXT_ALIGN_LEFT, TEXT_ALIGN_RIGHT } from '../../constants';

interface ITheme {
  baseFontSize: number;
  baseFontWeight: number;
  fontFamily: string;
  mainBlackColor: string;
  mainGrayColor: string;
  mainWhiteColor: string;
  palette: IPalette;
  mainBackgroundColor: string;
  h1FontSize: number;
  h2FontSize: number;
  h3FontSize: number;
  h4FontSize: number;
  h5FontSize: number;
  h6FontSize: number;
  mainOutlinedColor: string;
  mainOutlinedHoverColor: string;
  inactiveBackgroundColor: string;
  inactiveColor: string;
  components?: {
    Select?: {
      textAlign?: TEXT_ALIGN_CENTER | TEXT_ALIGN_LEFT | TEXT_ALIGN_RIGHT;
    };
  };
}

export default ITheme;
