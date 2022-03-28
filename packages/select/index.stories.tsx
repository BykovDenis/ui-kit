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
    variant: { control: { type: 'select', options: [ 'normal', 'outlined', 'text' ]}, defaultValue: 'outline'   },
  },
  args: {
    children: 'Label',
    elements: ['List item 111', 'List item 112', 'List item 113', 'List item 114', 'List item 115']
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  const [ value, setValue ] = useState('');

  const onInputChange = (params: {label: string, value: string | number}) => {
    const value: string = params.value.toString();
    setValue(value);
    console.log(value);
  }

  const onInputRemove = () => {
    setValue('');
    console.log('');
  }

  return <div style={{ width: '220px' }}>
    <Select {...args} isCreatable={true} onRemove={onInputRemove}  id="select" activeElement={value} >{args.children}</Select>
    <p>wwewewe</p>
  </div>;
}

export const NormalSelect = Template.bind({});

