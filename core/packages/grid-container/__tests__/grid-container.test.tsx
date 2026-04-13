import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import GridContainer from '../src';

describe('GridContainer', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders children content', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <GridContainer columns={2}>
          <span>Grid item 1</span>
          <span>Grid item 2</span>
        </GridContainer>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Grid item 1')).toBeInTheDocument();
    expect(screen.getByText('Grid item 2')).toBeInTheDocument();
  });
});
