import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import ISelect from './types/iselect';
import IOption from './types/ioption';

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
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  // const [ value, setValue ] = useState('List item 6');
  const [ value, setValue ] = useState<string>('loan_pricing');
  const [elements, setElements] = useState([]);

  const elementsState = [
    'cibfv_2496',
    'cibfv_2555',
    'CIBFV_2555',
    'cibfv_2575',
    'denis',
    'loan_pricing',
    'mass_corrr',
    'mass_corrr_2',
    'rel2207',
    'rel2208',
    't05042022',
    'T05042022',
    'tenant_2021_11_30'];

  const onInputChange = (option: IOption) => {
    setValue(option.value?.toString());
  }

  const onInputRemove = () => {
    setValue(null);
    console.log('');
  }

  setTimeout(() => {
    setElements(elementsState);
    setElements(elementsState);
    setElements(elementsState);
    setElements(elementsState);
    setElements(elementsState);
  }, 6000)

  return <div style={{ width: '220px' }}>
    <Select
      {...args}
      isCreatable={true}
      onChange={onInputChange}
      onRemove={onInputRemove}
      name="select-custom"
      id="select"
      activeElement={value}
      elements={elements}
    >{args.children}</Select>
  </div>;
}

export const NormalSelect = Template.bind({});

