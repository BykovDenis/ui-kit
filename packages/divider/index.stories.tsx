import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';



import Divider from "./src";
import TDivider from './types/tdivider';
import Label from '../label/src';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Label'
  },
} as ComponentMeta<typeof Label>;

const TemplateDarkTheme: ComponentStory<typeof Label> = (args: TDivider) => {

  return (
  <>
    <Label {...args} >One line</Label>
      <Divider />
    <Label {...args} >To line</Label>
  </>
  )

}

const TemplateLightTheme: ComponentStory<typeof Label> = (args: TDivider) => {

  return (
    <>
    <Label {...args} >One line</Label>
      <Divider />
    <Label {...args} >To line</Label>
    </>
  )
}

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});

