import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import TextField from './src';
import ITextField from './types/itext-field';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio' }, options: [true, false] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
    error: { control: { type: 'radio' }, options: [true, false] },
    isReadOnly: { control: { type: 'radio' }, options: [true, false] },
    isNotClearable: { control: { type: 'radio' }, options: [true, false] },
    type: { control: { type: 'select' }, options: ['number', 'text', 'date', 'file'] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    fontWeight: { control: { type: 'select' }, options: [100, 400, 600, 900] },
    textAlign: { control: { type: 'select' }, options: ['right', 'left', 'center'] },
    variant: { control: { type: 'select' }, options: ['normal', 'outlined', 'text'] },
    onChange: { action: 'changed' },
  },
  args: {
    isSeparateNumberFormat: false,
    disabled: false,
    label: 'label',
    textMessage: 'text message',
    error: false,
    isReadOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: 'outlined',
  },
} as Meta<typeof TextField>;

const TemplateLightTheme: StoryFn<typeof TextField> = (args: ITextField) => {
  const [value, setValue] = useState('');

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  };

  const onInputDelete = (name: string, value: string) => {
    setValue(value);
  };

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <div style={{ width: '190px' }}>
        <TextField
          {...args}
          id="textfield1"
          name="textfield1"
          value={value}
          onChange={onInputChange}
          onRemove={onInputDelete}
          isNotRunDebounce={true}
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

const Template: StoryFn<typeof TextField> = (args: ITextField) => {
  const [value, setValue] = useState('');

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  const regExp: RegExp = /[a-z_]/gi; // new RegExp('[0-9_]', 'gi');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  };

  const onInputDelete = (name: string, value: string) => {
    setValue(value);
  };

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ width: '190px' }}>
        <TextField
          {...args}
          id="textfield1"
          name="textfield1"
          value={value}
          onChange={onInputChange}
          onRemove={onInputDelete}
          regExp={regExp}
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTextField = Template.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});
