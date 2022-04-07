import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Datepicker from '../src';

it('Checkbox renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: any = {
    type: 'button',
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false,
    value: '01.04.2022',
    minDate: '01.01.2021',
    maxDate: '15.09.2029',
    onChange: jest.fn(),
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Datepicker {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
