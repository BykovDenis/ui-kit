import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Datepicker from './src';
import IDatepicker from './types/idatepicker';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    type: { control: { type: 'select', options: [ 'button', 'text'] }, defaultValue: 'button'  }
  },
  args: {
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false
  },
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args: IDatepicker) => {
  const [value, setValue] = useState('01.05.2022');

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  return <div style={{ width: '250px' }}>
    <Datepicker {...args} value={value} minDate="01.01.2021" maxDate="15.09.2029" onChange={onDatepickerValueChange} />
  </div>

}

export const NormalDatepicker = Template.bind({});

