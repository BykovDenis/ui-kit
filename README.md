# @dbykov-ui-kit

UI Kit for React applications.  
Includes reusable components and icon system with customizable theme.

---

## 📦 Packages

- `@dbykov-ui-kit/core` — UI components
- `@dbykov-ui-kit/icon` — icon system

---

## 🚀 Installation

```bash
npm install @dbykov-ui-kit/core
npm install @dbykov-ui-kit/icon
```

## ⚡ Usage

Import components

import Button from "@dbykov-ui-kit/core/button";
import Select from "@dbykov-ui-kit/core/select";

## 🎨 Theme setup

UI Kit uses React Context for theme and icons. Mount the providers at the
application root:

```tsx
import { ThemeProvider, themes } from "@dbykov-ui-kit/core/styles";
import { IconProvider } from "@dbykov-ui-kit/icon";

import { themeDark } from "./theme"; // or use the built-in themes.light / themes.dark
import { iconConfig } from "./icon-config";

<ThemeProvider value={themeDark}>
  <IconProvider value={iconConfig}>
    <App />
  </IconProvider>
</ThemeProvider>;
```

Components read the theme with the `useTheme()` hook (available for your own
components too). Without a provider components fall back to the built-in
light theme.

<details>
<summary>Legacy bootstrap (deprecated, removed in core 1.0.0 / icon 2.0.0)</summary>

```tsx
import getNewReactThemeContext from "@dbykov-ui-kit/core/styles";
import getNewReactIconContext from "@dbykov-ui-kit/icon/styles";

export const ReactThemeContext = getNewReactThemeContext(themeDark);
export const ReactIconContext = getNewReactIconContext(iconConfig);

<ReactThemeContext.Provider value={themeDark}>
  <ReactIconContext.Provider value={iconConfig}>
    <App />
  </ReactIconContext.Provider>
</ReactThemeContext.Provider>;
```

Still works — the returned contexts are the same shared contexts the
providers use — but migrate to `<ThemeProvider>` / `<IconProvider>`.

</details>

### 🎨 Theme example

```
import { IThemes } from "@dbykov-ui-kit/core";

export const themeDark: IThemes["dark"] = {
  palette: {
    primary: {
      main: "rgb(139, 88, 203)",
      light: "rgba(139, 88, 203, 0.6)",
      lighter: "rgba(139, 88, 203, 0.3)",
      moreLighter: "rgba(139, 88, 203, 0.15)",
      bestLighter: "rgba(139, 88, 203, 0.05)",
    },
    secondary: {
      main: "rgb(229, 72, 77)",
      light: "rgba(229, 72, 77, 0.6)",
      lighter: "rgba(229, 72, 77, 0.3)",
      moreLighter: "rgba(229, 72, 77, 0.15)",
      bestLighter: "rgba(229, 72, 77, 0.05)",
    },
    baseFontColor: "rgb(227, 227, 227)",
    baseFontColorOpacity05: "rgba(227, 227, 227, 0.5)",
    baseButtonFontColor: "rgb(227, 227, 227)",
  },

  fontFamily: '"SBSansInterface", Arial, sans-serif',
  baseFontSize: 14,
  baseFontWeight: 400,

  mainBackgroundColor: "#333333",
  mainWhiteColor: "#b9b9b9",
  mainGrayColor: "#e3e3e3",

  components: {
    Select: {
      textAlign: "center",
    },
    Datepicker: {
      isIconCanBeTodaySelected: false,
    },
    Input: {
      delayDebounce: 5000,
    },
  },
};
```

## ⚙️ Components customization via theme

```
components?: {
  Select?: {
    textAlign?: "left" | "center" | "right"
  }
  Datepicker?: {
    isIconCanBeTodaySelected?: boolean
  }
  Input?: {
    delayDebounce?: number
  }
}
```

### 👉 This allows project-specific behavior without overriding components.

## 🎯 Features
•	Modular imports (@dbykov-ui-kit/core/button)
•	Fully theme-driven architecture
•	Flexible component overrides via theme
•	Separate icon system
•	SSR-friendly (no hard window usage inside core logic)

## 🧪 Demo

See demo-app folder for full usage examples.

## 📄 License

MIT