import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import ProgressBar from './src/index';
import TProgressBar from './types/tprogress-bar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    isAnimate: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: ['10px', '12px', '14px', '16px'] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    progress: 50,
    isAnimate: false,
    fontSize: '14px',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkTheme: Story = {
  render: (args: TProgressBar) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <ProgressBar height={40} {...args} />
      </ReactThemeContext.Provider>
    );
  },
};

export const LightTheme: Story = {
  render: (args: TProgressBar) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <ProgressBar height={40} {...args} />
      </ReactThemeContext.Provider>
    );
  },
};
