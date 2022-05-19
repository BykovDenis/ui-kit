import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Label from  './src/index';
import ILabel from './types/ilabel';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Label'
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: ILabel) => {
  return <Label {...args}  backgroundColor="#ff0000">{args.children}</Label>;
}

export const NormalLabel = Template.bind({});

