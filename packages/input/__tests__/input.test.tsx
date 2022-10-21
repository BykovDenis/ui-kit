import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '../src';
import { themes } from '../../styles/src/themes';

it('Input renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

  const props: any = {
    isSeparateNumberFormat: false,
    disabled: false,
    error: false,
    isReadOnly: false,
    isNotClearable: false,
    type: 'text',
    fontSize: 14,
    fontWeight: 400,
    variant: 'outline',
    textMessage: 'text message',
    onChange: jest.fn(),
    onRemove: jest.fn(),
    borderColor: '#ffffff',
    color: '#ffffff',
    backgroundColor: 'transparent',
    name: 'input',
    value: '123',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <Input {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
