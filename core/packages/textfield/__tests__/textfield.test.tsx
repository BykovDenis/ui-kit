import React from 'react';
import renderer from 'react-test-renderer';
import getNewReactThemeContext from '../../styles/src';

import TextField from '../src';
import ITextField from '../types/itext-field';
import { Variant } from '../../enums/variant';
import { themes } from '../../styles/src/themes';

it('TextField renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props: ITextField = {
    isSeparateNumberFormat: false,
    disabled: false,
    error: false,
    readOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: Variant.Outlined,
    textMessage: 'text message',
    label: 'label',
    onChange: jest.fn(),
    id: 'textfield1',
    name: 'textfield1',
    value: '',
    onRemove: jest.fn(),
  };

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <TextField {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
