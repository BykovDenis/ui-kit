import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';

import Radio from '../src';
import { themes } from '../../styles/src/themes';

const renderRadio = (ui: React.ReactElement) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return render(<ReactThemeContext.Provider value={themes.light}>{ui}</ReactThemeContext.Provider>);
};

it('Radio renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const onCheckboxCheck = jest.fn();

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Radio id="radio1" name="radio1" onChange={onCheckboxCheck} checked={true} tabIndex="0" />
      <Radio id="radio2" name="radio1" onChange={onCheckboxCheck} tabIndex="1" />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('triggers onChange when selecting radio by label', () => {
  const onChange = jest.fn();
  renderRadio(<Radio id="radio-click" name="group-1" label="Radio label" onChange={onChange} checked={false} />);

  fireEvent.click(screen.getByLabelText('Radio label'));
  expect(onChange).toHaveBeenCalled();
});

it('renders null and logs error without provider', () => {
  const previousConsumer = globalThis.ReactThemeContextConsumer;
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  globalThis.ReactThemeContextConsumer = undefined;

  const { container } = render(<Radio id="radio-no-provider" name="group-1" onChange={jest.fn()} checked={false} />);

  expect(container.firstChild).toBeNull();
  expect(consoleErrorSpy).toHaveBeenCalledWith('The Radio component. You need an initialization provider');

  globalThis.ReactThemeContextConsumer = previousConsumer;
  consoleErrorSpy.mockRestore();
});
