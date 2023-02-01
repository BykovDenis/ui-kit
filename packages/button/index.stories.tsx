import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
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

const Template: ComponentStory<typeof Button> = (args: TButton) => {

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <Button  {...args} name="button1" onClick={action('clicked')} >{args.children}</Button>
  </ReactThemeContext.Provider>
}

export const NormalButton = Template.bind({});

