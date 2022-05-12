import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconButton from  './src/index';
import IIconButton from './types/iicon-button'
import Index from '../icons-components/add-icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: IIconButton) => {
  return <IconButton  {...args} name="button1" onClick={action('clicked')} ><Index color="#ffffff" /></IconButton>;
}

export const NormalIconButton = Template.bind({});

