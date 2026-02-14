import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Tab from '../../tab/src';
import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Tabs from '../src';

describe('Tabs', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('returns null without children', () => {
    const { container } = render(
      <ReactThemeContext.Provider value={themes.light}>
        <Tabs value={0} />
      </ReactThemeContext.Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  test('forwards onChange to child tab (index-based)', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Tabs value={0} onChange={onChange}>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </Tabs>
      </ReactThemeContext.Provider>
    );

    await user.click(screen.getByRole('button', { name: 'Tab 2' }));

    expect(onChange).toHaveBeenCalledWith(1, expect.any(Object));
  });

  test('forwards onChange to child tab (name-based)', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(
      <ReactThemeContext.Provider value={themes.light}>
        <Tabs value="home" onChange={onChange}>
          <Tab name="home">Home</Tab>
          <Tab name="settings">Settings</Tab>
        </Tabs>
      </ReactThemeContext.Provider>
    );

    await user.click(screen.getByRole('button', { name: 'Settings' }));

    expect(onChange).toHaveBeenCalledWith('settings', expect.any(Object));
  });
});
