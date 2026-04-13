import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';

import TIconButton from '../button/types/tbutton';
import SunIcon from '../icons-components/24x24/sun-icon';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import IconButton from './src';

const meta: Meta<typeof IconButton> = {
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
    onClick: fn(),
  },
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: (args: TIconButton) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    return (
      <ReactThemeContext.Provider value={themes.light}>
        <IconButton {...args} name="button1">
          <SunIcon color="#ffffff" />
        </IconButton>
      </ReactThemeContext.Provider>
    );
  },
};

export const Dark: Story = {
  render: (args: TIconButton) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <IconButton {...args} name="button1">
          <SunIcon color="#ffffff" />
        </IconButton>
      </ReactThemeContext.Provider>
    );
  },
};
