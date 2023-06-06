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

  const wrapper = renderer.create(
    <>
      <Label {...props} />
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
