import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from '../src';
import theme from '../../helpers/theme';

it('Input renders correctly', () => {
  const props: any = {
    error: false,
    children: 'Label',
  };

  const ReactThemeContext = getNewReactThemeContext(theme);

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <Label {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
