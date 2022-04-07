import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import TextField from '../src';
import ITextField from '../types/itext-field';
import Variants from '../../enums/variants';

it('Input renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

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
    <ReactThemeContext.Provider value={themeCustom}>
      <TextField {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
