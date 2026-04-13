import { render, screen } from '@testing-library/react';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Popup from '../src';

describe('Popup', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderPopup = (isOpen: boolean, width?: number | string, zIndex?: number | string) =>
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Popup isOpen={isOpen} width={width} zIndex={zIndex}>
          <div>Popup content</div>
        </Popup>
      </ReactThemeContext.Provider>
    );

  test('does not render popup content when closed', () => {
    renderPopup(false);

    expect(screen.queryByText('Popup content')).not.toBeInTheDocument();
  });

  test('renders popup content in portal when open', () => {
    renderPopup(true);

    expect(screen.getByText('Popup content')).toBeInTheDocument();
  });

  test('applies custom width and zIndex', () => {
    renderPopup(true, 320, 1234);

    const popupContent = screen.getByText('Popup content');
    const popup = popupContent.parentElement as HTMLElement;

    expect(popup).toHaveStyle({ width: '320px' });
    expect(popup).toHaveStyle({ zIndex: '1234' });
  });
});
