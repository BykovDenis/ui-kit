import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FormControl from '../form-control/src';
import ChevronUpIcon from '../icons-components/24x24/chevron-up-icon';


import LabelInterative from './src/index';
import TLabelInterative from './types/tlabel-interactive';
import TLabelInteractive from "./types/tlabel-interactive";
import TIcon from "../icons-components/types/ticon";

export default {
  title: 'Components/LabelInteractive',
  component: LabelInterative,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Label interative',
    Icon: ChevronUpIcon,
    backgroundColor: 'rgb(8,166,82)'
  },
} as ComponentMeta<typeof LabelInterative>;

const Template: ComponentStory<typeof LabelInterative> = (args: TLabelInteractive) => {



  return <>
    <FormControl width="150px">
      <LabelInterative minHeight={30} {...args} >{args.children}</LabelInterative>
    </FormControl>
  </>
}

export const InteractiveLabel = Template.bind({});

