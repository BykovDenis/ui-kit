import { render, screen } from '@testing-library/react';
import React from 'react';

import WarningPanel from '../src';

describe('WarningPanel', () => {
  test('renders title and warning icon', () => {
    render(<WarningPanel title="Important warning" />);

    expect(screen.getByText('Important warning')).toBeInTheDocument();
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});
