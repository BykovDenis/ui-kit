import React from 'react';

import ITheme from '../types/itheme';
import { themes } from './themes';

// Theme used when a component renders without a ThemeProvider above it
// (legacy setups that only call getNewReactThemeContext at bootstrap).
let fallbackTheme: ITheme = themes.light;

export function setFallbackTheme(theme: ITheme): void {
  fallbackTheme = theme;
}

// The old getNewReactThemeContext created the context with the app's theme as
// its default value, so apps read it via useContext without ever mounting a
// Provider. A context default is fixed at creation time, before the app hands
// us its theme — this proxy keeps that pattern working by forwarding property
// reads to whatever the fallback theme currently is.
const defaultThemeValue = new Proxy({} as ITheme, {
  get: (_target, prop) => Reflect.get(fallbackTheme as object, prop),
  has: (_target, prop) => Reflect.has(fallbackTheme as object, prop),
  ownKeys: () => Reflect.ownKeys(fallbackTheme as object),
  getOwnPropertyDescriptor: (_target, prop) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(fallbackTheme as object, prop);
    return descriptor && { ...descriptor, configurable: true };
  },
});

// Single shared context. The styles package is external in every component
// bundle, so this module is evaluated once per application and every
// component gets the same context identity.
const ThemeContext = React.createContext<ITheme>(defaultThemeValue);
ThemeContext.displayName = 'UiKitThemeContext';

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): ITheme {
  const theme = React.useContext(ThemeContext);
  return theme == null || theme === defaultThemeValue ? fallbackTheme : theme;
}

// Render-prop consumer kept for previously published component builds that
// read globalThis.ReactThemeContextConsumer.
export function ThemeConsumer(props: { children: (theme: ITheme) => React.ReactNode }): React.ReactElement {
  return <>{props.children(useTheme())}</>;
}

export default ThemeContext;
