import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Radio from '../src';

it('Radio renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const onCheckboxCheck = jest.fn();

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Radio id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
      <Radio id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
