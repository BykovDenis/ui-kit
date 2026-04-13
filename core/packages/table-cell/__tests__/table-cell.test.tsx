import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import TableCell from '../src';

describe('TableCell', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders regular cell without chevron icon', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <table>
          <tbody>
            <tr>
              <TableCell>Value</TableCell>
            </tr>
          </tbody>
        </table>
      </ReactThemeContext.Provider>
    );

    const cell = screen.getByText('Value').closest('td') as HTMLTableCellElement;
    expect(cell).toBeInTheDocument();
    expect(cell.querySelector('svg')).not.toBeInTheDocument();
  });

  test('renders header cell with chevron icon', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <table>
          <thead>
            <tr>
              <TableCell isHeader={true}>Header</TableCell>
            </tr>
          </thead>
        </table>
      </ReactThemeContext.Provider>
    );

    const cell = screen.getByText('Header').closest('td') as HTMLTableCellElement;
    expect(cell).toBeInTheDocument();
    expect(cell.querySelector('svg')).toBeInTheDocument();
  });
});
