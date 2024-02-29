import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import TProgressBar from './types/tprogress-bar';
import ProgressBar from './src/index';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    isAnimate: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    fontSize: { control: { type: 'select', options: [10, 12, 14, 16] } },
    disabled: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
  },
  args: {
    progress: 50,
  },
} as Meta<typeof ProgressBar>;

const DarkThemeTemplate: StoryFn<typeof ProgressBar> = (args: TProgressBar) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <ProgressBar height={40} {...args} />
    </ReactThemeContext.Provider>
  );
};

const LightThemeTemplate: StoryFn<typeof ProgressBar> = (args: TProgressBar) => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return (
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <ProgressBar height={40} {...args} />
    </ReactThemeContext.Provider>
  );
};

export const NormalDarkProgressBar = DarkThemeTemplate.bind({});
export const NormalLightProgressBar = LightThemeTemplate.bind({});
