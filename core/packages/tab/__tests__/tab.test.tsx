import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Tab from '../src';

describe('Tab', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  const renderTab = (overrides: Record<string, unknown> = {}) => {
    const props = {
      tabActive: 2,
      onChange: jest.fn(),
      children: 'Tab A',
      ...overrides,
    };

    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Tab {...props} />
      </ReactThemeContext.Provider>
    );

    return props;
  };

  test('calls onChange with tabActive on click', async () => {
    const user = userEvent.setup();
    const props: any = renderTab({ tabActive: 'tab-name' });

    await user.click(screen.getByRole('button', { name: 'Tab A' }));

    expect(props.onChange).toHaveBeenCalledWith('tab-name', expect.any(Object));
  });

  test('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    renderTab({ disabled: true, onChange });

    await user.click(screen.getByRole('button', { name: 'Tab A' }));

    expect(onChange).not.toHaveBeenCalled();
  });
});
