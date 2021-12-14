import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from  './src/index';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//export const Primary: React.VFC = <Button onClick={action('clicked')}>Button</Button>;

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
//   .add('with a theme provider', () => <Button onClick={action('clicked')}>Button</Button>);

const Template: ComponentStory<typeof Button> = () => <Button type="submit" onClick={action('clicked')}>Button</Button>;
const Template1: ComponentStory<typeof Button> = () => <Button onClick={action('clicked')} disabled={true}>Button</Button>;
export const Primary = Template.bind({});
export const Primary1 = Template1.bind({});
