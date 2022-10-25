import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Checkbox from  './src/index';
import ICheckbox from "./types/icheckbox";
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16 ] }  },
    checked: { control: { type: 'select', options: [ true, false ] }, defaultValue: false  },
    indeterminate: { control: { type: 'select', options: [ true, false ] }, defaultValue: false  },
    isIconDisabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Checkbox',
  }
} as ComponentMeta<typeof Checkbox>;

const ReactThemeContext = getNewReactThemeContext(themes.dark);

const onCheckboxCheck = () => {
  action('checked');
}

const Template: ComponentStory<typeof Checkbox> = (args: ICheckbox) => {
  return <ReactThemeContext.Provider value={themes.dark}> <Checkbox {...args} onChange={onCheckboxCheck} tabIndex="1" /></ReactThemeContext.Provider>
}

export const NormalCheckbox = Template.bind({});

