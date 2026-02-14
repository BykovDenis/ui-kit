import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import TableRow from '../src';

describe('TableRow', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders row and children', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <table>
          <tbody>
            <TableRow>
              <td>Row cell</td>
            </TableRow>
          </tbody>
        </table>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Row cell')).toBeInTheDocument();
    expect(screen.getByRole('row')).toBeInTheDocument();
  });
});
