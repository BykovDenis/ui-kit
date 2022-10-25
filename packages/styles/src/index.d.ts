import IThemes from '../types/ithemes'
import ITheme from '../types/itheme';
import getNewReactThemeContext from './index';
import rgbToRgba from '../../helpers/rgb-to-rgba';
import hexToRgba from '../../helpers/hex-to-rgba';

declare const themes: IThemes;
declare const ReactThemeContextConsumer

export { themes, ITheme, IThemes, ReactThemeContextConsumer, rgbToRgba, hexToRgba }
export default getNewReactThemeContext;

