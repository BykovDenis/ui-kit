import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import IconButton from  './src/index';
import IIconButton from './types/iicon-button'
import getNewReactThemeContext from '../styles/src';
import SunIcon from '../icons-components/24x24/sun-icon';
import { themes } from '../styles/src/themes';

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

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <IconButton  {...args} name="button1" onClick={action('clicked')} ><SunIcon color="#ffffff" /></IconButton>
  </ReactThemeContext.Provider>
}

export const NormalIconButton = Template.bind({});

