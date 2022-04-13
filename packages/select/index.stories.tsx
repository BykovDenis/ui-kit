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
    elements: new Array(2500).fill(null).map((element: null, index: number) => `List item ${index}`)
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  const [ value, setValue ] = useState('List item 113');

  const onInputChange = (params: {index: number, label: string, value: string | number}) => {
    const value: string = params.value.toString();
    setValue(value);
  }

  const onInputRemove = () => {
    setValue('');
    console.log('');
  }

  return <div style={{ width: '220px' }}>
    <Select
      {...args}
      isCreatable={true}
      onChange={onInputChange}
      onRemove={onInputRemove}
      name="select-custom"
      id="select"
      activeElement={value}
    >{args.children}</Select>
  </div>;
}

export const NormalSelect = Template.bind({});

