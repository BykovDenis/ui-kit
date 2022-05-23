import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Datepicker from './src/index';
import Idatepicker from './types/idatepicker';
import Locales from '../enums/locales';

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
  const [value, setValue] = useState('11.05.2022');

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  return <div style={{ width: '250px' }}>
    <Datepicker {...args} value={value} locale={Locales.Ru} onChange={onDatepickerValueChange} />
  </div>

}

export const NormalDatepicker = Template.bind({});

