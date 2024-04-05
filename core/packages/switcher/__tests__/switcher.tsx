import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Switcher from '../src';
import ISwitcher from '../types/tswitcher';
import { themes } from '../../styles/src/themes';

it('Switcher renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props: ISwitcher = {
    onSwitcherChange: jest.fn(),
    element1: 'Native',
    element2: 'RUB',
    activeElement: 'Native',
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Switcher {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
