import React from 'react';
import IThemes from '../types/ithemes'
import ITheme from '../types/itheme';


declare const SberRiskiReactUiProvider: React.FunctionComponent<IRiskiReactUIProvider>;
declare const themes: IThemes;
declare const ThemeContext

export { themes, ThemeContext, ITheme, IThemes }
export default IRiskiReactUIProvider;

