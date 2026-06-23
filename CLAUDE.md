# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

Monorepo with three top-level directories:

- `core/` — Component library root. Contains Storybook config, Jest config, Cypress config, and the `packages/` workspace.
- `core/packages/` — One subdirectory per component (e.g. `button/`, `select/`, `datepicker/`), plus shared packages: `styles/`, `enums/`, `helpers/`, `types/`, `constants/`, `utilities/`.
- `icon/` — Standalone `@dbykov-ui-kit/icon` package with its own Rollup build.
- `demo-app/` — Vite + TanStack Router app used to manually test components; consumes published packages from npm.

## Commands

### Core library (`cd core/`)

| Purpose | Command |
|---|---|
| Run Storybook dev server | `npm run storybook` |
| Run all Jest unit tests | `npm test` |
| Run a single test file | `npx jest packages/button/__tests__/button.test.tsx` |
| Build all component packages | `npm run build-packages` (runs `build.sh`) |
| Build one component package | `cd packages/button && npm run build` |
| Cypress E2E (needs demo-app on :3030) | `npm run cypress:run` |
| Cypress component tests | `npm run cypress:run:component` |
| Validate package exports | `npm run lint-package` |
| Full reinstall + build | `npm run install-packages` |

### Icon package (`cd icon/`)

| Purpose | Command |
|---|---|
| Production build | `npm run build` |
| Watch/dev build | `npm run build-dev` |

### Demo app (`cd demo-app/`)

| Purpose | Command |
|---|---|
| Start dev server (port 3030) | `npm start` |
| Production build | `npm run build` |

## Architecture

### Component packages (`core/packages/<component>/`)

Each component is its own npm package (`@dbykov-ui-kit/<component>`, `private: true`). All share a single Rollup config at `core/packages/rollup.config.prod.js` that produces CJS (`dist/index.js`) and ESM (`dist/esm/index.js`) outputs. The entry point is always `src/index.tsx`.

Directory layout per component:
```
<component>/
  src/index.tsx          # component implementation
  src/<component>.styled.tsx  # styled-components styles
  __tests__/             # Jest + @testing-library/react tests
  types/                 # local TypeScript types
  index.ts               # re-exports src/
  index.d.ts             # hand-written type declarations
  package.json           # private, references shared rollup config
```

### Theme system (React Context via `globalThis`)

Components do **not** accept a theme prop directly. Instead, they read from `globalThis.ReactThemeContextConsumer`, which is set by calling `getNewReactThemeContext(theme)` once at application startup. This registers the context globally so every component can consume it without an import chain.

```ts
// Application bootstrap (required before rendering any component)
import { getNewReactThemeContext, getNewReactIconContext } from '@dbykov-ui-kit/core';
const ReactThemeContext = getNewReactThemeContext(myTheme);
const ReactIconContext = getNewReactIconContext(iconConfig);
```

Both contexts must be initialized before rendering components — components return `null` and log an error if the consumer is missing. Built-in light/dark themes live in `core/packages/styles/src/themes.ts`; the `ITheme` interface in `core/packages/styles/types/` is the contract.

Per-component behavior can be customized through the `components` key of the theme object (e.g. `theme.components.Input.delayDebounce`), avoiding the need to override components directly.

### Icon package (`icon/`)

Renders SVGs via an `<image>` element inside an inline `<svg>` with a color filter. Icons are resolved by pathname + name + `.svg`. Like core components, it reads `globalThis.ReactIconContextConsumer` to get the icon directory path. SVGs live in `icon/src/24x24/` and `icon/src/36x36/` (two sizes).

### Publishing

The `core/packages/` workspace is managed with Lerna (`core/lerna.json`). Each component package publishes to npm as `@dbykov-ui-kit/<name>`. The top-level `@dbykov-ui-kit/core` (in `core/packages/package.json`) re-exports the full library via workspaces. The `demo-app` consumes the published npm packages (not local paths).
