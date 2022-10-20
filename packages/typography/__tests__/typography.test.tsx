import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import theme from '../../helpers/theme';
import Typography from '../src';

it('Typography renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <Typography variant="H1">Some text</Typography>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
