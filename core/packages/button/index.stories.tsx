import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Button from './src/index';
import TButton from './types/tbutton';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select' }, options: [null, 'text', 'outlined', 'contained'] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    colorTheme: { control: { type: 'select' }, options: [null, 'normal', 'warning'] },
    textDecoration: { control: { type: 'select' }, options: [undefined, 'underline'] },
  },
  args: {
    disabled: false,
    children: 'Click me',
    justifyContent: '',
    onClick: fn(),
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: TButton) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Button {...args} name="button1">
          {args.children}
        </Button>
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: TButton) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Button {...args} name="button1" width={100}>
          {args.children}
        </Button>
      </ReactThemeContext.Provider>
    );
  },
};
