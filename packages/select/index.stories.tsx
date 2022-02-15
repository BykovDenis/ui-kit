import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import ISelect from './types/iselect';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Label'
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  const [ value, setValue ] = useState('15');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(value);
    console.log(value);
  }

  const onInputRemove = () => {
    setValue('');
    console.log('');
  }

  return <div style={{ width: '220px' }}><Select {...args} onChange={onInputChange} onRemove={onInputRemove} label="My select" id="select" variant="text" value={value}>{args.children}</Select></div>;
}

export const NormalSelect = Template.bind({});

