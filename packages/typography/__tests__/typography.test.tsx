import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import { themes } from '../../styles/src/themes';
import Typography from '../src';

it('Typography renders correctly', () => {
  const wrapper = renderer.create(
    <>
      <Typography variant="H1">Some text</Typography>
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
