import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import StickyBottomPanel from '../src';

describe('StickyBottomPanel', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderPanel = (overrides: Record<string, unknown> = {}) => {
    const onDialogVisibleChange = jest.fn();

    const utils = render(
      <ReactThemeContext.Provider value={themes.light}>
        <StickyBottomPanel isOpen={true} onDialogVisibleChange={onDialogVisibleChange} {...overrides}>
          Panel content
        </StickyBottomPanel>
      </ReactThemeContext.Provider>
    );

    return { ...utils, onDialogVisibleChange };
  };

  test('does not render content when closed', () => {
    renderPanel({ isOpen: false });

    expect(screen.queryByText('Panel content')).not.toBeInTheDocument();
  });

  test('renders content when open', () => {
    renderPanel();

    expect(screen.getByText('Panel content')).toBeInTheDocument();
  });

  test('calls onDialogVisibleChange on close button click', async () => {
    const user = userEvent.setup();
    const { onDialogVisibleChange } = renderPanel();

    await user.click(screen.getByRole('button'));

    expect(onDialogVisibleChange).toHaveBeenCalledTimes(1);
  });

  test('calls onDialogVisibleChange on Escape key when open', () => {
    const { onDialogVisibleChange } = renderPanel();

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape', keyCode: 27 });

    expect(onDialogVisibleChange).toHaveBeenCalledTimes(1);
  });
});
