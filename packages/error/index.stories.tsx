import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Error from './src';

storiesOf('Error component', module).add('with text', () => <Error />);
