import {ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';

import Input from  './src/index';
import IInput from './types/iinput';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    isSeparateNumberFormat: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    disabled: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    isReadOnly: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false },
    isNotClearable: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
    type: { control: { type: 'select', options: [ 'number', 'text', 'date', 'file' ] }, defaultValue: 'text'   },
    fontSize: { control: { type: 'select', options: [ 10,12,14,16 ] }, defaultValue: 14  },
    fontWeight: { control: { type: 'select', options: [ 100, 400, 600, 900 ] }, defaultValue: 400  },
    textAlign: { control: { type: 'select', options: [ 'right', 'left', 'center' ] }  },
    variant: { control: { type: 'select', options: [ 'normal', 'outlined', 'text' ]}, defaultValue: 'outline'   },
    onChange: { action: 'changed' }
  },
  args: {
    // value: 'The input',
    textMessage: 'text message'
  },
} as ComponentMeta<typeof Input>;

const regExp: RegExp = new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

const TemplateDarkTheme: ComponentStory<typeof Input> = (args: IInput) => {

  const [ value, setValue ] = useState(6);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(Number(value));
    console.log(value);
  }

  const onInputRemove = () => {
    setValue(null);
  }

  const ReactThemeContext = getNewReactThemeContext(themes.dark);
  // const regExp: RegExp =  new RegExp('[0-9_]', 'gi'); // new RegExp('^(pg_|_|[0-9])|[^a-z0-9_]', 'gi');

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <div  style={{ width: '190px', zoom: 5 }}>
        <Input {...args} name="input" type="number" isNotRunDebounce={true} value={value} onChange={onInputChange} onRemove={onInputRemove} backgroundColor="transparent"  />
      </div>
      <div style={{ width: '190px' }}>
        <Input {...args} name="input" type="number" value={value} min={1} max={10} onChange={onInputChange} onRemove={onInputRemove} backgroundColor="transparent"  isSeparateNumberFormat={true} />
      </div>
    </ReactThemeContext.Provider>)
}

const TemplateLightTheme: ComponentStory<typeof Input> = (args: IInput) => {

  const [ value, setValue ] = useState('123');

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const element = evt?.target;
    const value: string = element?.value;
    setValue(value);
    console.log(value);
  }

  const onInputRemove = () => {
    setValue('');
  }

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return (
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <div>
        <Input {...args} name="input" value={value} onChange={onInputChange} onRemove={onInputRemove} backgroundColor="transparent" regExp={regExp}  />
      </div>
      <div style={{ width: '190px' }}>
        <Input {...args} name="input" value={value} onChange={onInputChange} onRemove={onInputRemove} backgroundColor="transparent"  isSeparateNumberFormat={true} />
      </div>
    </ReactThemeContext.Provider>)
}

export const DarkThemeTextField = TemplateDarkTheme.bind({});
export const LightThemeTextField = TemplateLightTheme.bind({});