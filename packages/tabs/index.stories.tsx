import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Tabs from  './src/index';
import TTabs from './types/ttabs';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import Tab from '../tab/src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
} as ComponentMeta<typeof Tabs>;

const ThemeDarkTemplate: ComponentStory<typeof Tabs> = (args: TTabs) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <Tabs {...args} >
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof Tabs> = (args: TTabs) => {

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <Tabs {...args} >{args.children}</Tabs>
  </ReactThemeContext.Provider>
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});


