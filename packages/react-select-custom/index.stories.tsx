import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ReactSelectCustom from './src';

storiesOf('Select component', module).add('with text', () => (
  <ReactSelectCustom activeElement="one" elements={['one', 'two', 'three']} />
));
