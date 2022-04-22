import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import Iselect from './types/iselect';
import IElement from './types/ielement';

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
    elements: new Array(10).fill(null).map((element: null, index: number) => `List item ${index}`)
    // elements: [{ label: 'One', value: '111' }, { label: 'Two', value: '222' }, { label: 'Three', value: '333' }, { label: 'Four', value: '444' }]
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: Iselect) => {

  const [ value, setValue ] = useState<IElement>('List item 6');

  const onInputChange = (option: IElement) => {
    setValue(option);
  }

  const onInputRemove = () => {
    setValue({ label: null, value: null });
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

