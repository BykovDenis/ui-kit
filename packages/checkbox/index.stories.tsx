import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import ICheckbox from "./src/icheckbox";
import Checkbox from  './src/index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ '10px', '12px', '14px', '16px' ] }  }
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Checkbox',
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: ICheckbox) => {
  return <Checkbox {...args} />
}

export const NormalCheckbox = Template.bind({});

