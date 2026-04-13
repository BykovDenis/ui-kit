import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import TableColumnsVisible from '../src';

describe('TableColumnsVisible', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  beforeEach(() => {
    localStorage.clear();
  });

  test('renders default selected columns', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <TableColumnsVisible
          name="columns-visible-test"
          columnNames={['Name', 'Status', 'Amount']}
          columnNamesDefaultSelected={['Name', 'Status']}
        />
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('adds and removes columns via controls', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    const { container } = render(
      <ReactThemeContext.Provider value={themes.light}>
        <TableColumnsVisible
          name="columns-visible-test"
          columnNames={['Name', 'Status', 'Amount']}
          columnNamesDefaultSelected={['Name']}
          onChange={onChange}
        />
      </ReactThemeContext.Provider>
    );

    await user.click(screen.getByRole('button', { name: /add items/i }));
    await user.click(container.querySelector('button[data-name="Status"]') as HTMLButtonElement);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['Name', 'Status']));
    });

    await user.click(container.querySelector('button[data-name="Name"]') as HTMLButtonElement);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(expect.not.arrayContaining(['Name']));
    });
  });
});
