import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from  './src/index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button type="submit" onClick={action('clicked')}>Button</Button>;
const Template1: ComponentStory<typeof Button> = () => <Button onClick={action('clicked')} disabled={true}>Button</Button>;
export const NormalButton = Template.bind({});
export const DisabledButton = Template1.bind({});
