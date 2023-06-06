import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Dropzone from  './src/index';
import TDropZone from './types/tdrop-zone';



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



  return <>
    <div style={{ width: '400px' }}>
      <Dropzone {...args}  />
    </div>
  </>
}

const ThemeLightTemplate: ComponentStory<typeof Dropzone> = (args: TDropZone) => {

  

  return <>
    <div style={{ width: '400px' }}>
    <Dropzone {...args}  />
    </div>
  </>
}

export const DarkThemeDropZone = ThemeDarkTemplate.bind({});
export const LightThemeDropZone = ThemeLightTemplate.bind({});


