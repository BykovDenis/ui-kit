import type { Meta, StoryObj } from '@storybook/react';
import React, { Fragment } from 'react';
import { fn } from 'storybook/test';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Radio from './src/index';
import RadioProps from './types/radio-props';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: ['10px', '12px', '14px', '16px'] },
    isIconDisabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Radio',
    isIconDisabled: false,
    borderColor: '',
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: RadioProps) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Fragment>
          <Radio {...args} id="radio1" name="radio1" checked={true} tabIndex="0" />
          <Radio {...args} id="radio2" name="radio1" tabIndex="1" />
        </Fragment>
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: RadioProps) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Fragment>
          <Radio {...args} id="radio1" name="radio1" checked={true} tabIndex="0" />
          <Radio {...args} id="radio2" name="radio1" tabIndex="1" />
        </Fragment>
      </ReactThemeContext.Provider>
    );
  },
};
