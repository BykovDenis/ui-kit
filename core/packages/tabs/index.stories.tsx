import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import Tab from '../tab/src';
import Tabs from './src/index';
import TTabs from './types/ttabs';

const meta: Meta<typeof Tabs> = {
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
};

export default meta;

type Story = StoryObj<typeof meta>;

function DarkWrapper(args: TTabs) {
  const [tabActive, setTabActive] = useState<number | string>('tab2');
  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  const onTabChange = (tabIndex: number) => setTabActive(tabIndex);
  const Tab1Title = () => <p>Исторические данные</p>;

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Tabs {...args} value={tabActive} onChange={onTabChange} isUpperCase fontWeight={400}>
        <Tab minHeight={80} name="tab1">
          <Tab1Title />
        </Tab>
        <Tab minHeight={80} name="tab2">
          Tab 2
        </Tab>
        {/* <Tab minHeight={80} name="tab3" disabled>Tab 3</Tab> */}
      </Tabs>
    </ReactThemeContext.Provider>
  );
}

function LightWrapper(args: TTabs) {
  const [tabActive, setTabActive] = useState<number>(0);
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  const onTabChange = (tabIndex: number) => setTabActive(tabIndex);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Tabs {...args} value={tabActive} onChange={onTabChange}>
        <Tab>Tab 1</Tab>
        <Tab disabled>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </ReactThemeContext.Provider>
  );
}

export const DarkTheme: Story = {
  render: (args) => <DarkWrapper {...(args as TTabs)} />,
};

export const LightTheme: Story = {
  render: (args) => <LightWrapper {...(args as TTabs)} />,
};
