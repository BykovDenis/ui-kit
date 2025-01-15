import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import Tabs from './src/index';
import TTabs from './types/ttabs';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import Tab from '../tab/src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    error: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    width: 700,
    error: false,
    fontSize: 14,
  },
} as Meta<typeof Tabs>;

const ThemeDarkTemplate: StoryFn<typeof Tabs> = (args: TTabs) => {
  const [tabActive, setTabActive] = useState<number | string>('tab2');

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  };

  const Tab1Title = () => <p>Исторические данные</p>;

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Tabs {...args} value={tabActive} onChange={onTabChange} isUpperCase={true} fontWeight={400}>
        <Tab minHeight={80} name="tab1">
          <Tab1Title />
        </Tab>
        <Tab minHeight={80} name="tab2">
          Tab 2
        </Tab>
        {/*<Tab minHeight={80} name="tab3" disabled={true}>Tab 3</Tab>*/}
      </Tabs>
    </ReactThemeContext.Provider>
  );
};

const ThemeLightTemplate: StoryFn<typeof Tabs> = (args: TTabs) => {
  const [tabActive, setTabActive] = useState<number>(0);

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const onTabChange = (tabIndex: number) => {
    setTabActive(tabIndex);
  };

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Tabs {...args} value={tabActive} onChange={onTabChange}>
        <Tab>Tab 1</Tab>
        <Tab disabled={true}>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeList = ThemeDarkTemplate.bind({});
export const LightThemeList = ThemeLightTemplate.bind({});
