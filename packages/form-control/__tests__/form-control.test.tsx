import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormControl from '../dist';
import IFormControl from 'form-control/types/iform-control';

it('FormControl renders correctly', () => {
  const props: IFormControl = {
    children: 'Form control content',
  };

  const { asFragment } = render(<FormControl>{props.children}</FormControl>);
  expect(asFragment()).toMatchSnapshot();
});
