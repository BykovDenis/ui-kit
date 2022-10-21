import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Label from '../src';
import { themes } from '../../styles/src/themes';

it('Input renders correctly', () => {
  const props: any = {
    error: false,
    children: 'Label',
  };

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <Label {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
