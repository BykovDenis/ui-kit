import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Datepicker from '../src/index';
import theme from '../../helpers/theme';

it('Checkbox renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

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
    <ReactThemeContext.Provider value={theme}>
      <Datepicker {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
