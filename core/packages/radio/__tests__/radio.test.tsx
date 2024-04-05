import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Radio from '../src';
import { themes } from '../../styles/src/themes';

it('Radio renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const onCheckboxCheck = jest.fn();

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Radio id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
      <Radio id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
