import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../src';
import { themes } from '../../styles/src/themes';

it('ListItem renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const props: any = {
    onClick: jest.fn(),
    type: 'button',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <ListItem {...props}>{props.children}</ListItem>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
