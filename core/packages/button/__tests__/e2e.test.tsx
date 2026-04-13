import 'jest-styled-components';

import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';

import getNewReactThemeContext from '../../styles/src';
import { themes } from '../../styles/src/themes';
import Button from '../src';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const ReactThemeContext = getNewReactThemeContext(themes.dark);

  const renderButton = (ui: React.ReactElement) =>
    render(<ReactThemeContext.Provider value={themes.dark}>{ui}</ReactThemeContext.Provider>);


  test('renders button with text', () => {
    render(
      <ReactThemeContext.Provider value={themes.dark}>
        <Button>Click me</Button>
      </ReactThemeContext.Provider>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
  test('calls onClick handler', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    renderButton(<Button onClick={onClick}>Click</Button>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    renderButton(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('does not call onClick when disabled', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    renderButton(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>
    );

    await user.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  test('has type="button" by default', () => {
    renderButton(<Button>Default</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  test('supports custom type', () => {
    renderButton(<Button type="submit">Submit</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('forwards ref to native button', () => {
    const ref = React.createRef<HTMLButtonElement>();

    renderButton(<Button ref={ref}>Ref</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test('matches snapshot', () => {
    const { container } = renderButton(<Button>Snapshot</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
