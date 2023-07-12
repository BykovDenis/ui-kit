import React from 'react';
import renderer from 'react-test-renderer';

import FormControl from '../dist';
import IFormControl from 'form-control/types/iform-control';

it('FormControl renders correctly', () => {
  const props: IFormControl = {
    children: 'Form control content',
  };

  const wrapper = renderer.create(<FormControl>{props.children}</FormControl>);
  expect(wrapper).toMatchSnapshot();
});
