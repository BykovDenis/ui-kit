import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import ListItem from '../src';
import { themes } from '../../styles/src/themes';

it('ListItem renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props: any = {
    onClick: jest.fn(),
    type: 'button',
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <ListItem {...props}>{props.children}</ListItem>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
