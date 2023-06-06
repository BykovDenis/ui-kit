import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from  './src/index';
import TButton from './types/tbutton'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select', options: [null, 'text', 'outlined', 'contained']}},
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }  },
    colorTheme: { control: { type: 'select', options: [null, 'normal', 'warning'] }  }
  },
  args: {
    disabled: false,
    children: 'Click me'
  },
} as ComponentMeta<typeof Button>;

const ThemeDarkTemplate: ComponentStory<typeof Button> = (args: TButton) => {
  return (
    <div style={{ zoom: 5 }}>
      <Button  {...args} name="button1" onClick={action('clicked')} >{args.children}</Button>
    </div>);
}

const ThemeLightTemplate: ComponentStory<typeof Button> = (args: TButton) => {
  return (<Button  {...args} name="button1" onClick={action('clicked')} >{args.children}</Button>);
}

export const DarkThemeButton = ThemeDarkTemplate.bind({});
export const LightThemeButton = ThemeLightTemplate.bind({});

