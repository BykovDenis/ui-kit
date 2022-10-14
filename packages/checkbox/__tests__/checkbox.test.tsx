import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import getNewReactThemeContext from '../../styles/src';

import Checkbox from '../src';
import theme from '../../helpers/theme';

it('Checkbox renders correctly', () => {
  const props: any = {
    disabled: false,
    checked: false,
    indeterminate: false,
    id: 'label1',
    label: 'Label for the Checkbox',
    onChange: jest.fn(),
    tabIndex: '1',
  };

  const ReactThemeContext: any = getNewReactThemeContext(theme);

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <Checkbox {...props} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
