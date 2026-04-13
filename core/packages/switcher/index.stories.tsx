import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Switcher from './src/index';
import TSwitcher from './types/tswitcher';

const meta: Meta<typeof Switcher> = {
  title: 'Components/Switcher',
  component: Switcher,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    colorTheme: { control: { type: 'select' }, options: [null, 'normal', 'warning'] },
  },
  args: {
    disabled: false,
    fontSize: 14,
    width: 200,
    height: 35,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DarkTheme: Story = {
  render: (args: TSwitcher) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    const Wrapper = () => {
      const [activeElement, setActiveElement] = useState('Native');
      const element1: string = 'Native';
      const element2: string = 'RUB';

      const onSwitcherChange = (elementName: string) => {
        if (elementName === 'Native' && activeElement !== 'Native') {
          setActiveElement('Native');
        } else if (elementName === 'RUB' && activeElement !== 'RUB') {
          setActiveElement('RUB');
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
    return <Wrapper />;
  },
};

export const LightTheme: Story = {
  render: (args: TSwitcher) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);
    const Wrapper = () => {
      const [activeElement, setActiveElement] = useState('Native');
      const element1: string = 'Native';
      const element2: string = 'RUB';

      const onSwitcherChange = (elementName: string) => {
        if (elementName === 'Native' && activeElement !== 'Native') {
          setActiveElement('Native');
        } else if (elementName === 'RUB' && activeElement !== 'RUB') {
          setActiveElement('RUB');
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
    return <Wrapper />;
  },
};
