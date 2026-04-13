import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import ProgressBar from '../src';

describe('ProgressBar', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders progress value text', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <ProgressBar progress={65} />
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  test('renders disabled state value text', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <ProgressBar progress={20} disabled={true} />
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('20%')).toBeInTheDocument();
  });
});
