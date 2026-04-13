import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Locale from '../enums/locale';
import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import DatepickerMask from './enums/datepicker-mask';
import Datepicker from './src';
import IDatepicker from './types/idatepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    type: { control: { type: 'select' }, options: ['button', 'text'] },
    locale: { control: { type: 'select' }, options: ['RU', 'EN'] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
  },
  args: {
    id: 'datepicker',
    name: 'datepicker',
    label: 'label',
    textMessage: 'text message',
    readOnly: false,
    locale: Locale.En,
    fontSize: 14,
    height: 60,
    isErrorMessageDisplayed: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkYYYYMMDD: Story = {
  render: (args: IDatepicker) => {
    const [value, setValue] = useState<string>('2022-05-11');
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <div style={{ width: '250px', zoom: 4 }}>
          <Datepicker
            {...args}
            id="datepicker1"
            name="someDatepicker"
            mask={DatepickerMask.DashedYYYYMMDD}
            variant="outlined"
            value={value}
            onChange={(_, v) => setValue(v)}
            onRemove={() => setValue(null)}
            datesContainerAlign="right"
          />
        </div>
      </ReactThemeContext.Provider>
    );
  },
};

export const LightTheme: Story = {
  render: (args: IDatepicker) => {
    const [value, setValue] = useState<string>('03.11.2023');
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    return (
      <ReactThemeContext.Provider value={themes.light}>
        <div style={{ width: '250px', zoom: 2 }}>
          <Datepicker
            {...args}
            id="light-theme-datepicker"
            name="someDatepickerLight"
            width={170}
            variant="outlined"
            value={value}
            locale={Locale.Ru}
            onChange={(_, v) => setValue(v)}
            datesContainerAlign="left"
          />
        </div>
      </ReactThemeContext.Provider>
    );
  },
};

export const DarkTheme: Story = {
  render: (args: IDatepicker) => {
    const [value, setValue] = useState<string | null>(null);
    const ReactThemeContext = getNewReactThemeContext(themes.dark);

    return (
      <ReactThemeContext.Provider value={themes.dark}>
        <div style={{ width: '250px', zoom: 1 }}>
          <Datepicker
            {...args}
            id="dark-theme-datepicker"
            name="someDatepicker"
            width={200}
            variant="outlined"
            value={value}
            locale={Locale.Ru}
            mask={DatepickerMask.DottedDDMMYYYY}
            onChange={(_, v) => setValue(v)}
            onRemove={() => setValue(null)}
            datesContainerAlign="left"
            minDate="02.07.2025"
            maxDate="06.07.2025"
          />
        </div>
      </ReactThemeContext.Provider>
    );
  },
};
