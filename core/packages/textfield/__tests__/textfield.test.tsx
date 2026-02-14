import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import getNewReactThemeContext from '../../styles/src';

import TextField from '../src';
import ITextField from '../types/itext-field';
import { Variant } from '../../enums/variant';
import { themes } from '../../styles/src/themes';

const getProps = (overrides: Partial<ITextField> = {}): ITextField => ({
  isSeparateNumberFormat: false,
  disabled: false,
  error: false,
  readOnly: false,
  isNotClearable: false,
  type: 'text',
  fontSize: 14,
  fontWeight: 400,
  variant: Variant.Outlined,
  textMessage: 'text message',
  label: 'label',
  onChange: jest.fn(),
  id: 'textfield1',
  name: 'textfield1',
  value: '',
  onRemove: jest.fn(),
  ...overrides,
});

const renderTextField = (props: ITextField) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return render(
    <ReactThemeContext.Provider value={themes.light}>
      <TextField {...props} />
    </ReactThemeContext.Provider>
  );
};

it('TextField renders correctly', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const props = getProps();

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <TextField {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('calls onRemove when clear button is clicked', async () => {
  const user = userEvent.setup();
  const onRemove = jest.fn();
  const props = getProps({ value: '123', onRemove });

  const { container } = renderTextField(props);
  const clearButton = container.querySelector('button[data-test="btn-delete-value"]') as HTMLButtonElement;
  expect(clearButton).toBeInTheDocument();

  await user.click(clearButton);

  expect(onRemove).toHaveBeenCalledWith('textfield1', '');
});

it('forwards value change to onChange callback', async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  const props = getProps({ value: '12', onChange, delayDebounce: 0 });
  renderTextField(props);

  const input = screen.getByLabelText('label') as HTMLInputElement;
  await user.clear(input);
  await user.type(input, '1234');

  await waitFor(() => {
    expect(onChange).toHaveBeenCalledWith(expect.any(Object), 'textfield1', '1234');
  });
});

it('renders null and logs error when provider is not initialized', () => {
  const previousConsumer = globalThis.ReactThemeContextConsumer;
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
  globalThis.ReactThemeContextConsumer = undefined;

  const { container } = render(<TextField {...getProps()} />);

  expect(container.firstChild).toBeNull();
  expect(consoleErrorSpy).toHaveBeenCalledWith('The Textfield component. You need an initialization provider');

  globalThis.ReactThemeContextConsumer = previousConsumer;
  consoleErrorSpy.mockRestore();
});
