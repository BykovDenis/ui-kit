import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import TextField from '../src';
import ITextField from '../types/itext-field';
import Variant from '../../enums/variant';
import { themes } from '../../styles/src/themes';

it('TextField renders correctly', () => {
  const props: ITextField = {
    isSeparateNumberFormat: false,
    disabled: false,
    error: false,
    isReadOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: Variants.Outlined,
    textMessage: 'text message',
    label: 'label',
    onChange: jest.fn(),
    id: 'textfield1',
    name: 'textfield1',
    value: '',
    onRemove: jest.fn(),
  };

  const wrapper = renderer.create(
    <>
      <TextField {...props} />
    </>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
