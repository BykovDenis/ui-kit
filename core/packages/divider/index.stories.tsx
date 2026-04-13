import { type StoryObj, Meta } from '@storybook/react';
import React from 'react';

import Label from '../label/src';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Divider from './src';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TemplateDarkTheme: Story = {
  render: () => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <Label>One line</Label>
        <Divider />
        <Label>To line</Label>
      </ReactThemeContext.Provider>
    );
  },
};

export const TemplateLightTheme: Story = {
  render: () => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <Label>One line</Label>
        <Divider />
        <Label>To line</Label>
      </ReactThemeContext.Provider>
    );
  },
};
