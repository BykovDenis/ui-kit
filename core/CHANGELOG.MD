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
