import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Checkbox from '../src';
import { themes } from '../../styles/src/themes';

it('Checkbox renders correctly', () => {
  const props: any = {
    disabled: false,
    checked: false,
    indeterminate: false,
    id: 'label1',
    label: 'Label for the Checkbox',
    onChange: jest.fn(),
    tabIndex: '1',
  };

  const ReactThemeContext: any = getNewReactThemeContext(themes.loanPricing);

  const wrapper = renderer.create(
    <>
      <Checkbox {...props} tabIndex="1" />
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
