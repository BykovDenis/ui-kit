import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Switcher from '../src';
import ISwitcher from '../types/iswitcher';
import theme from '../../helpers/theme';

it('Switcher renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

  const props: ISwitcher = {
    onSwitcherChange: jest.fn(),
    element1: 'Native',
    element2: 'RUB',
    activeElement: 'Native',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <Switcher {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
