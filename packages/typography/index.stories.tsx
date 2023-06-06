import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';



import Typography from './src/index';
import ITypography from './types/itypography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: { type: 'select', options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'] }, defaultValue: 'H1' },
    error: { control: { type: 'radio', options: [ true, false ] }, defaultValue: false  },
  },
  args: {
    children: 'Typography'
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args: ITypography) => {



  return <>
    <Typography {...args} >Some text Some text Some text</Typography>
  </>
}

export const NormalTypography = Template.bind({});

