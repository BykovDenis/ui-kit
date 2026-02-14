import { render, screen } from '@testing-library/react';
import React from 'react';

import TableBody from '../../table-body/src';
import TableCell from '../../table-cell/src';
import TableHead from '../../table-head/src';
import TableRow from '../../table-row/src';
import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Table from '../src';

describe('Table', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders table and children content', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Table>
          <thead>
            <tr>
              <th>Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row value</td>
            </tr>
          </tbody>
        </Table>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Row value')).toBeInTheDocument();
  });

  test('renders integrated table stack with head/body/row/cell', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Table>
          <TableHead>
            <TableRow isHeader={true}>
              <TableCell isHeader={true}>Name</TableCell>
              <TableCell isHeader={true}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Order #1</TableCell>
              <TableCell>Done</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Order #2</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Order #1')).toBeInTheDocument();
    expect(screen.getByText('Order #2')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  test('adds header icon only for header cells', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Table>
          <TableHead>
            <TableRow isHeader={true}>
              <TableCell isHeader={true}>Header cell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Body cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ReactThemeContext.Provider>
    );

    const headerCell = screen.getByText('Header cell').closest('td') as HTMLTableCellElement;
    const bodyCell = screen.getByText('Body cell').closest('td') as HTMLTableCellElement;

    expect(headerCell.querySelector('svg')).toBeInTheDocument();
    expect(bodyCell.querySelector('svg')).not.toBeInTheDocument();
  });
});
