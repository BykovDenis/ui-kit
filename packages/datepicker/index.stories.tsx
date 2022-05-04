import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Datepicker from './src/index';
import Idatepicker from './types/idatepicker';

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

const Template: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('04.05.2022');

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  return <div style={{ width: '250px' }}>
    <Datepicker {...args} value={value} minDate="28.04.2022" maxDate="12.06.2023" locale="ru" onChange={onDatepickerValueChange} />
  </div>

}

export const NormalDatepicker = Template.bind({});

