import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Select from  './src';
import ISelect from './types/iselect';
import IOption from './types/ioption';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

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

  const [ value, setValue ] = useState<string>('addSchema');

  const elementsState = [
    'a_2022_05_31',
    'addSchema',
    'biba',
    'check_zero',
    'cibfv_2496',
    'cibfv_2575',
    'cibfv_2585',
    'cibfv_2596',
    'cibfv_2642',
    'cibfv_2644',
    'cibfv_2658',
    'cibfv_2819',
    'cxemanull',
    'daniil1',
    'daniil2000',
    'denis',
    'forecast_2022_09_21',
    'i_am_the_auditor',
    'keks',
    'kekuraz',
    'kkk2219',
    'kkkkk',
    'kuku',
    'loan_pricing',
    'pppsi',
    'rel2217_1',
    'rel2219',
    'rel2219_31122021',
    'rel2220',
    'robocop',
    'tradepad_1',
    'tradepad_2',
    'tradepad_3',
    'x2022_08_31',
    'x2022_09_26',
    'xxx2000'
  ];

  const onInputChange = (option: IOption) => {
    setValue(option);
    console.log(option.value?.toString());
  }

  const onInputRemove = () => {
    setValue(null);
    console.log('');
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
  <div style={{ width: '220px' }}>
    <Select
      {...args}
      onChange={onInputChange}
      onRemove={onInputRemove}
      name="select-custom"
      id="select"
      activeElement={value}
      elements={elementsState}
      label="Some label"
    >{args.children}</Select>
  </div>
  </ReactThemeContext.Provider>;
}

export const NormalSelect = Template.bind({});

