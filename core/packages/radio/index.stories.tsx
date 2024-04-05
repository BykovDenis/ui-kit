import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React, { Fragment } from 'react';

import Radio from './src/index';
import Iradio from './types/iradio';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: { type: 'radio' }, options: [true, false] },
    fontSize: { control: { type: 'select' }, options: ['10px', '12px', '14px', '16px'] },
    isIconDisabled: { control: { type: 'radio' }, options: [true, false] },
  },
  args: {
    id: 'label1',
    disabled: false,
    label: 'Label for the Radio',
    isIconDisabled: false,
  },
} as Meta<typeof Radio>;

const ThemeDarkTemplate: StoryFn<typeof Radio> = (args: Iradio) => {
  const onCheckboxCheck = () => {
    action('checked');
  };

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return (
    <ReactThemeContext.Provider value={themes.dark}>
      <Fragment>
        <Radio {...args} id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
        <Radio {...args} id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
      </Fragment>
    </ReactThemeContext.Provider>
  );
};

const ThemeLightTemplate: StoryFn<typeof Radio> = (args: Iradio) => {
  const onCheckboxCheck = () => {
    action('checked');
  };

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  return (
    <ReactThemeContext.Provider value={themes.light}>
      <Fragment>
        <Radio {...args} id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
        <Radio {...args} id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
      </Fragment>
    </ReactThemeContext.Provider>
  );
};

export const DarkThemeRadio = ThemeDarkTemplate.bind({});
export const LightThemeRadio = ThemeLightTemplate.bind({});
