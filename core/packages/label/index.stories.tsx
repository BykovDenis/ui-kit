import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Label from './src/index';
import ILabel from './types/tlabel';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: { type: 'radio', options: [true, false] } },
    fontSize: { control: { type: 'select', options: [10, 12, 14, 16] }, defaultValue: 14 },
    error: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
  },
  args: {
    children: 'Label',
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args: ILabel) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Label {...args}>{args.children}</Label>
    </ReactThemeContext.Provider>
  );
};

export const NormalLabel = Template.bind({});
