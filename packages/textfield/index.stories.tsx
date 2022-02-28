import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import TextField from  './src/index';
import ItextField from './types/itext-field';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    isReadOnly: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false },
    isNotClearable: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    type: { control: { type: 'select', options: [ 'number', 'text', 'date', 'file' ] }, defaultValue: 'text'   },
    fontSize: { control: { type: 'select', options: [ 10,12,14,16 ] }, defaultValue: 14  },
    fontWeight: { control: { type: 'select', options: [ 100, 400, 600, 900 ] }, defaultValue: 400  },
    textAlign: { control: { type: 'select', options: [ 'right', 'left', 'center' ] }  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined', 'text' ]}, defaultValue: 'outline'   },
    onChange: { action: 'changed' }
  },
  args: {
    textMessage: 'text message',
    label: 'label'
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args: ItextField) => {

  const [ value, setValue ] = useState('');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  }

  const onInputDelete = (name: string, value: string) => {
    setValue(value);
  }

  return <div style={{ width: '190px' }}>
    <TextField
      {...args}
      textMessage="Some text message"
      id="textfield1"
      name="textfield1"
      value={value}
      onChange={onInputChange}
      onRemove={onInputDelete}
    />
  </div>
}

export const NormalTextField = Template.bind({});

