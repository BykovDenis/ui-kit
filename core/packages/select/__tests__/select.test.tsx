import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import getNewReactThemeContext from '../../styles/src';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import ISelect from '../types/iselect';
import { Variant } from '../../enums/variant';
import Select from '../src';
import { themes } from '../../styles/src/themes';

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

const getProps = (overrides: Partial<ISelect> = {}): ISelect => ({
  activeElement: 'List item 1',
  type: 'list-buttons',
  elements: ['List item 1', 'List item 2', 'List item 3', 'List item 4', 'List item 5'],
  variant: Variant.Outlined,
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
  ...overrides,
});

const renderSelect = (props: ISelect) => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);
  return render(
    <ReactThemeContext.Provider value={themes.light}>
      <Select {...props} />
    </ReactThemeContext.Provider>
  );
};

it('Select renders correctly', () => {
  (uuidv4 as jest.Mock).mockReset();
  (uuidv4 as jest.Mock).mockReturnValue('uuid-select-1');

  const ReactThemeContext = getNewReactThemeContext(themes.light);
  const props = getProps();

  const wrapper = renderer.create(
    <ReactThemeContext.Provider value={themes.light}>
      <Select {...props} />
    </ReactThemeContext.Provider>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});

it('opens options and emits onChange for selected item', async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  const props = getProps({ id: 'select-behavior', onChange });

  renderSelect(props);

  await user.click(screen.getByRole('textbox'));
  await user.click(screen.getByRole('button', { name: 'List item 3' }));

  await waitFor(() => {
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'select-custom',
        label: 'List item 3',
        value: 'List item 3',
      })
    );
  });
});

it('clears selected value and emits onRemove + onChange(null)', async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  const onRemove = jest.fn();
  const props = getProps({ id: 'select-clear', onChange, onRemove });
  const { container } = renderSelect(props);

  const clearButton = container.querySelector('button[data-test="btn-delete-value"]') as HTMLButtonElement;
  expect(clearButton).toBeInTheDocument();

  await user.click(clearButton);

  expect(onRemove).toHaveBeenCalledWith('select-custom', null);
  expect(onChange).toHaveBeenCalledWith({
    name: 'select-custom',
    label: null,
    value: null,
    index: null,
  });
});

it('closes options list on Escape', async () => {
  const user = userEvent.setup();
  const props = getProps({ id: 'select-escape' });

  renderSelect(props);

  await user.click(screen.getByRole('textbox'));
  const portalList = document.getElementById('select-escape-list-items');
  expect(portalList).toBeInTheDocument();

  fireEvent.keyUp(document, { key: 'Escape', code: 'Escape', keyCode: 27 });
  await waitFor(() => {
    expect(document.getElementById('select-escape-list-items')).not.toBeInTheDocument();
  });
});
