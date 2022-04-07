import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Switcher from '../src';
import ISwitcher from '../types/iswitcher';

it('Switcher renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: ISwitcher = {
    onSwitcherChange: jest.fn(),
    element1: 'Native',
    element2: 'RUB',
    activeElement: 'Native',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Switcher {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
