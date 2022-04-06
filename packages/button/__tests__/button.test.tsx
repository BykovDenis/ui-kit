import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '../src/button';

it('Button renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

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
    <ReactThemeContext.Provider value={themeCustom}>
      <Button {...props}>Hello world!</Button>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
