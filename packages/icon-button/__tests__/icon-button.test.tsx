import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import IconButton from '../src';
import theme from '../../helpers/theme';

it('IconButton renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

  const props: any = {
    disabled: false,
    children: 'Click me',
    onClick: jest.fn(),
    type: 'button',
    color: '#ffffff',
    backgroundColor: 'rgb(8, 166, 82)',
    fontSize: 14,
    fontFamily: 'Roboto, Arial, sans-serif',
    theme: {
      palette: '{baseButtonFontColor: "#ffffff", baseFontColor: "#3333333"}',
      fontFamily: 'Roboto, Arial, sans-serif',
      baseFontSize: 14,
      mainBlackColor: 'rgba(0,0,0,0.85)',
      mainGrayColor: '#bdbdbd',
      mainWhiteColor: '#ffffff',
      mainBackgroundColor: '#ffffff',
    },
    focusColor: 'rgb(8, 166, 82)',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <IconButton {...props}>Hello world!</IconButton>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
