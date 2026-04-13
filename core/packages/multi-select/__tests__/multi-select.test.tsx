import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import MultiSelect from '../src';
import TMultiSelectOption from '../types/tmulti-select-option';
import TMultiSelectObjects from '../types/tmulti-select-objects';

describe('MultiSelect', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ReactThemeContext.Provider value={themes.light}>{ui}</ReactThemeContext.Provider>);

  beforeEach(() => {
    localStorage.clear();
  });

  test('returns null when no elements are provided', () => {
    const { container } = renderWithTheme(<MultiSelect id="ms-empty" name="multi-select-empty" elementNames={[]} />);

    expect(container.firstChild).toBeNull();
  });

  test('supports string items selection and unselection actions', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { container } = renderWithTheme(
      <MultiSelect
        id="ms-string"
        name="multi-select-string"
        label="Columns"
        elementNames={['Name', 'Status', 'Amount']}
        elementNamesDefaultSelected={['Name']}
        onChange={onChange}
      />
    );

    expect(screen.getByText('Name')).toBeInTheDocument();

    const expandButton = container.querySelector('[data-cy="ms-string-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);

    await user.click(screen.getByRole('button', { name: /status/i }));
    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(expect.arrayContaining(['Name', 'Status']));
    });
    expect(screen.getByText('Status')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /unselect all/i }));
    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith([]);
    });
  });

  test('select all selects every string item', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { container } = renderWithTheme(
      <MultiSelect
        id="ms-select-all"
        name="multi-select-all"
        elementNames={['Name', 'Status', 'Amount']}
        onChange={onChange}
      />
    );

    const expandButton = container.querySelector('[data-cy="ms-select-all-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);
    await user.click(screen.getByRole('button', { name: /^select all/i }));

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith(expect.arrayContaining(['Name', 'Status', 'Amount']));
    });
  });

  test('supports objects options and sends selected objects to onChange', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const options: Array<TMultiSelectOption> = [
      { label: 'Name', value: 'name' },
      { label: 'Status', value: 'status' },
    ];
    const MultiSelectObjectsComponent = MultiSelect as React.FunctionComponent<TMultiSelectObjects>;
    const objectProps = {
      id: 'ms-objects',
      name: 'multi-select-objects',
      elementNames: options,
      elementNamesDefaultSelected: [{ label: 'Name', value: 'name' }],
      onChange,
    } as unknown as TMultiSelectObjects;

    const { container } = renderWithTheme(<MultiSelectObjectsComponent {...objectProps} />);

    const expandButton = container.querySelector('[data-cy="ms-objects-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);
    await user.click(screen.getByRole('button', { name: /status/i }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ label: 'Name', value: 'name' }),
          expect.objectContaining({ label: 'Status', value: 'status' }),
        ])
      );
    });
  });

  test('uses localStorage for object selections and supports select/unselect all', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const options: Array<TMultiSelectOption> = [
      { label: 'Name', value: 'name' },
      { label: 'Status', value: 'status' },
      { label: 'Amount', value: 'amount' },
    ];
    localStorage.setItem('ms-storage', JSON.stringify([{ label: 'Status', value: 'status' }]));

    const MultiSelectObjectsComponent = MultiSelect as React.FunctionComponent<TMultiSelectObjects>;
    const objectProps = {
      id: 'ms-storage',
      name: 'ms-storage',
      isUseLocaleStorage: true,
      elementNames: options,
      onChange,
    } as unknown as TMultiSelectObjects;

    const { container } = renderWithTheme(<MultiSelectObjectsComponent {...objectProps} />);
    await waitFor(() => {
      expect(screen.getByText('Status')).toBeInTheDocument();
    });

    const expandButton = container.querySelector('[data-cy="ms-storage-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);
    await user.click(screen.getByRole('button', { name: /^select all/i }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ label: 'Name', value: 'name' }),
          expect.objectContaining({ label: 'Status', value: 'status' }),
          expect.objectContaining({ label: 'Amount', value: 'amount' }),
        ])
      );
    });

    await user.click(expandButton);
    await user.click(screen.getByRole('button', { name: /unselect all/i }));

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith([]);
      expect(localStorage.getItem('ms-storage')).toBe('[]');
    });
  });

  test('filters object options by search text', async () => {
    const user = userEvent.setup();
    const options: Array<TMultiSelectOption> = [
      { label: 'Name', value: 'name' },
      { label: 'Status', value: 'status' },
    ];
    const MultiSelectObjectsComponent = MultiSelect as React.FunctionComponent<TMultiSelectObjects>;
    const objectProps = {
      id: 'ms-search-objects',
      name: 'ms-search-objects',
      elementNames: options,
      elementNamesDefaultSelected: [],
    } as unknown as TMultiSelectObjects;

    const { container } = renderWithTheme(<MultiSelectObjectsComponent {...objectProps} />);
    const expandButton = container.querySelector('[data-cy="ms-search-objects-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);

    const searchInput = document.querySelector('[data-cy="ms-search-objects-search-input"]') as HTMLInputElement;
    await user.type(searchInput, 'sta');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /status/i })).toBeInTheDocument();
    });
  });

  test('string mode with localStorage supports add/remove/select-all/unselect-all and search clear', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { container } = renderWithTheme(
      <MultiSelect
        id="ms-string-storage"
        name="ms-string-storage"
        elementNames={['Name', 'Status', 'Amount']}
        elementNamesDefaultSelected={['Name']}
        isUseLocaleStorage={true}
        sortDirection="asc"
        onChange={onChange}
      />
    );

    expect(localStorage.getItem('ms-string-storage')).toBe('Name');

    const expandButton = container.querySelector('[data-cy="ms-string-storage-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);
    await user.click(screen.getByRole('button', { name: /^amount$/i }));

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
      expect(localStorage.getItem('ms-string-storage')).toContain('Amount');
      expect(localStorage.getItem('ms-string-storage')).toContain('Name');
    });

    const removeButton = container.querySelector('#ms-string-storage-0-button') as HTMLButtonElement;
    await user.click(removeButton);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['Name']));
    });

    await user.click(screen.getByRole('button', { name: /^select all/i }));
    await waitFor(() => {
      const stored = localStorage.getItem('ms-string-storage') || '';
      expect(stored).toContain('Amount');
      expect(stored).toContain('Name');
      expect(stored).toContain('Status');
    });

    const expandButtonAfterSelectAll = container.querySelector(
      '[data-cy="ms-string-storage-btn-expand"]'
    ) as HTMLButtonElement;
    await user.click(expandButtonAfterSelectAll);
    await user.click(screen.getByRole('button', { name: /unselect all/i }));
    await waitFor(() => {
      expect(localStorage.getItem('ms-string-storage')).toBe('');
    });
  });

  test('string mode search input can be typed and cleared', async () => {
    const user = userEvent.setup();
    const { container } = renderWithTheme(
      <MultiSelect id="ms-string-search" name="ms-string-search" elementNames={['Name', 'Status', 'Amount']} />
    );

    const expandButton = container.querySelector('[data-cy="ms-string-search-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);

    const searchInput = document.querySelector('input[name="search-values"]') as HTMLInputElement;
    await user.type(searchInput, 'sta');
    const clearButton = document.querySelector('button[data-test="btn-delete-value"]') as HTMLButtonElement;
    await user.click(clearButton);

    expect(searchInput.value).toBe('');
  });

  test('closes string list by Escape and outside mouseup', async () => {
    const user = userEvent.setup();
    const { container } = renderWithTheme(
      <MultiSelect id="ms-string-close" name="ms-string-close" elementNames={['Name', 'Status']} />
    );

    const expandButton = container.querySelector('[data-cy="ms-string-close-btn-expand"]') as HTMLButtonElement;
    await user.click(expandButton);
    expect(document.querySelector('[data-cy="ms-string-close-toggle-container"]')).toBeInTheDocument();

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape', keyCode: 27 });
    await waitFor(() => {
      expect(document.querySelector('[data-cy="ms-string-close-toggle-container"]')).not.toBeInTheDocument();
    });

    await user.click(expandButton);
    fireEvent.mouseUp(document.body);
    await waitFor(() => {
      expect(document.querySelector('[data-cy="ms-string-close-toggle-container"]')).not.toBeInTheDocument();
    });
  });

  test('supports atlas variant and container click expansion branches', async () => {
    const { container } = renderWithTheme(
      <MultiSelect
        id="ms-atlas"
        name="ms-atlas"
        variant="atlas"
        elementNames={['Name', 'Status']}
        elementNamesDefaultSelected={['Name']}
      />
    );

    const borderRight = container.querySelector('[data-id="multi-select-border-right"]') as HTMLDivElement;
    fireEvent.click(borderRight);

    await waitFor(() => {
      expect(document.querySelector('[data-cy="ms-atlas-toggle-container"]')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^name$/i })).toBeInTheDocument();
    });

    const list = document.querySelector('[data-cy="ms-atlas-list"]') as HTMLElement;
    expect(list).toBeInTheDocument();
    fireEvent.keyUp(list, { key: 'Escape', code: 'Escape', keyCode: 27 });

    await waitFor(() => {
      expect(document.querySelector('[data-cy="ms-atlas-toggle-container"]')).not.toBeInTheDocument();
    });
  });

  test('renders null and logs error when provider is not initialized for string mode', () => {
    const previousConsumer = globalThis.ReactThemeContextConsumer;
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    globalThis.ReactThemeContextConsumer = undefined;

    const { container } = render(
      <MultiSelect id="ms-no-provider" name="ms-no-provider" elementNames={['Name', 'Status']} />
    );

    expect(container.firstChild).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith('MultiSelect. You need an initialization provider');

    globalThis.ReactThemeContextConsumer = previousConsumer;
    consoleErrorSpy.mockRestore();
  });
});
