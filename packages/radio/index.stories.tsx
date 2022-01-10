import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {Fragment, useState} from 'react';

import Radio from  './src/index';
import Iradio from "./types/iradio";

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ '10px', '12px', '14px', '16px' ] }  }
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Radio',
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: Iradio) => {

  const onCheckboxCheck = (evt: any) => {
    action('checked');
  }

  return (<Fragment>
    <Radio {...args} id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} />
    <Radio {...args} id="radio2" name="radio1" onChange={onCheckboxCheck} />
  </Fragment>)
}

export const NormalCheckbox = Template.bind({});

