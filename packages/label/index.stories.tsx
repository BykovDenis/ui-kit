import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Label from  './src/index';
import ILabel from './types/ilabel';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ '10px', '12px', '14px', '16px' ] }  },
  },
  args: {
    children: 'Label'
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: ILabel) => {
  return <Label {...args} >{args.children}</Label>;
}

export const NormalLabel = Template.bind({});

