import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import ListItem from '../src';
import { themes } from '../../styles/src/themes';

it('ListItem renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const props: any = {
    onClick: jest.fn(),
    type: 'button',
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <ListItem {...props}>{props.children}</ListItem>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
