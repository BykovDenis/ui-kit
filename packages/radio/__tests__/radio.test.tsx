import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Radio from '../src';
import { themes } from '../../styles/src/themes';

it('Radio renders correctly', () => {
  const onCheckboxCheck = jest.fn();

  const wrapper = renderer.create(
    <>
      <Radio id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
      <Radio id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
