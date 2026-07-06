import React from 'react';

import IThemes from '../types/ithemes';
import ITheme from '../types/itheme';

declare const themes: IThemes;
declare const ThemeContext: React.Context<ITheme | null>;
declare const ThemeProvider: React.Provider<ITheme | null>;
declare function useTheme(): ITheme;
declare function setFallbackTheme(theme: ITheme): void;
declare function ThemeConsumer(props: { children: (theme: ITheme) => React.ReactNode }): React.ReactElement;
declare function getNewReactThemeContext(theme?: ITheme): typeof ThemeContext;

export { themes, ITheme, IThemes, ThemeContext, ThemeProvider, ThemeConsumer, useTheme, setFallbackTheme };
export default getNewReactThemeContext;
