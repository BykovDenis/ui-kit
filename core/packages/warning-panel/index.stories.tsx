import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import WarningPanel from  './src';

export default {
  title: 'Components/WarningPanel',
  component: WarningPanel,
} as ComponentMeta<typeof WarningPanel>;

const Template: ComponentStory<typeof WarningPanel> = () => {

  return <div style={{ width: '220px' }}>
    <WarningPanel title="Hello" />
  </div>;
}

export const NormalWarningPanel = Template.bind({});

