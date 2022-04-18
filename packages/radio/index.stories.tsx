import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {Fragment } from 'react';

// import Radio from  './src/index';
import Radio from './dist';
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

  const onCheckboxCheck = () => {
    action('checked');
  }

  return (<Fragment>
    <Radio {...args} id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
    <Radio {...args} id="radio2" name="radio1" onChange={onCheckboxCheck}  tabIndex="1" />
    <Radio
      id="useDynamicalReserveRate2"
      value="false"
      name="useDynamicalReserveRate"
      checked={false}
      onChange={onCheckboxCheck}
      disabled={false}
    />
  </Fragment>)
}

export const NormalRadio = Template.bind({});

