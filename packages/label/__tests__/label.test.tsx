import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Label from '../src';
import { themes } from '../../styles/src/themes';

it('Input renders correctly', () => {
  const props: any = {
    error: false,
    children: 'Label',
  };

  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <Label {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
