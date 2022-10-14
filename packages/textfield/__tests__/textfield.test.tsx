import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextField from '../src';
import ITextField from '../types/itext-field';
import Variants from '../../enums/variants';
import theme from '../../helpers/theme';

it('Input renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(theme);

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

  const { asFragment } = render(
    <ReactThemeContext.Provider value={theme}>
      <TextField {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
