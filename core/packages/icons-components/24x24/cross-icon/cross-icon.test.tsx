import TestRenderer from 'react-test-renderer';
import React from 'react';

import CrossIcon from './index';

describe('Test CrossIcon', () => {
  test('CrossIcon', () => {
    const testRenderer = TestRenderer.create(<CrossIcon color="var(--primary-main-color)" />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
