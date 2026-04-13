import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import TableBody from '../src';

describe('TableBody', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders tbody and children', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <table>
          <TableBody>
            <tr>
              <td>Body value</td>
            </tr>
          </TableBody>
        </table>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Body value')).toBeInTheDocument();
    expect(document.querySelector('tbody')).toBeInTheDocument();
  });
});
