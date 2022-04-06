import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Checkbox from '../src';

it('Checkbox renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: any = {
    disabled: false,
    checked: false,
    indeterminate: false,
    id: 'label1',
    label: 'Label for the Checkbox',
    onChange: jest.fn(),
    tabIndex: '1',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Checkbox {...props} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
