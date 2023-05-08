import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Dropzone from  './src/index';
import TDropZone from './types/tdrop-zone';
import { themes } from '../styles/src/themes';
import getNewReactThemeContext from '../styles/src';

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
  argTypes: {
    disabled: { control: { type: 'radio', options: [ true, false ] }  },
    fontSize: { control: { type: 'select', options: [ 10, 12, 14, 16] }, defaultValue: 14  },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
} as ComponentMeta<typeof Dropzone>;

const ThemeDarkTemplate: ComponentStory<typeof Dropzone> = (args: TDropZone) => {

  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  return <ReactThemeContext.Provider value={themes.dark}>
    <div style={{ width: '400px' }}>
      <Dropzone {...args}  />
    </div>
  </ReactThemeContext.Provider>
}

const ThemeLightTemplate: ComponentStory<typeof Dropzone> = (args: TDropZone) => {

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  return <ReactThemeContext.Provider value={themes.loanPricing}>
    <div style={{ width: '400px' }}>
    <Dropzone {...args}  />
    </div>
  </ReactThemeContext.Provider>
}

export const DarkThemeDropZone = ThemeDarkTemplate.bind({});
export const LightThemeDropZone = ThemeLightTemplate.bind({});


