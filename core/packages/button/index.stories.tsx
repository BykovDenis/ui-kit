import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Button from './src/index';
import TButton from './types/tbutton';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select' }, options: [null, 'text', 'outlined', 'contained'] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    colorTheme: { control: { type: 'select' }, options: [null, 'normal', 'warning'] },
    textDecoration: { control: { type: 'select' }, options: [undefined, 'underline'] },
  },
  args: {
    disabled: false,
    children: 'Click me',
    justifyContent: '',
  },
} as Meta<typeof Button>;

const ThemeLightTemplate: StoryFn<typeof Button> = (args: TButton) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Button {...args} name="button1" onClick={action('clicked')}>
        {args.children}
      </Button>
    </ReactThemeContext.Provider>
  );
};

const ThemeDarkTemplate: StoryFn<typeof Button> = (args: TButton) => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Button {...args} name="button1" onClick={action('clicked')} width={100}>
        {args.children}
      </Button>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});
