import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Datepicker from './src';
import Idatepicker from './types/idatepicker';
import Locale from '../enums/locale';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import DatepickerMask from "./enums/datepicker-mask";

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    type: { control: { type: 'select', options: [ 'button', 'text'] }, defaultValue: 'button'  },
    locale: { control: { type: 'select', options: [ 'RU', 'EN'] }, defaultValue: 'EN'  }
  },
  args: {
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false,
    // minDate: '01.04.2023',
    // maxDate: '05.04.2023'
  },
} as ComponentMeta<typeof Datepicker>;

const ThemeDarkTemplateYYYYMMDD: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('2022-05-11');

  const onDatepickerValueChange = (name: string, value: string, isValid: boolean) => {
    setValue(value);
    // console.log(name, value, isValid);
  }

  const onDatepickerRemove = () => {
    setValue(null);
    // console.log(null);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <div style={{ width: '250px' }}>
      <Datepicker {...args} mask={DatepickerMask.YYYYMMDD} variant="outlined" name="someDatepicker" value={value} onChange={onDatepickerValueChange} onRemove={onDatepickerRemove} isErrorMessageDisplay={false} />
    </div>
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('03.04.2023');

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
  <div style={{ width: '250px', zoom: 3 }}>
    <Datepicker {...args} variant="outlined" value={value} locale={Locale.Ru} onChange={onDatepickerValueChange} />
  </div>
  </ReactThemeContext.Provider>
}

const ThemeDarkTemplate: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('03.04.2023');

  const onDatepickerValueChange = (name: string, value: string, isValid: boolean) => {
    setValue(value);
    // console.log(name, value, isValid);
  }

  const onDatepickerRemove = () => {
    setValue(null);
    // console.log(null);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <div style={{ width: '250px' }}>
      <Datepicker {...args} variant="outlined" name="someDatepicker" value={value} locale={Locale.Ru} onChange={onDatepickerValueChange} onRemove={onDatepickerRemove} isErrorMessageDisplay={false} />
    </div>
  </ReactThemeContext.Provider>
}

export const DarkThemeDatepicker = ThemeDarkTemplate.bind({});
export const LightThemeDatepicker = ThemeLightTemplate.bind({});
export const DarkThemeDatepickerYYYYMMDD = ThemeDarkTemplateYYYYMMDD.bind({});

