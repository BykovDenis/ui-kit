import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Locale from '../../enums/locale';
import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Datepicker from '../src';

describe('Datepicker', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderDatepicker = (overrides: Record<string, unknown> = {}) => {
    const props: any = {
      id: 'datepicker-unit',
      name: 'datepicker-field',
      label: 'Date',
      locale: Locale.En,
      mask: 'yyyy-MM-dd',
      value: '2024-01-15',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onRemove: jest.fn(),
      ...overrides,
    };

    const utils = render(
      <ReactThemeContext.Provider value={themes.light}>
        <Datepicker {...props} />
      </ReactThemeContext.Provider>
    );

    return { ...utils, props };
  };

  test('renders correctly', () => {
    const { container } = renderDatepicker();

    expect(container.firstChild).toMatchSnapshot();
  });

  test('opens and closes calendar popup after day selection', async () => {
    const user = userEvent.setup();
    renderDatepicker({ value: '' });

    const input = screen.getByRole('textbox');
    const dialogSelector = '[data-cy="datepicker-datepicker-unit-dates-dialog"]';

    expect(document.body.querySelector(dialogSelector)).not.toBeInTheDocument();

    await user.click(input);
    expect(document.body.querySelector(dialogSelector)).toBeInTheDocument();

    const dayButton = document.body.querySelector(
      `${dialogSelector} button[name="1"]:not([disabled])`
    ) as HTMLButtonElement;
    expect(dayButton).toBeInTheDocument();
    await user.click(dayButton);

    await waitFor(() => {
      expect(document.body.querySelector(dialogSelector)).not.toBeInTheDocument();
    });
  });

  test('shows min date error and notifies with invalid state', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    renderDatepicker({
      value: '',
      minDate: '2024-01-10',
      onChange,
    });

    const input = screen.getByRole('textbox');
    await user.type(input, '2024-01-01');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('datepicker-field', '2024-01-01', false);
    });

    expect(screen.getByText('Date is less than allowed')).toBeInTheDocument();
  });

  test('clears value and calls onRemove', async () => {
    const user = userEvent.setup();
    const onRemove = jest.fn();
    const { container } = renderDatepicker({
      value: '2024-05-20',
      onRemove,
    });

    const clearButton = container.querySelector('button[data-test="btn-delete-value"]') as HTMLButtonElement;
    expect(clearButton).toBeInTheDocument();

    await user.click(clearButton);

    await waitFor(() => {
      expect(onRemove).toHaveBeenCalledWith('datepicker-field', null);
    });

    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('');
  });
});
