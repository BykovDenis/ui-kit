import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Typography from './src/index';
import TTypography from './types/ttypography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Typography text example',
    variant: 'H1',
    error: false,
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: TTypography) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Typography {...args} />
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: TTypography) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Typography {...args} />
      </ReactThemeContext.Provider>
    );
  },
};
