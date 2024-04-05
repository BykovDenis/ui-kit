import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import Typography from './src/index';
import ITypography from './types/itypography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    children: 'Typography dsdsd',
    variant: 'H1',
    error: false,
  },
} as Meta<typeof Typography>;

const DarkThemeTemplate: StoryFn<typeof Typography> = (args: ITypography) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Typography {...args} />
    </ReactThemeContext.Provider>
  );
};

const LightThemeTemplate: StoryFn<typeof Typography> = (args: ITypography) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Typography {...args} />
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTypography = DarkThemeTemplate.bind({});
export const LightThemeTypography = LightThemeTemplate.bind({});
