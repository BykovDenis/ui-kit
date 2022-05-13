import React from 'react';
import { themes } from '../../styles/src';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ISelect from '../types/iselect';
import Variants from '../../enums/variants';
import Select from '../src';

it('Select renders correctly', () => {
  const themeCustom: any = {
    ...themes.loanPricing,
    fontFamily: 'SBSansInterface", "Open Sans", "Arial", sans-serif',
  };
  const ReactThemeContext: any = React.createContext(themeCustom);

  const props: ISelect = {
    activeElement: 'List item 1',
    type: 'list-buttons',
    elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
    variant: Variants.Outlined,
    label: 'Select 1',
    name: 'select-custom',
    id: 'select',
    color: '#ffffff',
    hoverColor: '#ff0000',
    focusColor: '#0000ff',
    borderColor: '#ffffff',
    indicatorColor: '#ffffff',
    isCreatable: true,
    onChange: jest.fn(),
    onRemove: jest.fn(),
  };

  const { asFragment } = render(
    <ReactThemeContext.Provider value={themeCustom}>
      <Select {...props} />
    </ReactThemeContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
