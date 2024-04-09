import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import Datepicker from './src';
import Idatepicker from './types/idatepicker';
import Locale from '../enums/locale';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';
import DatepickerMask from './enums/datepicker-mask';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    type: { control: { type: 'select' }, options: ['button', 'text'] },
    locale: { control: { type: 'select' }, options: ['RU', 'EN'] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
  },
  args: {
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false,
    locale: Locale.En,
    fontSize: 14,
    height: 60,
  },
} as Meta<typeof Datepicker>;

const ThemeDarkTemplateYYYYMMDD: StoryFn<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('2022-05-11');

  const onDatepickerValueChange = (name: string, value: string, isValid: boolean) => {
    setValue(value);
    console.log(name, value, isValid);
  };

  const onDatepickerRemove = () => {
    setValue(null);
    // console.log(null);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ width: '250px', zoom: 4 }}>
        <Datepicker
          {...args}
          id="datepicker1"
          mask={DatepickerMask.YYYYMMDD}
          variant="outlined"
          name="someDatepicker"
          value={value}
          onChange={onDatepickerValueChange}
          onRemove={onDatepickerRemove}
          isErrorMessageDisplayed={false}
          datesContainerAlign="right"
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

const ThemeLightTemplate: StoryFn<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('03.11.2023');

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <div style={{ width: '250px', zoom: 2 }}>
        <Datepicker
          {...args}
          width={170}
          variant="outlined"
          name="someDatepickerLight"
          value={value}
          locale={Locale.Ru}
          onChange={onDatepickerValueChange}
          isErrorMessageDisplayed={false}
          datesContainerAlign="left"
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

const ThemeDarkTemplate: StoryFn<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState('03.09.2023');

  const onDatepickerValueChange = (name: string, value: string, isValid: boolean) => {
    setValue(value);
    // console.log(name, value, isValid);
  };

  const onDatepickerRemove = () => {
    setValue(null);
    // console.log(null);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <div style={{ width: '250px', zoom: 2 }}>
        <Datepicker
          {...args}
          width={170}
          variant="outlined"
          name="someDatepicker"
          value={value}
          locale={Locale.Ru}
          mask={DatepickerMask.DDMMYYYY}
          onChange={onDatepickerValueChange}
          onRemove={onDatepickerRemove}
          isErrorMessageDisplayed={false}
          datesContainerAlign="left"
          textMessage="text message"
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeDatepicker = ThemeDarkTemplate.bind({});
export const LightThemeDatepicker = ThemeLightTemplate.bind({});
export const DarkThemeDatepickerYYYYMMDD = ThemeDarkTemplateYYYYMMDD.bind({});
