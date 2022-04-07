import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListItem from '../src';

it('ListItem renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: any = {
    onClick: jest.fn(),
    type: 'button',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <ListItem {...props}>{props.children}</ListItem>
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
