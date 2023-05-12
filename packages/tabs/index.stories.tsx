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

  const [ tabActive, setTabActive ] = useState<number | string>('tab2');

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  }

  return <ReactThemeContext.Provider value={themes.dark} >
    fff
    <Tabs {...args} value={tabActive} onChange={onTabChange} isUpperCase={true} fontWeight={400}>
      <Tab minHeight={80} name="tab1">Tab 1</Tab>
      <Tab minHeight={80} name="tab2">Tab 2</Tab>
      <Tab minHeight={80} name="tab3" disabled={true}>Tab 3</Tab>
    </Tabs>
    fff
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof Tabs> = (args: TTabs) => {

  const [ tabActive, setTabActive ] = useState<number>(0);

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  }

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    rrr
    <Tabs {...args} value={tabActive} onChange={onTabChange}>
      {/*<Tab>Tab 1</Tab>*/}
      {/*<Tab disabled={true}>Tab 2</Tab>*/}
      {/*<Tab>Tab 3</Tab>*/}
    </Tabs>
    rrr
  </ReactThemeContext.Provider>
}

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});


