import React from 'react';
import { styled as baseStyled } from 'styled-components';

import IThemes from '../types/ithemes';
import ITheme from '../types/itheme';

declare const themes: IThemes;
declare const ThemeContext: React.Context<ITheme>;
declare const ThemeProvider: React.Provider<ITheme>;
declare function useTheme(): ITheme;
declare function setFallbackTheme(theme: ITheme): void;
declare function ThemeConsumer(props: { children: (theme: ITheme) => React.ReactNode }): React.ReactElement;
declare function getNewReactThemeContext(theme?: ITheme): typeof ThemeContext;
declare const styled: typeof baseStyled;

export { themes, ITheme, IThemes, ThemeContext, ThemeProvider, ThemeConsumer, useTheme, setFallbackTheme, styled };
export default getNewReactThemeContext;
