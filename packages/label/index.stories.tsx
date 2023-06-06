import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Label from  './src/index';
import ILabel from './types/tlabel';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Label'
  },
} as ComponentMeta<typeof Label>;

const TemplateDarkTheme: ComponentStory<typeof Label> = (args: ILabel) => {

  return <Label {...args} >{args.children}</Label>;
}

const TemplateLightTheme: ComponentStory<typeof Label> = (args: ILabel) => {

  return <Label {...args} >{args.children}</Label>;
}

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});

