import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Label from  './src/index';
import ILabel from './types/ilabel';
import theme from '../helpers/theme';
import getNewReactThemeContext from '../styles/src';

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

const Template: ComponentStory<typeof Label> = (args: ILabel) => {

  const ReactThemeContext = getNewReactThemeContext(theme);

  return <ReactThemeContext.Provider value={theme}>
    <Label {...args} >{args.children}</Label>
  </ReactThemeContext.Provider>
}

export const NormalLabel = Template.bind({});

