import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import WarningPanel from './src';

export default {
  title: 'Components/WarningPanel',
  component: WarningPanel,
} as Meta<typeof WarningPanel>;

const Template: StoryFn<typeof WarningPanel> = () => {
  return (
    <div style={{ width: '220px' }}>
      <WarningPanel title="Hello" />
    </div>
  );
};

export const NormalWarningPanel = Template.bind({});
