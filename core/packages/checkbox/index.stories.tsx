import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React, { useContext } from 'react';

import Checkbox from './src';
import ICheckbox from './types/icheckbox';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    checked: { control: { type: 'select' }, options: [true, false] },
    indeterminate: { control: { type: 'select' }, options: [true, false] },
    isIconDisabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Checkbox',
    checked: false,
    indeterminate: false,
    isIconDisabled: false,
    fontSize: 14,
    borderColor: '',
  },
} as Meta<typeof Checkbox>;

const onCheckboxCheck = () => {
  action('checked');
};

const TemplateLightTheme: StoryFn<typeof Checkbox> = (args: ICheckbox) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return (
    <ReactThemeContext.Provider value={themes.light}>
      {' '}
      <Checkbox {...args} onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
};

const TemplateDarkTheme: StoryFn<typeof Checkbox> = (args: ICheckbox) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      {' '}
      <Checkbox {...args} onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeCheckbox = TemplateDarkTheme.bind({});
export const LightThemeCheckbox = TemplateLightTheme.bind({});
