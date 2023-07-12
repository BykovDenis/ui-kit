import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LastPageIcon from './last-page-icon/src';
import FirstPageIcon from './first-page-icon/src';
import KeyboardArrowLeftIcon from './keyboard-arrow-left-icon';
import TIcon from '../icons/types/ticon';
import KeyboardArrowRightIcon from './keyboard-arrow-right-icon/src';
import ChevronDownIcon from './chevron-down-icon/src/index';

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
