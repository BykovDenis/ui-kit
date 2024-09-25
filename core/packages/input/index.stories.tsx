import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Label from '../label/src';

import Input from './src/index';
import IInput from './types/iinput';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Input',
  component: Input,
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
    textMessage: 'text message',
    isSeparateNumberFormat: false,
    disabled: false,
    error: false,
    isReadOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: 'outlined',
  },
} as Meta<typeof Input>;

const regExp: RegExp = new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

const TemplateDarkTheme: StoryFn<typeof Input> = (args: IInput) => {
  const [value, setValue] = useState('');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(value);
    // console.log(value);
  };

  const onInputRemove = () => {
    setValue(null);
  };

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  // const regExp: RegExp =  new RegExp('[0-9_]', 'gi'); // new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div style={{ width: '190px' }}>
        <Input
          {...args}
          name="input"
          value={value}
          onChange={onInputChange}
          onRemove={onInputRemove}
          textAlign="right"
          isNotClearable={false}
          isNotRunDebounce={true}
        />
      </div>
      <div style={{ width: '190px' }}>
        <Input {...args} name="input" value={value} onChange={onInputChange} onRemove={onInputRemove} />
      </div>
      <Label>{value}</Label>
    </ReactThemeContext.Provider>
  );
};

const TemplateLightTheme: StoryFn<typeof Input> = (args: IInput) => {
  const [value, setValue] = useState('123');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(value);
    console.log(value);
  };

  const onInputRemove = () => {
    setValue('');
  };

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <div style={{ width: '190px' }}>
        <Input
          {...args}
          name="input"
          value={value}
          onChange={onInputChange}
          onRemove={onInputRemove}
          backgroundColor="transparent"
          variant="text"
        />
      </div>
      <div style={{ width: '190px' }}>
        <Input
          {...args}
          name="input"
          value={value}
          onChange={onInputChange}
          onRemove={onInputRemove}
          backgroundColor="transparent"
          isSeparateNumberFormat={true}
          type="number"
          delayDebounce={900}
        />
      </div>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});
