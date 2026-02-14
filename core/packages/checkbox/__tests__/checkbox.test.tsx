import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Checkbox from '../src';
import { themes } from '../../styles/src/themes';

const renderCheckbox = (props: any) => {
  const ReactThemeContext: any = getNewReactThemeContext(themes.light);
  return render(
    <ReactThemeContext.Provider value={themes.light}>
      <Checkbox {...props} />
    </ReactThemeContext.Provider>
  );
};

it('Checkbox renders correctly', () => {
  const props: any = {
    disabled: false,
    checked: false,
    indeterminate: false,
    id: 'label1',
    label: 'Label for the Checkbox',
    onChange: jest.fn(),
    tabIndex: '1',
  };

  const ReactThemeContext: any = getNewReactThemeContext(themes.light);

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Checkbox {...props} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('triggers onChange when clicked by label', () => {
  const onChange = jest.fn();
  renderCheckbox({
    id: 'checkbox-click',
    name: 'checkbox-click',
    label: 'Checkbox label',
    checked: false,
    onChange,
  });

  fireEvent.click(screen.getByLabelText('Checkbox label'));
  expect(onChange).toHaveBeenCalled();
});

it('renders null and logs error without provider', () => {
  const previousConsumer = globalThis.ReactThemeContextConsumer;
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  globalThis.ReactThemeContextConsumer = undefined;

  const { container } = render(
    <Checkbox id="checkbox-missing-provider" label="Checkbox label" checked={false} onChange={jest.fn()} />
  );

  expect(container.firstChild).toBeNull();
  expect(consoleErrorSpy).toHaveBeenCalledWith('The Checkbox component. You need an initialization provider');

  globalThis.ReactThemeContextConsumer = previousConsumer;
  consoleErrorSpy.mockRestore();
});
