import React from 'react';

import ITheme from '../types/itheme';
import { themes } from './themes';

// Single shared context. The styles package is external in every component
// bundle, so this module is evaluated once per application and every
// component gets the same context identity.
const ThemeContext = React.createContext<ITheme | null>(null);
ThemeContext.displayName = 'UiKitThemeContext';

// Theme used when a component renders without a ThemeProvider above it
// (legacy setups that only call getNewReactThemeContext at bootstrap).
let fallbackTheme: ITheme = themes.light;

export function setFallbackTheme(theme: ITheme): void {
  fallbackTheme = theme;
}

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): ITheme {
  return React.useContext(ThemeContext) ?? fallbackTheme;
}

// Render-prop consumer kept for previously published component builds that
// read globalThis.ReactThemeContextConsumer.
export function ThemeConsumer(props: { children: (theme: ITheme) => React.ReactNode }): React.ReactElement {
  return <>{props.children(useTheme())}</>;
}

export default ThemeContext;
