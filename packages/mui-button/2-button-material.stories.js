import React from 'react';
import { action } from '@storybook/addon-actions';
import {muiTheme} from 'storybook-addon-material-ui';
import { storiesOf  } from '@storybook/react';
import MuiButton from './src/index';

const newTheme = {
  themeName: 'Grey Theme',
  palette: {
    primary1Color: '#00bcd4',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#bdbdbd',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b',
  },
};

storiesOf('Material-UI', module)
// Add the `muiTheme` decorator to provide material-ui support to your stories.
// If you do not specify any arguments it starts with two default themes
// You can also configure `muiTheme` as a global decorator.
  .addDecorator(muiTheme([newTheme]))
  .add('The Button of component', () => (
    <MuiButton onClick={action('clicked')}>Click me</MuiButton>
  ));

// export const DecorateButton = muiTheme([newTheme])(CustomButton);
