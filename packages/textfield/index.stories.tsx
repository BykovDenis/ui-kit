import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import TextField from  './src/index';
import ITextField from './types/itext-field';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ 10,12,14,16 ] }  },
    textAlign: { control: { type: 'select', options: [ 'right', 'left', 'center' ] }  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined' ] }  },
    onChange: { action: 'changed' }
  },
  args: {
    textMessage: 'text message',
    label: 'label'
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args: ITextField) => {

  const [ value, setValue ] = useState('323');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  }

  const onInputDelete = (name: string, value: string | number) => {
    setValue('');
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

