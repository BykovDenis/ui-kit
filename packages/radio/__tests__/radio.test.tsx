import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Radio from '../src';
import theme from '../../helpers/theme';

it('Radio renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

  const onCheckboxCheck = jest.fn();

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <Radio id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
      <Radio id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
