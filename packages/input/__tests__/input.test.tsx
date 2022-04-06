import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '../src';

it('Input renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

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
    onChange: 'ƒ onInputChange() {}',
    borderColor: '#ffffff',
    color: '#ffffff',
    backgroundColor: 'transparent',
    name: 'input',
    value: '123',
    onRemove: 'ƒ onInputRemove() {}',
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Input {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
