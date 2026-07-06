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
