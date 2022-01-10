import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Checkbox from  './src/index';
import ICheckbox from "./types/icheckbox";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ '10px', '12px', '14px', '16px' ] }  },
    checked: { control: { type: 'select', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Checkbox',
  }
} as ComponentMeta<typeof Checkbox>;

const onCheckboxCheck = (evt: any) => {
  action('checked');
}

const Template: ComponentStory<typeof Checkbox> = (args: ICheckbox) => {
  return <Checkbox {...args} onChange={onCheckboxCheck}  />
}

export const NormalCheckbox = Template.bind({});

