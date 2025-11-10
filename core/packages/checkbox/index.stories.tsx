import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from 'storybook/test';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Checkbox from './src';
import type ICheckbox from './types/icheckbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    checked: { control: { type: 'radio' }, options: [true, false] },
    indeterminate: { control: { type: 'radio' }, options: [true, false] },
    isIconDisabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    id: 'label1',
    label: 'Label for the Checkbox',
    disabled: false,
    checked: false,
    indeterminate: false,
    isIconDisabled: false,
    fontSize: 14,
    borderColor: '',
    onChange: fn(),
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: (args: ICheckbox) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Checkbox {...args} tabIndex="1" />
      </ReactThemeContext.Provider>
    );
  },
};

export const Dark: Story = {
  render: (args: ICheckbox) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Checkbox {...args} tabIndex="1" />
      </ReactThemeContext.Provider>
    );
  },
};
