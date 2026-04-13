import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import TableHead from '../src';

describe('TableHead', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders thead and children', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <table>
          <TableHead>
            <tr>
              <th>Head title</th>
            </tr>
          </TableHead>
        </table>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Head title')).toBeInTheDocument();
    expect(document.querySelector('thead')).toBeInTheDocument();
  });
});
