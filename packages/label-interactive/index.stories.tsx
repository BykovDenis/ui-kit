import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import FormControl from '../form-control/src';
import ChevronUpIcon from '../icons-components/24x24/chevron-up-icon';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import LabelInterative from './src/index';
import ILabelInterative from './types/tlabel-interactive';

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
    icon: <ChevronUpIcon color="white" />,
    backgroundColor: 'rgb(8,166,82)'
  },
} as ComponentMeta<typeof LabelInterative>;

const Template: ComponentStory<typeof LabelInterative> = (args: ILabelInterative) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <FormControl width="150px">
      <LabelInterative {...args} >{args.children}</LabelInterative>
    </FormControl>
  </ReactThemeContext.Provider>
}

export const InteractiveLabel = Template.bind({});

