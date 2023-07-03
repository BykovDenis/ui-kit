import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import TextField from './src';
import ITextField from './types/itext-field';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    disabled: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    error: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    isReadOnly: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    isNotClearable: { control: { type: 'radio', options: [true, false] }, defaultValue: false },
    type: { control: { type: 'select', options: ['number', 'text', 'date', 'file'] }, defaultValue: 'text' },
    fontSize: { control: { type: 'select', options: [10, 12, 14, 16] }, defaultValue: 14 },
    fontWeight: { control: { type: 'select', options: [100, 400, 600, 900] }, defaultValue: 400 },
    textAlign: { control: { type: 'select', options: ['right', 'left', 'center'] } },
    variant: { control: { type: 'select', options: ['normal', 'outlined', 'text'] }, defaultValue: 'outline' },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'label',
    textMessage: 'text message',
  },
} as ComponentMeta<typeof TextField>;

const TemplateLightTheme: ComponentStory<typeof TextField> = (args: ITextField) => {
  const [value, setValue] = useState('');

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    setValue(element?.value);
    console.log(element?.value);
  };

  const onInputDelete = (name: string, value: string) => {
    setValue(value);
  };

  return (
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <div style={{ width: '190px' }}>
        <TextField
          {...args}
          id="textfield1"
          name="textfield1"
          value={value}
          onChange={onInputChange}
          onRemove={onInputDelete}
          isNotUseDebounce={true}
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

const Template: ComponentStory<typeof TextField> = (args: ITextField) => {
  const [value, setValue] = useState('');

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  const regExp: RegExp = new RegExp('[0-9_]', 'gi');

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
