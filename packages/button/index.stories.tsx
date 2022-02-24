import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from  './src/index';
import Ibutton from './types/ibutton'

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

const Template: ComponentStory<typeof Button> = (args: Ibutton) => {
  return <Button  {...args} onClick={action('clicked')} >{args.children}</Button>;
}

export const NormalButton = Template.bind({});

