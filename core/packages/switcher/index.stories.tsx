import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import getNewReactThemeContext from '../styles/src';

import Switcher from './src/index';
import { themes } from '../styles/src/themes';
import TSwitcher from './types/tswitcher';

export default {
  title: 'Components/Switcher',
  component: Switcher,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
  },
  args: {
    disabled: false,
    fontSize: 14,
    width: 200,
    height: 35,
  },
} as Meta<typeof Switcher>;

const TemplateDarkTheme: StoryFn<typeof Switcher> = (args: TSwitcher) => {
  const [activeElement, setActiveElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onSwitcherChange = (elementName: string) => {
    if (elementName === 'Native' && activeElement !== 'Native') {
      setActiveElement('Native');
      action('The new value Native');
    } else if (elementName === 'RUB' && activeElement !== 'RUB') {
      setActiveElement('RUB');
      action('The new value RUB');
    }
  };
  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Switcher
        {...args}
        onSwitcherChange={onSwitcherChange}
        element1={element1}
        element2={element2}
        activeElement={activeElement}
      />
    </ReactThemeContext.Provider>
  );
};

const TemplateLightTheme: StoryFn<typeof Switcher> = (args: TSwitcher) => {
  const [activeElement, setActiveElement] = useState('Native');
  const element1: string = 'Native';
  const element2: string = 'RUB';

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const onSwitcherChange = (elementName: string) => {
    if (elementName === 'Native' && activeElement !== 'Native') {
      setActiveElement('Native');
      action('The new value Native');
    } else if (elementName === 'RUB' && activeElement !== 'RUB') {
      setActiveElement('RUB');
      action('The new value RUB');
    }
  };
  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Switcher
        {...args}
        onSwitcherChange={onSwitcherChange}
        element1={element1}
        element2={element2}
        activeElement={activeElement}
      />
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});
