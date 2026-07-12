# CHANGELOG

## v 0.2.0
### Features
- Initial public release. Includes: Button, Checkbox, Datepicker, Divider,
  FileUploader, FlexContainer, FormControl, GridContainer, IconButton, Input,
  Label, List, ListItem, MultiSelect, Popup, ProgressBar, Radio, Select,
  StickyBottomPanel, Switcher, Tab, Tabs, Table, TextField, Typography
- Table columns names component
- Progress-bar component
- Tabs component
- Divider component
- FlexContainer component
- GridContainer component
- FileUploader component
- Popup component
- Regular expression support for Select, TextField, Input
- Error state for all interactive components
- ReadOnly property for Input, TextField, Select, Radio, Checkbox, Switcher
- React SSR support
- Datepicker: Portal dropdown, mask format, min/max date, locale, onBlur, onInput
- Select: Portal dropdown, scroll to selected, create new value, disabled state
- Multiselect: Portal dropdown, custom default visible elements, external filter change
- Input: debounce mechanic, hide spinbox for type="number"
- Typography: variants H1–H6, Phrase; padding/margin properties
- ListItem: disabled state, selected state
- Switcher: colorTheme, unique radio name, height attribute
- ProgressBar: disable status, half-value rendering
- Button: justifyContent, textAlign, fontFamily props
- Storybook: migrated to Vite builder, updated to v8

### Bugfix
- TableCell width attributes
- Select: filter for large sequences, disabled dropdown
- Datepicker: date validation, today/minDate/maxDate logic, February typo
- Radio, Checkbox: disable styles for light theme
- IconButton: text variant color rendering
- ProgressBar: replaced `<p>` with `<div>`

## v 0.2.5
### Features
- File Uploader added to deploy
- Unit tests and e2e tests added

## v 0.2.6
### Features
- Add support React SSR mode

## v 0.2.7
### Features
- Refactoring set context

## v 0.3.0
### Features
- Theming migrated from `globalThis` to a shared React Context: new exports
  `ThemeProvider`, `useTheme`, `ThemeConsumer`, `setFallbackTheme` in `styles`
- `getNewReactThemeContext` kept as a backwards-compatible shim: existing
  bootstrap code and previously published bundles keep working unchanged
- Components without a provider now render with the fallback (light) theme
  instead of returning `null` and logging an error
- Shared packages (`styles` etc.) are no longer bundled into every component:
  cross-package imports are external and resolve to a single module instance

### Bugfix
- CJS entry points in all component manifests pointed to non-existent
  `dist/index.js` (actual output is `dist/cjs/index.js`) — `require()` of any
  component was broken
- `label-interactive` and `warning-panel` were published without `dist` —
  their subpath imports were broken in 0.2.7
- Storybook build: broken CamelCase story imports in List and Popup

## v 0.4.0
### Features
- Style props (`backgroundColor`, `isOpen`, `focusColor`, …) are no longer
  rendered into DOM attributes: `styled` is wrapped with a `shouldForwardProp`
  filter based on `@emotion/is-prop-valid` (new runtime dependency)
- `styles` exports the wrapped `styled` for building custom components that
  follow the same prop-filtering rules

### Bugfix
- Select: the option list no longer unmounts/remounts on every state update
  and the filtered list is derived in the same render as the typed text —
  clicks landed on the wrong option while the debounced filter settled;
  the same remount fix applied to both MultiSelect variants
- Select: removed a setState call inside the render of the option list
  (update-during-render)
- Prop updates after mount now apply in Button, IconButton, Switcher,
  Checkbox, Radio, ListItem, StickyBottomPanel, MultiSelect, Datepicker,
  TableColumnsVisible and Input — these components froze the initial value
  of several props in state (`colorTheme`, `variant`, `disabled`, `isOpen`,
  `panelAlign`, `isVisibleTextUnderline`, `isNotRunDebounce`, `locale`, …)
- styled-components is a single copy again for consumers who install the
  library next to styled-components 6.4.x

## v 0.5.0
### Features
- Select implements the ARIA combobox pattern: the input exposes
  `role="combobox"` with `aria-expanded` / `aria-controls` /
  `aria-autocomplete` / `aria-activedescendant`, the dropdown is a
  `listbox` of `option`s with `aria-selected`; keyboard navigation with
  ArrowUp/ArrowDown (wrapping), Home/End, Enter and Esc
- MultiSelect: the toggle exposes `aria-expanded`, `aria-haspopup="dialog"`,
  `aria-controls` and an accessible name; the panel is `role="dialog"`;
  the search input and the selected-value remove buttons have accessible
  names
- Datepicker: the calendar popup is `role="dialog"` with a localized
  `aria-label`; day cells expose full-date accessible labels
- Popup: `role="dialog"` with `aria-label`/`aria-labelledby`, focus moves
  into the popup on open and returns to the opener on close; new optional
  `onClose` prop fired on Esc
- `getNewReactThemeContext` is deprecated (JSDoc): mount `<ThemeProvider>`
  at the application root and read the theme with `useTheme()` instead;
  the shim will be removed in 1.0.0. README rewritten around the provider
  API with migration guidance

### Bugfix
- Datepicker and Popup: portal content no longer unmounts/remounts on every
  render (nested component definition) — the same fix Select and MultiSelect
  received in 0.4.0
