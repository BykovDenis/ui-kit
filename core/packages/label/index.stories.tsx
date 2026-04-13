import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Label from './src/index';
import ILabel from './types/tlabel';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: ILabel) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Label {...args}>{args.children}</Label>
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: ILabel) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Label {...args}>{args.children}</Label>
      </ReactThemeContext.Provider>
    );
  },
};
