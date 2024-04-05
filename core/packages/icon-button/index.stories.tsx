import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import IconButton from './src';
import TIconButton from '../button/types/tbutton';
import getNewReactThemeContext from '../styles/src';
import SunIcon from '../icons-components/24x24/sun-icon';
import { themes } from '../styles/src/themes';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    variant: { control: { type: 'select' }, options: [null, 'text', 'outlined', 'contained'] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    colorTheme: { control: { type: 'select' }, options: [null, 'normal', 'warning'] },
  },
  args: {
    disabled: false,
    children: 'Click me',
  },
} as Meta<typeof IconButton>;

const ThemeLightTemplate: StoryFn<typeof IconButton> = (args: TIconButton) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <IconButton {...args} name="button1" onClick={action('clicked')}>
        <SunIcon color="#ffffff" />
      </IconButton>
    </ReactThemeContext.Provider>
  );
};

const ThemeDarkTemplate: StoryFn<typeof IconButton> = (args: TIconButton) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <IconButton {...args} name="button1" onClick={action('clicked')}>
        <SunIcon color="#ffffff" />
      </IconButton>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});
