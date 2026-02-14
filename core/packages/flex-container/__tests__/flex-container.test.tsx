import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import FlexContainer from '../src';

describe('FlexContainer', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders children content', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <FlexContainer>
          <span>Flex content</span>
        </FlexContainer>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Flex content')).toBeInTheDocument();
  });
});
