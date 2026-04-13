import { render } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Divider from '../src';

describe('Divider', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders as separator', () => {
    const { container } = render(
      <ReactThemeContext.Provider value={themes.light}>
        <Divider />
      </ReactThemeContext.Provider>
    );

    expect(container.querySelector('hr')).toBeInTheDocument();
  });
});
