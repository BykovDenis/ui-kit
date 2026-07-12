# @dbykov-ui-kit/core

React UI Kit components. Each component is consumed via a subpath import:

```tsx
import Button from '@dbykov-ui-kit/core/button';
import Select from '@dbykov-ui-kit/core/select';
```

## Getting started

```
npm i @dbykov-ui-kit/core
```

### 1. Pick a theme

Use a built-in theme or define your own (`ITheme` is the contract):

```tsx
import { themes } from '@dbykov-ui-kit/core/styles';
import type { ITheme } from '@dbykov-ui-kit/core/styles';

// built-in: themes.light / themes.dark
const myTheme: ITheme = {
  ...themes.light,
  palette: {
    ...themes.light.palette,
    primary: {
      main: 'rgb(139, 88, 203)',
      light: '#A47BE0',
      lighter: '#C8A9F0',
      moreLighter: '#E7D9FA',
      bestLighter: '#F4EEFD',
    },
  },
};
```

Per-component behavior is customized through the `components` key of the
theme object, e.g. `theme.components.Input.delayDebounce` or
`theme.components.Select.textAlign`.

### 2. Mount the provider at the application root

```tsx
import { ThemeProvider, themes } from '@dbykov-ui-kit/core/styles';

<ThemeProvider value={themes.dark}>
  <App />
</ThemeProvider>
```

Components read the theme with the `useTheme()` hook — your own components
can too:

```tsx
import { useTheme } from '@dbykov-ui-kit/core/styles';

const Badge = () => {
  const theme = useTheme();
  return <span style={{ color: theme.palette.primary.main }}>new</span>;
};
```

Without a provider components render with the built-in light theme.

## Legacy bootstrap (deprecated)

Older applications call `getNewReactThemeContext(theme)` once at startup and
mount the returned context's Provider:

```tsx
// deprecated — use <ThemeProvider> instead
import getNewReactThemeContext from '@dbykov-ui-kit/core/styles';

export const ReactThemeContext = getNewReactThemeContext(defaultTheme);

<ReactThemeContext.Provider value={actualTheme}>
  <App />
</ReactThemeContext.Provider>;
```

This keeps working (the returned context **is** the shared `ThemeContext`),
but the shim is deprecated and will be removed in `@dbykov-ui-kit/core` 1.0.0.
Migrate by replacing the bootstrap call with `<ThemeProvider>` and any direct
`useContext(ReactThemeContext)` reads with `useTheme()`.
