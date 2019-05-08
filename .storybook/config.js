import { configure } from '@storybook/react';
import { ThemeProvider } from '../src/theme-provider';

// addon-info
setDefaults({
  inline: true,
  source: false,
  TableComponent
});

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.js$/);

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeProviderDecorator);

configure(loadStories, module);