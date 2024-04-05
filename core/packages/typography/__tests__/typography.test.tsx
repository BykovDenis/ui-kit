import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import { themes } from '../../styles/src/themes';
import Typography from '../src';

it('Typography renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Typography variant="H1">Some text</Typography>
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
