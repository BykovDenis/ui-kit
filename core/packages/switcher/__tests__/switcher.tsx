import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';

import Switcher from '../src';
import ISwitcher from '../types/tswitcher';
import { themes } from '../../styles/src/themes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const getProps = (overrides: Partial<ISwitcher> = {}): ISwitcher => ({
  onSwitcherChange: jest.fn(),
  element1: 'Native',
  element2: 'RUB',
  activeElement: 'Native',
  id: 'switcher-id',
  ...overrides,
});

const renderSwitcher = (props: ISwitcher) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return render(
    <ReactThemeContext.Provider value={themes.light}>
      <Switcher {...props} />
    </ReactThemeContext.Provider>
  );
};

it('Switcher renders correctly', () => {
  (uuidv4 as jest.Mock).mockReset();
  (uuidv4 as jest.Mock).mockReturnValueOnce('uuid-switcher-1').mockReturnValueOnce('uuid-switcher-2');

  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props = getProps({ id: undefined });

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Switcher {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('calls onSwitcherChange with selected value', () => {
  (uuidv4 as jest.Mock).mockReset();
  (uuidv4 as jest.Mock).mockReturnValueOnce('uuid-switcher-1').mockReturnValueOnce('uuid-switcher-2');

  const onSwitcherChange = jest.fn();
  renderSwitcher(getProps({ onSwitcherChange, name: 'currency' }));

  fireEvent.click(screen.getByLabelText('RUB'));

  expect(onSwitcherChange).toHaveBeenCalledWith('RUB', 'currency', expect.any(Object));
});

it('does not call onSwitcherChange when disabled', () => {
  const onSwitcherChange = jest.fn();
  renderSwitcher(getProps({ onSwitcherChange, disabled: true }));

  fireEvent.click(screen.getByLabelText('RUB'));

  expect(onSwitcherChange).not.toHaveBeenCalled();
});

it('renders null and logs error when provider is not initialized', () => {
  const previousConsumer = globalThis.ReactThemeContextConsumer;
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  globalThis.ReactThemeContextConsumer = undefined;

  const { container } = render(<Switcher {...getProps()} />);

  expect(container.firstChild).toBeNull();
  expect(consoleErrorSpy).toHaveBeenCalledWith('You need an initialization provider');

  globalThis.ReactThemeContextConsumer = previousConsumer;
  consoleErrorSpy.mockRestore();
});
