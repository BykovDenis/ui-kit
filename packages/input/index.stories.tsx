import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Input from  './src/index';
import Iinput from './types/iinput';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ 10,12,14,16 ] }  },
    textAlign: { control: { type: 'select', options: [ 'right', 'left', 'center' ] }  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined' ] }  },
    onChange: { action: 'changed' }
  },
  args: {
    // value: 'The input',
    textMessage: 'text message'
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: Iinput) => {

  const [ value, setValue ] = useState(null);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  }

  const onInputRemove = () => {
    setValue('');
    console.log('');
  }

  return <div style={{ width: '190px' }}><Input {...args} name="input" value={value} onChange={onInputChange} onRemove={onInputRemove} /></div>
}

export const NormalInput = Template.bind({});

