import ITheme from '../types/itheme';
import ThemeContext, { setFallbackTheme, ThemeConsumer } from './theme-context';

declare global {
  // eslint-disable-next-line no-var
  var ReactThemeContextConsumer: typeof ThemeConsumer | undefined;
  // eslint-disable-next-line no-var
  var ReactThemeContext: typeof ThemeContext | undefined;
}

// Backwards-compatible bootstrap: older apps call this once at startup and
// mount <ReturnedContext.Provider value={theme}>. The returned context is the
// shared ThemeContext, so both the old globalThis path and the new useTheme()
// path see the same theme.
/**
 * @deprecated Mount `<ThemeProvider value={theme}>` at the application root
 * and read the theme with `useTheme()` instead. This shim (and the globalThis
 * registry it maintains) will be removed in @dbykov-ui-kit/core 1.0.0.
 */
function getNewReactThemeContext(theme?: ITheme): typeof ThemeContext {
  if (theme) {
    setFallbackTheme(theme);
  }
  globalThis.ReactThemeContextConsumer = ThemeConsumer;
  globalThis.ReactThemeContext = ThemeContext;
  return ThemeContext;
}

export { themes } from './themes';
export { default as ThemeContext, ThemeProvider, ThemeConsumer, useTheme, setFallbackTheme } from './theme-context';
export { default as styled } from './styled';
export default getNewReactThemeContext;
