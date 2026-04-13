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

## 🎨 Theme setup (REQUIRED)

UI Kit uses React Context for theme and icons.

```
import {
  getNewReactThemeContext,
  getNewReactIconContext,
} from "@dbykov-ui-kit/core";

import { themeDark } from "./theme";
import { iconConfig } from "./icon-config";

export const ReactThemeContext = getNewReactThemeContext(themeDark);
export const ReactIconContext = getNewReactIconContext(iconConfig);
```

### Wrap your app

```
<ReactThemeContext.Provider>
  <ReactIconContext.Provider>
    <App />
  </ReactIconContext.Provider>
</ReactThemeContext.Provider>
```

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