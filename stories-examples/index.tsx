import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
};

export const Primary = <button onClick={action('clicked')}>Button</button>;

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
//   .add('with a theme provider', () => <Button onClick={action('clicked')}>Button</Button>);
