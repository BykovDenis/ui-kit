import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LastPageIcon from './24x24/last-page-icon/src';
import FirstPageIcon from './24x24/first-page-icon/src';
import KeyboardArrowLeftIcon from './24x24/keyboard-arrow-left-icon/src';
import TIcon from './types/ticon';
import KeyboardArrowRightIcon from './24x24/keyboard-arrow-right-icon/src';
import ChevronDownIcon from './24x24/chevron-down-icon/src/index';

export default {
  title: 'Components/Icons',
  component: LastPageIcon,
} as ComponentMeta<typeof LastPageIcon>;

const Template: ComponentStory<typeof LastPageIcon> = (args: TIcon) => {
  return (
    <div style={{ backgroundColor: '#ffffff', height: '100vh', zoom: 3 }}>
      <LastPageIcon />
      <FirstPageIcon />
      <KeyboardArrowLeftIcon />
      <KeyboardArrowRightIcon />
      <ChevronDownIcon />
    </div>
  );
};

export const IconsList = Template.bind({});
