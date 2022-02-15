import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import List from  './src';
import IList from './types/ilist';

export default {
  title: 'Components/List',
  component: List,
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
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args: IList) => {

  const [ value, setValue ] = useState('323');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  }

  const onInputDelete = (name: string, value: string) => {
    setValue(value);
  }

  return <div style={{ width: '190px' }}>
    <List elements={[1, 2, 3, 4, 5, 6]} />
  </div>
}

export const NormalList = Template.bind({});

