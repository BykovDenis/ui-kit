import { action } from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import CustomButton from  './src/index';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

//export const Primary: React.VFC = <Button onClick={action('clicked')}>Button</Button>;

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
//   .add('with a theme provider', () => <Button onClick={action('clicked')}>Button</Button>);

const Template: ComponentStory<typeof CustomButton> = () => <CustomButton onClick={action('clicked')}>Button</CustomButton>;
export const Primary = Template.bind({});
