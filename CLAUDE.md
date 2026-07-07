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

### Theme system (shared React Context)

A single `ThemeContext` lives in `core/packages/styles/src/theme-context.tsx`. The styles package is **external** in every component bundle (see Build below), so this module is evaluated once per application and every component gets the same context identity. Components read the theme with `useTheme()`; the recommended app setup is a provider:

```tsx
import { ThemeProvider, themes } from '@dbykov-ui-kit/core/styles';

<ThemeProvider value={themes.dark}>
  <App />
</ThemeProvider>
```

Backwards compatibility (kept intentionally, do not remove without a major release):

- `getNewReactThemeContext(theme)` / `getNewReactIconContext(config)` are compat shims: they set the fallback theme/config, assign the render-prop consumer to `globalThis` (previously published bundles read it there), and return the shared context.
- Old apps call `useContext(getNewReactThemeContext(theme))` **without mounting a Provider** — that worked because the old API created the context with the theme as its default value. The context default is therefore a Proxy forwarding property reads to the mutable fallback theme (`theme-context.tsx`); `useTheme()` detects it by identity.
- Components without any provider render with the fallback (light) theme; they do **not** return `null`.

Built-in light/dark themes live in `core/packages/styles/src/themes.ts`; the `ITheme` interface in `core/packages/styles/types/` is the contract. Per-component behavior can be customized through the `components` key of the theme object (e.g. `theme.components.Input.delayDebounce`).

### Styled-components wrapper

Components import `styled` from `@dbykov-ui-kit/styles`, **not** from styled-components directly. The wrapper (`core/packages/styles/src/styled.ts`) is a Proxy that applies `shouldForwardProp` based on `@emotion/is-prop-valid`, so style props (`backgroundColor`, `isOpen`, …) are not rendered into DOM attributes. Custom `on*` callback props pass the filter — keep them out of prop spreads onto styled elements. The wrapper uses the *named* `styled` import: the default export is not callable under native node ESM (SSR).

### Build (rollup externals and relative dist paths)

`core/packages/rollup.config.prod.js` treats `react`, `react-dom`, `styled-components` and all `@dbykov-ui-kit/*` imports as external, rewriting the latter to relative sibling-dist paths (`../../../styles/dist/esm/index.js`). That is what makes the shared context a true singleton, and the paths resolve both in the workspace and inside the published tarball. Shared dirs without a package.json (`helpers/`, `enums/`, `constants/`, `types/`, `portal/`, `icons-components/`, `customs-styled-components/`) are intentionally bundled into each component (pure, stateless code only — no module state there).

### Icon package (`icon/`)

Renders SVGs via an `<image>` element inside an inline `<svg>` with a color filter. Icons are resolved by pathname + name + `.svg`. Like core components, it reads `globalThis.ReactIconContextConsumer` to get the icon directory path. SVGs live in `icon/src/24x24/` and `icon/src/36x36/` (two sizes).

### Publishing

Individual `@dbykov-ui-kit/<component>` packages are **not** published to npm. Everything ships inside the single `@dbykov-ui-kit/core` tarball and is consumed via subpaths (`@dbykov-ui-kit/core/button`); `.npmignore` keeps only `dist/` and `package.json` per component. `@dbykov-ui-kit/icon` is published separately (two bundles: `.` and `./styles`, the latter importing the shared IconContext from the former via relative dist paths).

Publish with `npm publish --access public` from `core/packages/` and `icon/` — **not** from `core/` (that manifest is the private dev root). Watch out for a stale `core/packages/.npmrc`: the Jenkins publish stage writes a token file there, and an expired one causes a confusing 404 on PUT. After publishing, bump `demo-app/package.json` + lockfile to the new versions, otherwise the CI e2e stage installs the old pinned versions and fails.
