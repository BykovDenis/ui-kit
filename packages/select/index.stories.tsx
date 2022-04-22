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
    elements: [
      {
        label: 'Процентная кривая',
        value: 'ForecastCurve'
      },
      {
        label: 'Процентные кривые',
        value: 'DiscountCurve'
      },
      {
        label: 'Кредитная кривая',
        value: 'CreditCurve'
      },
      {
        label: 'Рейтинг контрагента',
        value: 'CreditRank'
      },
      {
        label: 'LGD',
        value: 'Lgd'
      },
      {
        label: 'Ставка резерва',
        value: 'ReserveRate'
      },
      {
        label: 'EUR :FRA CURVE',
        value: 'EUR :FRA CURVE'
      },
      {
        label: 'RUB: IRS CURVE',
        value: 'RUB: IRS CURVE'
      },
      {
        label: 'RUB: KEY RATE',
        value: 'RUB: KEY RATE'
      },
      {
        label: 'RUB: OFZ CURVE',
        value: 'RUB: OFZ CURVE'
      },
      {
        label: 'USD: LIBOR 3M',
        value: 'USD: LIBOR 3M'
      },
      {
        label: 'USD :LIBOR 1M',
        value: 'USD :LIBOR 1M'
      },
      {
        label: 'USD :LIBOR 6M',
        value: 'USD :LIBOR 6M'
      },
      {
        label: 'EUR :FX',
        value: 'EUR :FX'
      },
      {
        label: 'EUR: XCCY',
        value: 'EUR: XCCY'
      },
      {
        label: 'USD_MINFIN',
        value: 'USD_MINFIN'
      },
      {
        label: 'RUB :RUONIA OIS',
        value: 'RUB :RUONIA OIS'
      },
      {
        label: 'EUR/RUB',
        value: 'EUR'
      },
      {
        label: 'USD/RUB',
        value: 'USD'
      },
      {
        label: 'ADDON',
        value: 'Addon'
      },
      {
        label: 'ICS',
        value: 'Ics'
      },
      {
        label: 'IR - alpha',
        value: 'IrAlpha'
      },
      {
        label: 'IR - sigma',
        value: 'IrSigma'
      },
      {
        label: 'HZ - alpha',
        value: 'HzAlpha'
      },
      {
        label: 'HZ - sigma',
        value: 'HzSigma'
      }
    ]
    // elements: new Array(10).fill(null).map((element: null, index: number) => `List item ${index}`)
    // elements: [{ label: 'One', value: '111' }, { label: 'Two', value: '222' }, { label: 'Three', value: '333' }, { label: 'Four', value: '444' }]
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: ISelect) => {

  // const [ value, setValue ] = useState('List item 6');
  const [ value, setValue ] = useState<IOption>(null);

  const onInputChange = (option: IOption) => {
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

