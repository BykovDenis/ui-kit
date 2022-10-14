import IThemes from '../types/ithemes'
import ITheme from '../types/itheme';
import getNewReactThemeContext from './index';

declare const themes: IThemes;
declare const ReactThemeContextConsumer

export { themes, ITheme, IThemes, ReactThemeContextConsumer }
export default getNewReactThemeContext;

