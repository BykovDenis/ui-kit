import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Datepicker from '../src/index';
import { themes } from '../../styles/src/themes';

it('Checkbox renders correctly', () => {
  const props: any = {
    type: 'button',
    textMessage: 'text message',
    label: 'label',
    isReadOnly: false,
    value: '01.04.2022',
    minDate: '01.01.2021',
    maxDate: '15.09.2029',
    onChange: jest.fn(),
  };

  const wrapper = renderer.create(
    <>
      <Datepicker {...props} />
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
