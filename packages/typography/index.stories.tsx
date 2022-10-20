import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import Typography from './src/index';
import ITypography from './types/itypography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: { type: 'select', options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] }, defaultValue: 'H1' },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Typography'
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args: ITypography) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <Typography {...args} >Some text Some text Some text</Typography>
  </ReactThemeContext.Provider>
}

export const NormalTypography = Template.bind({});

