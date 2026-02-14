import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import LabelInteractive from '../src';

const TestIcon = ({ color }: { color?: string }) => <svg data-testid="label-interactive-icon" fill={color} />;

describe('LabelInteractive', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.light);

  test('renders interactive mode and handles click', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <ReactThemeContext.Provider value={themes.light}>
        <LabelInteractive variant="text" Icon={TestIcon} onClick={onClick} isInteractive={true}>
          Label text
        </LabelInteractive>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Label text')).toBeInTheDocument();
    expect(screen.getByTestId('label-interactive-icon')).toBeInTheDocument();

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders non-interactive mode without button', () => {
    render(
      <ReactThemeContext.Provider value={themes.light}>
        <LabelInteractive variant="text" Icon={TestIcon} isInteractive={false}>
          Static label
        </LabelInteractive>
      </ReactThemeContext.Provider>
    );

    expect(screen.getByText('Static label')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
