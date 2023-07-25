import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';
import ISelect from '../types/iselect';
import Variants from '../../enums/variants';
import Select from '../src';
import { themes } from '../../styles/src/themes';

it('Select renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.loanPricing);

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

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.loanPricing}>
      <Select {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
