import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import ISelect from './types/iselect';
import IOption from './types/ioption';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined', 'text' ]}, defaultValue: 'outline'   },
    isCreatable: { control: { type: 'radio', options: [ true, false ] }, defaultValue: true  },
  },
  args: {
    children: 'Label',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  // const [ value, setValue ] = useState('List item 6');
  const [ value, setValue ] = useState<IOption>({ label: 'Admin', value: '2121' });
  const [elements, setElements] = useState([]);

  const elementsState = [
    { label: 'Admin', value: '2121' },
    { label: 'cva_desk', value: '3432' },
    { label: 'ReportingRiskManager', value: '3231' },
    { label: 'Pricing (sales)', value: '2832' },
  ];

  const onInputChange = (option: IOption) => {
    setValue(option);
    console.log(option.value?.toString());
  }

  const onInputRemove = () => {
    setValue(null);
    console.log('');
  }

  // setTimeout(() => {
  //   setElements(elementsState);
  //   setElements(elementsState);
  //   setElements(elementsState);
  //   setElements(elementsState);
  //   setElements(elementsState);
  // }, 100)

  return <div style={{ width: '220px' }}>
    <Select
      {...args}
      onChange={onInputChange}
      onRemove={onInputRemove}
      name="select-custom"
      id="select"
      activeElement={value}
      elements={elementsState}
    >{args.children}</Select>
  </div>;
}

export const NormalSelect = Template.bind({});

