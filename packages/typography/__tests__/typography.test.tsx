import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { themes } from '../../styles/src/themes';
import Typography from '../src';

it('Typography renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <Typography variant="H1">Some text</Typography>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
