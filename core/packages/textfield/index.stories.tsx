import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import getNewReactThemeContext from '../styles/src';
import { themes } from '../styles/src/themes';
import TextField from './src';
import ITextField from './types/itext-field';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio' }, options: [true, false] },
    disabled: { control: { type: 'radio' }, options: [true, false] },
    readOnly: { control: { type: 'radio' }, options: [true, false] },
    error: { control: { type: 'radio' }, options: [true, false] },
    isNotClearable: { control: { type: 'radio' }, options: [true, false] },
    type: { control: { type: 'select' }, options: ['number', 'text', 'date', 'file'] },
    fontSize: { control: { type: 'select' }, options: [10, 12, 14, 16] },
    fontWeight: { control: { type: 'select' }, options: [100, 400, 600, 900] },
    textAlign: { control: { type: 'select' }, options: ['right', 'left', 'center'] },
    variant: { control: { type: 'select' }, options: ['normal', 'outlined', 'text'] },
  },
  args: {
    isSeparateNumberFormat: false,
    disabled: false,
    label: 'label',
    textMessage: 'text message',
    error: false,
    readOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: 'outlined',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  render: (args: ITextField) => {
    const ReactThemeContext = getNewReactThemeContext(themes.light);

    function Controlled() {
      const [value, setValue] = useState('');

      const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const element = evt?.target;
        setValue(element?.value ?? '');
      };

      const onInputDelete = (_name: string, nextValue: string) => {
        setValue(nextValue);
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
    }

    return <Controlled />;
  },
};

export const DarkTheme: Story = {
  render: (args: ITextField) => {
    const ReactThemeContext = getNewReactThemeContext(themes.dark);
    const regExp: RegExp = /[a-z_]/gi;

    function Controlled() {
      const [value, setValue] = useState('');

      const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const element = evt?.target;
        setValue(element?.value ?? '');
      };

      const onInputDelete = (_name: string, nextValue: string) => {
        setValue(nextValue);
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
    }

    return <Controlled />;
  },
};
