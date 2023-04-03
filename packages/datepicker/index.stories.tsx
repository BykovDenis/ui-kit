import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Datepicker from './src';
import Idatepicker from './types/idatepicker';
import Locales from '../enums/locales';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    type: { control: { type: 'select', options: [ 'button', 'text'] }, defaultValue: 'button'  }
  },
  args: {
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false
  },
} as ComponentMeta<typeof Datepicker>;

const ThemeLightTemplate: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState(null);

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
  <div style={{ width: '250px' }}>
    <Datepicker {...args} variant="outlined" value={value} locale={Locales.Ru} onChange={onDatepickerValueChange} />
  </div>
  </ReactThemeContext.Provider>
}

const ThemeDarkTemplate: ComponentStory<typeof Datepicker> = (args: Idatepicker) => {
  const [value, setValue] = useState(null);

  const onDatepickerValueChange = (name: string, value: string) => {
    setValue(value);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <div style={{ width: '250px' }}>
      <Datepicker {...args} variant="outlined" value={value} locale={Locales.Ru} onChange={onDatepickerValueChange} />
    </div>
  </ReactThemeContext.Provider>
}

export const DarkThemeDatepicker = ThemeDarkTemplate.bind({});
export const LightThemeDatepicker = ThemeLightTemplate.bind({});

