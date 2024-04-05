import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import Divider from './src';
import TDivider from './types/tdivider';
import Label from '../label/src';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Label',
    fontSize: 14,
    error: false,
  },
} as Meta<typeof Label>;

const TemplateDarkTheme: StoryFn<typeof Label> = (args: TDivider) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Label {...args}>One line</Label>
      <Divider />
      <Label {...args}>To line</Label>
    </ReactThemeContext.Provider>
  );
};

const TemplateLightTheme: StoryFn<typeof Label> = (args: TDivider) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Label {...args}>One line</Label>
      <Divider />
      <Label {...args}>To line</Label>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});
