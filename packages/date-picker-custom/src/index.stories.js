import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withStyles } from '@material-ui/core/styles';

import DatePickerCustom from './';

storiesOf('DatePickerCustom', module).add('with text', () => (
  <DatePickerCustom value={'2019.01.01'} onChange={action('clicked')} />
));
