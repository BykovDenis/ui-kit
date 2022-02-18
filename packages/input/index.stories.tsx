import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Input from  './src/index';
import IInput from './types/iinput';

export default {
  title: 'Components/Input',
  component: Input,
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
    // value: 'The input',
    textMessage: 'text message'
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IInput) => {

  const [ value, setValue ] = useState(0);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(value);
    console.log(value);
  }

  const onInputRemove = () => {
    setValue('');
  }

  return (<div style={{ width: '190px' }}>
    <Input {...args} name="input" value={value} onChange={onInputChange} onRemove={onInputRemove}  />
    <button onClick={onInputRemove}>change</button>
  </div>)
}

export const NormalInput = Template.bind({});

