import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import FormControl from '../form-control/src';
import ChevronUpIcon from '../icons-components/24x24/chevron-up-icon';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import LabelInterative from './src/index';
import TLabelInteractive from './types/tlabel-interactive';

const meta: Meta<typeof LabelInterative> = {
  title: 'Components/LabelInteractive',
  component: LabelInterative,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Label interative',
    Icon: ChevronUpIcon,
    backgroundColor: 'rgb(8,166,82)',
    fontSize: 14,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: TLabelInteractive) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <FormControl width="150px">
          <LabelInterative minHeight={30} {...args}>
            {args.children}
          </LabelInterative>
        </FormControl>
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: TLabelInteractive) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <FormControl width="150px">
          <LabelInterative minHeight={30} {...args}>
            {args.children}
          </LabelInterative>
        </FormControl>
      </ReactThemeContext.Provider>
    );
  },
};
