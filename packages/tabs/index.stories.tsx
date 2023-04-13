import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

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
  args: {
    width: 700,
  }
} as ComponentMeta<typeof Tabs>;


const ThemeDarkTemplate: ComponentStory<typeof Tabs> = (args: TTabs) => {

  const [ tabActive, setTabActive ] = useState<number>(0);

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  }

  return <ReactThemeContext.Provider value={themes.dark} >
    <Tabs {...args} value={tabActive} onChange={onTabChange}>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof Tabs> = (args: TTabs) => {

  const [ tabActive, setTabActive ] = useState<number>(0);

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  }

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <Tabs {...args} value={tabActive} onChange={onTabChange}>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </Tabs>
  </ReactThemeContext.Provider>
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});


